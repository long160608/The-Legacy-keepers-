import json
import os
from pathlib import Path
import openpyxl

PROJECT_DIR = Path(__file__).resolve().parent.parent
EXCEL_PATH_V3 = PROJECT_DIR / "Du_Lieu_Di_San_Cap_Nhat_v3.xlsx"
EXCEL_PATH = PROJECT_DIR / "Du_Lieu_Di_San.xlsx"
DESKTOP_EXCEL_PATH = Path(os.path.expanduser("~/Desktop")) / "Du_Lieu_Di_San.xlsx"
DATA_JSON_PATH = PROJECT_DIR / "app" / "data.json"
COPY_JSON_PATH = PROJECT_DIR / "data_output_copy.json"

# Check available Excel files and pick the newest
candidates = [EXCEL_PATH_V3, EXCEL_PATH, DESKTOP_EXCEL_PATH]
existing_candidates = [p for p in candidates if p.exists()]

if not existing_candidates:
    print("Khong tim thay bat ky file Excel du lieu nao!")
    exit(1)

chosen_excel = max(existing_candidates, key=lambda p: p.stat().st_mtime)

print(f"Dang doc du lieu tu: {chosen_excel.name}...")
wb = openpyxl.load_workbook(chosen_excel, data_only=True)

# Preserve existing profile if present
existing_profile = {
    "name": "Người Giữ Gìn Di Sản #001",
    "username": "@heritage_seeker",
    "level": 0,
    "exp": 0,
    "maxExp": 100,
    "km_traveled": 0,
    "checked_in_pins": [],
    "discovered_figures": [],
    "check_in_history": {},
    "logs": []
}

if DATA_JSON_PATH.exists():
    try:
        with open(DATA_JSON_PATH, "r", encoding="utf-8") as f:
            old_data = json.load(f)
            if old_data.get("profile"):
                existing_profile = old_data["profile"]
    except Exception:
        pass

def clean_str(val):
    if val is None:
        return ""
    return str(val).strip()

def clean_bool(val):
    if val is None:
        return False
    s = str(val).strip().upper()
    return s in ["TRUE", "1", "YES", "CO", "DUNG"]

def clean_num(val, default=0, is_float=False):
    if val is None or val == "":
        return default
    try:
        return float(val) if is_float else int(float(val))
    except Exception:
        return default

# 1. READ PINS
pins = []
ws_pins = None
for s_name in wb.sheetnames:
    if "Ghim" in s_name or "Pin" in s_name:
        ws_pins = wb[s_name]
        break

if ws_pins:
    for row in ws_pins.iter_rows(min_row=5, values_only=True):
        pin_id = clean_str(row[0])
        name = clean_str(row[1])
        if not pin_id or not name:
            continue
        pins.append({
            "id": pin_id,
            "name": name,
            "name_en": clean_str(row[2]) or name,
            "category": clean_str(row[3]) or "landmark",
            "rarity": clean_str(row[4]) or "common",
            "lat": clean_num(row[5], default=21.0285, is_float=True),
            "lng": clean_num(row[6], default=105.8542, is_float=True),
            "discovery_radius": clean_num(row[7], default=10000),
            "interaction_radius": clean_num(row[8], default=50),
            "icon": clean_str(row[9]) or "📍",
            "image_url": clean_str(row[10]),
            "media_url": clean_str(row[11]) if len(row) > 11 else "",
            "hasLivingHistory": clean_bool(row[12]) if len(row) > 12 else False,
            "desc": clean_str(row[13]) if len(row) > 13 else "",
            "desc_en": clean_str(row[14]) if len(row) > 14 else ""
        })

# 2. READ FIGURES
figures = []
ws_figs = None
for s_name in wb.sheetnames:
    if "Danh_Nhan" in s_name or "Figure" in s_name:
        ws_figs = wb[s_name]
        break

if ws_figs:
    for row in ws_figs.iter_rows(min_row=5, values_only=True):
        fig_id = clean_str(row[0])
        name = clean_str(row[1])
        if not fig_id or not name:
            continue
        rel_pins_str = clean_str(row[15]) if len(row) > 15 else ""
        rel_pins = [p.strip() for p in rel_pins_str.split(",") if p.strip()]

        figures.append({
            "id": fig_id,
            "name": name,
            "name_en": clean_str(row[2]) or name,
            "role": clean_str(row[3]),
            "role_en": clean_str(row[4]) or clean_str(row[3]),
            "dynasty": clean_str(row[5]),
            "dynasty_en": clean_str(row[6]) or clean_str(row[5]),
            "years": clean_str(row[7]),
            "avatar": clean_str(row[8]) or "👑",
            "image_url": clean_str(row[9]),
            "background_image": clean_str(row[10]),
            "quote": clean_str(row[11]),
            "quote_en": clean_str(row[12]) or clean_str(row[11]),
            "bio": clean_str(row[13]),
            "bio_en": clean_str(row[14]) or clean_str(row[13]),
            "related_pins": rel_pins
        })

