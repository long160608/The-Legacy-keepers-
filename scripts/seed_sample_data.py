from cogover_client import CogoverClient

def seed():
    client = CogoverClient()
    print("[*] Đang nạp dữ liệu mẫu vào Cogover...")

    # 1. Thêm Pin Di tích
    pin1 = {
        "name": "Hoàng thành Thăng Long",
        "pin_type": "historical_relic",
        "rarity": "epic",
        "latitude": 21.0345600,
        "longitude": 105.8407400,
        "interaction_radius": 100,
        "description": "Quần thể di tích gắn với lịch sử kinh thành Thăng Long - Hà Nội bắt đầu từ thời Đinh - Tiền Lê, phát triển mạnh dưới thời Lý, Trần, Lê."
    }
    s1, r1 = client.create_record("historical_pin", pin1)
    print("  [+] Pin Hoàng thành Thăng Long:", s1, r1.get("msg", ""))

    # 2. Thêm Pin Trận chiến
    pin2 = {
        "name": "Khu di tích Chiến thắng Bạch Đằng",
        "pin_type": "battle",
        "rarity": "limited",
        "latitude": 20.9168000,
        "longitude": 106.6667000,
        "interaction_radius": 150,
        "description": "Nơi ghi dấu 3 chiến công hiển hách trên dòng sông Bạch Đằng đánh tan quân xâm lược phương Bắc."
    }
    s2, r2 = client.create_record("historical_pin", pin2)
    print("  [+] Pin Chiến thắng Bạch Đằng:", s2, r2.get("msg", ""))
    pin2_id = r2.get("data", {}).get("id")

    # 3. Thêm Nhân vật
    fig = {
        "name": "Trần Hưng Đạo",
        "dynasty": "Nhà Trần (1228 – 1300)",
        "biography": "Anh hùng dân tộc, nhà quân sự kiệt xuất ba lần chỉ huy quân dân Đại Việt đánh tan quân Nguyên Mông."
    }
    s3, r3 = client.create_record("historical_figure", fig)
    print("  [+] Nhân vật Trần Hưng Đạo:", s3, r3.get("msg", ""))
    fig_id = r3.get("data", {}).get("id")

    # 4. Thêm Câu chuyện bị khóa
    if fig_id and pin2_id:
        story = {
            "name": "Trận thủy chiến Bạch Đằng giang 1288",
            "historical_figure": fig_id,
            "required_pin": pin2_id,
            "is_locked": True,
            "content": "Trần Quốc Tuấn cho cắm cọc nhọn bịt sắt dưới lòng sông Bạch Đằng, nhân lúc nước triều rút dụ Ô Mã Nhi vào bẫy, toàn thắng vang dội."
        }
        s4, r4 = client.create_record("figure_story", story)
        print("  [+] Câu chuyện Bạch Đằng giang:", s4, r4.get("msg", ""))

    # 5. Thêm Huy hiệu
    badge = {
        "name": "Kỵ Sĩ Sông Bạch Đằng",
        "tier": "gold",
        "criteria": "Check-in tại Di tích Chiến thắng Bạch Đằng và khám phá câu chuyện Hưng Đạo Đại Vương."
    }
    s5, r5 = client.create_record("badge", badge)
    print("  [+] Huy hiệu Kỵ Sĩ Sông Bạch Đằng:", s5, r5.get("msg", ""))

    print("[✓] Hoàn tất nạp dữ liệu mẫu!")

if __name__ == "__main__":
    seed()
