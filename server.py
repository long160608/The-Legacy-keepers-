import http.server
import socketserver
import urllib.request
import json
import os
import base64
import time
import subprocess
import shutil
from pathlib import Path

PORT = 8080
PROJECT_DIR = Path(__file__).resolve().parent
APP_DIR = PROJECT_DIR / "app"
BACKUP_DIR = PROJECT_DIR / "_backups"

# Load .env
env_file = PROJECT_DIR / ".env"
env_vars = {}
if env_file.exists():
    with open(env_file, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                env_vars[k.strip()] = v.strip()

COGOVER_BASE_URL = env_vars.get("COGOVER_BASE_URL", "https://thelegacykeepers.cogover.com")
COGOVER_API_KEY = env_vars.get("COGOVER_API_KEY", "")

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(APP_DIR), **kwargs)

    def do_GET(self):
        # API to list all local snapshots on disk
        if self.path == "/api/list_snapshots":
            snapshots_file = BACKUP_DIR / "snapshots_index.json"
            data = []
            if snapshots_file.exists():
                try:
                    with open(snapshots_file, "r", encoding="utf-8") as f:
                        data = json.load(f)
                except Exception:
                    data = []
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(data, ensure_ascii=False).encode("utf-8"))
            return

        super().do_GET()

    def do_POST(self):
        # 1. API Proxy endpoint to Cogover to bypass CORS
        if self.path.startswith("/api/cogover/"):
            endpoint = self.path.replace("/api/cogover", "/bapi/v1")
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)

            target_url = f"{COGOVER_BASE_URL}{endpoint}"
            headers = {
                "Authorization": f"Bearer {COGOVER_API_KEY}",
                "Content-Type": "application/json"
            }

            req = urllib.request.Request(target_url, data=body, headers=headers, method="POST")
            try:
                with urllib.request.urlopen(req, timeout=15) as res:
                    resp_data = res.read()
                    self.send_response(res.status)
                    self.send_header("Content-Type", "application/json")
                    self.send_header("Access-Control-Allow-Origin", "*")
                    self.end_headers()
                    self.wfile.write(resp_data)
            except urllib.error.HTTPError as e:
                self.send_response(e.code)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(e.read())

        # 2. Local JSON state saver (writes to app/data.json)
        elif self.path == "/api/save_local_json":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            try:
                parsed = json.loads(body.decode("utf-8"))
                target_file = APP_DIR / "data.json"
                with open(target_file, "w", encoding="utf-8") as f:
                    json.dump(parsed, f, ensure_ascii=False, indent=2)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(b'{"status": "success", "message": "Saved to data.json"}')
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))

        # 3. Create full project snapshot on disk
        elif self.path == "/api/create_snapshot":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            note = ""
            if body:
                try:
                    note = json.loads(body.decode("utf-8")).get("note", "")
                except Exception:
                    pass
            try:
                script_path = PROJECT_DIR / "scripts" / "make_snapshot.js"
                res = subprocess.run(["node", str(script_path), note], cwd=str(PROJECT_DIR), capture_output=True, text=True, encoding="utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(b'{"status": "success", "message": "Snapshot created"}')
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))

        # 4. Restore from snapshot folder on disk
        elif self.path == "/api/restore_snapshot":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            folder_name = ""
            if body:
                try:
                    folder_name = json.loads(body.decode("utf-8")).get("folder_name", "")
                except Exception:
                    pass
            try:
                if not folder_name:
                    # Restore latest
                    script_path = PROJECT_DIR / "scripts" / "restore_snapshot.js"
                    subprocess.run(["node", str(script_path)], cwd=str(PROJECT_DIR), check=True)
                else:
                    backup_source = BACKUP_DIR / folder_name / "app" / "data.json"
                    if backup_source.exists():
                        shutil.copy2(backup_source, APP_DIR / "data.json")
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(b'{"status": "success", "message": "Restored snapshot successfully"}')
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))

        # 5. Local media uploader (saves uploaded images/videos to app/media)
        elif self.path == "/api/upload_file":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode("utf-8"))
                filename = data.get("filename", f"upload_{int(time.time())}.png")
                filename = os.path.basename(filename)
                base64_data = data.get("base64", "")
                if "," in base64_data:
                    base64_data = base64_data.split(",", 1)[1]
                
                file_bytes = base64.b64decode(base64_data)
                ext = Path(filename).suffix.lower()
                sub = "videos" if ext in [".mp4", ".webm", ".mov", ".mkv", ".mp3", ".wav"] else "images"
                target_dir = APP_DIR / "media" / sub
                target_dir.mkdir(parents=True, exist_ok=True)
                target_path = target_dir / filename
                with open(target_path, "wb") as f:
                    f.write(file_bytes)
                
                rel_url = f"media/{sub}/{filename}"
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success", "url": rel_url}).encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))

        else:
            self.send_error(404, "Not Found")

import sys
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

print(f"================================================================")
print(f"[THE LEGACY KEEPERS] - SERVER DANG CHAY")
print(f"-> Mo trinh duyet tai: http://localhost:{PORT}")
print(f"-> Workspace ket noi: {COGOVER_BASE_URL}")
print(f"================================================================")

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nĐã tắt server.")
