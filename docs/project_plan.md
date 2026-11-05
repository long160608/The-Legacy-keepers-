# Kế hoạch phát triển dự án: The Legacy Keepers

> **Dựa trên tài liệu**: `Thiết kế.docx` & `Hướng dẫn màu giao diện mới.docx`  
> **Kiến trúc tích hợp**: Cogover Headless CMS / API + Modern Interactive Frontend (Radar Map & Gamification)

---

## 1. Tổng quan Dự án & Tầm nhìn
* **Tên ứng dụng**: The Legacy Keepers
* **Định vị**: Ứng dụng khám phá lịch sử Việt Nam theo phong cách Pokémon GO kết hợp định vị GPS thực tế, cốt truyện nhân vật và hệ thống huy hiệu di sản.
* **Màu sắc chủ đạo**: Vintage Cổ trang (`#FCF5EB` Warm Cream, `#54331B` Dark Coffee, `#FDDB9B` Pale Gold, `#CFD2B8` Sage Green).

---

## 2. Phân rã 3 Trụ cột Chức năng chính

### 📍 Trụ cột 1: Radar Lịch Sử (Style Pokémon GO)
1. **Radar Pulse & Map Canvas**:
   * Bản đồ hiển thị vị trí người dùng qua GPS.
   * Hiệu ứng sóng Radar quét xung quanh với các vòng tròn phát hiện.
2. **Cơ chế Phân loại Pin & Tầm phủ Radar**:
   * **Thường (Common)**: Quét 1-2 km | Check-in 100-200m (Bia di tích, trường học cổ).
   * **Hiếm (Uncommon)**: Quét 5-8 km | Check-in 50-100m (Dinh Độc Lập, Văn Miếu, Ô Quan Chưởng).
   * **Huyền thoại (Legendary)**: Quét 15-30 km | Check-in 20-50m (Bến Nhà Rồng, Điện Biên Phủ, Hoàng thành Thăng Long) kèm hiệu ứng Aura Pulse.
   * **Sự kiện (Limited-time Event)**: Kích hoạt theo mùa (30/4, 2/9) tầm phủ toàn quốc/50km.
3. **5 Loại hình Pin**:
   * 🏛️ *Địa danh & Di tích* (Landmark / Monument)
   * 📖 *Câu chuyện & Mảnh ký ức* (Story / Memory)
   * 🎙️ *Nhân chứng Lịch sử / Thước phim Ký ức* (Living History Audio/Video) - **Trọng tâm nhân văn**
   * ⚔️ *Trận đánh & Chiến dịch* (Battlefield / Event Timeline)
   * 🎨 *Văn hóa & Di sản Phi vật thể* (Cultural Heritage / Làng nghề)
4. **Modal Pop-up Chi tiết Địa danh**:
   * Hình ảnh tư liệu, khoảng cách thực tế (vd: cách 1.2 km).
   * Tóm tắt lịch sử / Audio thước phim ký ức.
   * Nút "Check-in" hoặc "Mở minigame tái hiện".

---

### ⚔️ Trụ cột 2: Anh Hùng Lịch Sử & Cốt Truyện Ẩn
1. **Từ điển Anh hùng dân tộc**:
   * Thông tin cơ bản: Chân dung, Tên, Triều đại, Vai trò, Tóm tắt chiến công.
2. **Cơ chế Khóa / Mở cốt truyện theo Pin**:
   * Danh sách câu chuyện xoay quanh nhân vật mặc định bị làm mờ kèm icon 🔒 và chỉ dẫn mốc tọa độ cần đến.
   * Khi người dùng check-in thành công tại Pin tương ứng -> Mở khóa toàn bộ nội dung câu chuyện.
