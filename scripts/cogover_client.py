import os
import json
import http.client
import ssl
from pathlib import Path

def load_env(env_path=None):
    """Đọc biến môi trường từ file .env trong project"""
    if env_path is None:
        env_path = Path(__file__).resolve().parent.parent / ".env"
    env_vars = {}
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    env_vars[k.strip()] = v.strip()
    return env_vars

class CogoverClient:
    def __init__(self, base_url=None, api_key=None):
        env = load_env()
        self.base_url = (base_url or env.get("COGOVER_BASE_URL", "")).rstrip("/")
        self.api_key = api_key or env.get("COGOVER_API_KEY", "")
        
        if not self.base_url or not self.api_key:
            raise ValueError("Thiếu cấu hình COGOVER_BASE_URL hoặc COGOVER_API_KEY trong file .env!")
        
        self.host = self.base_url.replace("https://", "").replace("http://", "")
        self.ctx = ssl.create_default_context()

    def request(self, method, endpoint, data=None):
        conn = http.client.HTTPSConnection(self.host, timeout=15, context=self.ctx)
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        body = json.dumps(data) if data is not None else None
        conn.request(method, endpoint, body=body, headers=headers)
        res = conn.getresponse()
        raw = res.read().decode("utf-8")
        conn.close()
        try:
            return res.status, json.loads(raw)
        except Exception:
            return res.status, raw

    def get_objects(self, slugs=None, include_fields=False):
        payload = {"pageSize": 100, "includeFields": include_fields}
        if slugs:
            payload["slugs"] = slugs
        status, data = self.request("POST", "/bapi/v1/objects/list", payload)
        return data.get("items", []) if isinstance(data, dict) else []

    def get_records(self, object_slug, size=50):
        payload = {
            "object_slug": object_slug,
            "type": 1,
            "filters": [{"field": "id", "op": "not null", "params": None, "fieldType": "short_text"}],
            "size": size
        }
        status, data = self.request("POST", "/bapi/v1/records/list", payload)
        if isinstance(data, dict) and data.get("r") == 0:
            return data.get("data", {}).get("rows", [])
        return []

    def create_record(self, object_slug, data):
        payload = {
            "object_slug": object_slug,
            "data": data,
            "write_mode": "interactive"
        }
        status, resp = self.request("POST", "/bapi/v1/records", payload)
        return status, resp