# 3. READ STORIES
stories = []
ws_stories = None
for s_name in wb.sheetnames:
    if "Giai_Thoai" in s_name or "Story" in s_name:
        ws_stories = wb[s_name]
        break

if ws_stories:
    for row in ws_stories.iter_rows(min_row=5, values_only=True):
        story_id = clean_str(row[0])
        name = clean_str(row[1])
        if not story_id or not name:
            continue
        stories.append({
            "id": story_id,
            "name": name,
            "name_en": clean_str(row[2]) or name,
            "figure_id": clean_str(row[3]),
            "required_pin_id": clean_str(row[4]),
            "is_locked": clean_bool(row[5]) if len(row) > 5 else True,
            "background_image": clean_str(row[6]) if len(row) > 6 else "",
            "content": clean_str(row[7]) if len(row) > 7 else "",
            "content_en": clean_str(row[8]) if len(row) > 8 else ""
        })

# 4. READ BADGES
badges = []
ws_badges = None
for s_name in wb.sheetnames:
    if "Huy_Hieu" in s_name or "Badge" in s_name:
        ws_badges = wb[s_name]
        break

if ws_badges:
    for row in ws_badges.iter_rows(min_row=5, values_only=True):
        badge_id = clean_str(row[0])
        name = clean_str(row[1])
        if not badge_id or not name:
            continue
        c_type = clean_str(row[12]) or "specific_pins"
        target_str = clean_str(row[13])
        targets = [t.strip() for t in target_str.split(",") if t.strip()]
        min_count = clean_num(row[14], default=1)

        cond_obj = {
            "id": f"c-{badge_id}-1",
            "type": c_type,
            "desc": clean_str(row[15]) if len(row) > 15 else "",
            "desc_en": clean_str(row[16]) if len(row) > 16 else ""
        }
        if c_type in ["specific_pins", "pins_count"]:
            if targets:
                cond_obj["target_pins"] = targets
            cond_obj["min_count"] = min_count
        elif c_type in ["specific_figures", "figures_count"]:
            if targets:
                cond_obj["target_figures"] = targets
            cond_obj["min_count"] = min_count
        elif c_type == "people_count":
            cond_obj["target_num"] = min_count
        else:
            cond_obj["target_num"] = min_count

        badges.append({
            "id": badge_id,
            "name": name,
            "name_en": clean_str(row[2]) or name,
            "tier": clean_str(row[3]) or "gold",
            "icon": clean_str(row[4]) or "🎖️",
            "image_url": clean_str(row[5]),
            "category": clean_str(row[6]),
            "category_en": clean_str(row[7]) or clean_str(row[6]),
            "lore": clean_str(row[8]),
            "lore_en": clean_str(row[9]) or clean_str(row[8]),
            "criteria": clean_str(row[10]),
            "criteria_en": clean_str(row[11]) or clean_str(row[10]),
            "conditions": [cond_obj],
            "is_unlocked": clean_bool(row[17]) if len(row) > 17 else False
        })

output_data = {
    "pins": pins,
    "figures": figures,
    "stories": stories,
    "badges": badges,
    "profile": existing_profile
}

# Write to app/data.json
with open(DATA_JSON_PATH, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

# Write copyable preview
with open(COPY_JSON_PATH, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print("\n========================================================")
print("  DA CHUYEN DOI EXCEL VA CAP NHAT APP/DATA.JSON THANH CONG!")
print("========================================================")
print(f"  • Ghim Dia Danh (Pins):    {len(pins)} muc")
print(f"  • Danh Nhan Hao Kiet:      {len(figures)} vi")
print(f"  • Giai Thoai Cot Truyen:   {len(stories)} cau chuyen")
print(f"  • Huy Hieu Di San:         {len(badges)} huy hieu")
print("========================================================")
print(f"File duoc luu tai: {DATA_JSON_PATH}")
print(f"File de copy JSON: {COPY_JSON_PATH}")
print("========================================================\n")