3. **Tập dữ liệu khởi đầu chuẩn**:
   * **Hưng Đạo Đại Vương Trần Quốc Tuấn**:
     * 🔒 *Kế sách cắm cọc sông Bạch Đằng* (Cần Pin: Bến Bạch Đằng).
     * 🔒 *Giai thoại Hội nghị Diên Hồng & Lời thề Sát Thát* (Cần Pin: Tượng đài Trần Hưng Đạo).
   * **Quang Trung - Nguyễn Huệ**:
     * 🔒 *Cuộc hành quân thần tốc mùa xuân Kỷ Dậu* (Cần Pin: Bảo tàng / Tượng đài Quang Trung).
     * 🔒 *Trận đại thắng Ngọc Hồi - Đống Đa* (Cần Pin: Công viên Đống Đa).
   * **Hai Bà Trưng (Trưng Trắc - Trưng Nhị)**:
     * 🔒 *Lời thề trên sông Hát* (Cần Pin: Đền thờ Hai Bà Trưng).
     * 🔒 *Đội quân nữ tướng* (Cần Pin: Thành cổ Luy Lâu).

---

### 🎖️ Trụ cột 3: Hệ Thống Huy Hiệu & Portfolio Cá Nhân
1. **Danh mục Huy hiệu (Badges)**:
   * Bộ *"Người chinh phục lịch sử"*: 5 cấp độ theo số lượng địa danh đã ghé thăm.
   * Bộ *"Khám phá Việt Nam"*: Theo chuyên đề (🐾 *Dấu chân Bác Hồ*, 🏛️ *Trái tim Sài Gòn*...).
2. **Trạng thái hiển thị**:
   * *Chưa khóa*: Hiển thị silhouette xám mờ kèm điều kiện.
   * *Đã mở*: Ánh kim rực rỡ, ngày nhận, EXP thưởng.
   * Thanh tiến trình tổng thể (% hoàn thành bộ sưu tập di sản).
3. **Trang Portfolio Cá nhân**:
   * Avatar di sản, Tên hiển thị, Username, Bio, Cấp độ khám phá, EXP.
   * Thống kê tổng hợp (Số địa danh đã đến, Thử thách đã giải, Huy hiệu đã đạt).
   * Nhật ký hành trình lịch sử.

---

## 3. Lộ trình Triển khai Kỹ thuật (Action Plan)

| Giai đoạn | Nhiệm vụ chính | Kết quả bàn giao |
|---|---|---|
| **P1. Nâng cấp Data Schema (Cogover)** | • Bổ sung các trường chuyên sâu cho Pin: `discovery_radius`, `audio_url`, `video_url`, `content_nature`.<br>• Cập nhật các danh mục Huy hiệu và Profile người chơi. | `game_schema.json` v2 + Script cập nhật tự động lên Cogover API. |
| **P2. Nạp trọn bộ Dữ liệu Mẫu chuẩn** | • Nạp dữ liệu 3 Đại anh hùng (Trần Hưng Đạo, Quang Trung, Hai Bà Trưng) và 6 câu chuyện khóa.<br>• Nạp các Pin địa danh chuẩn ở Hà Nội, TP.HCM, Bình Định. | Script `seed_data_v2.py` chạy trực tiếp trên Workspace. |
| **P3. Nâng cấp Giao diện Frontend (App)** | • Tích hợp GPS Navigator ảo / thực tế với hiệu ứng Radar Pulse lan tỏa.<br>• Làm Modal Pop-up địa danh chi tiết (có nút nghe audio / xem thước phim ký ức).<br>• Nâng cấp giao diện Nhân vật có danh sách cốt truyện khóa/mở động.<br>• Nâng cấp trang Portfolio với Avatar, thống kê tiến trình và lưới Huy hiệu (Silhouette & Gold). | Bộ mã nguồn HTML / CSS / JS hoàn thiện tại thư mục `app/`. |
| **P4. Tích hợp tương tác tương lai** | Minigame trắc nghiệm hoặc kéo thả tái hiện sự kiện lịch sử để nhận thưởng. | Minigame Engine. |
