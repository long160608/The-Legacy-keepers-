import json
import uuid
from cogover_client import CogoverClient

def sync():
    client = CogoverClient()
    print(f"[*] Đang kết nối tới: {client.base_url}")

    # Đọc schema từ file thiết kế
    with open("../schemas/game_schema.json", "r", encoding="utf-8") as f:
        schema = json.load(f)

    # 1. Kiểm tra các object đã tồn tại
    existing_objs = {o["slug"]: o for o in client.get_objects(include_fields=True)}
    print(f"[*] Đã quét được {len(existing_objs)} objects trên hệ thống.")

    obj_id_map = {}
    for obj_def in schema["objects"]:
        slug = obj_def["slug"]
        if slug in existing_objs:
            print(f"  [+] Object '{slug}' đã tồn tại (ID: {existing_objs[slug]['id']})")
            obj_id_map[slug] = existing_objs[slug]["id"]
        else:
            print(f"  [>] Đang tạo mới Object '{slug}'...")
            body = {
                "name": obj_def["name"],
                "plural_name": obj_def["plural_name"],
                "slug": slug,
                "description": obj_def.get("description", ""),
                "name_field": {
                    "name": obj_def["name_field"]["name"],
                    "type": obj_def["name_field"]["type"],
                    "meta_data": "{}"
                }
            }
            status, res = client.request("POST", "/bapi/v1/objects", body)
            if status in [200, 201] and res.get("r") == 0:
                new_id = res["data"]["id"]
                obj_id_map[slug] = new_id
                print(f"  [✓] Tạo thành công Object '{slug}' (ID: {new_id})")
            else:
                print(f"  [!] Lỗi tạo Object '{slug}':", res)

    print("\n[✓] Đồng bộ kiến trúc dữ liệu hoàn tất!")

if __name__ == "__main__":
    sync()
