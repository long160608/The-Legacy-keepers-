/**
 * ==========================================================================
 * THE LEGACY KEEPERS - CLIENT ENGINE
 * Handles: State management, Leaflet Radar map, 10m Sweep Animation,
 * Concentric Circular Pin Ripples, Input Portal forms, Check-in mechanisms,
 * Heritage Badges, Multi-condition Engine, Bilingual i18n & LocalStorage persistence.
 * ==========================================================================
 */

// ==========================================================================
// I18N BILINGUAL TRANSLATION SYSTEM (TIẾNG VIỆT / ENGLISH)
// ==========================================================================
const TRANSLATIONS = {
  vi: {
    brand_title: "The Legacy Keepers",
    brand_sub: "Hành trình Di sản Việt Nam",
    nav_map: "Radar Lịch sử",
    nav_figures: "Danh nhân Lịch sử",
    nav_badges: "Hệ thống Huy hiệu",
    nav_profile: "Hồ sơ Nhà thám hiểm",
    nav_cms: "Cổng Nhập Liệu & CMS",
    sync_ready: "Cogover Sync: Sẵn sàng",
    // Filters & Controls
    filter_all: "Tất cả Pin",
    filter_landmark: "🏛️ Di tích",
    filter_battlefield: "⚔️ Trận đánh",
    filter_living: "🎙️ Nhân chứng sống",
    filter_story: "📖 Ký ức",
    filter_culture: "🎨 Văn hóa",
    my_location: "Vị trí của tôi",
    // Figures
    figures_title: "Tra Cứu Danh Nhân Hào Kiệt",
    figures_desc: "Tìm hiểu cuộc đời, sự nghiệp và giai thoại hào hùng của các vị anh hùng dân tộc.",
    btn_add_figure: "+ Thêm Danh nhân mới",
    search_placeholder: "Tìm kiếm danh nhân theo tên, triều đại, danh xưng...",
    all_dynasties: "Tất cả",
    bio_title: "📜 Cuộc Đời & Sự Nghiệp Hào Kiệt",
    linked_pins_title: "🏛️ Địa Danh & Chiến Trường Gắn Liền",
    stories_title: "📖 Kho Giai Thoại & Cốt Truyện Lịch Sử",
    btn_add_story: "+ Thêm giai thoại",
    btn_change_bg: "📷 Đổi ảnh nền",
    btn_remove_bg: "✕ Xóa nền",
    story_locked: "🔒 Cần Check-in để mở khóa",
    story_unlocked: "✓ Đã mở khóa",
    read_story: "Đọc câu chuyện",
    // Badges
    badges_title: "Bộ Sưu Tập Huy Hiệu Di Sản",
    badges_desc: "Khám phá các di tích, giải mã câu chuyện và tham gia sự kiện để sưu tầm huy hiệu ánh kim danh giá.",
    btn_add_badge: "+ Thêm Huy hiệu mới",
    badge_filter_all: "Tất cả",
    badge_filter_unlocked: "✓ Đã sở hữu",
    badge_filter_locked: "🔒 Đang phấn đấu",
    badge_filter_gold: "🥇 Vàng",
    badge_filter_silver: "🥈 Bạc",
    badge_filter_bronze: "🥉 Đồng",
    badge_req_title: "🎯 Mục tiêu yêu cầu",
    badge_live_progress: "Tiến độ thực tế",
    badge_unlocked_status: "✓ Đã sở hữu",
    badge_locked_status: "🔒 Chưa đạt",
    badge_click_hint: "Bấm để xem chi tiết & điển tích",
    // Badge Modal
    badge_modal_title: "Chi Tiết Huy Hiệu Di Sản",
    badge_lore_title: "Ý Nghĩa & Điển Tích Di Sản",
    badge_cond_title: "Điều Kiện & Tiến Độ Mở Khóa",
    badge_overall_prog: "Tổng tiến độ hoàn thành",
    badge_cond_met: "✓ Đã hoàn thành",
    badge_cond_unmet: "⏳ Đang phấn đấu",
    badge_btn_map: "🧭 Xem di tích trên Bản đồ",
    badge_btn_figure: "⚔️ Xem Danh nhân tương ứng",
    badge_btn_close: "Đóng",
    // Profile
    profile_title: "Hồ Sơ Nhà Thám Hiểm",
    profile_desc: "Theo dõi tiến trình chu du non sông và mở khóa di sản lịch sử dân tộc.",
    profile_rank: "KỴ SĨ DI SẢN",
    profile_exp: "Điểm kinh nghiệm khám phá",
    stat_pins: "Địa danh đã check-in",
    stat_stories: "Giai thoại đã mở khóa",
    stat_badges: "Huy hiệu sở hữu",
    stat_km: "Km đã thám hiểm",
    recent_logs: "Nhật Ký Hành Trình Gần Đây",
    // CMS
    cms_title: "Cổng Nhập Liệu Thủ Công (Game CMS)",
    cms_desc: "Bạn có thể tự tay tạo mới Ghim bản đồ, Danh nhân, Giai thoại lịch sử hoặc Huy hiệu. Dữ liệu sẽ lưu ngay vào ứng dụng và đồng bộ lên Cogover!",
    cms_subtab_pins: "📍 1. Ghim Bản Đồ",
    cms_subtab_figures: "👑 2. Danh Nhân Lịch Sử",
    cms_subtab_stories: "📖 3. Giai Thoại Cốt Truyện",
    cms_subtab_badges: "🏅 4. Huy Hiệu Di Sản",
    cms_subtab_manage: "🗂️ 5. Quản Lý & Xóa Dữ Liệu Test",
    reload_data_btn: "🔄 Nạp từ file data.json",
    import_json_btn: "📤 Chọn file JSON",
    // CMS Form Labels — Pin
    cms_export_btn: "📥 Tải sao lưu JSON",
    cms_pin_name_lbl: "Tên Địa danh / Chiến trường / Điểm di tích",
    cms_pin_name_ph: "Ví dụ: Đền Hùng, Ngã ba Đồng Lộc, Cố đô Hoa Lư...",
    cms_pin_type_lbl: "Loại nội dung Pin",
    cms_pin_type_landmark: "🏛️ Địa danh & Di tích (Công trình kiến trúc, danh thắng)",
    cms_pin_type_battlefield: "⚔️ Trận đánh & Chiến dịch (Chiến trường xưa, tuyến đường lịch sử)",
    cms_pin_type_living: "🎙️ Nhân chứng sống / Ký ức (Ghi âm cựu chiến binh, tư liệu sống)",
    cms_pin_type_story: "📖 Mảnh ký ức & Sự kiện (Căn hầm, bia tưởng niệm)",
    cms_pin_type_culture: "🎨 Văn hóa & Làng nghề truyền thống",
    cms_pin_rarity_lbl: "Độ hiếm & Tầm phủ Radar",
    cms_pin_rarity_common: "Thường (Common) - Radar quét 1-2km, Check-in 150m",
    cms_pin_rarity_uncommon: "Hiếm (Uncommon) - Radar quét 5-8km, Check-in 80m",
    cms_pin_rarity_legendary: "Huyền thoại (Legendary) - Radar quét 15-30km, Check-in 30m",
    cms_pin_rarity_event: "Sự kiện mùa (Limited Event) - Toàn quốc",
    cms_pin_lat_lbl: "Vĩ độ (Latitude)",
    cms_pin_lat_hint: "Mẹo: Bạn có thể click chuột trực tiếp lên Radar Bản đồ để tự điền tọa độ!",
    cms_pin_lng_lbl: "Kinh độ (Longitude)",
    cms_pin_radar_lbl: "Tầm quét Radar (mét)",
    cms_pin_checkin_lbl: "Bán kính Check-in thực địa (mét)",
    cms_pin_image_lbl: "Hình ảnh Địa danh / Di tích",
    cms_pin_image_ph: "Dán link online (https://...) hoặc nhập đường dẫn file (media/images/anh.jpg)...",
    cms_pin_image_btn: "📁 Chọn ảnh từ máy",
    cms_pin_image_ok: "✓ Đã nạp ảnh thành công",
    cms_pin_image_hint: "Hỗ trợ: Link web, tải ảnh từ máy tính (tự lưu vào app/media/images/ hoặc Base64 offline).",
    cms_pin_media_lbl: "Đường dẫn Audio / Video / Lời kể nhân chứng",
    cms_pin_media_ph: "Dán link YouTube (https://youtube.com/...) hoặc file video (media/videos/clip.mp4)...",
    cms_pin_media_btn: "📁 Chọn video/audio",
    cms_pin_media_hint: "Hỗ trợ: Link YouTube, file video .mp4/.webm hoặc audio .mp3 trong thư mục app/media/videos/.",
    cms_pin_desc_lbl: "Tóm tắt tư liệu lịch sử & Nguồn kiểm chứng",
    cms_pin_desc_ph: "Ý nghĩa lịch sử, bối cảnh hình thành, giá trị văn hóa...",
    cms_pin_reset: "Làm mới",
    cms_pin_save: "💾 Lưu Ghim Bản Đồ & Đồng Bộ",
    // CMS Form Labels — Figure
    cms_fig_name_lbl: "Tên Danh nhân / Anh hùng",
    cms_fig_name_ph: "Ví dụ: Lý Thường Kiệt, Võ Nguyên Giáp...",
    cms_fig_role_lbl: "Tước vị / Vai trò",
    cms_fig_role_ph: "Ví dụ: Đại tướng, Thái úy, Nữ tướng...",
    cms_fig_dynasty_lbl: "Thời đại / Triều đại",
    cms_fig_dynasty_ph: "Ví dụ: Nhà Lý, Nhà Trần, Nhà Tây Sơn...",
    cms_fig_years_lbl: "Niên đại (Năm sinh – Năm mất)",
    cms_fig_years_ph: "Ví dụ: 1228 – 1300 hoặc Thế kỷ 11",
    cms_fig_avatar_lbl: "Biểu tượng Avatar",
    cms_fig_avatar_warrior: "⚔️ Kiếm sĩ / Tướng lĩnh",
    cms_fig_avatar_king: "👑 Hoàng đế / Vương giả",
    cms_fig_avatar_guard: "🛡️ Hộ quốc anh hùng",
    cms_fig_avatar_archer: "🏹 Chiến binh khởi nghĩa",
    cms_fig_avatar_eagle: "🦅 Chim lạc trống đồng",
    cms_fig_avatar_scholar: "📜 Hiền sĩ / Danh nho",
    cms_fig_image_lbl: "Hình ảnh / Chân dung Danh nhân",
    cms_fig_image_ph: "Dán link ảnh online (https://...) hoặc file cục bộ (media/images/portrait.jpg)...",
    cms_fig_image_btn: "📁 Chọn ảnh từ máy",
    cms_fig_image_ok: "✓ Đã nạp chân dung thành công",
    cms_fig_bg_lbl: "Ảnh Nền / Bối cảnh Lịch sử Danh nhân (Hero Backdrop Cover)",
    cms_fig_bg_ph: "Dán link ảnh online (https://...) hoặc file bối cảnh lịch sử / chiến trường...",
    cms_fig_bg_btn: "📁 Chọn ảnh nền",
    cms_fig_bg_ok: "✓ Đã nạp ảnh nền bối cảnh thành công",
    cms_fig_bg_hint: "Ảnh nền sẽ phủ ở đầu trang hồ sơ nhân vật với hiệu ứng mờ hào hùng, tôn vinh khí phách lịch sử.",
    cms_fig_quote_lbl: "Câu nói bất hủ / Danh ngôn lịch sử",
    cms_fig_quote_ph: "Ví dụ: 'Nếu bệ hạ muốn hàng xin hãy chém đầu thần trước rồi hãy hàng!'",
    cms_fig_quote_hint: "Trích dẫn khí phách anh hùng hoặc lời hịch truyền đời nổi tiếng của nhân vật.",
    cms_fig_pins_lbl: "Địa danh & Chiến trường gắn liền (Nội dung liên quan)",
    cms_fig_pins_opt: "-- Chọn Địa danh di tích gắn liền (nếu có) --",
    cms_fig_pins_hint: "Chọn địa danh tiêu biểu nơi danh nhân đã lập nên chiến công oanh liệt.",
    cms_fig_bio_lbl: "Tiểu sử & Cuộc đời hào kiệt",
    cms_fig_bio_ph: "Công lao nổi bật, chiến công tiêu biểu, sự nghiệp rực rỡ...",
    cms_fig_stories_header: "📖 Kho Giai Thoại & Cốt Truyện Mở Khóa Của Danh Nhân",
    cms_fig_stories_desc: "Bạn có thể thêm 1 hoặc NHIỀU giai thoại (không giới hạn số lượng). Mỗi giai thoại có thể gắn với một địa danh di tích khác nhau để người chơi chu du mở khóa!",
    cms_fig_add_story_btn: "+ Thêm Giai Thoại Nữa",
    cms_fig_reset: "Làm mới",
    cms_fig_save: "💾 Lưu Danh Nhân & Toàn Bộ Giai Thoại",
    // Story row (dynamic)
    cms_fig_story_label: "📖 Giai thoại",
    cms_fig_story_remove: "✕ Bỏ giai thoại này",
    cms_fig_story_title_lbl: "Tiêu đề Giai thoại / Sự kiện hào hùng",
    cms_fig_story_title_ph: "Ví dụ: Kế sách cắm cọc sông Bạch Đằng, Lời thề Sát Thát...",
    cms_fig_story_pin_lbl: "Địa danh (Ghim) yêu cầu Check-in để mở khóa",
    cms_fig_story_pin_hint: "Người chơi cần di chuyển đến mốc này trên Radar để mở khóa đọc câu chuyện.",
    cms_fig_story_bg_lbl: "Ảnh Nền / Tranh minh họa Giai thoại (Tùy chọn)",
    cms_fig_story_bg_ph: "Dán link ảnh online (https://...) hoặc file minh họa...",
    cms_fig_story_bg_btn: "📁 Chọn ảnh",
    cms_fig_story_bg_ok: "✓ Có ảnh minh họa",
    cms_fig_story_content_lbl: "Nội dung chi tiết câu chuyện lịch sử",
    cms_fig_story_content_ph: "Bối cảnh lịch sử, diễn biến sự kiện, kế sách quân sự...",
    // CMS Form Labels — Story
    cms_story_title_lbl: "Tiêu đề Giai thoại / Sự kiện",
    cms_story_title_ph: "Ví dụ: Bài thơ thần Nam Quốc Sơn Hà, Lời hịch cứu nước...",
    cms_story_figure_lbl: "Thuộc Danh nhân nào?",
    cms_story_pin_lbl: "Địa danh (Pin) yêu cầu đến Check-in để mở khóa",
    cms_story_bg_lbl: "Ảnh Nền / Tranh minh họa Giai thoại (Story Cover)",
    cms_story_bg_ph: "Dán link ảnh online (https://...) hoặc file minh họa giai thoại...",
    cms_story_bg_btn: "📁 Chọn ảnh nền",
    cms_story_bg_ok: "✓ Đã nạp tranh minh họa giai thoại",
    cms_story_bg_hint: "Hình ảnh sẽ xuất hiện trên thẻ giai thoại và đầu cửa sổ đọc truyện khi mở khóa.",
    cms_story_content_lbl: "Nội dung chi tiết cốt truyện",
    cms_story_content_ph: "Toàn văn câu chuyện, mưu kế lịch sử, diễn biến sự kiện...",
    cms_story_cont_lbl: "Tiếp tục ở lại đây để thêm tiếp các giai thoại khác sau khi lưu",
    cms_story_reset: "Làm mới",
    cms_story_save: "💾 Lưu Giai Thoại Khóa",
    // CMS Form Labels — Badge
    cms_badge_name_lbl: "Tên Huy hiệu",
    cms_badge_name_ph: "Ví dụ: Đại Phá Quân Thanh, Tiếng Vang Sông Cầu...",
    cms_badge_tier_lbl: "Phẩm cấp (Tier)",
    cms_badge_tier_gold: "🥇 Vàng (Gold Tier) - Rực rỡ ánh kim",
    cms_badge_tier_silver: "🥈 Bạc (Silver Tier) - Thanh nhã",
    cms_badge_tier_bronze: "🥉 Đồng (Bronze Tier) - Cổ điển",
    cms_badge_tier_diamond: "💎 Bạch Kim (Diamond Tier) - Huyền thoại",
    cms_badge_icon_lbl: "Biểu tượng Icon",
    cms_badge_icon_medal: "🎖️ Huân chương danh dự",
    cms_badge_icon_crown: "👑 Vương miện hào kiệt",
    cms_badge_icon_sword: "⚔️ Kiếm lệnh hào hùng",
    cms_badge_icon_temple: "🏛️ Vương miện di tích",
    cms_badge_icon_witness: "🎙️ Nhân chứng lịch sử",
    cms_badge_icon_footprint: "🐾 Dấu chân di sản",
    cms_badge_icon_eagle: "🦅 Chim lạc trống đồng",
    cms_badge_icon_scroll: "📜 Chiếu thư hoàng gia",
    cms_badge_icon_shield: "🛡️ Khiên hộ quốc",
    cms_badge_icon_map: "🗺️ Bản đồ giang sơn",
    cms_badge_icon_star: "🌟 Tinh hoa di sản",
    cms_badge_icon_flag: "🚩 Cờ lệnh xuất quân",
    cms_badge_cat_lbl: "Bộ sưu tập (Category)",
    cms_badge_cat_ph: "Ví dụ: Hào Khí Danh Nhân, Nhân Chứng Lịch Sử, Khám Phá Việt Nam...",
    cms_badge_lore_lbl: "Nội dung & Điển tích của Huy hiệu",
    cms_badge_lore_ph: "Ý nghĩa tôn vinh, câu chuyện hào hùng hoặc bối cảnh lịch sử gắn liền với huy hiệu này (Hiển thị khi người chơi click vào xem chi tiết huy hiệu)...",
    cms_badge_lore_hint: "Nội dung này sẽ xuất hiện trang trọng trong cửa sổ chi tiết khi người chơi bấm vào huy hiệu.",
    cms_badge_cond_header: "🎯 Thiết Lập Điều Kiện Mở Khóa Tự Động (Nhiều điều kiện kết hợp)",
    cms_badge_cond_desc: "Bạn có thể thêm 1 hoặc NHIỀU điều kiện cùng lúc (ví dụ: vừa phải ghé các địa danh chỉ định, vừa phải khám phá đủ danh nhân).",
    cms_badge_add_cond_btn: "+ Thêm Loại Điều Kiện Nữa",
    cms_badge_criteria_lbl: "Tóm tắt yêu cầu hiển thị trên thẻ huy hiệu",
    cms_badge_criteria_ph: "Tự động tổng hợp từ các điều kiện trên hoặc nhập tùy chỉnh...",
    cms_badge_criteria_hint: "Dòng mô tả tóm tắt này sẽ xuất hiện ngắn gọn trên thẻ huy hiệu trong bộ sưu tập.",
    cms_badge_unlock_lbl: "Mở khóa sẵn ngay lập tức (Dành cho huy hiệu khởi đầu hoặc tân thủ)",
    cms_badge_reset: "Làm mới",
    cms_badge_save: "💾 Lưu Huy Hiệu Mới",
    // Badge condition rows (dynamic)
    cms_cond_title: "Điều kiện mở khóa",
    cms_cond_remove: "✕ Xóa điều kiện",
    cms_cond_type_lbl: "Chọn Loại điều kiện",
    cms_cond_type_specific_fig: "👑 Mở khóa các Danh nhân / Anh hùng cụ thể (Chọn danh sách)",
    cms_cond_type_fig_count: "👑 Mở khóa theo số lượng Danh nhân bất kỳ (Đếm số lượng)",
    cms_cond_type_specific_pin: "📍 Ghé thăm các Địa danh / Di tích cụ thể (Chọn danh sách mốc)",
    cms_cond_type_pin_count: "🗺️ Check-in theo số lượng Địa danh bất kỳ (Đếm số lượng mốc)",
    cms_cond_type_people: "🎙️ Gặp gỡ Nhân chứng sống / Ký ức / Cựu chiến binh (Đếm số lượng)",
    cms_cond_type_stories: "📖 Mở khóa số lượng Giai thoại lịch sử (Đếm số lượng)",
    cms_cond_type_custom: "✍️ Điều kiện tự do (Nhập mô tả thủ công)",
    cms_cond_fig_lbl: "Chọn các Danh nhân lịch sử yêu cầu",
    cms_cond_fig_min: "Yêu cầu mở khóa tối thiểu:",
    cms_cond_fig_min_suf: "danh nhân trong số người được chọn.",
    cms_cond_figcount_lbl: "Số lượng Danh nhân yêu cầu khám phá",
    cms_cond_figcount_hint: "Người chơi mở khóa đủ số lượng danh nhân bất kỳ này sẽ hoàn thành điều kiện.",
    cms_cond_pin_lbl: "Chọn các Địa danh / Di tích yêu cầu check-in",
    cms_cond_pin_min: "Yêu cầu check-in tối thiểu:",
    cms_cond_pin_min_suf: "địa danh trong số điểm được chọn.",
    cms_cond_pincount_lbl: "Số lượng Địa danh / Di tích yêu cầu check-in",
    cms_cond_pincount_hint: "Người chơi đến thực địa và check-in đủ số mốc bất kỳ để hoàn thành điều kiện.",
    cms_cond_people_lbl: "Số lượng Nhân chứng sống / Cựu chiến binh yêu cầu gặp gỡ",
    cms_cond_people_hint: "Người chơi check-in tại các điểm có tư liệu nhân chứng sống hoặc cựu chiến binh.",
    cms_cond_stories_lbl: "Số lượng Giai thoại cốt truyện yêu cầu mở khóa",
    cms_cond_custom_lbl: "Mô tả điều kiện tự do",
    cms_cond_custom_ph: "Ví dụ: Tham gia sự kiện lễ hội kỷ niệm hoặc giải mã câu đố...",
    // CMS Manage Tab
    cms_manage_title: "⚠️ Dọn dẹp dữ liệu thử nghiệm (Reset gốc)",
    cms_manage_desc: "Khôi phục lại toàn bộ dữ liệu chuẩn ban đầu của game. Mọi Ghim, Danh nhân, Giai thoại hoặc Huy hiệu bạn đã thêm test sẽ được xóa sạch!",
    cms_manage_reset_btn: "🔄 Khôi phục Dữ liệu Gốc",
    cms_manage_pins_title: "📍 1. Danh sách Ghim Địa danh",
    cms_manage_pins_hint: "Bấm nút 🗑️ để xóa từng ghim test",
    cms_manage_figs_title: "⚔️ 2. Danh sách Danh nhân Lịch sử",
    cms_manage_stories_title: "📖 3. Danh sách Giai thoại Lịch sử",
    cms_manage_badges_title: "🏅 4. Danh sách Huy hiệu Di sản",
    // Manage Tables Columns & Status
    manage_tbl_icon_name: "Icon & Tên",
    manage_tbl_type: "Loại",
    manage_tbl_rarity: "Độ hiếm",
    manage_tbl_coords: "Tọa độ",
    manage_tbl_radius: "Bán kính",
    manage_tbl_action: "Thao tác",
    manage_tbl_delete: "🗑️ Xóa",
    manage_tbl_empty_pins: "Chưa có Ghim nào.",
    manage_tbl_empty_figs: "Chưa có Danh nhân nào.",
    manage_tbl_empty_stories: "Chưa có Giai thoại nào.",
    manage_tbl_empty_badges: "Chưa có Huy hiệu nào.",
    manage_tbl_avatar_title: "Avatar & Danh xưng",
    manage_tbl_role: "Tước vị / Vai trò",
    manage_tbl_dynasty: "Thời đại",
    manage_tbl_story_name: "Tên giai thoại",
    manage_tbl_figure: "Danh nhân",
    manage_tbl_required_pin: "Địa danh yêu cầu",
    manage_tbl_status: "Trạng thái",
    manage_tbl_tier: "Cấp độ",
    manage_tbl_criteria: "Tiêu chí đạt",
    manage_tbl_locked: "🔒 Đang khóa",
    manage_tbl_unlocked: "🔓 Đã mở",
    manage_radius_scan: "Quét",
    manage_radius_reach: "Đến",
    manage_badge_spec_figs: "Danh nhân chỉ định",
    manage_badge_figs: "Danh nhân",
    manage_badge_spec_pins: "Mốc chỉ định",
    manage_badge_pins: "Địa danh",
    manage_badge_witnesses: "Nhân chứng",
    manage_badge_stories: "Giai thoại",
    manage_badge_custom: "Tự do",
    // Quick Story Modal
    quick_story_modal_title: "📖 Thêm Giai Thoại Mới",
    quick_story_figure_lbl: "Giai thoại gắn liền với danh nhân:",
    quick_story_title_lbl: "Tiêu đề Giai thoại / Sự kiện hào hùng",
    quick_story_title_ph: "Ví dụ: Lời hịch tướng sĩ, Hội nghị Bình Than...",
    quick_story_pin_lbl: "Địa danh (Pin) yêu cầu đến Check-in để mở khóa",
    quick_story_pin_hint: "Người chơi sẽ phải đi tuần tra thực địa tới mốc này để mở khóa đọc câu chuyện.",
    quick_story_bg_lbl: "Ảnh Nền / Tranh minh họa Giai thoại (Tùy chọn)",
    quick_story_bg_ph: "Dán link ảnh (https://...) hoặc file minh họa...",
    quick_story_bg_btn: "📁 Chọn ảnh",
    quick_story_bg_ok: "✓ Đã nạp tranh minh họa",
    quick_story_content_lbl: "Nội dung toàn văn câu chuyện",
    quick_story_content_ph: "Bối cảnh lịch sử, diễn biến sự kiện, mưu lược quân sự...",
    quick_story_cont_lbl: "Tiếp tục thêm giai thoại khác cho nhân vật này sau khi lưu",
    quick_story_btn_cancel: "Hủy",
    quick_story_btn_save: "💾 Lưu Giai Thoại Ngay"
  },
  en: {
    brand_title: "The Legacy Keepers",
    brand_sub: "Vietnam Heritage Journey",
    nav_map: "Heritage Radar",
    nav_figures: "Historical Figures",
    nav_badges: "Heritage Badges",
    nav_profile: "Explorer Profile",
    nav_cms: "Data CMS Portal",
    sync_ready: "Cogover Sync: Ready",
    // Filters & Controls
    filter_all: "All Pins",
    filter_landmark: "🏛️ Landmarks",
    filter_battlefield: "⚔️ Battlefields",
    filter_living: "🎙️ Living History",
    filter_story: "📖 Memories",
    filter_culture: "🎨 Culture",
    my_location: "My Location",
    // Figures
    figures_title: "Historical Heroes Directory",
    figures_desc: "Discover the lives, military feats, and legends of heroic Vietnamese historical figures.",
    btn_add_figure: "+ Add New Hero",
    search_placeholder: "Search heroes by name, dynasty, title...",
    all_dynasties: "All",
    bio_title: "📜 Life & Glorious Achievements",
    linked_pins_title: "🏛️ Associated Landmarks & Battlefields",
    stories_title: "📖 Historical Tales & Lore Vault",
    btn_add_story: "+ Add Tale",
    btn_change_bg: "📷 Change Banner",
    btn_remove_bg: "✕ Remove Banner",
    story_locked: "🔒 Check-in required to unlock",
    story_unlocked: "✓ Unlocked",
    read_story: "Read Tale",
    // Badges
    badges_title: "Heritage Badge Collection",
    badges_desc: "Explore historic landmarks, unlock legends, and achieve milestones to earn prestigious badges.",
    btn_add_badge: "+ Add New Badge",
    badge_filter_all: "All",
    badge_filter_unlocked: "✓ Unlocked",
    badge_filter_locked: "🔒 In Progress",
    badge_filter_gold: "🥇 Gold",
    badge_filter_silver: "🥈 Silver",
    badge_filter_bronze: "🥉 Bronze",
    badge_req_title: "🎯 Requirements",
    badge_live_progress: "Live Progress",
    badge_unlocked_status: "✓ Unlocked",
    badge_locked_status: "🔒 In Progress",
    badge_click_hint: "Click to view details & lore",
    // Badge Modal
    badge_modal_title: "Heritage Badge Details",
    badge_lore_title: "Heritage Lore & Significance",
    badge_cond_title: "Unlock Conditions & Live Progress",
    badge_overall_prog: "Overall Completion Progress",
    badge_cond_met: "✓ Completed",
    badge_cond_unmet: "⏳ In Progress",
    badge_btn_map: "🧭 View Landmark on Radar",
    badge_btn_figure: "⚔️ View Associated Hero",
    badge_btn_close: "Close",
    // Profile
    profile_title: "Explorer Profile",
    profile_desc: "Track your expedition across Vietnam and your journey of discovering cultural heritage.",
    profile_rank: "HERITAGE SEEKER",
    profile_exp: "Exploration Experience Points",
    stat_pins: "Places Checked In",
    stat_stories: "Tales Unlocked",
    stat_badges: "Badges Owned",
    stat_km: "Km Explored",
    recent_logs: "Recent Journey Logs",
    // CMS
    cms_title: "Manual Data Input Portal (CMS)",
    cms_desc: "Add custom Radar Pins, Historical Heroes, Lore Tales, or Badges. Data is instantly saved and synchronized!",
    cms_subtab_pins: "📍 1. Radar Pins",
    cms_subtab_figures: "👑 2. Historical Heroes",
    cms_subtab_stories: "📖 3. Lore Tales",
    cms_subtab_badges: "🏅 4. Heritage Badges",
    cms_subtab_manage: "🗂️ 5. Manage & Test Data",
    reload_data_btn: "🔄 Reload from data.json",
    import_json_btn: "📤 Choose JSON File",
    // CMS Form Labels — Pin (English)
    cms_export_btn: "📥 Download JSON Backup",
    cms_pin_name_lbl: "Landmark / Battlefield / Heritage Site Name",
    cms_pin_name_ph: "e.g., Temple of Literature, Dien Bien Phu Citadel...",
    cms_pin_type_lbl: "Pin Content Type",
    cms_pin_type_landmark: "🏛️ Landmark & Heritage Site (Architectural monument, scenic spot)",
    cms_pin_type_battlefield: "⚔️ Battle & Campaign (Historic battlefield, military route)",
    cms_pin_type_living: "🎙️ Living Witness / Memory (Veteran recordings, living testimonies)",
    cms_pin_type_story: "📖 Memory Fragment & Event (Bunker, memorial plaque)",
    cms_pin_type_culture: "🎨 Culture & Traditional Craft Village",
    cms_pin_rarity_lbl: "Rarity & Radar Range",
    cms_pin_rarity_common: "Common - Radar 1-2km, Check-in 150m",
    cms_pin_rarity_uncommon: "Uncommon - Radar 5-8km, Check-in 80m",
    cms_pin_rarity_legendary: "Legendary - Radar 15-30km, Check-in 30m",
    cms_pin_rarity_event: "Limited Event - Nationwide",
    cms_pin_lat_lbl: "Latitude",
    cms_pin_lat_hint: "Tip: Click directly on the Radar Map to auto-fill coordinates!",
    cms_pin_lng_lbl: "Longitude",
    cms_pin_radar_lbl: "Radar Scan Range (meters)",
    cms_pin_checkin_lbl: "On-site Check-in Radius (meters)",
    cms_pin_image_lbl: "Landmark / Heritage Site Image",
    cms_pin_image_ph: "Paste online link (https://...) or file path (media/images/photo.jpg)...",
    cms_pin_image_btn: "📁 Choose Image",
    cms_pin_image_ok: "✓ Image loaded successfully",
    cms_pin_image_hint: "Supports: Web links, local image files (saved to app/media/images/ or Base64 offline).",
    cms_pin_media_lbl: "Audio / Video / Witness Testimony Path",
    cms_pin_media_ph: "Paste YouTube link (https://youtube.com/...) or video file (media/videos/clip.mp4)...",
    cms_pin_media_btn: "📁 Choose Video/Audio",
    cms_pin_media_hint: "Supports: YouTube links, .mp4/.webm video or .mp3 audio in app/media/videos/ folder.",
    cms_pin_desc_lbl: "Historical Summary & Source",
    cms_pin_desc_ph: "Historical significance, background, cultural value...",
    cms_pin_reset: "Reset",
    cms_pin_save: "💾 Save Radar Pin & Sync",
    // CMS Form Labels — Figure (English)
    cms_fig_name_lbl: "Hero / Historical Figure Name",
    cms_fig_name_ph: "e.g., Ly Thuong Kiet, Vo Nguyen Giap...",
    cms_fig_role_lbl: "Title / Role",
    cms_fig_role_ph: "e.g., General, Grand Marshal, Female Commander...",
    cms_fig_dynasty_lbl: "Era / Dynasty",
    cms_fig_dynasty_ph: "e.g., Ly Dynasty, Tran Dynasty, Tay Son...",
    cms_fig_years_lbl: "Lifespan (Birth – Death Year)",
    cms_fig_years_ph: "e.g., 1228 – 1300 or 11th Century",
    cms_fig_avatar_lbl: "Avatar Symbol",
    cms_fig_avatar_warrior: "⚔️ Swordsman / Commander",
    cms_fig_avatar_king: "👑 Emperor / Sovereign",
    cms_fig_avatar_guard: "🛡️ Nation's Guardian Hero",
    cms_fig_avatar_archer: "🏹 Uprising Warrior",
    cms_fig_avatar_eagle: "🦅 Lac Bird Bronze Drum",
    cms_fig_avatar_scholar: "📜 Scholar / Intellectual",
    cms_fig_image_lbl: "Portrait / Figure Image",
    cms_fig_image_ph: "Paste online link (https://...) or local file (media/images/portrait.jpg)...",
    cms_fig_image_btn: "📁 Choose Portrait",
    cms_fig_image_ok: "✓ Portrait loaded successfully",
    cms_fig_bg_lbl: "Background / Historical Setting Image (Hero Backdrop Cover)",
    cms_fig_bg_ph: "Paste online link (https://...) or historical background / battlefield file...",
    cms_fig_bg_btn: "📁 Choose Background",
    cms_fig_bg_ok: "✓ Background image loaded successfully",
    cms_fig_bg_hint: "The backdrop will cover the hero profile header with an epic blurred effect honoring their legacy.",
    cms_fig_quote_lbl: "Famous Quote / Historical Saying",
    cms_fig_quote_ph: "e.g., 'If Your Majesty wishes to surrender, please behead me first!'",
    cms_fig_quote_hint: "A heroic proclamation or famous battle cry attributed to this figure.",
    cms_fig_pins_lbl: "Associated Landmarks & Battlefields (Related Content)",
    cms_fig_pins_opt: "-- Select an associated heritage site (if any) --",
    cms_fig_pins_hint: "Pick the landmark where this hero achieved their most glorious victories.",
    cms_fig_bio_lbl: "Biography & Heroic Life",
    cms_fig_bio_ph: "Notable contributions, landmark battles, illustrious career...",
    cms_fig_stories_header: "📖 Historical Tales & Lore Vault for This Hero",
    cms_fig_stories_desc: "You can add 1 or MORE tales (unlimited). Each tale can be linked to a different heritage site for players to explore and unlock!",
    cms_fig_add_story_btn: "+ Add Another Tale",
    cms_fig_reset: "Reset",
    cms_fig_save: "💾 Save Hero & All Tales",
    // Story row (dynamic — English)
    cms_fig_story_label: "📖 Tale",
    cms_fig_story_remove: "✕ Remove this tale",
    cms_fig_story_title_lbl: "Tale Title / Heroic Event",
    cms_fig_story_title_ph: "e.g., The Stake Strategy at Bach Dang, Oath of Sat Tat...",
    cms_fig_story_pin_lbl: "Landmark (Pin) required for Check-in to unlock",
    cms_fig_story_pin_hint: "Players must travel to this Radar pin to unlock and read this tale.",
    cms_fig_story_bg_lbl: "Background / Story Illustration (Optional)",
    cms_fig_story_bg_ph: "Paste online image link (https://...) or illustration file...",
    cms_fig_story_bg_btn: "📁 Choose Image",
    cms_fig_story_bg_ok: "✓ Illustration loaded",
    cms_fig_story_content_lbl: "Full Historical Story Content",
    cms_fig_story_content_ph: "Historical context, battle development, military strategy...",
    // CMS Form Labels — Story (English)
    cms_story_title_lbl: "Tale / Event Title",
    cms_story_title_ph: "e.g., The Divine Poem 'Nam Quoc Son Ha', The Rallying Cry...",
    cms_story_figure_lbl: "Which Hero does this belong to?",
    cms_story_pin_lbl: "Landmark (Pin) required for Check-in to unlock",
    cms_story_bg_lbl: "Background / Story Cover Illustration",
    cms_story_bg_ph: "Paste online image link (https://...) or story illustration file...",
    cms_story_bg_btn: "📁 Choose Background",
    cms_story_bg_ok: "✓ Story illustration loaded",
    cms_story_bg_hint: "Image will appear on the tale card and at the top of the reading window when unlocked.",
    cms_story_content_lbl: "Full Story Content",
    cms_story_content_ph: "Full narrative, historical tactics, event progression...",
    cms_story_cont_lbl: "Stay here to add more tales for other figures after saving",
    cms_story_reset: "Reset",
    cms_story_save: "💾 Save Locked Tale",
    // CMS Form Labels — Badge (English)
    cms_badge_name_lbl: "Badge Name",
    cms_badge_name_ph: "e.g., The Great Defeat of Qing, Echo of the Cau River...",
    cms_badge_tier_lbl: "Tier / Rank",
    cms_badge_tier_gold: "🥇 Gold Tier - Gleaming Prestige",
    cms_badge_tier_silver: "🥈 Silver Tier - Refined Honor",
    cms_badge_tier_bronze: "🥉 Bronze Tier - Classic Legacy",
    cms_badge_tier_diamond: "💎 Platinum Tier - Legendary",
    cms_badge_icon_lbl: "Badge Icon",
    cms_badge_icon_medal: "🎖️ Medal of Honor",
    cms_badge_icon_crown: "👑 Crown of Heroes",
    cms_badge_icon_sword: "⚔️ Battle Sword",
    cms_badge_icon_temple: "🏛️ Heritage Crown",
    cms_badge_icon_witness: "🎙️ Living Witness",
    cms_badge_icon_footprint: "🐾 Heritage Footprint",
    cms_badge_icon_eagle: "🦅 Lac Bird of Bronze",
    cms_badge_icon_scroll: "📜 Royal Edict",
    cms_badge_icon_shield: "🛡️ Nation's Shield",
    cms_badge_icon_map: "🗺️ Realm Map",
    cms_badge_icon_star: "🌟 Heritage Gem",
    cms_badge_icon_flag: "🚩 Battle Standard",
    cms_badge_cat_lbl: "Collection / Category",
    cms_badge_cat_ph: "e.g., Hero's Spirit, Living Witnesses, Explore Vietnam...",
    cms_badge_lore_lbl: "Badge Lore & Significance",
    cms_badge_lore_ph: "The honor story, heroic tale, or historical context tied to this badge (shown when players click for details)...",
    cms_badge_lore_hint: "This text will appear ceremonially in the badge detail modal when players open it.",
    cms_badge_cond_header: "🎯 Set Up Auto-Unlock Conditions (Multiple Combined Conditions)",
    cms_badge_cond_desc: "You can add 1 or MORE conditions at once (e.g., must visit specific landmarks AND discover enough heroes).",
    cms_badge_add_cond_btn: "+ Add Another Condition",
    cms_badge_criteria_lbl: "Badge Card Summary Requirement (Displayed on Badge Card)",
    cms_badge_criteria_ph: "Auto-generated from conditions above, or enter custom text...",
    cms_badge_criteria_hint: "This short description appears on the badge card in the collection.",
    cms_badge_unlock_lbl: "Unlock immediately (For starter or beginner badges)",
    cms_badge_reset: "Reset",
    cms_badge_save: "💾 Save New Badge",
    // Badge condition rows (dynamic — English)
    cms_cond_title: "Unlock condition",
    cms_cond_remove: "✕ Remove condition",
    cms_cond_type_lbl: "Select Condition Type",
    cms_cond_type_specific_fig: "👑 Discover specific Heroes / Historical Figures (Pick from list)",
    cms_cond_type_fig_count: "👑 Unlock by any Hero count (Count-based)",
    cms_cond_type_specific_pin: "📍 Visit specific Landmarks / Heritage Sites (Pick from list)",
    cms_cond_type_pin_count: "🗺️ Check-in at any Landmark count (Count-based)",
    cms_cond_type_people: "🎙️ Meet Living Witnesses / Veterans / Memories (Count-based)",
    cms_cond_type_stories: "📖 Unlock Historical Tales count (Count-based)",
    cms_cond_type_custom: "✍️ Free-form Condition (Enter description manually)",
    cms_cond_fig_lbl: "Select required Historical Heroes",
    cms_cond_fig_min: "Minimum required to unlock:",
    cms_cond_fig_min_suf: "heroes from the selected list.",
    cms_cond_figcount_lbl: "Number of Heroes required to discover",
    cms_cond_figcount_hint: "Players who unlock enough heroes of any type will complete this condition.",
    cms_cond_pin_lbl: "Select required Landmarks / Heritage Sites to check in",
    cms_cond_pin_min: "Minimum check-ins required:",
    cms_cond_pin_min_suf: "sites from the selected list.",
    cms_cond_pincount_lbl: "Number of Landmarks / Heritage Sites required to check in",
    cms_cond_pincount_hint: "Players who physically visit and check in enough pins will complete this condition.",
    cms_cond_people_lbl: "Number of Living Witnesses / Veterans required to meet",
    cms_cond_people_hint: "Players who check in at sites with living history or veteran records complete this condition.",
    cms_cond_stories_lbl: "Number of Historical Tales required to unlock",
    cms_cond_custom_lbl: "Free-form condition description",
    cms_cond_custom_ph: "e.g., Attend a historic anniversary festival or solve a historical riddle...",
    // CMS Manage Tab (English)
    cms_manage_title: "⚠️ Clean Up Test Data (Factory Reset)",
    cms_manage_desc: "Restore all game data to the original baseline. All Pins, Heroes, Tales, or Badges you added for testing will be wiped!",
    cms_manage_reset_btn: "🔄 Restore Original Data",
    cms_manage_pins_title: "📍 1. Landmark Pin List",
    cms_manage_pins_hint: "Press 🗑️ to delete individual test pins",
    cms_manage_figs_title: "⚔️ 2. Historical Figure List",
    cms_manage_stories_title: "📖 3. Historical Tales List",
    cms_manage_badges_title: "🏅 4. Heritage Badge List",
    // Manage Tables Columns & Status (English)
    manage_tbl_icon_name: "Icon & Name",
    manage_tbl_type: "Type",
    manage_tbl_rarity: "Rarity",
    manage_tbl_coords: "Coordinates",
    manage_tbl_radius: "Radius",
    manage_tbl_action: "Actions",
    manage_tbl_delete: "🗑️ Delete",
    manage_tbl_empty_pins: "No Pins found.",
    manage_tbl_empty_figs: "No Figures found.",
    manage_tbl_empty_stories: "No Tales found.",
    manage_tbl_empty_badges: "No Badges found.",
    manage_tbl_avatar_title: "Avatar & Title",
    manage_tbl_role: "Title / Role",
    manage_tbl_dynasty: "Dynasty / Era",
    manage_tbl_story_name: "Tale Title",
    manage_tbl_figure: "Hero",
    manage_tbl_required_pin: "Required Landmark",
    manage_tbl_status: "Status",
    manage_tbl_tier: "Tier",
    manage_tbl_criteria: "Criteria",
    manage_tbl_locked: "🔒 Locked",
    manage_tbl_unlocked: "🔓 Unlocked",
    manage_radius_scan: "Scan",
    manage_radius_reach: "Reach",
    manage_badge_spec_figs: "Specific Heroes",
    manage_badge_figs: "Heroes",
    manage_badge_spec_pins: "Specific Sites",
    manage_badge_pins: "Sites",
    manage_badge_witnesses: "Witnesses",
    manage_badge_stories: "Tales",
    manage_badge_custom: "Custom",
    // Quick Story Modal (English)
    quick_story_modal_title: "📖 Add New Tale",
    quick_story_figure_lbl: "Tale associated with Hero:",
    quick_story_title_lbl: "Tale Title / Heroic Event",
    quick_story_title_ph: "e.g., The Officer's Proclamation, Binh Than Conference...",
    quick_story_pin_lbl: "Landmark (Pin) required for Check-in to unlock",
    quick_story_pin_hint: "Players must patrol to this landmark on Radar to unlock and read the tale.",
    quick_story_bg_lbl: "Background / Story Illustration (Optional)",
    quick_story_bg_ph: "Paste image link (https://...) or illustration file...",
    quick_story_bg_btn: "📁 Choose Image",
    quick_story_bg_ok: "✓ Illustration loaded",
    quick_story_content_lbl: "Full Story Narrative",
    quick_story_content_ph: "Historical context, battle events, military strategy...",
    quick_story_cont_lbl: "Keep adding more tales for this hero after saving",
    quick_story_btn_cancel: "Cancel",
    quick_story_btn_save: "💾 Save Tale Now"
  }
};

let currentLang = localStorage.getItem("legacy_keepers_lang") || "vi";

function t(key) {
  if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
    return TRANSLATIONS[currentLang][key];
  }
  if (TRANSLATIONS.vi && TRANSLATIONS.vi[key]) {
    return TRANSLATIONS.vi[key];
  }
  return key;
}

function setLanguage(lang) {
  if (lang !== 'vi' && lang !== 'en') lang = 'vi';
  currentLang = lang;
  localStorage.setItem("legacy_keepers_lang", lang);
  document.documentElement.lang = lang;

  // Update button active classes
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.id.includes(lang)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply to all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.innerText = t(key);
    }
  });

  // Apply to all elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      el.placeholder = t(key);
    }
  });

  // Apply to all elements with data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (key) {
      el.title = t(key);
    }
  });

  // Apply CMS & Dynamic Forms Translations
  applyCMSTranslations();

  // Re-render views
  refreshAllViews();
}

function applyCMSTranslations() {
  // 1. Select options in Form 1 (Pins)
  const pinTypeSelect = document.getElementById('pin-input-type');
  if (pinTypeSelect) {
    for (let opt of pinTypeSelect.options) {
      if (opt.value === 'landmark') opt.text = t('cms_pin_type_landmark');
      else if (opt.value === 'battlefield') opt.text = t('cms_pin_type_battlefield');
      else if (opt.value === 'living_history') opt.text = t('cms_pin_type_living');
      else if (opt.value === 'story') opt.text = t('cms_pin_type_story');
      else if (opt.value === 'culture') opt.text = t('cms_pin_type_culture');
    }
  }

  const pinRaritySelect = document.getElementById('pin-input-rarity');
  if (pinRaritySelect) {
    for (let opt of pinRaritySelect.options) {
      if (opt.value === 'common') opt.text = t('cms_pin_rarity_common');
      else if (opt.value === 'uncommon') opt.text = t('cms_pin_rarity_uncommon');
      else if (opt.value === 'legendary') opt.text = t('cms_pin_rarity_legendary');
      else if (opt.value === 'event') opt.text = t('cms_pin_rarity_event');
    }
  }

  // 2. Select options in Form 2 (Figures)
  const figAvatarSelect = document.getElementById('fig-input-avatar');
  if (figAvatarSelect) {
    for (let opt of figAvatarSelect.options) {
      if (opt.value === '⚔️') opt.text = t('cms_fig_avatar_warrior');
      else if (opt.value === '👑') opt.text = t('cms_fig_avatar_king');
      else if (opt.value === '🛡️') opt.text = t('cms_fig_avatar_guard');
      else if (opt.value === '🏹') opt.text = t('cms_fig_avatar_archer');
      else if (opt.value === '🦅') opt.text = t('cms_fig_avatar_eagle');
      else if (opt.value === '📜') opt.text = t('cms_fig_avatar_scholar');
    }
  }

  const figPinsSelect = document.getElementById('fig-input-pins');
  if (figPinsSelect && figPinsSelect.options.length > 0 && figPinsSelect.options[0].value === "") {
    figPinsSelect.options[0].text = t('cms_fig_pins_opt');
  }

  // 3. Select options in Form 4 (Badges)
  const badgeTierSelect = document.getElementById('badge-input-tier');
  if (badgeTierSelect) {
    for (let opt of badgeTierSelect.options) {
      if (opt.value === 'gold') opt.text = t('cms_badge_tier_gold');
      else if (opt.value === 'silver') opt.text = t('cms_badge_tier_silver');
      else if (opt.value === 'bronze') opt.text = t('cms_badge_tier_bronze');
      else if (opt.value === 'diamond') opt.text = t('cms_badge_tier_diamond');
    }
  }

  const badgeIconSelect = document.getElementById('badge-input-icon');
  if (badgeIconSelect) {
    for (let opt of badgeIconSelect.options) {
      if (opt.value === '🎖️') opt.text = t('cms_badge_icon_medal');
      else if (opt.value === '👑') opt.text = t('cms_badge_icon_crown');
      else if (opt.value === '⚔️') opt.text = t('cms_badge_icon_sword');
      else if (opt.value === '🏛️') opt.text = t('cms_badge_icon_temple');
      else if (opt.value === '🎙️') opt.text = t('cms_badge_icon_witness');
      else if (opt.value === '🐾') opt.text = t('cms_badge_icon_footprint');
      else if (opt.value === '🦅') opt.text = t('cms_badge_icon_eagle');
      else if (opt.value === '📜') opt.text = t('cms_badge_icon_scroll');
      else if (opt.value === '🛡️') opt.text = t('cms_badge_icon_shield');
      else if (opt.value === '🗺️') opt.text = t('cms_badge_icon_map');
      else if (opt.value === '🌟') opt.text = t('cms_badge_icon_star');
      else if (opt.value === '🚩') opt.text = t('cms_badge_icon_flag');
    }
  }

  // 4. Update dynamic Figure Story rows in Form 2
  const figStoryRows = document.querySelectorAll('.fig-story-row');
  figStoryRows.forEach((row, idx) => {
    const label = row.querySelector('.fig-story-row-label');
    if (label) label.innerText = `${t('cms_fig_story_label')} #${idx + 1}`;
    const delBtn = row.querySelector('.fig-story-btn-del');
    if (delBtn) delBtn.innerText = t('cms_fig_story_remove');
    const titleLbl = row.querySelector('.fig-story-lbl-title');
    if (titleLbl) titleLbl.innerHTML = `${t('cms_fig_story_title_lbl')} <span class="req">*</span>`;
    const titleInp = row.querySelector('.fig-story-input-title');
    if (titleInp) titleInp.placeholder = t('cms_fig_story_title_ph');
    const pinLbl = row.querySelector('.fig-story-lbl-pin');
    if (pinLbl) pinLbl.innerText = t('cms_fig_story_pin_lbl');
    const pinHint = row.querySelector('.fig-story-hint-pin');
    if (pinHint) pinHint.innerText = t('cms_fig_story_pin_hint');
    const bgLbl = row.querySelector('.fig-story-lbl-bg');
    if (bgLbl) bgLbl.innerText = t('cms_fig_story_bg_lbl');
    const bgInp = row.querySelector('.fig-story-input-bg');
    if (bgInp) bgInp.placeholder = t('cms_fig_story_bg_ph');
    const bgBtn = row.querySelector('.fig-story-btn-bg');
    if (bgBtn) bgBtn.innerText = t('cms_fig_story_bg_btn');
    const contentLbl = row.querySelector('.fig-story-lbl-content');
    if (contentLbl) contentLbl.innerText = t('cms_fig_story_content_lbl');
    const contentInp = row.querySelector('.fig-story-input-content');
    if (contentInp) contentInp.placeholder = t('cms_fig_story_content_ph');
  });

  // 5. Update dynamic Badge Condition rows in Form 4
  const badgeCondRows = document.querySelectorAll('.badge-cond-row');
  badgeCondRows.forEach((row, idx) => {
    const title = row.querySelector('.cond-row-title');
    if (title) title.innerText = `${t('cms_cond_title')} #${idx + 1}`;
    const delBtn = row.querySelector('.btn-delete-row');
    if (delBtn) delBtn.innerText = t('cms_cond_remove');

    const typeSelect = row.querySelector('.badge-cond-type-select');
    if (typeSelect) {
      for (let o of typeSelect.options) {
        if (o.value === 'specific_figures') o.text = t('cms_cond_type_specific_fig');
        else if (o.value === 'figures_count') o.text = t('cms_cond_type_fig_count');
        else if (o.value === 'specific_pins') o.text = t('cms_cond_type_specific_pin');
        else if (o.value === 'pins_count') o.text = t('cms_cond_type_pin_count');
        else if (o.value === 'people_count') o.text = t('cms_cond_type_people');
        else if (o.value === 'stories_count') o.text = t('cms_cond_type_stories');
        else if (o.value === 'custom') o.text = t('cms_cond_type_custom');
      }
    }

    const typeLbl = row.querySelector('.cond-lbl-type');
    if (typeLbl) typeLbl.innerHTML = `${t('cms_cond_type_lbl')} <span class="req">*</span>`;

    const figLbl = row.querySelector('.cond-lbl-fig');
    if (figLbl) figLbl.innerHTML = `${t('cms_cond_fig_lbl')} <span class="req">*</span>`;
    const figMin = row.querySelector('.cond-txt-fig-min');
    if (figMin) figMin.innerText = t('cms_cond_fig_min');
    const figMinSuf = row.querySelector('.cond-txt-fig-suf');
    if (figMinSuf) figMinSuf.innerText = t('cms_cond_fig_min_suf');

    const figCountLbl = row.querySelector('.cond-lbl-figcount');
    if (figCountLbl) figCountLbl.innerHTML = `${t('cms_cond_figcount_lbl')} <span class="req">*</span>`;
    const figCountHint = row.querySelector('.cond-hint-figcount');
    if (figCountHint) figCountHint.innerText = t('cms_cond_figcount_hint');

    const pinLbl = row.querySelector('.cond-lbl-pin');
    if (pinLbl) pinLbl.innerHTML = `${t('cms_cond_pin_lbl')} <span class="req">*</span>`;
    const pinMin = row.querySelector('.cond-txt-pin-min');
    if (pinMin) pinMin.innerText = t('cms_cond_pin_min');
    const pinMinSuf = row.querySelector('.cond-txt-pin-suf');
    if (pinMinSuf) pinMinSuf.innerText = t('cms_cond_pin_min_suf');

    const pinCountLbl = row.querySelector('.cond-lbl-pincount');
    if (pinCountLbl) pinCountLbl.innerHTML = `${t('cms_cond_pincount_lbl')} <span class="req">*</span>`;
    const pinCountHint = row.querySelector('.cond-hint-pincount');
    if (pinCountHint) pinCountHint.innerText = t('cms_cond_pincount_hint');

    const peopleLbl = row.querySelector('.cond-lbl-people');
    if (peopleLbl) peopleLbl.innerHTML = `${t('cms_cond_people_lbl')} <span class="req">*</span>`;
    const peopleHint = row.querySelector('.cond-hint-people');
    if (peopleHint) peopleHint.innerText = t('cms_cond_people_hint');

    const storiesLbl = row.querySelector('.cond-lbl-stories');
    if (storiesLbl) storiesLbl.innerHTML = `${t('cms_cond_stories_lbl')} <span class="req">*</span>`;

    const customLbl = row.querySelector('.cond-lbl-custom');
    if (customLbl) customLbl.innerText = t('cms_cond_custom_lbl');
    const customInp = row.querySelector('.cond-custom-desc-input');
    if (customInp) customInp.placeholder = t('cms_cond_custom_ph');
  });

  // Re-sync criteria summary text if automatic
  updateBadgeSummaryCriteriaAuto();
}

// Initial Default Data Set (from Thiết kế.docx)
const INITIAL_DATA = {
  pins: [
    {
      id: "pin-thanglong",
      name: "Hoàng thành Thăng Long",
      category: "landmark",
      rarity: "legendary",
      lat: 21.0345600,
      lng: 105.8407400,
      discovery_radius: 20000,
      interaction_radius: 50,
      icon: "🏛️",
      desc: "Di tích quốc gia đặc biệt, nơi phát hiệu ứng hào quang Aura Pulse toàn vùng. Trung tâm quyền lực suốt hơn 13 thế kỷ từ thời Tiền Thăng Long đến triều Lý, Trần, Lê.",
      image_url: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80",
      hasLivingHistory: false
    },
    {
      id: "pin-bachdang",
      name: "Khu di tích Chiến thắng Bạch Đằng",
      category: "battlefield",
      rarity: "legendary",
      lat: 20.9168000,
      lng: 106.6667000,
      discovery_radius: 25000,
      interaction_radius: 100,
      icon: "⚔️",
      desc: "Chiến trường xưa với 3 lần đánh bại quân xâm lược phương Bắc bằng kế sách cắm cọc hiểm yếu dưới lòng sông của Ngô Quyền, Lê Hoàn và Trần Hưng Đạo.",
      image_url: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=800&q=80",
      hasLivingHistory: true
    },
    {
      id: "pin-ham-bietdong",
      name: "Căn hầm bí mật chứa vũ khí Biệt động Sài Gòn",
      category: "living_history",
      rarity: "uncommon",
      lat: 10.7769000,
      lng: 106.6953000,
      discovery_radius: 6000,
      interaction_radius: 80,
      icon: "🎙️",
      desc: "Nơi cất giấu gần 2 tấn súng đạn, chất nổ của lực lượng Biệt động Sài Gòn ngay giữa lòng đô thành phục vụ cuộc Tổng tiến công Tết Mậu Thân 1968.",
      image_url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      hasLivingHistory: true
    },
    {
      id: "pin-ben-nharong",
      name: "Bến Nhà Rồng - Bảo tàng Hồ Chí Minh",
      category: "landmark",
      rarity: "legendary",
      lat: 10.7684000,
      lng: 106.7068000,
      discovery_radius: 20000,
      interaction_radius: 50,
      icon: "🏛️",
      desc: "Nơi người thanh niên yêu nước Nguyễn Tất Thành ra đi tìm đường cứu nước vào ngày 5/6/1911 trên con tàu Amiral Latouche-Tréville.",
      image_url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
      hasLivingHistory: true
    },
    {
      id: "pin-dongda",
      name: "Công viên Văn hóa Đống Đa",
      category: "battlefield",
      rarity: "uncommon",
      lat: 21.0152000,
      lng: 105.8239000,
      discovery_radius: 7000,
      interaction_radius: 80,
      icon: "⚔️",
      desc: "Địa danh ghi dấu chiến công vang dội của Hoàng đế Quang Trung đại phá 29 vạn quân Mãn Thanh mùa xuân năm Kỷ Dậu 1789.",
      hasLivingHistory: false
    },
    {
      id: "pin-hatmon",
      name: "Đền thờ Hai Bà Trưng (Hát Môn)",
      category: "landmark",
      rarity: "legendary",
      lat: 21.1354000,
      lng: 105.5786000,
      discovery_radius: 15000,
      interaction_radius: 60,
      icon: "🏛️",
      desc: "Nơi Hai Bà Trưng tế cờ khởi nghĩa và đọc 4 lời thề cứu nước son sắt trước khi xuất quân trừng trị giặc Tô Định.",
      hasLivingHistory: false
    }
  ],

  figures: [
    {
      id: "fig-tranquoctuan",
      name: "Hưng Đạo Đại Vương - Trần Quốc Tuấn",
      role: "Quốc công Tiết chế (Tổng tư lệnh quân đội)",
      dynasty: "Nhà Trần",
      years: "1228 – 1300",
      avatar: "⚔️",
      image_url: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80",
      background_image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      quote: "Nếu bệ hạ muốn hàng, xin hãy chém đầu thần trước rồi hãy hàng!",
      bio: "Anh hùng dân tộc, thiên tài quân sự kiệt xuất ba lần chỉ huy quân dân Đại Việt đánh tan quân Nguyên Mông hung hãn, tác giả của bản 'Hịch Tướng Sĩ' truyền đời non sông.",
      related_pins: ["pin-bachdang", "pin-thanglong"]
    },
    {
      id: "fig-quangtrung",
      name: "Quang Trung - Nguyễn Huệ",
      role: "Hoàng đế bách chiến bách thắng",
      dynasty: "Nhà Tây Sơn",
      years: "1753 – 1792",
      avatar: "👑",
      image_url: "",
      background_image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      quote: "Đánh cho để dài tóc, đánh cho để đen răng, đánh cho nó chích luân bất phản, phiến giáp bất hoàn!",
      bio: "Người anh hùng áo vải cờ đào kiệt xuất, đánh tan 5 vạn quân Xiêm rạch Gầm Xoài Mút và thần tốc vượt hơn 600km quét sạch 29 vạn quân Mãn Thanh chỉ trong vài ngày Tết Kỷ Dậu 1789.",
      related_pins: ["pin-dongda"]
    },
    {
      id: "fig-haibatrung",
      name: "Hai Bà Trưng (Trưng Trắc & Trưng Nhị)",
      role: "Nữ vương phất cờ độc lập",
      dynasty: "Nhà Trưng",
      years: "Năm 40 – 43 SCN",
      avatar: "🛡️",
      image_url: "",
      background_image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      quote: "Một xin rửa sạch nước thù / Hai xin đem lại nghiệp xưa họ Hùng!",
      bio: "Hai nữ anh hùng dân tộc đầu tiên phất cờ khởi nghĩa, thu phục 65 thành trì, đánh đuổi thái thú Tô Định, giành lại độc lập tự chủ cho non sông sau hơn 200 năm Bắc thuộc.",
      related_pins: ["pin-hatmon"]
    }
  ],

  stories: [
    {
      id: "story-camcoc",
      name: "Kế sách cắm cọc sông Bạch Đằng",
      figure_id: "fig-tranquoctuan",
      required_pin_id: "pin-bachdang",
      is_locked: false,
      background_image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      content: `Năm 1288, trước thế giặc Nguyên Mông hung hãn rút lui bằng đường thủy, Trần Quốc Tuấn đã lợi dụng con nước thủy triều hiểm yếu của sông Bạch Đằng.\n\nÔng cho đẵn gỗ lim, vót nhọn bịt sắt rồi cắm xuống lòng sông. Nhân lúc nước triều dâng che khuất bãi cọc, quân ta nhử thuyền giặc vào sâu. Khi nước triều rút mạnh, thuyền địch mắc cạn vào cọc nhọn vỡ toác hàng loạt, toàn bộ hạm đội giặc bị tiêu diệt vang dội non sông.`
    },
    {
      id: "story-dienhong",
      name: "Hội nghị Diên Hồng & Lời thề Sát Thát",
      figure_id: "fig-tranquoctuan",
      required_pin_id: "pin-thanglong",
      is_locked: true,
      background_image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      content: `Tại thềm điện Diên Hồng, vua Trần mở tiệc hỏi ý kiến muôn dân: 'Nên hòa hay nên đánh?'. Muôn người cùng muôn miệng reo hò rung chuyển kinh thành: 'ĐÁNH!'.\n\nCác tướng sĩ đồng lòng thích hai chữ 'Sát Thát' vào cánh tay, thề quyết tử cho Tổ quốc quyết sinh.`
    },
    {
      id: "story-hanhquan-thantoc",
      name: "Cuộc hành quân thần tốc mùa xuân Kỷ Dậu",
      figure_id: "fig-quangtrung",
      required_pin_id: "pin-dongda",
      is_locked: true,
      background_image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
      content: `Từ Phú Xuân ra Thăng Long dài hơn 600km, vua Quang Trung tổ chức đội hình 3 người một cáng, 2 người khiêng 1 người ngủ luân phiên ngày đêm không nghỉ.\n\nĐoàn quân thần tốc vừa đi vừa tuyển thêm tân binh, tạo nên cuộc hành quân kỳ tích vô tiền khoáng hậu khiến tướng giặc Tôn Sĩ Nghị không kịp trở tay.`
    },
    {
      id: "story-ngochoi-dongda",
      name: "Trận đại thắng Ngọc Hồi - Đống Đa",
      figure_id: "fig-quangtrung",
      required_pin_id: "pin-dongda",
      is_locked: true,
      background_image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&w=800&q=80",
      content: `Rạng sáng mùng 5 Tết Kỷ Dậu, vua Quang Trung cho quân lấy thuyền nan bọc rơm ướt khiêng đi trước che đạn lửa của giặc, áp sát đồn Ngọc Hồi phá tan tuyến phòng thủ kiên cố nhất của địch.`
    },
    {
      id: "story-loithe-songhat",
      name: "Lời thề trên sông Hát",
      figure_id: "fig-haibatrung",
      required_pin_id: "pin-hatmon",
      is_locked: true,
      background_image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      content: `Trước giờ xuất trận tại cửa sông Hát, Trưng Trắc dõng dạc tuyên thệ 4 câu thề:\n\n'Một xin rửa sạch nước thù\nHai xin đem lại nghiệp xưa họ Hùng\nBa kẻo oan ức lòng chồng\nBốn xin vẹn vẹn sở công lênh này.'`
    }
  ],

  badges: [
    {
      id: "badge-bachdang",
      name: "Kỵ Sĩ Sông Bạch Đằng",
      tier: "gold",
      icon: "🎖️",
      category: "Người chinh phục lịch sử",
      lore: "Vinh danh những bước chân tìm về dòng sông Bạch Đằng lịch sử – nơi ba lần ghi dấu chiến công hiển hách của cha ông, đánh tan quân Nam Hán và Nguyên Mông bằng kế sách cắm cọc tài tình.",
      lore_en: "Honors travelers to the historic Bach Dang River – where three naval victories crushed foreign invasions with brilliant submerged iron-tipped stake tactics.",
      criteria: "Check-in thành công tại Di tích Bạch Đằng và mở khóa kế sách cắm cọc.",
      conditions: [
        {
          id: "c-bachdang-1",
          type: "specific_pins",
          target_pins: ["pin-bachdang"],
          min_count: 1,
          desc: "Check-in thực địa tại Khu di tích Bạch Đằng"
        }
      ],
      is_unlocked: true,
      unlocked_date: "05/11/2026"
    },
    {
      id: "badge-thanglong",
      name: "Hào Khí Thăng Long",
      tier: "gold",
      icon: "🏛️",
      category: "Người chinh phục lịch sử",
      lore: "Biểu trưng cho tinh thần bất khuất của kinh đô ngàn năm văn hiến, nơi từng vang vọng tiếng hô 'ĐÁNH!' đồng lòng muôn người như một trong Hội nghị Diên Hồng oanh liệt.",
      lore_en: "Symbolizes the indomitable spirit of Hanoi's thousand-year-old imperial citadel, where the iconic cry 'FIGHT!' united the people in the historic Dien Hong Conference.",
      criteria: "Ghé thăm Hoàng thành Thăng Long và khám phá hội nghị Diên Hồng.",
      conditions: [
        {
          id: "c-thanglong-1",
          type: "specific_pins",
          target_pins: ["pin-thanglong"],
          min_count: 1,
          desc: "Ghé thăm và check-in tại Hoàng thành Thăng Long"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-bacho",
      name: "Dấu Chân Bác Hồ",
      tier: "silver",
      icon: "🐾",
      category: "Khám phá Việt Nam",
      lore: "Kỷ niệm ngày 5/6/1911 khi người thanh niên yêu nước Nguyễn Tất Thành rời Bến Nhà Rồng ra đi tìm đường cứu nước, mở ra con đường độc lập tự do cho non sông đất Việt.",
      lore_en: "Commemorates June 5, 1911, when young patriot Nguyen Tat Thanh departed Nha Rong Harbor on his legendary global quest for national independence.",
      criteria: "Check-in Bến Nhà Rồng và lắng nghe tư liệu hành trình cứu nước 1911.",
      conditions: [
        {
          id: "c-bacho-1",
          type: "specific_pins",
          target_pins: ["pin-ben-nharong"],
          min_count: 1,
          desc: "Check-in thực địa tại Bến Nhà Rồng"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-saigon",
      name: "Trái Tim Sài Gòn",
      tier: "bronze",
      icon: "🎙️",
      category: "Nhân chứng sống",
      lore: "Tôn vinh lòng quả cảm phi thường của lực lượng Biệt động Sài Gòn, những người đã mưu trí đào hầm cất giấu vũ khí ngay giữa lòng địch chuẩn bị cho cuộc Tổng tiến công Tết Mậu Thân 1968.",
      lore_en: "Honors the extraordinary valor of Saigon Rangers, who covertly built weapons bunkers in the heart of the city for the historic 1968 Tet Offensive.",
      criteria: "Check-in tại Căn hầm bí mật Biệt động Sài Gòn và nghe lời kể nhân chứng.",
      conditions: [
        {
          id: "c-saigon-1",
          type: "specific_pins",
          target_pins: ["pin-ham-bietdong"],
          min_count: 1,
          desc: "Ghé thăm Căn hầm bí mật Biệt động Sài Gòn"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-anh-hung-hoi-ngo",
      name: "Hội Ngộ Hào Kiệt",
      tier: "silver",
      icon: "👑",
      category: "Hào Khí Danh Nhân",
      lore: "Minh chứng cho người lữ khách đã giải mã và học hỏi tấm gương của 2 vị anh hùng dân tộc, tiếp nối khí phách quật cường của tiền nhân.",
      lore_en: "Awarded to explorers who have discovered and unlocked 2 legendary Vietnamese historical heroes.",
      criteria: "Khám phá và mở khóa 2 Danh nhân lịch sử hào kiệt bất kỳ.",
      conditions: [
        {
          id: "c-hoi-ngo-1",
          type: "figures_count",
          target_num: 2,
          desc: "Mở khóa 2 Danh nhân lịch sử bất kỳ"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-su-thi-bach-nien",
      name: "Đại Nam Liệt Truyện",
      tier: "gold",
      icon: "📜",
      category: "Hào Khí Danh Nhân",
      lore: "Bản trường ca lịch sử sống động được khắc ghi khi người chơi thấu suốt trọn vẹn cả 3 vị đại anh hùng dân tộc: Hưng Đạo Đại Vương Trần Quốc Tuấn, Hoàng đế Quang Trung và Hai Bà Trưng.",
      lore_en: "An epic milestone achieved when discovering all 3 legendary national heroes: Tran Hung Dao, Emperor Quang Trung, and the Trung Sisters.",
      criteria: "Khám phá trọn vẹn 3 Danh nhân: Trần Hưng Đạo, Quang Trung và Hai Bà Trưng.",
      conditions: [
        {
          id: "c-su-thi-1",
          type: "specific_figures",
          target_figures: ["fig-tranquoctuan", "fig-quangtrung", "fig-haibatrung"],
          min_count: 3,
          desc: "Khám phá 3 Danh nhân: Trần Quốc Tuấn, Quang Trung và Hai Bà Trưng"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-nguoi-giu-lua",
      name: "Người Giữ Lửa Lịch Sử",
      tier: "silver",
      icon: "🎙️",
      category: "Nhân Chứng Sống",
      lore: "Ghi nhận sự kết nối thiêng liêng giữa thế hệ hôm nay với các nhân chứng lịch sử và cựu chiến binh, những người trực tiếp trải qua khói lửa để giữ gìn nền độc lập non sông.",
      lore_en: "Recognizes the sacred bond between modern youth and living history witnesses who fought through warfare to safeguard the nation.",
      criteria: "Gặp gỡ và lắng nghe chia sẻ từ 1 Nhân chứng lịch sử / Cựu chiến binh.",
      conditions: [
        {
          id: "c-giu-lua-1",
          type: "people_count",
          target_num: 1,
          desc: "Check-in điểm có tư liệu Nhân chứng sống / Cựu chiến binh"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-tieng-vong-thoi-gian",
      name: "Tiếng Vọng Thời Gian",
      tier: "gold",
      icon: "🎖️",
      category: "Nhân Chứng Sống",
      lore: "Vinh danh nhà thám hiểm đã giao lưu và lắng nghe ký ức chân thực nhất từ 2 nhân chứng lịch sử sống, đưa những ký ức vô giá vượt thời gian đến với đời sau.",
      lore_en: "Honors explorers who have engaged with 2 living history witnesses, keeping priceless wartime memories alive across generations.",
      criteria: "Giao lưu và check-in với 2 Nhân chứng sống / Người kể chuyện lịch sử.",
      conditions: [
        {
          id: "c-tieng-vong-1",
          type: "people_count",
          target_num: 2,
          desc: "Check-in tại 2 điểm có Nhân chứng sống / Ký ức cựu chiến binh"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-dau-chan-di-san",
      name: "Nhà Thám Hiểm Non Sông",
      tier: "bronze",
      icon: "🗺️",
      category: "Khám Phá Di Sản",
      lore: "Chiếc huân chương đồng trao tặng cho bước chân kiên trì chu du khắp 3 địa danh lịch sử, nối dài dải đất hình chữ S bằng niềm tự hào dân tộc.",
      lore_en: "Awarded to devoted explorers who have journeyed to at least 3 historical landmarks across Vietnam.",
      criteria: "Hành trình thám hiểm và check-in tại 3 Địa danh / Di tích lịch sử.",
      conditions: [
        {
          id: "c-dau-chan-1",
          type: "pins_count",
          target_num: 3,
          desc: "Check-in tại 3 Địa danh / Di tích bất kỳ"
        }
      ],
      is_unlocked: false
    }
  ],

  profile: {
    name: "Người Giữ Gìn Di Sản #001",
    username: "@heritage_seeker",
    level: 2,
    exp: 250,
    maxExp: 500,
    checked_in_pins: ["pin-bachdang"],
    discovered_figures: ["fig-tranquoctuan"],
    logs: [
      "05/11/2026: Check-in thành công tại 'Khu di tích Chiến thắng Bạch Đằng' (+100 EXP)",
      "05/11/2026: Mở khóa giai thoại 'Kế sách cắm cọc sông Bạch Đằng'",
      "05/11/2026: Nhận huy hiệu Vàng 'Kỵ Sĩ Sông Bạch Đằng' 🎖️"
    ]
  }
};

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
let appState = {
  pins: [],
  figures: [],
  stories: [],
  badges: [],
  profile: {}
};

function loadState() {
  const saved = localStorage.getItem("legacy_keepers_state_v2");
  if (saved) {
    try {
      appState = JSON.parse(saved);
      // Auto-migrate: Backfill background images from INITIAL_DATA if missing in cache
      (appState.figures || []).forEach(f => {
        if (!f.background_image) {
          const initFig = INITIAL_DATA.figures.find(initF => initF.id === f.id);
          if (initFig && initFig.background_image) {
            f.background_image = initFig.background_image;
          }
        }
      });
      (appState.stories || []).forEach(s => {
        if (!s.background_image) {
          const initStory = INITIAL_DATA.stories.find(initS => initS.id === s.id);
          if (initStory && initStory.background_image) {
            s.background_image = initStory.background_image;
          }
        }
      });

      // Auto-migrate: Ensure profile arrays exist
      if (!appState.profile) appState.profile = {};
      if (!Array.isArray(appState.profile.checked_in_pins)) {
        appState.profile.checked_in_pins = INITIAL_DATA.profile.checked_in_pins || ["pin-bachdang"];
      }
      if (!Array.isArray(appState.profile.discovered_figures)) {
        appState.profile.discovered_figures = INITIAL_DATA.profile.discovered_figures || ["fig-tranquoctuan"];
      }

      // Auto-migrate: Synchronize and enrich badges from INITIAL_DATA
      if (!Array.isArray(appState.badges) || appState.badges.length === 0) {
        appState.badges = JSON.parse(JSON.stringify(INITIAL_DATA.badges));
      } else {
        INITIAL_DATA.badges.forEach(initBg => {
          const existing = appState.badges.find(b => b.id === initBg.id);
          if (!existing) {
            appState.badges.push(JSON.parse(JSON.stringify(initBg)));
          } else {
            if (!existing.lore && initBg.lore) existing.lore = initBg.lore;
            if (!existing.lore_en && initBg.lore_en) existing.lore_en = initBg.lore_en;
            if ((!existing.conditions || existing.conditions.length === 0) && initBg.conditions) {
              existing.conditions = JSON.parse(JSON.stringify(initBg.conditions));
            }
            if (!existing.criteria_type && initBg.criteria_type) {
              existing.criteria_type = initBg.criteria_type;
              existing.criteria_target = initBg.criteria_target;
            }
          }
        });
      }

      evaluateAndUnlockBadges();
    } catch (e) {
      console.warn("Could not parse saved state, resetting to initial.");
      appState = JSON.parse(JSON.stringify(INITIAL_DATA));
    }
  } else {
    appState = JSON.parse(JSON.stringify(INITIAL_DATA));
    saveState();
  }
}

function saveState() {
  localStorage.setItem("legacy_keepers_state_v2", JSON.stringify(appState));
}

// Reload state directly from data.json file
async function reloadFromDataJSON(showToastMsg = true) {
  try {
    const res = await fetch("data.json?t=" + Date.now());
    if (res.ok) {
      const data = await res.json();
      if (data && data.pins) {
        appState.pins = data.pins || [];
        appState.figures = data.figures || [];
        appState.stories = data.stories || [];
        if (data.badges) {
          appState.badges = data.badges.map(bg => {
            const initBg = INITIAL_DATA.badges.find(ib => ib.id === bg.id);
            if (initBg) {
              if (!bg.lore) bg.lore = initBg.lore;
              if (!bg.lore_en) bg.lore_en = initBg.lore_en;
              if (!bg.conditions || bg.conditions.length === 0) {
                bg.conditions = JSON.parse(JSON.stringify(initBg.conditions));
              }
            }
            return bg;
          });
        }
        if (data.profile) {
          appState.profile = { ...appState.profile, ...data.profile };
        }
        if (!Array.isArray(appState.profile.checked_in_pins)) {
          appState.profile.checked_in_pins = ["pin-bachdang"];
        }
        if (!Array.isArray(appState.profile.discovered_figures)) {
          appState.profile.discovered_figures = ["fig-tranquoctuan"];
        }
        evaluateAndUnlockBadges();
        saveState();
        refreshAllViews();
        if (showToastMsg) {
          showToast(t('sync_ready') || "✅ Đã nạp thành công toàn bộ dữ liệu từ file data.json!");
        }
        return true;
      }
    }
  } catch (err) {
    if (showToastMsg) {
      showToast("⚠️ Không kết nối được data.json (Dùng nút 'Nhập file JSON' nếu mở offline)");
    }
  }
  return false;
}

// Import external JSON file chosen from local computer
function importJSONFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.pins && Array.isArray(data.pins)) {
        appState.pins = data.pins;
        if (data.figures) appState.figures = data.figures;
        if (data.stories) appState.stories = data.stories;
        if (data.badges) appState.badges = data.badges;
        if (data.profile) appState.profile = { ...appState.profile, ...data.profile };
        saveState();
        refreshAllViews();
        showToast("✅ Đã nạp thành công dữ liệu từ file " + file.name + "!");
        saveToServerDataJSON();
      } else {
        alert("File JSON không hợp lệ (cần có danh sách 'pins').");
      }
    } catch (err) {
      alert("Lỗi đọc file JSON: " + err.message);
    }
  };
  reader.readAsText(file, "UTF-8");
}

// Auto-save changes back to data.json on disk if server.py is running
async function saveToServerDataJSON() {
  try {
    const payload = {
      pins: appState.pins,
      figures: appState.figures,
      stories: appState.stories,
      badges: appState.badges,
      profile: appState.profile
    };
    await fetch("/api/save_local_json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (e) {
    // ignore if running offline
  }
}

// Player coordinates (Default: Hanoi Old Quarter center)
let userCoords = [21.0285, 105.8542];
let map, playerRadarMarker, playerAccuracyCircle;
let activePinMarkers = [];
let selectedPinForModal = null;
let selectedFigureId = null;
let currentFigureFilter = 'all';
let currentFigureSearch = '';
let currentBadgeFilter = 'all';

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initNavigation();
  initInputSubTabs();
  initLeafletMap();
  initFigureStoryRows();
  initBadgeConditionRows();
  setLanguage(currentLang);
  refreshAllViews();

  // Tự động kiểm tra file data.json nếu server đang chạy
  reloadFromDataJSON(false);
});

// ==========================================================================
// NAVIGATION & TABS
// ==========================================================================
function initNavigation() {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

      item.classList.add("active");
      const targetTab = item.getAttribute("data-tab");
      const panel = document.getElementById(targetTab);
      if (panel) {
        panel.classList.add("active");
      }

      if (targetTab === "tab-map" && map) {
        setTimeout(() => map.invalidateSize(), 200);
      }
      if (targetTab === "tab-figures") {
        renderFiguresSplitView();
      }
    });
  });
}

function switchToInputTab(subtabId) {
  const inputNavItem = document.querySelector('[data-tab="tab-input-portal"]');
  if (inputNavItem) {
    inputNavItem.click();
  }
  if (subtabId) {
    const subTabBtn = document.querySelector(`[data-subtab="${subtabId}"]`);
    if (subTabBtn) {
      subTabBtn.click();
    }
  }
}

function initInputSubTabs() {
  document.querySelectorAll(".sub-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sub-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".form-panel").forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetSubtab = btn.getAttribute("data-subtab");
      const targetPanel = document.getElementById(targetSubtab);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
      if (targetSubtab === "subtab-manage") {
        renderManageTables();
      }
      if (targetSubtab === "subtab-badges") {
        initBadgeConditionRows();
      }
    });
  });
}

// ==========================================================================
// RADAR MAP ENGINE: 10M SWEEP + CONCENTRIC CIRCLE PINS
// ==========================================================================
function initLeafletMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement) {
    console.error("Map element #map not found!");
    return;
  }

  // Ensure map container has dimensions before init
  map = L.map('map', {
    zoomControl: true,
    minZoom: 5,
    maxZoom: 18
  }).setView(userCoords, 14);

  // Clean Minimalist Map Style (Similar to Pokémon GO / Apple Maps Clean Vector)
  // Soft, clear roads, green parks and clean blue water without messy labels
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri &mdash; The Legacy Keepers Clean Radar',
    maxZoom: 17
  }).addTo(map);

  // Force map to compute exact container size
  setTimeout(() => {
    map.invalidateSize();
  }, 250);

  // Create Player Marker with 10m Sweep Animation
  updatePlayerRadarMarker();

  // Allow clicking on map to set coordinates in Input Form
  map.on("click", (e) => {
    const lat = e.latlng.lat.toFixed(7);
    const lng = e.latlng.lng.toFixed(7);
    document.getElementById("pin-input-lat").value = lat;
    document.getElementById("pin-input-lng").value = lng;
    showToast(`📍 Đã lấy tọa độ từ bản đồ: ${lat}, ${lng}`);
  });

  // Map Filter Buttons
  document.querySelectorAll(".map-filter-bar .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".map-filter-bar .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPinsOnMap(btn.getAttribute("data-filter"));
    });
  });
}

// Distance Calculation (Haversine Formula in meters)
function getDistanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return Math.round(R * c);
}
const calculateDistance = getDistanceMeters;

// Standards Rarity Distances matching Thiết kế.docx
// Discovery Radius (tầm phủ sóng để Pin xuất hiện trên radar) & Interaction Radius (tầm check-in)
const RARITY_SPECS = {
  common: {
    discoveryRadius: 1500,     // 1.5 km
    interactionRadius: 150,    // 150 mét
    color: '#CEA884',
    fillColor: '#E8DED0',
    pulseColor: '#CEA884'
  },
  uncommon: {
    discoveryRadius: 6500,     // 6.5 km
    interactionRadius: 80,     // 80 mét
    color: '#5B92A8',
    fillColor: '#C1D1D7',
    pulseColor: '#5B92A8'
  },
  legendary: {
    discoveryRadius: 25000,    // 25 km
    interactionRadius: 40,     // 40 mét
    color: '#FBD071',
    fillColor: '#FDDB9B',
    pulseColor: '#FFA800'
  },
  event: {
    discoveryRadius: 50000,    // 50 km
    interactionRadius: 60,     // 60 mét
    color: '#E74C3C',
    fillColor: '#F5B7B1',
    pulseColor: '#E74C3C'
  }
};

/**
 * Cập nhật vị trí người chơi và vòng quét Radar 10m xung quanh (chuẩn tỷ lệ địa lý thực)
 */
function updatePlayerRadarMarker() {
  if (playerRadarMarker) {
    map.removeLayer(playerRadarMarker);
  }
  if (playerAccuracyCircle) {
    map.removeLayer(playerAccuracyCircle);
  }

  // Vòng quét radar chuẩn tỷ lệ thực 10 mét xung quanh người chơi
  // Dùng L.circle của Leaflet để khi zoom to/nhỏ thì kích thước vòng co giãn chính xác 100% theo thước đo bản đồ!
  playerAccuracyCircle = L.circle(userCoords, {
    radius: 10, // Đúng 10m bán kính thực tế theo yêu cầu
    color: '#54331B',
    fillColor: '#FDDB9B',
    fillOpacity: 0.22,
    weight: 2,
    dashArray: '3, 4'
  }).addTo(map);

  // DivIcon với animation quét sóng và vệt quét xoay 360 độ quanh tâm
  const radarIcon = L.divIcon({
    className: 'player-radar-leaflet-icon',
    html: `
      <div class="player-radar-container">
        <!-- Vòng sóng lan tỏa 10m -->
        <div class="radar-sweep-wave"></div>
        <!-- Vệt quét radar xoay tròn 360 độ -->
        <div class="radar-scan-beam"></div>
        <!-- Tâm người chơi -->
        <div class="player-core-dot"></div>
      </div>
    `,
    iconSize: [80, 80],
    iconAnchor: [40, 40]
  });

  playerRadarMarker = L.marker(userCoords, { icon: radarIcon, zIndexOffset: 1000 }).addTo(map);
  playerRadarMarker.bindTooltip("<b>Vị trí của bạn</b><br><span style='font-size:0.8rem; color:#674B35;'>Radar quét bán kính thực 10 mét xung quanh</span>", {
    direction: "top",
    offset: [0, -20]
  });

  document.getElementById("gps-coords-display").innerText = `${userCoords[0].toFixed(4)}, ${userCoords[1].toFixed(4)}`;
}

let activePinCircles = [];

/**
 * Hiển thị các Pin với vòng tròn đúng tỷ lệ mét theo độ hiếm và ẩn/hiện theo tầm khám phá
 */
function renderPinsOnMap(filter = "all") {
  // Clear existing markers and geographical radius circles
  activePinMarkers.forEach(m => map.removeLayer(m));
  activePinMarkers = [];
  activePinCircles.forEach(c => map.removeLayer(c));
  activePinCircles = [];

  const filtered = filter === "all" ? appState.pins : appState.pins.filter(p => p.category === filter);
  document.getElementById("count-all").innerText = appState.pins.length;

  filtered.forEach(pin => {
    const spec = RARITY_SPECS[pin.rarity] || RARITY_SPECS.common;
    const discoveryRadius = pin.discovery_radius || spec.discoveryRadius;
    const interactionRadius = pin.interaction_radius || spec.interactionRadius;

    // Khoảng cách thực tế từ người chơi đến Pin
    const distToPin = getDistanceMeters(userCoords[0], userCoords[1], pin.lat, pin.lng);

    // Cơ chế Pokémon GO: Chỉ hiển thị Pin trên Radar khi người chơi đi vào tầm phủ sóng (Discovery Radius)!
    const isWithinRadarReach = distToPin <= discoveryRadius;

    // Nếu người chơi ở quá xa ngoài tầm phát hiện của radar thì ẩn pin đi
    if (!isWithinRadarReach) {
      return;
    }

    // VÒNG TRÒN CHECK-IN CHUẨN TỶ LỆ MÉT (Tự động co giãn chính xác khi zoom in/out!)
    const interactionCircle = L.circle([pin.lat, pin.lng], {
      radius: interactionRadius, // Đúng mét thực tế (vd: 40m, 80m, 150m)
      color: spec.color,
      fillColor: spec.fillColor,
      fillOpacity: 0.18,
      weight: 1.5,
      dashArray: '4, 4'
    }).addTo(map);
    activePinCircles.push(interactionCircle);

    // Marker Pin với các vòng tròn đồng tâm tỏa ra
    const rarityClass = `pin-rarity-${pin.rarity || 'common'}`;
    const concentricIcon = L.divIcon({
      className: 'concentric-pin-leaflet-icon',
      html: `
        <div class="concentric-pin-container ${rarityClass}">
          <!-- 3 Vòng tròn đồng tâm từ tâm tỏa ra theo màu Aura -->
          <div class="pin-ripple-circle pin-ripple-1"></div>
          <div class="pin-ripple-circle pin-ripple-2"></div>
          <div class="pin-ripple-circle pin-ripple-3"></div>
          <!-- Tâm Pin -->
          <div class="pin-core-badge">
            ${pin.icon || '🏛️'}
          </div>
        </div>
      `,
      iconSize: [72, 72],
      iconAnchor: [36, 36]
    });

    const m = L.marker([pin.lat, pin.lng], { icon: concentricIcon }).addTo(map);
    m.on("click", () => openLocationModal(pin));
    activePinMarkers.push(m);
  });
}

// ==========================================================================
// LOCATION POPUP MODAL & CHECK-IN
// ==========================================================================
function openLocationModal(pin) {
  selectedPinForModal = pin;
  const dist = getDistanceMeters(userCoords[0], userCoords[1], pin.lat, pin.lng);
  const distText = dist >= 1000 ? `${(dist / 1000).toFixed(1)} km` : `${dist} mét`;

  // Dynamic Header Style based on Rarity
  const heroHeader = document.getElementById("modal-hero-header");
  heroHeader.className = "modal-header-hero";
  if (pin.rarity === "legendary") heroHeader.classList.add("hero-legendary");
  else if (pin.rarity === "uncommon") heroHeader.classList.add("hero-uncommon");
  else if (pin.rarity === "event") heroHeader.classList.add("hero-event");

  // Category Tag Text & Icon
  const categoryNames = {
    landmark: "🏛️ ĐỊA DANH DI TÍCH",
    battlefield: "⚔️ TRẬN ĐÁNH HÀO HÙNG",
    living_history: "🎙️ NHÂN CHỨNG SỐNG / KÝ ỨC",
    story: "📖 MẢNH KÝ ỨC & SỰ KIỆN",
    culture: "🎨 VĂN HÓA & LÀNG NGHỀ"
  };
  document.getElementById("modal-category-tag").innerText = categoryNames[pin.category] || "📍 DI TÍCH LỊCH SỬ";

  document.getElementById("modal-title").innerText = `${pin.icon || '📍'} ${pin.name}`;
  document.getElementById("modal-desc").innerText = pin.desc;
  document.getElementById("modal-distance").innerText = `Cách bạn: ${distText}`;
  document.getElementById("modal-checkin-radius").innerText = `${pin.interaction_radius || 50} mét`;
  
  // Rarity Tag Styling
  const rarityMap = {
    common: { label: "Thường (Common)", bg: "var(--neutral-200)", color: "var(--text-primary)" },
    uncommon: { label: "Hiếm (Uncommon)", bg: "#A8D1E2", color: "#152B34" },
    legendary: { label: "Huyền thoại (Legendary)", bg: "var(--accent-gold)", color: "var(--primary-dark)" },
    event: { label: "Sự kiện Mùa (Limited)", bg: "#E74C3C", color: "#FFF" }
  };
  const rMeta = rarityMap[pin.rarity] || rarityMap.common;
  const rarityBadge = document.getElementById("modal-rarity");
  rarityBadge.innerText = rMeta.label;
  rarityBadge.style.backgroundColor = rMeta.bg;
  rarityBadge.style.color = rMeta.color;

  // Pin ID label
  const idEl = document.getElementById("modal-pin-id-text");
  if (idEl) idEl.innerText = `ID: ${pin.id}`;

  // Pin Image Preview (supports online URLs, local media/ path, and Data URLs)
  const pinImgEl = document.getElementById("modal-pin-image");
  if (pin.image_url && pin.image_url.trim().length > 0) {
    pinImgEl.src = pin.image_url.trim();
    pinImgEl.style.display = "block";
  } else {
    pinImgEl.style.display = "none";
  }

  // Living history & media player (video/audio/youtube/local files)
  const livingBox = document.getElementById("modal-living-history");
  const mediaContainer = document.getElementById("modal-media-player-box");
  const mediaTitle = document.getElementById("modal-media-header-title");
  const mediaDesc = document.getElementById("modal-media-header-desc");

  if (pin.media_url && pin.media_url.trim().length > 0) {
    livingBox.style.display = "block";
    const mUrl = pin.media_url.trim();
    const mLower = mUrl.toLowerCase();

    if (mLower.endsWith(".mp4") || mLower.endsWith(".webm") || mLower.endsWith(".mov") || mLower.endsWith(".mkv")) {
      if (mediaTitle) mediaTitle.innerText = "🎬 Thước phim Tư liệu Lịch sử:";
      if (mediaDesc) mediaDesc.innerText = "Video tư liệu thực địa được phát trực tiếp.";
      if (mediaContainer) {
        mediaContainer.innerHTML = `
          <video controls style="width:100%; max-height:220px; border-radius:6px; background:#000; box-shadow:0 2px 8px rgba(0,0,0,0.2);">
            <source src="${mUrl}">
            Trình duyệt không hỗ trợ xem video trực tiếp.
          </video>
        `;
      }
    } else if (mLower.endsWith(".mp3") || mLower.endsWith(".wav") || mLower.endsWith(".ogg") || mLower.endsWith(".m4a")) {
      if (mediaTitle) mediaTitle.innerText = "🎙️ Lời kể Nhân chứng & Âm thanh Lịch sử:";
      if (mediaDesc) mediaDesc.innerText = "Ghi âm hồi ức hoặc tư liệu podcast lịch sử.";
      if (mediaContainer) {
        mediaContainer.innerHTML = `
          <audio controls style="width:100%; margin-top:6px;">
            <source src="${mUrl}">
            Trình duyệt không hỗ trợ nghe audio.
          </audio>
        `;
      }
    } else if (mLower.includes("youtube.com") || mLower.includes("youtu.be")) {
      if (mediaTitle) mediaTitle.innerText = "📺 Phim Tư liệu YouTube:";
      if (mediaDesc) mediaDesc.innerText = "Video thuyết minh lịch sử được nhúng trực tiếp.";
      let videoId = "";
      if (mUrl.includes("v=")) {
        videoId = mUrl.split("v=")[1].split("&")[0];
      } else if (mUrl.includes("youtu.be/")) {
        videoId = mUrl.split("youtu.be/")[1].split("?")[0];
      }
      if (videoId && mediaContainer) {
        mediaContainer.innerHTML = `
          <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:6px;">
            <iframe src="https://www.youtube.com/embed/${videoId}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
          </div>
        `;
      } else if (mediaContainer) {
        mediaContainer.innerHTML = `<a href="${mUrl}" target="_blank" class="btn-secondary" style="display:block; text-align:center; padding:8px;">🔗 Mở liên kết tư liệu ngoài</a>`;
      }
    } else {
      if (mediaContainer) {
        mediaContainer.innerHTML = `<a href="${mUrl}" target="_blank" class="btn-secondary" style="display:block; text-align:center; padding:8px;">🔗 Mở xem tư liệu lịch sử đính kèm</a>`;
      }
    }
  } else if (pin.hasLivingHistory) {
    livingBox.style.display = "block";
    if (mediaTitle) mediaTitle.innerText = "🎙️ Thước phim Ký ức / Lời kể Nhân chứng:";
    if (mediaDesc) mediaDesc.innerText = "Tư liệu sống ghi lại trực tiếp tại không gian sự kiện lịch sử này.";
    if (mediaContainer) {
      mediaContainer.innerHTML = `<button class="btn-secondary" style="width:100%; padding:8px; font-size:0.85rem;" onclick="simulatePlayAudio()">▶️ Lắng nghe tư liệu ký ức (30s)</button>`;
    }
  } else {
    livingBox.style.display = "none";
  }

  // Check if within radius
  const btn = document.getElementById("btn-modal-checkin");
  const label = document.getElementById("btn-checkin-label");
  const canCheckIn = dist <= (pin.interaction_radius || 50);

  if (canCheckIn) {
    btn.className = "btn-checkin-action ready";
    label.innerText = "Check-in Khám Phá & Mở Khóa Giai Thoại Ngay!";
  } else {
    btn.className = "btn-checkin-action distance-out";
    label.innerText = `Check-in (Khoảng cách còn ${distText})`;
  }

  document.getElementById("location-modal").classList.add("active");
}

function closeModal() {
  document.getElementById("location-modal").classList.remove("active");
  selectedPinForModal = null;
}

function performCheckIn() {
  if (!selectedPinForModal) return;
  const pin = selectedPinForModal;

  // Add EXP
  appState.profile.exp += 100;
  if (appState.profile.exp >= appState.profile.maxExp) {
    appState.profile.level += 1;
    appState.profile.exp -= appState.profile.maxExp;
    appState.profile.maxExp += 250;
    showToast(`🌟 CHÚC MỪNG: Bạn đã thăng cấp Nhà Thám Hiểm Lên Cấp ${appState.profile.level}!`);
  }

  // Record checked-in pin in profile
  if (!appState.profile.checked_in_pins) appState.profile.checked_in_pins = [];
  if (!appState.profile.checked_in_pins.includes(pin.id)) {
    appState.profile.checked_in_pins.push(pin.id);
  }

  // Unlock linked story
  let unlockedStoryName = "";
  appState.stories.forEach(st => {
    if (st.required_pin_id === pin.id && st.is_locked) {
      st.is_locked = false;
      unlockedStoryName = st.name;
    }
  });

  // Also discover linked figures if related to this pin
  if (!appState.profile.discovered_figures) appState.profile.discovered_figures = [];
  (appState.figures || []).forEach(f => {
    if (f.related_pins && f.related_pins.includes(pin.id)) {
      if (!appState.profile.discovered_figures.includes(f.id)) {
        appState.profile.discovered_figures.push(f.id);
      }
    }
  });

  // Log action
  const timeStr = new Date().toLocaleDateString("vi-VN");
  if (!appState.profile.logs) appState.profile.logs = [];
  appState.profile.logs.unshift(`${timeStr}: Check-in tại '${pin.name}' (+100 EXP)`);
  if (unlockedStoryName) {
    appState.profile.logs.unshift(`${timeStr}: Mở khóa giai thoại '${unlockedStoryName}'!`);
  }

  // Evaluate and unlock badges based on rule engine
  const newlyUnlockedBadges = evaluateAndUnlockBadges(pin);
  let unlockedBadgeName = "";
  if (newlyUnlockedBadges && newlyUnlockedBadges.length > 0) {
    unlockedBadgeName = newlyUnlockedBadges.map(b => b.name).join(", ");
  }

  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  closeModal();

  // KÍCH HOẠT ANIMATION CHÚC MỪNG MỞ KHÓA HOÀNH TRÁNG (CELEBRATION BURST)
  triggerUnlockCelebration(pin, unlockedStoryName, unlockedBadgeName);
}

function triggerUnlockCelebration(pin, storyName, badgeName) {
  document.getElementById("celebration-pin-name").innerText = `${pin.icon || '📍'} ${pin.name}`;
  
  const storyRow = document.getElementById("celebration-story-row");
  if (storyName) {
    storyRow.style.display = "flex";
    document.getElementById("celebration-story-text").innerText = `Mở khóa giai thoại: "${storyName}"!`;
  } else {
    storyRow.style.display = "none";
  }

  const badgeRow = document.getElementById("celebration-badge-row");
  if (badgeName) {
    badgeRow.style.display = "flex";
    document.getElementById("celebration-badge-text").innerText = `Nhận Huy hiệu Di sản: "${badgeName}"!`;
  } else {
    badgeRow.style.display = "none";
  }

  document.getElementById("celebration-modal").classList.add("active");
}

function closeCelebrationModal() {
  document.getElementById("celebration-modal").classList.remove("active");
}

function simulatePlayAudio() {
  alert("🎙️ [Đang phát Audio]: 'Năm ấy, tiếng súng nổ rền vang, đồng đội tôi xông lên cửa hầm...' - Lời kể chân thực của cựu chiến binh ghi lại tại hiện trường.");
}

// Walk simulation: Di chuyển người chơi đến sát Pin đầu tiên
function simulateWalk() {
  if (appState.pins.length === 0) return;
  const target = appState.pins[0];
  userCoords = [target.lat + 0.00015, target.lng + 0.00015];
  updatePlayerRadarMarker();
  map.setView(userCoords, 16);
  showToast(`🚶 Bạn đã di chuyển đến gần: ${target.name} (Cách ~15m). Bấm vào Pin để check-in!`);
}

// GPS Thực tế từ thiết bị
function toggleRealGPS() {
  if ("geolocation" in navigator) {
    showToast("🔍 Đang dò tìm tín hiệu vệ tinh GPS thực tế...");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userCoords = [pos.coords.latitude, pos.coords.longitude];
        updatePlayerRadarMarker();
        map.setView(userCoords, 16);
        showToast("📍 Đã định vị thành công vị trí GPS thực của bạn!");
      },
      (err) => {
        showToast("⚠️ Không lấy được GPS (trình duyệt chặn hoặc chưa cấp quyền). Đang dùng vị trí mặc định.");
      },
      { enableHighAccuracy: true }
    );
  } else {
    showToast("Thiết bị không hỗ trợ Geolocation.");
  }
}

// ==========================================================================
// RENDERING VIEWS (FIGURES, BADGES, PROFILE, SELECTORS)
// ==========================================================================
function refreshAllViews() {
  renderPinsOnMap();
  renderFiguresSplitView();
  renderBadgesGrid();
  renderProfileStats();
  populateDropdownSelectors();
  renderManageTables();
}

function renderFiguresSplitView() {
  const listContainer = document.getElementById("figures-list-nav");
  const detailContainer = document.getElementById("figures-detail-content");
  const chipsContainer = document.getElementById("figures-filter-chips");
  if (!listContainer || !detailContainer) return;

  // 1. Render Dynasty Filter Chips
  if (chipsContainer) {
    const dynasties = Array.from(new Set(appState.figures.map(f => f.dynasty).filter(Boolean)));
    let chipsHtml = `<span class="filter-chip ${currentFigureFilter === 'all' ? 'active' : ''}" onclick="filterFiguresByDynasty('all', this)">Tất cả (${appState.figures.length})</span>`;
    dynasties.forEach(dyn => {
      const count = appState.figures.filter(f => f.dynasty === dyn).length;
      chipsHtml += `<span class="filter-chip ${currentFigureFilter === dyn ? 'active' : ''}" onclick="filterFiguresByDynasty('${dyn}', this)">${dyn} (${count})</span>`;
    });
    chipsContainer.innerHTML = chipsHtml;
  }

  // 2. Filter Figures
  let filtered = appState.figures;
  if (currentFigureFilter !== 'all') {
    filtered = filtered.filter(f => f.dynasty === currentFigureFilter);
  }
  if (currentFigureSearch) {
    filtered = filtered.filter(f => 
      (f.name && f.name.toLowerCase().includes(currentFigureSearch)) ||
      (f.dynasty && f.dynasty.toLowerCase().includes(currentFigureSearch)) ||
      (f.role && f.role.toLowerCase().includes(currentFigureSearch))
    );
  }

  // 3. Render Master Sidebar List
  if (filtered.length === 0) {
    listContainer.innerHTML = `<div style="padding:24px 12px; text-align:center; color:var(--text-muted); font-size:0.88rem;">Không tìm thấy danh nhân phù hợp.</div>`;
  } else {
    // If no figure selected or current selected figure not in list, pick the first
    if (!selectedFigureId || !filtered.some(f => f.id === selectedFigureId)) {
      selectedFigureId = filtered[0].id;
    }

    let listHtml = "";
    filtered.forEach(fig => {
      const isSelected = fig.id === selectedFigureId;
      const figureStories = appState.stories.filter(s => s.figure_id === fig.id);
      const unlockedCount = figureStories.filter(s => !s.is_locked).length;

      let avatarContent = fig.avatar || '⚔️';
      if (fig.image_url && fig.image_url.trim().length > 0) {
        avatarContent = `<img src="${fig.image_url}" alt="${fig.name}">`;
      }

      listHtml += `
        <div class="figure-nav-item ${isSelected ? 'active' : ''}" onclick="selectFigure('${fig.id}')">
          <div class="figure-nav-avatar">${avatarContent}</div>
          <div class="figure-nav-info">
            <div class="figure-nav-name">${fig.name}</div>
            <div class="figure-nav-meta">${fig.dynasty || 'Cổ đại'} ${fig.years ? `(${fig.years})` : ''}</div>
          </div>
          <div class="figure-nav-badge-pill">
            ${figureStories.length > 0 ? `${unlockedCount}/${figureStories.length} 📖` : '0 📖'}
          </div>
        </div>
      `;
    });
    listContainer.innerHTML = listHtml;
  }

  // 4. Render Detail Showcase Pane
  renderFigureDetailPane(selectedFigureId);
}

function renderFigureDetailPane(figId) {
  const detailContainer = document.getElementById("figures-detail-content");
  if (!detailContainer) return;

  try {
    const fig = appState.figures.find(f => f.id === figId) || appState.figures[0];
    if (!fig) {
      detailContainer.innerHTML = `
        <div style="text-align:center; padding:60px 20px; color:var(--text-muted);">
          <div style="font-size:3rem; margin-bottom:12px;">📜</div>
          <h3>Chưa có Danh nhân nào</h3>
          <p style="margin-top:6px; font-size:0.9rem;">Hãy bấm nút '+ Thêm Danh nhân mới' để bắt đầu!</p>
        </div>
      `;
      return;
    }

    // Keep selectedFigureId in sync
    selectedFigureId = fig.id;

    // Gather stories
    const figureStories = (appState.stories || []).filter(s => s && s.figure_id === fig.id);

    // Gather linked pins: from fig.related_pins + pins referenced in stories
    const linkedPinIds = new Set(fig.related_pins || []);
    figureStories.forEach(s => {
      if (s && s.required_pin_id) linkedPinIds.add(s.required_pin_id);
    });
    const linkedPins = (appState.pins || []).filter(p => p && linkedPinIds.has(p.id));

    // Avatar markup
    let avatarMarkup = fig.avatar || '⚔️';
    if (fig.image_url && fig.image_url.trim().length > 0) {
      avatarMarkup = `<img src="${fig.image_url}" alt="${fig.name}">`;
    }

    // Quote markup
    let quoteMarkup = "";
    if (fig.quote && fig.quote.trim().length > 0) {
      quoteMarkup = `
        <div class="figure-quote-box">
          <div class="figure-quote-text">"${fig.quote.trim()}"</div>
        </div>
      `;
    }

    // Linked Pins Markup
    let linkedPinsMarkup = "";
    if (linkedPins.length > 0) {
      linkedPinsMarkup = `
        <div class="figure-section">
          <div class="figure-section-title">
            <span>📍 Địa Danh & Chiến Trường Gắn Liền (${linkedPins.length})</span>
          </div>
          <div class="figure-linked-pins">
            ${linkedPins.map(pin => {
              let distText = "";
              try {
                const pLat = parseFloat(pin.lat);
                const pLng = parseFloat(pin.lng);
                if (!isNaN(pLat) && !isNaN(pLng) && userCoords) {
                  const dist = getDistanceMeters(userCoords[0], userCoords[1], pLat, pLng);
                  distText = dist >= 1000 ? `${(dist / 1000).toFixed(1)} km` : `${dist} m`;
                }
              } catch (e) {}
              return `
                <div class="figure-pin-card" onclick="viewPinOnMap('${pin.id}')" title="Bấm để mở bản đồ và check-in">
                  <span style="font-size:1.5rem;">${pin.icon || '📍'}</span>
                  <div>
                    <div style="font-weight:700; font-size:0.92rem; color:var(--primary-dark);">${pin.name}</div>
                    <div style="font-size:0.78rem; color:var(--text-muted);">${distText ? `Cách bạn ~${distText} • ` : ''}Bấm để xem trên Radar</div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }

    // Stories Markup
    let storiesMarkup = "";
    if (figureStories.length > 0) {
      storiesMarkup = `
        <div class="figure-section">
          <div class="figure-section-title" style="justify-content:space-between;">
            <span>📖 Kho Tàng Giai Thoại & Cốt Truyện (${figureStories.length})</span>
            <button class="btn-primary" style="font-size:0.82rem; padding:5px 12px;" onclick="openQuickStoryModal('${fig.id}')">+ Thêm Giai Thoại Mới</button>
          </div>
          <div class="figure-stories-container">
            ${figureStories.map(st => {
              const reqPin = (appState.pins || []).find(p => p && p.id === st.required_pin_id);
              const pinName = reqPin ? reqPin.name : "Địa danh chỉ dẫn";
              const hasCover = st.background_image && st.background_image.trim().length > 0;

              if (st.is_locked) {
                return `
                  <div class="story-card-rich locked">
                    ${hasCover ? `
                      <div class="story-card-cover locked" style="background-image: url('${st.background_image.trim()}');">
                        <span class="story-card-cover-badge locked">🔒 Cần Check-in để mở khóa</span>
                      </div>
                    ` : ''}
                    <div class="story-card-header">
                      <div class="story-card-title">🔒 ${st.name}</div>
                      ${!hasCover ? `<span class="story-card-badge locked">Đang khóa</span>` : ''}
                    </div>
                    <div class="story-card-body">
                      <p style="color:var(--text-muted); font-size:0.85rem; font-style:italic;">
                        Nội dung giai thoại đang được niêm phong trong dòng lịch sử.
                      </p>
                      <div style="margin-top:6px; color:#d35400; font-size:0.85rem; font-weight:600;">
                        🧭 Chỉ dẫn mở khóa: Hãy đến và check-in thực tế tại [${pinName}]!
                      </div>
                    </div>
                    <div class="story-card-actions">
                      ${reqPin ? `<button class="btn-secondary" style="font-size:0.8rem; padding:4px 10px;" onclick="viewPinOnMap('${reqPin.id}')">📍 Xem Ghim '${pinName}'</button>` : ''}
                    </div>
                  </div>
                `;
              } else {
                const preview = st.content ? (st.content.substring(0, 160) + '...') : '';
                return `
                  <div class="story-card-rich unlocked">
                    ${hasCover ? `
                      <div class="story-card-cover" style="background-image: url('${st.background_image.trim()}');">
                        <span class="story-card-cover-badge unlocked">✓ Đã mở khóa</span>
                      </div>
                    ` : ''}
                    <div class="story-card-header">
                      <div class="story-card-title">🔓 ${st.name}</div>
                      ${!hasCover ? `<span class="story-card-badge unlocked">✓ Đã mở khóa</span>` : ''}
                    </div>
                    <div class="story-card-body">
                      <p>${preview}</p>
                    </div>
                    <div class="story-card-actions">
                      <button class="btn-primary" style="font-size:0.82rem; padding:6px 14px;" onclick="openStoryModal('${st.id}')">📖 Đọc Toàn Văn Giai Thoại</button>
                    </div>
                  </div>
                `;
              }
            }).join("")}
          </div>
        </div>
      `;
    } else {
      storiesMarkup = `
        <div class="figure-section">
          <div class="figure-section-title" style="justify-content:space-between;">
            <span>📖 Kho Tàng Giai Thoại & Cốt Truyện (0)</span>
            <button class="btn-primary" style="font-size:0.82rem; padding:5px 12px;" onclick="openQuickStoryModal('${fig.id}')">+ Thêm Giai Thoại Đầu Tiên</button>
          </div>
          <p style="font-size:0.88rem; color:var(--text-muted); font-style:italic;">Chưa có giai thoại nào liên kết với danh nhân này. Bạn có thể bấm nút trên để thêm mới!</p>
        </div>
      `;
    }

    // Hero Header markup (Supports atmospheric background cover or clean card)
    const hasHeroBg = fig.background_image && fig.background_image.trim().length > 0;
    const heroHeaderMarkup = hasHeroBg ? `
      <div class="figure-hero-backdrop" style="background-image: url('${fig.background_image.trim()}');">
        <div class="hero-backdrop-actions">
          <label class="btn-hero-bg-action" title="Bấm để chọn ảnh nền bối cảnh mới từ máy tính">
            📷 Đổi ảnh nền
            <input type="file" accept="image/*" onchange="changeFigureBackgroundDirect(event, '${fig.id}')" style="display:none;">
          </label>
          <button type="button" class="btn-hero-bg-action-remove" title="Xóa ảnh nền này" onclick="removeFigureBackgroundDirect('${fig.id}')">
            ✕ Xóa nền
          </button>
        </div>
        <div class="figure-hero-backdrop-content">
          <div class="figure-detail-avatar-box">
            ${avatarMarkup}
          </div>
          <div class="figure-detail-hero-info">
            <h2 class="figure-detail-title">${fig.name}</h2>
            <div class="figure-detail-pills">
              <span class="figure-detail-pill pill-dynasty">🏛️ ${fig.dynasty || 'Lịch sử Việt Nam'}</span>
              ${fig.years ? `<span class="figure-detail-pill pill-dynasty">⏳ Niên đại: ${fig.years}</span>` : ''}
              ${fig.role ? `<span class="figure-detail-pill pill-role">🎖️ ${fig.role}</span>` : ''}
            </div>
            ${quoteMarkup}
          </div>
        </div>
      </div>
    ` : `
      <div class="figure-detail-hero" style="position:relative;">
        <div class="hero-backdrop-actions" style="top:0; right:0;">
          <label class="btn-hero-bg-action" style="background:var(--bg-secondary); color:var(--primary-dark); border-color:var(--accent-gold);" title="Bấm để thêm ảnh nền bối cảnh hào hùng cho danh nhân này">
            🖼️ + Thêm ảnh nền bối cảnh
            <input type="file" accept="image/*" onchange="changeFigureBackgroundDirect(event, '${fig.id}')" style="display:none;">
          </label>
        </div>
        <div class="figure-detail-avatar-box">
          ${avatarMarkup}
        </div>
        <div class="figure-detail-hero-info">
          <h2 class="figure-detail-title">${fig.name}</h2>
          <div class="figure-detail-pills">
            <span class="figure-detail-pill pill-dynasty">🏛️ ${fig.dynasty || 'Lịch sử Việt Nam'}</span>
            ${fig.years ? `<span class="figure-detail-pill pill-dynasty">⏳ Niên đại: ${fig.years}</span>` : ''}
            ${fig.role ? `<span class="figure-detail-pill pill-role">🎖️ ${fig.role}</span>` : ''}
          </div>
          ${quoteMarkup}
        </div>
      </div>
    `;

    // Put together Detail Pane
    detailContainer.innerHTML = `
      <!-- Hero Header -->
      ${heroHeaderMarkup}

      <!-- Section 1: Tiểu sử hào kiệt -->
      <div class="figure-section">
        <div class="figure-section-title">
          <span>📜 Cuộc Đời & Sự Nghiệp Hào Kiệt</span>
        </div>
        <div class="figure-bio-text">
          ${fig.bio || 'Chưa có thông tin tiểu sử.'}
        </div>
      </div>

      <!-- Section 2: Địa danh gắn liền -->
      ${linkedPinsMarkup}

      <!-- Section 3: Giai thoại mở khóa -->
      ${storiesMarkup}

      <!-- Actions Footer -->
      <div style="margin-top:20px; padding-top:16px; border-top:1px dashed var(--neutral-300); display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; color:var(--text-muted);">Mã danh nhân: ${fig.id}</span>
        <button class="btn-secondary" style="color:#e53e3e; border-color:#feb2b2; font-size:0.82rem; padding:5px 12px; cursor:pointer;" onclick="deleteFigureById('${fig.id}')">🗑️ Xóa Danh Nhân Này</button>
      </div>
    `;
  } catch (err) {
    console.error("Lỗi khi render chi tiết danh nhân:", err);
    detailContainer.innerHTML = `
      <div style="padding:24px; color:#c53030; background:#fff5f5; border:1px solid #feb2b2; border-radius:8px;">
        <h4>⚠️ Đã xảy ra lỗi khi tải hồ sơ danh nhân</h4>
        <p style="margin-top:6px; font-size:0.85rem; color:#742a2a;">${err.message}</p>
      </div>
    `;
  }
}

function selectFigure(id) {
  selectedFigureId = id;
  if (!appState.profile.discovered_figures) {
    appState.profile.discovered_figures = [];
  }
  if (!appState.profile.discovered_figures.includes(id)) {
    appState.profile.discovered_figures.push(id);
    const newBadges = evaluateAndUnlockBadges();
    if (newBadges && newBadges.length > 0) {
      showToast(`🏅 Chúc mừng! Bạn vừa mở khóa huy hiệu: ${newBadges.map(b => b.name).join(', ')}`);
    }
    saveState();
    saveToServerDataJSON();
  }
  renderFiguresSplitView();
}

async function changeFigureBackgroundDirect(event, figId) {
  const file = event.target.files[0];
  if (!file) return;

  const fig = appState.figures.find(f => f.id === figId);
  if (!fig) return;

  const reader = new FileReader();
  reader.onload = async function(e) {
    const base64 = e.target.result;
    let finalUrl = base64;

    try {
      const res = await fetch("/api/upload_file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, base64: base64 })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.url) {
          finalUrl = json.url;
        }
      }
    } catch (err) {}

    fig.background_image = finalUrl;
    saveState();
    saveToServerDataJSON();
    renderFigureDetailPane(figId);
    showToast(`✓ Đã cập nhật ảnh nền bối cảnh cho "${fig.name}"!`);
  };
  reader.readAsDataURL(file);
}

function removeFigureBackgroundDirect(figId) {
  const fig = appState.figures.find(f => f.id === figId);
  if (!fig) return;
  if (!confirm(`Bạn có chắc muốn xóa ảnh nền bối cảnh của "${fig.name}"?`)) return;

  fig.background_image = "";
  saveState();
  saveToServerDataJSON();
  renderFigureDetailPane(figId);
  showToast(`✓ Đã xóa ảnh nền bối cảnh của "${fig.name}".`);
}

function handleFigureSearch(query) {
  currentFigureSearch = query.trim().toLowerCase();
  renderFiguresSplitView();
}

function filterFiguresByDynasty(dynasty, el) {
  currentFigureFilter = dynasty;
  renderFiguresSplitView();
}

function viewPinOnMap(pinId) {
  const pin = appState.pins.find(p => p.id === pinId);
  if (!pin) return;
  document.querySelector('[data-tab="tab-map"]').click();
  map.setView([pin.lat, pin.lng], 15);
  setTimeout(() => {
    openPinDetailsModal(pin);
  }, 350);
}

function addStoryForCurrentFigure(figId) {
  switchToInputTab('subtab-stories');
  setTimeout(() => {
    const sel = document.getElementById("story-input-figure");
    if (sel) sel.value = figId;
  }, 100);
}

// ==========================================================================
// BADGE LOGIC, RULE ENGINE & LIVE PROGRESS CALCULATION
// ==========================================================================

function getDiscoveredFigures() {
  const set = new Set();
  // 1. Figures in profile.discovered_figures
  if (appState.profile && Array.isArray(appState.profile.discovered_figures)) {
    appState.profile.discovered_figures.forEach(id => set.add(id));
  }
  // 2. Figures with at least 1 unlocked story
  (appState.stories || []).forEach(st => {
    if (!st.is_locked && st.figure_id) {
      set.add(st.figure_id);
    }
  });
  // 3. Figures linked to any checked-in pin
  const checkedPins = (appState.profile && appState.profile.checked_in_pins) || [];
  (appState.figures || []).forEach(fig => {
    if (fig.related_pins && fig.related_pins.some(pid => checkedPins.includes(pid))) {
      set.add(fig.id);
    }
  });
  return Array.from(set);
}

function getLivingHistoryMet() {
  const checkedPins = (appState.profile && appState.profile.checked_in_pins) || [];
  return (appState.pins || []).filter(p => 
    checkedPins.includes(p.id) && (p.category === 'living_history' || p.hasLivingHistory === true)
  );
}

// ==========================================================================
// BADGE LOGIC, MULTI-CONDITION RULE ENGINE & LIVE PROGRESS CALCULATION
// ==========================================================================

function getDiscoveredFigures() {
  const set = new Set();
  // 1. Figures in profile.discovered_figures
  if (appState.profile && Array.isArray(appState.profile.discovered_figures)) {
    appState.profile.discovered_figures.forEach(id => set.add(id));
  }
  // 2. Figures with at least 1 unlocked story
  (appState.stories || []).forEach(st => {
    if (!st.is_locked && st.figure_id) {
      set.add(st.figure_id);
    }
  });
  // 3. Figures linked to any checked-in pin
  const checkedPins = (appState.profile && appState.profile.checked_in_pins) || [];
  (appState.figures || []).forEach(fig => {
    if (fig.related_pins && fig.related_pins.some(pid => checkedPins.includes(pid))) {
      set.add(fig.id);
    }
  });
  return Array.from(set);
}

function getLivingHistoryMet() {
  const checkedPins = (appState.profile && appState.profile.checked_in_pins) || [];
  return (appState.pins || []).filter(p => 
    checkedPins.includes(p.id) && (p.category === 'living_history' || p.hasLivingHistory === true)
  );
}

function getNormalizedBadgeConditions(badge) {
  if (Array.isArray(badge.conditions) && badge.conditions.length > 0) {
    return badge.conditions;
  }
  // Backwards compatibility for older single criteria
  if (badge.criteria_type) {
    const type = badge.criteria_type;
    if (type === 'specific_pin') {
      return [{
        id: 'c-legacy',
        type: 'specific_pins',
        target_pins: [badge.criteria_target],
        min_count: 1,
        desc: badge.criteria || 'Check-in tại địa danh chỉ định'
      }];
    } else if (type === 'figures_count') {
      return [{
        id: 'c-legacy',
        type: 'figures_count',
        target_num: parseInt(badge.criteria_target) || 1,
        desc: badge.criteria || `Mở khóa ${badge.criteria_target} Danh nhân lịch sử`
      }];
    } else if (type === 'people_count') {
      return [{
        id: 'c-legacy',
        type: 'people_count',
        target_num: parseInt(badge.criteria_target) || 1,
        desc: badge.criteria || `Gặp gỡ ${badge.criteria_target} Nhân chứng lịch sử`
      }];
    } else if (type === 'pins_count') {
      return [{
        id: 'c-legacy',
        type: 'pins_count',
        target_num: parseInt(badge.criteria_target) || 1,
        desc: badge.criteria || `Check-in ${badge.criteria_target} Địa danh di tích`
      }];
    } else if (type === 'stories_count') {
      return [{
        id: 'c-legacy',
        type: 'stories_count',
        target_num: parseInt(badge.criteria_target) || 1,
        desc: badge.criteria || `Mở khóa ${badge.criteria_target} Giai thoại`
      }];
    }
  }
  return [{
    id: 'c-custom',
    type: 'custom',
    desc: badge.criteria || 'Mục tiêu tự do'
  }];
}

function evaluateSingleCondition(cond, badgeIsUnlocked = false) {
  const checkedPins = (appState.profile && appState.profile.checked_in_pins) || [];
  const discoveredFigs = getDiscoveredFigures();
  const livingHistoryMet = getLivingHistoryMet();
  const unlockedStories = (appState.stories || []).filter(s => !s.is_locked);

  const type = cond.type || 'custom';
  let isMet = false;
  let current = 0;
  let max = 1;
  let unit = "";
  let items = []; // For detailed checklist pills in the modal

  switch (type) {
    case 'specific_figures': {
      const targets = Array.isArray(cond.target_figures) ? cond.target_figures : [];
      items = targets.map(figId => {
        const fig = (appState.figures || []).find(f => f.id === figId);
        const done = discoveredFigs.includes(figId);
        return {
          id: figId,
          type: 'figure',
          name: fig ? fig.name : figId,
          icon: (fig && fig.avatar) || '⚔️',
          isCompleted: done
        };
      });
      current = items.filter(it => it.isCompleted).length;
      max = Math.max(1, parseInt(cond.min_count) || targets.length || 1);
      unit = currentLang === 'en' ? 'heroes' : 'danh nhân';
      isMet = current >= max;
      break;
    }
    case 'figures_count': {
      max = Math.max(1, parseInt(cond.target_num) || 1);
      current = Math.min(discoveredFigs.length, max);
      unit = currentLang === 'en' ? 'heroes' : 'danh nhân';
      isMet = current >= max;
      break;
    }
    case 'specific_pins': {
      const targets = Array.isArray(cond.target_pins) ? cond.target_pins : (cond.target_pin ? [cond.target_pin] : []);
      items = targets.map(pinId => {
        const pin = (appState.pins || []).find(p => p.id === pinId);
        const done = checkedPins.includes(pinId);
        return {
          id: pinId,
          type: 'pin',
          name: pin ? pin.name : pinId,
          icon: (pin && pin.icon) || '📍',
          isCompleted: done
        };
      });
      current = items.filter(it => it.isCompleted).length;
      max = Math.max(1, parseInt(cond.min_count) || targets.length || 1);
      unit = currentLang === 'en' ? 'landmarks' : 'địa danh';
      isMet = current >= max;
      break;
    }
    case 'pins_count': {
      max = Math.max(1, parseInt(cond.target_num) || 1);
      current = Math.min(checkedPins.length, max);
      unit = currentLang === 'en' ? 'landmarks' : 'địa danh';
      isMet = current >= max;
      break;
    }
    case 'people_count': {
      max = Math.max(1, parseInt(cond.target_num) || 1);
      current = Math.min(livingHistoryMet.length, max);
      unit = currentLang === 'en' ? 'witnesses' : 'nhân chứng';
      isMet = current >= max;
      break;
    }
    case 'stories_count': {
      max = Math.max(1, parseInt(cond.target_num) || 1);
      current = Math.min(unlockedStories.length, max);
      unit = currentLang === 'en' ? 'tales' : 'giai thoại';
      isMet = current >= max;
      break;
    }
    default: {
      max = 1;
      current = badgeIsUnlocked ? 1 : 0;
      unit = currentLang === 'en' ? 'goal' : 'mục tiêu';
      isMet = !!badgeIsUnlocked;
      break;
    }
  }

  if (badgeIsUnlocked) {
    current = max;
    isMet = true;
    items.forEach(it => it.isCompleted = true);
  }

  const percent = Math.min(100, Math.round((current / max) * 100));
  return {
    isMet,
    current,
    max,
    unit,
    percent,
    desc: cond.desc || '',
    items
  };
}

function getBadgeProgress(badge) {
  const isUnlocked = !!badge.is_unlocked;
  const conditions = getNormalizedBadgeConditions(badge);
  
  const evalResults = conditions.map(c => evaluateSingleCondition(c, isUnlocked));
  const allMet = evalResults.length > 0 && evalResults.every(r => r.isMet);
  
  // Calculate average percentage
  let avgPercent = 0;
  if (isUnlocked || allMet) {
    avgPercent = 100;
  } else if (evalResults.length > 0) {
    const totalP = evalResults.reduce((sum, r) => sum + r.percent, 0);
    avgPercent = Math.round(totalP / evalResults.length);
  }

  const metCount = evalResults.filter(r => r.isMet).length;
  const totalCount = evalResults.length;

  return {
    isComplete: isUnlocked || allMet,
    percent: avgPercent,
    current: metCount,
    max: totalCount,
    unit: currentLang === 'en' ? 'conditions' : 'điều kiện',
    conditions: evalResults
  };
}

function evaluateAndUnlockBadges(triggerPin = null) {
  const newlyUnlocked = [];
  const timeStr = new Date().toLocaleDateString("vi-VN");

  if (!appState.badges) appState.badges = [];

  appState.badges.forEach(bg => {
    if (bg.is_unlocked) return;

    let meets = false;
    const prog = getBadgeProgress(bg);

    if (prog.isComplete) {
      meets = true;
    } else if (triggerPin && bg.criteria && bg.criteria.toLowerCase().includes(triggerPin.name.toLowerCase().substring(0, 8))) {
      meets = true;
    }

    if (meets) {
      bg.is_unlocked = true;
      bg.unlocked_date = timeStr;
      newlyUnlocked.push(bg);
      if (!appState.profile.logs) appState.profile.logs = [];
      const logMsg = currentLang === 'en' 
        ? `${timeStr}: 🏅 Unlocked new Badge: '${bg.name}'!`
        : `${timeStr}: 🏅 Mở khóa Huy hiệu mới: '${bg.name}'!`;
      appState.profile.logs.unshift(logMsg);
    }
  });

  return newlyUnlocked;
}

function openBadgeDetailsModal(badgeId) {
  const badge = (appState.badges || []).find(b => b.id === badgeId);
  if (!badge) return;

  const modal = document.getElementById("badge-details-modal");
  if (!modal) return;

  const isUnlocked = !!badge.is_unlocked;
  const prog = getBadgeProgress(badge);
  const tier = badge.tier || 'bronze';

  // Hero header theme
  const hero = document.getElementById("badge-modal-hero");
  if (hero) {
    hero.className = `badge-modal-hero tier-${tier}`;
  }
  document.getElementById("badge-modal-icon").innerText = badge.icon || '🎖️';
  document.getElementById("badge-modal-title").innerText = badge.name;
  document.getElementById("badge-modal-tier-tag").innerText = `${tier.toUpperCase()} TIER`;
  document.getElementById("badge-modal-tier-tag").className = `badge-tag badge-${tier}`;
  document.getElementById("badge-modal-category").innerText = badge.category || 'Di sản lịch sử';

  // Status banner
  const statusBanner = document.getElementById("badge-modal-status-banner");
  const statusText = document.getElementById("badge-modal-status-text");
  const statusProg = document.getElementById("badge-modal-status-progress");
  if (isUnlocked) {
    statusBanner.className = "badge-modal-status-banner unlocked";
    statusText.innerText = `✓ ${t('badge_unlocked_status')} (${badge.unlocked_date || 'Gần đây'})`;
    statusProg.innerText = currentLang === 'en' ? 'Completed 100%' : 'Hoàn thành 100%';
  } else {
    statusBanner.className = "badge-modal-status-banner locked";
    statusText.innerText = `🔒 ${t('badge_locked_status')} (${prog.percent}%)`;
    statusProg.innerText = currentLang === 'en' 
      ? `${prog.current}/${prog.max} conditions met`
      : `Đạt ${prog.current}/${prog.max} điều kiện`;
  }

  // Lore text
  const loreText = (currentLang === 'en' && badge.lore_en) ? badge.lore_en : (badge.lore || badge.criteria || 'Vinh danh người gìn giữ di sản dân tộc.');
  document.getElementById("badge-modal-lore-text").innerText = loreText;
  document.getElementById("badge-modal-lore-header").innerText = t('badge_lore_title');
  document.getElementById("badge-modal-cond-header").innerText = t('badge_cond_title');
  document.getElementById("badge-modal-overall-percent").innerText = `${prog.percent}%`;
  document.getElementById("badge-modal-progress-bar").style.width = `${prog.percent}%`;

  // Checklist of conditions
  const checklistContainer = document.getElementById("badge-modal-cond-checklist");
  checklistContainer.innerHTML = "";

  prog.conditions.forEach((cond, idx) => {
    const card = document.createElement("div");
    card.className = `badge-cond-item-card ${cond.isMet ? 'completed' : ''}`;
    
    let subitemsHtml = "";
    if (cond.items && cond.items.length > 0) {
      subitemsHtml = `
        <div class="badge-subitem-pills">
          ${cond.items.map(it => `
            <span class="badge-subitem-pill ${it.isCompleted ? 'done' : 'pending'}">
              ${it.isCompleted ? '✓' : '⏳'} ${it.icon} ${it.name}
            </span>
          `).join("")}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="badge-cond-item-header">
        <span style="font-weight:600; color:var(--primary-dark);">
          ${cond.isMet ? '✅' : '🎯'} ${cond.desc || `${t('badge_cond_title')} #${idx + 1}`}
        </span>
        <span style="font-size:0.75rem; font-weight:700; color:${cond.isMet ? '#27ae60' : 'var(--accent-camel)'};">
          ${cond.isMet ? t('badge_cond_met') : `${cond.current}/${cond.max} ${cond.unit} (${cond.percent}%)`}
        </span>
      </div>
      <div class="badge-progress-wrap" style="height:6px; margin:2px 0;">
        <div class="badge-progress-bar" style="width:${cond.percent}%;"></div>
      </div>
      ${subitemsHtml}
    `;
    checklistContainer.appendChild(card);
  });

  // Action buttons
  const actionContainer = document.getElementById("badge-modal-action-buttons");
  actionContainer.innerHTML = "";
  
  // If has pin targets, offer shortcut to radar map
  const allPinItems = prog.conditions.flatMap(c => (c.items || []).filter(it => it.type === 'pin'));
  if (allPinItems.length > 0) {
    const btnMap = document.createElement("button");
    btnMap.className = "btn-secondary";
    btnMap.style.fontSize = "0.82rem";
    btnMap.innerHTML = `🧭 ${t('badge_btn_map')}`;
    btnMap.onclick = () => {
      closeBadgeDetailsModal();
      document.querySelector('[data-tab="tab-map"]').click();
      const firstPin = (appState.pins || []).find(p => p.id === allPinItems[0].id);
      if (firstPin && map) {
        map.setView([firstPin.lat, firstPin.lng], 14);
      }
    };
    actionContainer.appendChild(btnMap);
  }

  // If has figure targets, offer shortcut to figures directory
  const allFigItems = prog.conditions.flatMap(c => (c.items || []).filter(it => it.type === 'figure'));
  if (allFigItems.length > 0) {
    const btnFig = document.createElement("button");
    btnFig.className = "btn-secondary";
    btnFig.style.fontSize = "0.82rem";
    btnFig.innerHTML = `⚔️ ${t('badge_btn_figure')}`;
    btnFig.onclick = () => {
      closeBadgeDetailsModal();
      document.querySelector('[data-tab="tab-figures"]').click();
      selectFigure(allFigItems[0].id);
    };
    actionContainer.appendChild(btnFig);
  }

  document.getElementById("badge-modal-btn-close").innerText = t('badge_btn_close');
  modal.classList.add("active");
}

function closeBadgeDetailsModal() {
  const modal = document.getElementById("badge-details-modal");
  if (modal) modal.classList.remove("active");
}

function renderBadgeFilterChips() {
  const chipsContainer = document.getElementById("badge-filter-chips");
  if (!chipsContainer) return;

  const total = (appState.badges || []).length;
  const unlockedCount = (appState.badges || []).filter(b => b.is_unlocked).length;
  const lockedCount = total - unlockedCount;
  const goldCount = (appState.badges || []).filter(b => b.tier === 'gold').length;
  const silverCount = (appState.badges || []).filter(b => b.tier === 'silver').length;
  const bronzeCount = (appState.badges || []).filter(b => b.tier === 'bronze').length;

  chipsContainer.innerHTML = `
    <span class="filter-chip ${currentBadgeFilter === 'all' ? 'active' : ''}" onclick="filterBadges('all', this)">${t('badge_filter_all')} (${total})</span>
    <span class="filter-chip ${currentBadgeFilter === 'unlocked' ? 'active' : ''}" onclick="filterBadges('unlocked', this)">${t('badge_filter_unlocked')} (${unlockedCount})</span>
    <span class="filter-chip ${currentBadgeFilter === 'locked' ? 'active' : ''}" onclick="filterBadges('locked', this)">${t('badge_filter_locked')} (${lockedCount})</span>
    <span class="filter-chip ${currentBadgeFilter === 'gold' ? 'active' : ''}" onclick="filterBadges('gold', this)">${t('badge_filter_gold')} (${goldCount})</span>
    <span class="filter-chip ${currentBadgeFilter === 'silver' ? 'active' : ''}" onclick="filterBadges('silver', this)">${t('badge_filter_silver')} (${silverCount})</span>
    <span class="filter-chip ${currentBadgeFilter === 'bronze' ? 'active' : ''}" onclick="filterBadges('bronze', this)">${t('badge_filter_bronze')} (${bronzeCount})</span>
  `;
}

function filterBadges(filterType, el) {
  currentBadgeFilter = filterType;
  renderBadgesGrid();
}

function renderBadgesGrid() {
  renderBadgeFilterChips();
  const container = document.getElementById("badges-grid");
  if (!container) return;
  container.innerHTML = "";

  let list = appState.badges || [];
  if (currentBadgeFilter === 'unlocked') {
    list = list.filter(b => b.is_unlocked);
  } else if (currentBadgeFilter === 'locked') {
    list = list.filter(b => !b.is_unlocked);
  } else if (['gold', 'silver', 'bronze', 'diamond'].includes(currentBadgeFilter)) {
    list = list.filter(b => b.tier === currentBadgeFilter);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 36px 16px; text-align: center; color: var(--text-muted); background: #FFFDF8; border-radius: var(--radius-md); border: 1px dashed var(--neutral-300);">
        <div style="font-size: 2.2rem; margin-bottom: 8px;">🎖️</div>
        <p style="font-size: 0.95rem; font-weight: 600;">${currentLang === 'en' ? 'No badges found in this category.' : 'Không có huy hiệu nào trong danh mục này.'}</p>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px;">${currentLang === 'en' ? 'Try picking another filter or create new badges in CMS!' : 'Hãy thử chọn bộ lọc khác hoặc tạo thêm huy hiệu mới ở mục Nhập liệu!'}</p>
      </div>
    `;
    return;
  }

  list.forEach(b => {
    const isUnlocked = !!b.is_unlocked;
    const tierClass = `badge-${b.tier || 'bronze'}`;
    const prog = getBadgeProgress(b);

    const card = document.createElement("div");
    card.className = `card badge-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    card.onclick = () => openBadgeDetailsModal(b.id);
    card.title = t('badge_click_hint');

    card.innerHTML = `
      <div class="badge-icon-box">${b.icon || '🎖️'}</div>
      <span class="badge-tag ${tierClass}">${(b.tier || 'bronze').toUpperCase()} TIER</span>
      <h3 class="badge-card-title">${b.name}</h3>
      <p class="badge-card-category">${b.category || 'Di sản lịch sử'}</p>

      <div class="badge-req-box">
        <div class="badge-req-header">
          <span>🎯 ${t('badge_req_title')}</span>
          <span style="font-size:0.75rem; font-weight:700; color:${isUnlocked ? '#27ae60' : 'var(--primary-dark)'};">
            ${isUnlocked ? (currentLang === 'en' ? 'COMPLETED' : 'HOÀN THÀNH') : `${prog.percent}%`}
          </span>
        </div>
        <div class="badge-req-desc">${b.criteria || 'Chưa thiết lập yêu cầu'}</div>
        <div class="badge-progress-wrap">
          <div class="badge-progress-bar" style="width: ${prog.percent}%;"></div>
        </div>
        <div class="badge-progress-text">
          <span>${t('badge_live_progress')}</span>
          <span><b>${prog.current}</b> / <b>${prog.max}</b> ${prog.unit}</span>
        </div>
      </div>

      ${isUnlocked 
        ? `<div class="badge-status-pill unlocked">✓ ${t('badge_unlocked_status')} (${b.unlocked_date || 'Gần đây'})</div>` 
        : `<div class="badge-status-pill locked">🔒 ${t('badge_locked_status')} (${prog.percent}%)</div>`}

      <div style="font-size:0.75rem; color:var(--accent-camel); margin-top:8px; display:flex; align-items:center; gap:4px; font-weight:600;">
        🔍 ${t('badge_click_hint')}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderProfileStats() {
  const p = appState.profile;
  document.getElementById("profile-display-name").innerText = p.name;
  document.getElementById("profile-level-badge").innerText = `CẤP ${p.level} • KỴ SĨ DI SẢN`;
  document.getElementById("profile-exp-text").innerText = `${p.exp} / ${p.maxExp} EXP`;
  
  const pct = Math.min(100, Math.round((p.exp / p.maxExp) * 100));
  document.getElementById("profile-exp-bar").style.width = `${pct}%`;

  const unlockedStories = (appState.stories || []).filter(s => !s.is_locked).length;
  const unlockedBadges = (appState.badges || []).filter(b => b.is_unlocked).length;
  const checkedInCount = (appState.profile.checked_in_pins && appState.profile.checked_in_pins.length) || 
    (appState.profile.logs || []).filter(l => l.includes("Check-in")).length;

  document.getElementById("stat-pins-scanned").innerText = checkedInCount;
  document.getElementById("stat-stories-unlocked").innerText = unlockedStories;
  document.getElementById("stat-badges-owned").innerText = unlockedBadges;

  const logList = document.getElementById("activity-log-list");
  logList.innerHTML = (p.logs || []).map(item => `
    <li style="padding:6px 0; border-bottom:1px dashed var(--neutral-200);">${item}</li>
  `).join("");
}

function populateDropdownSelectors() {
  const figSelect = document.getElementById("story-input-figure");
  const pinSelect = document.getElementById("story-input-pin");
  const figPinSelect = document.getElementById("fig-input-pins");
  const figStoryPinSelect = document.getElementById("fig-story-pin");
  const badgePinSelect = document.getElementById("badge-input-target-pin");

  if (figSelect) {
    figSelect.innerHTML = appState.figures.map(f => `<option value="${f.id}">${f.name}</option>`).join("");
  }
  if (pinSelect) {
    pinSelect.innerHTML = appState.pins.map(p => `<option value="${p.id}">${p.icon || '📍'} ${p.name}</option>`).join("");
  }
  if (figPinSelect) {
    figPinSelect.innerHTML = `<option value="">-- Chọn Địa danh di tích gắn liền (nếu có) --</option>` + 
      appState.pins.map(p => `<option value="${p.id}">${p.icon || '📍'} ${p.name}</option>`).join("");
  }
  if (figStoryPinSelect) {
    figStoryPinSelect.innerHTML = appState.pins.map(p => `<option value="${p.id}">${p.icon || '📍'} ${p.name}</option>`).join("");
  }
  if (badgePinSelect) {
    const curVal = badgePinSelect.value;
    badgePinSelect.innerHTML = appState.pins.map(p => 
      `<option value="${p.id}">${p.icon || '📍'} ${p.name}</option>`
    ).join("");
    if (curVal && appState.pins.some(p => p.id === curVal)) {
      badgePinSelect.value = curVal;
    }
  }
}

// Story modal reader
function openStoryModal(storyId) {
  const story = appState.stories.find(s => s.id === storyId);
  if (!story) return;
  const fig = appState.figures.find(f => f.id === story.figure_id);

  document.getElementById("story-modal-title").innerText = `📜 ${story.name}`;
  document.getElementById("story-modal-meta").innerText = `Danh nhân: ${fig ? fig.name : 'Lịch sử'}`;
  document.getElementById("story-modal-content").innerText = story.content;

  const coverEl = document.getElementById("story-modal-cover");
  if (coverEl) {
    if (story.background_image && story.background_image.trim().length > 0) {
      coverEl.style.backgroundImage = `url('${story.background_image.trim()}')`;
      coverEl.style.display = "flex";
      const capEl = document.getElementById("story-modal-cover-caption");
      if (capEl) capEl.innerText = `Tranh minh họa: ${story.name}`;
    } else {
      coverEl.style.display = "none";
    }
  }

  document.getElementById("story-modal").classList.add("active");
}

function closeStoryModal() {
  document.getElementById("story-modal").classList.remove("active");
}

// ==========================================================================
// CỔNG NHẬP LIỆU THỦ CÔNG (HANDLERS FOR CREATION)
// ==========================================================================
function openQuickInputModal() {
  switchToInputTab('subtab-pins');
  showToast("✍️ Hãy điền thông tin và bấm 'Lưu Ghim Bản Đồ' để tạo mốc mới!");
}

function handleCreatePin(e) {
  e.preventDefault();
  const name = document.getElementById("pin-input-name").value.trim();
  const category = document.getElementById("pin-input-type").value;
  const rarity = document.getElementById("pin-input-rarity").value;
  const lat = parseFloat(document.getElementById("pin-input-lat").value);
  const lng = parseFloat(document.getElementById("pin-input-lng").value);
  const discovery = parseInt(document.getElementById("pin-input-discovery-radius").value) || 2000;
  const interaction = parseInt(document.getElementById("pin-input-interaction-radius").value) || 100;
  const image_url = document.getElementById("pin-input-image").value.trim();
  const desc = document.getElementById("pin-input-desc").value.trim();
  const media = document.getElementById("pin-input-media").value.trim();

  const iconMap = {
    landmark: "🏛️",
    battlefield: "⚔️",
    living_history: "🎙️",
    story: "📖",
    culture: "🎨"
  };

  const newPin = {
    id: `pin-${Date.now()}`,
    name,
    category,
    rarity,
    lat,
    lng,
    discovery_radius: discovery,
    interaction_radius: interaction,
    image_url: image_url,
    desc,
    media_url: media,
    icon: iconMap[category] || "📍",
    hasLivingHistory: category === "living_history" || media.length > 0
  };

  appState.pins.push(newPin);
  saveState();
  saveToServerDataJSON();
  refreshAllViews();

  showToast(`✓ Đã thêm Ghim mới: "${name}" thành công!`);
  e.target.reset();

  // Switch to Map to view immediately
  document.querySelector('[data-tab="tab-map"]').click();
  map.setView([lat, lng], 14);
}

// ==========================================================================
// DYNAMIC MULTI-STORY ROWS IN ADD FIGURE FORM (UNLIMITED STORIES)
// ==========================================================================
function addFigureStoryRow(title = "", pinId = "", content = "", bgImage = "") {
  const container = document.getElementById("fig-stories-list-container");
  if (!container) return;

  const rowId = `fig-story-row-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
  const currentCount = container.children.length + 1;

  const pinOptions = appState.pins.map(p => 
    `<option value="${p.id}" ${p.id === pinId ? 'selected' : ''}>${p.icon || '📍'} ${p.name}</option>`
  ).join("");

  const rowEl = document.createElement("div");
  rowEl.className = "fig-story-row";
  rowEl.id = rowId;
  rowEl.innerHTML = `
    <div class="fig-story-row-header">
      <strong style="color:var(--primary-dark); font-size:0.92rem;" class="fig-story-row-label">
        ${t('cms_fig_story_label')} #${currentCount}
      </strong>
      <button type="button" class="btn-secondary fig-story-btn-del" style="color:#e53e3e; border-color:#feb2b2; padding:3px 10px; font-size:0.75rem; cursor:pointer;" onclick="removeFigureStoryRow('${rowId}')">
        ${t('cms_fig_story_remove')}
      </button>
    </div>
    <div class="form-grid">
      <div class="form-group form-grid-full">
        <label class="fig-story-lbl-title">${t('cms_fig_story_title_lbl')} <span class="req">*</span></label>
        <input type="text" class="form-input fig-story-input-title" placeholder="${t('cms_fig_story_title_ph')}" value="${title}">
      </div>
      <div class="form-group">
        <label class="fig-story-lbl-pin">${t('cms_fig_story_pin_lbl')}</label>
        <select class="form-select fig-story-input-pin">
          ${pinOptions}
        </select>
        <span class="form-hint fig-story-hint-pin">${t('cms_fig_story_pin_hint')}</span>
      </div>
      <div class="form-group">
        <label class="fig-story-lbl-bg">${t('cms_fig_story_bg_lbl')}</label>
        <div style="display:flex; gap:8px;">
          <input type="text" class="form-input fig-story-input-bg" placeholder="${t('cms_fig_story_bg_ph')}" value="${bgImage}" style="flex:1;">
          <label class="btn-secondary" style="cursor:pointer; white-space:nowrap; margin-bottom:0; font-size:0.8rem; padding:8px 12px;" title="Chọn file ảnh từ máy">
            <span class="fig-story-btn-bg">${t('cms_fig_story_bg_btn')}</span>
            <input type="file" accept="image/*" onchange="handleRowStoryBgPicker(event, '${rowId}')" style="display:none;">
          </label>
        </div>
        <div id="${rowId}-bg-preview" style="margin-top:6px; display:${bgImage ? 'flex' : 'none'}; align-items:center; gap:8px; background:var(--neutral-100); padding:4px 8px; border-radius:4px;">
          <img src="${bgImage || ''}" style="height:36px; width:60px; object-fit:cover; border-radius:3px;">
          <span style="font-size:0.75rem; color:#27ae60;">✓ Có ảnh minh họa</span>
        </div>
      </div>
      <div class="form-group form-grid-full">
        <label class="fig-story-lbl-content">${t('cms_fig_story_content_lbl')}</label>
        <textarea class="form-textarea fig-story-input-content" rows="3" placeholder="${t('cms_fig_story_content_ph')}">${content}</textarea>
      </div>
    </div>
  `;
  container.appendChild(rowEl);
  renumberFigureStoryRows();
}

async function handleRowStoryBgPicker(event, rowId) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function(e) {
    const base64 = e.target.result;
    const row = document.getElementById(rowId);
    if (!row) return;

    const bgInput = row.querySelector(".fig-story-input-bg");
    const previewBox = document.getElementById(`${rowId}-bg-preview`);
    if (previewBox) {
      const img = previewBox.querySelector("img");
      if (img) img.src = base64;
      previewBox.style.display = "flex";
    }

    try {
      const res = await fetch("/api/upload_file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, base64: base64 })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.url && bgInput) {
          bgInput.value = json.url;
          showToast(`✓ Đã lưu tranh minh họa: ${json.url}`);
          return;
        }
      }
    } catch (err) {}

    if (bgInput) bgInput.value = base64;
    showToast("✓ Đã nạp tranh minh họa (Data URL)!");
  };
  reader.readAsDataURL(file);
}

function removeFigureStoryRow(rowId) {
  const el = document.getElementById(rowId);
  if (el) el.remove();
  renumberFigureStoryRows();
  const container = document.getElementById("fig-stories-list-container");
  if (container && container.children.length === 0) {
    addFigureStoryRow();
  }
}

function renumberFigureStoryRows() {
  const container = document.getElementById("fig-stories-list-container");
  if (!container) return;
  const rows = container.querySelectorAll(".fig-story-row");
  rows.forEach((row, idx) => {
    const label = row.querySelector(".fig-story-row-label");
    if (label) label.innerText = `${t('cms_fig_story_label')} #${idx + 1}`;
  });
}

function initFigureStoryRows() {
  const container = document.getElementById("fig-stories-list-container");
  if (!container) return;
  container.innerHTML = "";
  addFigureStoryRow(); // Add 1 initial ready row
}

// ==========================================================================
// QUICK STORY POPUP MODAL (Add stories directly while viewing a hero on Tab 2)
// ==========================================================================
function openQuickStoryModal(figureId) {
  const fig = appState.figures.find(f => f.id === figureId);
  if (!fig) return;

  document.getElementById("quick-story-figure-id").value = fig.id;
  document.getElementById("quick-story-figure-name").innerText = `${fig.avatar || '⚔️'} ${fig.name}`;
  document.getElementById("quick-story-title").value = "";
  document.getElementById("quick-story-content").value = "";
  
  const quickBg = document.getElementById("quick-story-bg");
  if (quickBg) quickBg.value = "";
  const quickPreview = document.getElementById("quick-story-bg-preview-box");
  if (quickPreview) quickPreview.style.display = "none";

  const pinSelect = document.getElementById("quick-story-pin");
  if (pinSelect) {
    pinSelect.innerHTML = appState.pins.map(p => 
      `<option value="${p.id}">${p.icon || '📍'} ${p.name}</option>`
    ).join("");
  }

  document.getElementById("quick-story-modal").classList.add("active");
  setTimeout(() => {
    document.getElementById("quick-story-title").focus();
  }, 100);
}

function closeQuickStoryModal() {
  document.getElementById("quick-story-modal").classList.remove("active");
}

async function handleQuickStoryBgPicker(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function(e) {
    const base64 = e.target.result;
    const thumb = document.getElementById("quick-story-bg-preview-thumb");
    const box = document.getElementById("quick-story-bg-preview-box");
    if (thumb && box) {
      thumb.src = base64;
      box.style.display = "flex";
    }

    try {
      const res = await fetch("/api/upload_file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, base64: base64 })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.url) {
          document.getElementById("quick-story-bg").value = json.url;
          showToast(`✓ Đã lưu tranh minh họa giai thoại: ${json.url}`);
          return;
        }
      }
    } catch (err) {}
    document.getElementById("quick-story-bg").value = base64;
    showToast("✓ Đã nạp tranh minh họa thành công (Data URL)!");
  };
  reader.readAsDataURL(file);
}

function handleQuickStorySubmit(e) {
  e.preventDefault();
  const figureId = document.getElementById("quick-story-figure-id").value;
  const title = document.getElementById("quick-story-title").value.trim();
  const pinId = document.getElementById("quick-story-pin").value;
  const content = document.getElementById("quick-story-content").value.trim();
  const bgImage = document.getElementById("quick-story-bg") ? document.getElementById("quick-story-bg").value.trim() : "";
  const keepOpen = document.getElementById("quick-story-keep-open").checked;

  const fig = appState.figures.find(f => f.id === figureId);
  if (!fig || !title) return;

  const newStory = {
    id: `story-${Date.now()}`,
    name: title,
    figure_id: figureId,
    required_pin_id: pinId,
    is_locked: true,
    content: content || `Giai thoại oai hùng về ${fig.name}.`,
    background_image: bgImage
  };

  appState.stories.push(newStory);
  if (pinId && (!fig.related_pins || !fig.related_pins.includes(pinId))) {
    if (!fig.related_pins) fig.related_pins = [];
    fig.related_pins.push(pinId);
  }

  saveState();
  saveToServerDataJSON();
  refreshAllViews();

  showToast(`✓ Đã thêm Giai thoại: "${title}" cho ${fig.name}!`);

  if (keepOpen) {
    document.getElementById("quick-story-title").value = "";
    document.getElementById("quick-story-content").value = "";
    if (document.getElementById("quick-story-bg")) document.getElementById("quick-story-bg").value = "";
    const preview = document.getElementById("quick-story-bg-preview-box");
    if (preview) preview.style.display = "none";
    document.getElementById("quick-story-title").focus();
  } else {
    closeQuickStoryModal();
  }
}

async function handleFigureImagePicker(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function(e) {
    const base64 = e.target.result;
    const thumb = document.getElementById("fig-image-preview-thumb");
    const box = document.getElementById("fig-image-preview-box");
    if (thumb && box) {
      thumb.src = base64;
      box.style.display = "flex";
    }

    try {
      const res = await fetch("/api/upload_file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, base64: base64 })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.url) {
          document.getElementById("fig-input-image").value = json.url;
          showToast(`✓ Đã lưu ảnh chân dung vào: ${json.url}`);
          return;
        }
      }
    } catch (err) {}
    document.getElementById("fig-input-image").value = base64;
    showToast("✓ Đã nạp chân dung thành công (Data URL)!");
  };
  reader.readAsDataURL(file);
}

async function handleFigureBgPicker(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function(e) {
    const base64 = e.target.result;
    const thumb = document.getElementById("fig-bg-preview-thumb");
    const box = document.getElementById("fig-bg-preview-box");
    if (thumb && box) {
      thumb.src = base64;
      box.style.display = "flex";
    }

    try {
      const res = await fetch("/api/upload_file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, base64: base64 })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.url) {
          document.getElementById("fig-input-bg").value = json.url;
          showToast(`✓ Đã lưu ảnh nền bối cảnh: ${json.url}`);
          return;
        }
      }
    } catch (err) {}
    document.getElementById("fig-input-bg").value = base64;
    showToast("✓ Đã nạp ảnh nền bối cảnh (Data URL)!");
  };
  reader.readAsDataURL(file);
}

async function handleStoryBgPicker(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function(e) {
    const base64 = e.target.result;
    const thumb = document.getElementById("story-bg-preview-thumb");
    const box = document.getElementById("story-bg-preview-box");
    if (thumb && box) {
      thumb.src = base64;
      box.style.display = "flex";
    }

    try {
      const res = await fetch("/api/upload_file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, base64: base64 })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.url) {
          document.getElementById("story-input-bg").value = json.url;
          showToast(`✓ Đã lưu tranh minh họa giai thoại: ${json.url}`);
          return;
        }
      }
    } catch (err) {}
    document.getElementById("story-input-bg").value = base64;
    showToast("✓ Đã nạp tranh minh họa thành công (Data URL)!");
  };
  reader.readAsDataURL(file);
}

function handleCreateFigure(e) {
  e.preventDefault();
  const name = document.getElementById("fig-input-name").value.trim();
  const role = document.getElementById("fig-input-role").value.trim();
  const dynasty = document.getElementById("fig-input-dynasty").value.trim();
  const years = document.getElementById("fig-input-years").value.trim();
  const avatar = document.getElementById("fig-input-avatar").value;
  const image_url = document.getElementById("fig-input-image").value.trim();
  const background_image = document.getElementById("fig-input-bg") ? document.getElementById("fig-input-bg").value.trim() : "";
  const quote = document.getElementById("fig-input-quote").value.trim();
  const pin_id = document.getElementById("fig-input-pins").value;
  const bio = document.getElementById("fig-input-bio").value.trim();

  const newFigId = `fig-${Date.now()}`;
  const newFig = {
    id: newFigId,
    name,
    role,
    dynasty,
    years,
    avatar,
    image_url,
    background_image,
    quote,
    related_pins: pin_id ? [pin_id] : [],
    bio
  };

  appState.figures.push(newFig);

  // Extract ALL stories from the dynamic multi-story rows!
  const storyRows = document.querySelectorAll("#fig-stories-list-container .fig-story-row");
  let addedStoriesCount = 0;
  storyRows.forEach((row, idx) => {
    const title = row.querySelector(".fig-story-input-title")?.value.trim();
    const pin = row.querySelector(".fig-story-input-pin")?.value;
    const content = row.querySelector(".fig-story-input-content")?.value.trim();
    const bg = row.querySelector(".fig-story-input-bg")?.value.trim() || "";

    if (title && title.length > 0) {
      const newStory = {
        id: `story-${Date.now()}-${idx}`,
        name: title,
        figure_id: newFigId,
        required_pin_id: pin || pin_id || (appState.pins[0]?.id || ""),
        is_locked: true,
        content: content || `Giai thoại oai hùng về ${name}.`,
        background_image: bg
      };
      appState.stories.push(newStory);
      if (newStory.required_pin_id && !newFig.related_pins.includes(newStory.required_pin_id)) {
        newFig.related_pins.push(newStory.required_pin_id);
      }
      addedStoriesCount++;
    }
  });

  saveState();
  saveToServerDataJSON();
  selectedFigureId = newFigId;
  refreshAllViews();

  showToast(`✓ Đã tạo Danh nhân "${name}" cùng ${addedStoriesCount} giai thoại lịch sử!`);
  e.target.reset();

  const previewBox = document.getElementById("fig-image-preview-box");
  if (previewBox) previewBox.style.display = "none";
  const bgPreviewBox = document.getElementById("fig-bg-preview-box");
  if (bgPreviewBox) bgPreviewBox.style.display = "none";
  initFigureStoryRows(); // Reset to fresh empty rows

  // Switch to Tab 2 to showcase the newly created figure immediately
  document.querySelector('[data-tab="tab-figures"]').click();
}

function handleCreateStory(e) {
  e.preventDefault();
  const name = document.getElementById("story-input-name").value.trim();
  const figure_id = document.getElementById("story-input-figure").value;
  const required_pin_id = document.getElementById("story-input-pin").value;
  const background_image = document.getElementById("story-input-bg") ? document.getElementById("story-input-bg").value.trim() : "";
  const content = document.getElementById("story-input-content").value.trim();
  const keepOpen = document.getElementById("story-checkbox-continue")?.checked;

  const newStory = {
    id: `story-${Date.now()}`,
    name,
    figure_id,
    required_pin_id,
    is_locked: true,
    content,
    background_image
  };

  appState.stories.push(newStory);

  // Link to figure's related pins if not present
  const fig = appState.figures.find(f => f.id === figure_id);
  if (fig && required_pin_id && (!fig.related_pins || !fig.related_pins.includes(required_pin_id))) {
    if (!fig.related_pins) fig.related_pins = [];
    fig.related_pins.push(required_pin_id);
  }

  saveState();
  saveToServerDataJSON();
  refreshAllViews();

  if (keepOpen) {
    document.getElementById("story-input-name").value = "";
    document.getElementById("story-input-content").value = "";
    if (document.getElementById("story-input-bg")) document.getElementById("story-input-bg").value = "";
    const bgBox = document.getElementById("story-bg-preview-box");
    if (bgBox) bgBox.style.display = "none";
    document.getElementById("story-input-name").focus();
    showToast(`✓ Đã thêm Giai thoại: "${name}"! Bạn có thể nhập tiếp giai thoại khác ngay.`);
  } else {
    showToast(`✓ Đã tạo Giai thoại khóa: "${name}"!`);
    e.target.reset();
    const bgBox = document.getElementById("story-bg-preview-box");
    if (bgBox) bgBox.style.display = "none";
    document.querySelector('[data-tab="tab-figures"]').click();
  }
}

// ==========================================================================
// DYNAMIC MULTI-CONDITION BUILDER FOR BADGES (CMS PORTAL)
// ==========================================================================

let badgeConditionCounter = 0;

function initBadgeConditionRows() {
  const container = document.getElementById("badge-conditions-container");
  if (!container) return;
  if (container.children.length === 0) {
    addBadgeConditionRow({
      type: "specific_figures",
      min_count: 2,
      target_figures: ["fig-tranquoctuan", "fig-quangtrung"]
    });
  }
}

function addBadgeConditionRow(initialData = null) {
  const container = document.getElementById("badge-conditions-container");
  if (!container) return;

  const rowId = `badge-cond-row-${++badgeConditionCounter}`;
  const rowCard = document.createElement("div");
  rowCard.className = "badge-cond-row";
  rowCard.id = rowId;

  const type = (initialData && initialData.type) || "specific_figures";
  const numVal = (initialData && (initialData.target_num || initialData.min_count)) || 2;
  const targetFigures = (initialData && initialData.target_figures) || [];
  const targetPins = (initialData && (initialData.target_pins || (initialData.target_pin ? [initialData.target_pin] : []))) || [];

  rowCard.innerHTML = `
    <div class="badge-cond-row-header">
      <strong style="color:var(--primary-dark); font-size:0.95rem; display:flex; align-items:center; gap:6px;">
        <span class="cond-row-badge">🎯</span> <span class="cond-row-title">${t('cms_cond_title')}</span>
      </strong>
      <button type="button" class="btn-delete-row" style="padding:4px 8px; font-size:0.75rem;" onclick="removeBadgeConditionRow('${rowId}')">${t('cms_cond_remove')}</button>
    </div>

    <div class="form-grid">
      <div class="form-group form-grid-full">
        <label class="cond-lbl-type">${t('cms_cond_type_lbl')} <span class="req">*</span></label>
        <select class="form-select badge-cond-type-select" onchange="handleConditionTypeChange('${rowId}', this.value)">
          <option value="specific_figures" ${type === 'specific_figures' ? 'selected' : ''}>${t('cms_cond_type_specific_fig')}</option>
          <option value="figures_count" ${type === 'figures_count' ? 'selected' : ''}>${t('cms_cond_type_fig_count')}</option>
          <option value="specific_pins" ${type === 'specific_pins' ? 'selected' : ''}>${t('cms_cond_type_specific_pin')}</option>
          <option value="pins_count" ${type === 'pins_count' ? 'selected' : ''}>${t('cms_cond_type_pin_count')}</option>
          <option value="people_count" ${type === 'people_count' ? 'selected' : ''}>${t('cms_cond_type_people')}</option>
          <option value="stories_count" ${type === 'stories_count' ? 'selected' : ''}>${t('cms_cond_type_stories')}</option>
          <option value="custom" ${type === 'custom' ? 'selected' : ''}>${t('cms_cond_type_custom')}</option>
        </select>
      </div>

      <!-- Specific Figures Block -->
      <div class="form-group form-grid-full cond-block-specific-figures" style="${type === 'specific_figures' ? 'display:block;' : 'display:none;'}">
        <label class="cond-lbl-fig">${t('cms_cond_fig_lbl')} <span class="req">*</span></label>
        <div class="badge-checkbox-grid">
          ${(appState.figures || []).map(fig => `
            <label class="badge-checkbox-label">
              <input type="checkbox" class="cond-fig-checkbox" value="${fig.id}" ${targetFigures.includes(fig.id) ? 'checked' : ''} onchange="updateBadgeSummaryCriteriaAuto()">
              <span>${fig.avatar || '⚔️'} <b>${fig.name}</b> (${fig.dynasty || 'Lịch sử'})</span>
            </label>
          `).join("")}
        </div>
        <div style="display:flex; align-items:center; gap:10px; margin-top:8px;">
          <span class="cond-txt-fig-min" style="font-size:0.83rem; color:var(--text-muted);">${t('cms_cond_fig_min')}</span>
          <input type="number" class="form-input cond-fig-min-count" min="1" max="50" value="${numVal}" style="width:80px; padding:4px 8px;" oninput="updateBadgeSummaryCriteriaAuto()">
          <span class="cond-txt-fig-suf" style="font-size:0.83rem; color:var(--text-muted);">${t('cms_cond_fig_min_suf')}</span>
        </div>
      </div>

      <!-- Figures Count Block -->
      <div class="form-group form-grid-full cond-block-figures-count" style="${type === 'figures_count' ? 'display:block;' : 'display:none;'}">
        <label class="cond-lbl-figcount">${t('cms_cond_figcount_lbl')} <span class="req">*</span></label>
        <input type="number" class="form-input cond-figures-count-input" min="1" max="100" value="${numVal}" oninput="updateBadgeSummaryCriteriaAuto()">
        <span class="form-hint cond-hint-figcount">${t('cms_cond_figcount_hint')}</span>
      </div>

      <!-- Specific Pins Block -->
      <div class="form-group form-grid-full cond-block-specific-pins" style="${type === 'specific_pins' ? 'display:block;' : 'display:none;'}">
        <label class="cond-lbl-pin">${t('cms_cond_pin_lbl')} <span class="req">*</span></label>
        <div class="badge-checkbox-grid">
          ${(appState.pins || []).map(pin => `
            <label class="badge-checkbox-label">
              <input type="checkbox" class="cond-pin-checkbox" value="${pin.id}" ${targetPins.includes(pin.id) ? 'checked' : ''} onchange="updateBadgeSummaryCriteriaAuto()">
              <span>${pin.icon || '📍'} <b>${pin.name}</b></span>
            </label>
          `).join("")}
        </div>
        <div style="display:flex; align-items:center; gap:10px; margin-top:8px;">
          <span class="cond-txt-pin-min" style="font-size:0.83rem; color:var(--text-muted);">${t('cms_cond_pin_min')}</span>
          <input type="number" class="form-input cond-pin-min-count" min="1" max="50" value="${numVal}" style="width:80px; padding:4px 8px;" oninput="updateBadgeSummaryCriteriaAuto()">
          <span class="cond-txt-pin-suf" style="font-size:0.83rem; color:var(--text-muted);">${t('cms_cond_pin_min_suf')}</span>
        </div>
      </div>

      <!-- Pins Count Block -->
      <div class="form-group form-grid-full cond-block-pins-count" style="${type === 'pins_count' ? 'display:block;' : 'display:none;'}">
        <label class="cond-lbl-pincount">${t('cms_cond_pincount_lbl')} <span class="req">*</span></label>
        <input type="number" class="form-input cond-pins-count-input" min="1" max="100" value="${numVal}" oninput="updateBadgeSummaryCriteriaAuto()">
        <span class="form-hint cond-hint-pincount">${t('cms_cond_pincount_hint')}</span>
      </div>

      <!-- People Count Block -->
      <div class="form-group form-grid-full cond-block-people-count" style="${type === 'people_count' ? 'display:block;' : 'display:none;'}">
        <label class="cond-lbl-people">${t('cms_cond_people_lbl')} <span class="req">*</span></label>
        <input type="number" class="form-input cond-people-count-input" min="1" max="100" value="${numVal}" oninput="updateBadgeSummaryCriteriaAuto()">
        <span class="form-hint cond-hint-people">${t('cms_cond_people_hint')}</span>
      </div>

      <!-- Stories Count Block -->
      <div class="form-group form-grid-full cond-block-stories-count" style="${type === 'stories_count' ? 'display:block;' : 'display:none;'}">
        <label class="cond-lbl-stories">${t('cms_cond_stories_lbl')} <span class="req">*</span></label>
        <input type="number" class="form-input cond-stories-count-input" min="1" max="100" value="${numVal}" oninput="updateBadgeSummaryCriteriaAuto()">
      </div>

      <!-- Custom Description Block -->
      <div class="form-group form-grid-full cond-block-custom" style="${type === 'custom' ? 'display:block;' : 'display:none;'}">
        <label class="cond-lbl-custom">${t('cms_cond_custom_lbl')}</label>
        <input type="text" class="form-input cond-custom-desc-input" placeholder="${t('cms_cond_custom_ph')}" oninput="updateBadgeSummaryCriteriaAuto()">
      </div>
    </div>
  `;

  container.appendChild(rowCard);
  updateBadgeConditionRowTitles();
  updateBadgeSummaryCriteriaAuto();
}

function removeBadgeConditionRow(rowId) {
  const container = document.getElementById("badge-conditions-container");
  if (!container) return;
  if (container.children.length <= 1) {
    showToast(currentLang === 'en' ? "⚠️ Badges require at least 1 unlock condition!" : "⚠️ Huy hiệu cần có tối thiểu ít nhất 1 điều kiện mở khóa!");
    return;
  }
  const el = document.getElementById(rowId);
  if (el) el.remove();
  updateBadgeConditionRowTitles();
  updateBadgeSummaryCriteriaAuto();
}

function handleConditionTypeChange(rowId, type) {
  const row = document.getElementById(rowId);
  if (!row) return;

  row.querySelector(".cond-block-specific-figures").style.display = type === 'specific_figures' ? 'block' : 'none';
  row.querySelector(".cond-block-figures-count").style.display = type === 'figures_count' ? 'block' : 'none';
  row.querySelector(".cond-block-specific-pins").style.display = type === 'specific_pins' ? 'block' : 'none';
  row.querySelector(".cond-block-pins-count").style.display = type === 'pins_count' ? 'block' : 'none';
  row.querySelector(".cond-block-people-count").style.display = type === 'people_count' ? 'block' : 'none';
  row.querySelector(".cond-block-stories-count").style.display = type === 'stories_count' ? 'block' : 'none';
  row.querySelector(".cond-block-custom").style.display = type === 'custom' ? 'block' : 'none';

  updateBadgeSummaryCriteriaAuto();
}

function updateBadgeConditionRowTitles() {
  const container = document.getElementById("badge-conditions-container");
  if (!container) return;
  const rows = container.querySelectorAll(".badge-cond-row");
  rows.forEach((r, idx) => {
    const title = r.querySelector(".cond-row-title");
    if (title) title.innerText = `${t('cms_cond_title')} #${idx + 1}`;
  });
}

function updateBadgeSummaryCriteriaAuto() {
  const container = document.getElementById("badge-conditions-container");
  const criteriaInput = document.getElementById("badge-input-criteria");
  if (!container || !criteriaInput) return;

  const rows = container.querySelectorAll(".badge-cond-row");
  const descs = [];

  rows.forEach(r => {
    const type = r.querySelector(".badge-cond-type-select").value;
    if (type === 'specific_figures') {
      const checkedBoxes = Array.from(r.querySelectorAll(".cond-fig-checkbox:checked"));
      const minCount = parseInt(r.querySelector(".cond-fig-min-count").value) || checkedBoxes.length || 1;
      if (checkedBoxes.length > 0) {
        const names = checkedBoxes.map(cb => {
          const fig = (appState.figures || []).find(f => f.id === cb.value);
          return fig ? fig.name : cb.value;
        });
        descs.push(currentLang === 'en' ? `Discover ${minCount} Heroes: ${names.join(", ")}` : `Khám phá ${minCount} Danh nhân: ${names.join(", ")}`);
      } else {
        descs.push(currentLang === 'en' ? `Unlock selected historical figures` : `Mở khóa các Danh nhân lịch sử được chọn`);
      }
    } else if (type === 'figures_count') {
      const num = parseInt(r.querySelector(".cond-figures-count-input").value) || 2;
      descs.push(currentLang === 'en' ? `Discover and unlock ${num} heroic figures` : `Khám phá và mở khóa ${num} Danh nhân lịch sử hào kiệt`);
    } else if (type === 'specific_pins') {
      const checkedBoxes = Array.from(r.querySelectorAll(".cond-pin-checkbox:checked"));
      const minCount = parseInt(r.querySelector(".cond-pin-min-count").value) || checkedBoxes.length || 1;
      if (checkedBoxes.length > 0) {
        const names = checkedBoxes.map(cb => {
          const pin = (appState.pins || []).find(p => p.id === cb.value);
          return pin ? pin.name : cb.value;
        });
        descs.push(currentLang === 'en' ? `Check in at ${minCount} Landmarks: ${names.join(", ")}` : `Check-in tại ${minCount} Địa danh: ${names.join(", ")}`);
      } else {
        descs.push(currentLang === 'en' ? `Check in at selected heritage landmarks` : `Check-in tại các Địa danh di tích được chọn`);
      }
    } else if (type === 'pins_count') {
      const num = parseInt(r.querySelector(".cond-pins-count-input").value) || 3;
      descs.push(currentLang === 'en' ? `Check in at ${num} Landmarks / Sites` : `Check-in tại ${num} Địa danh / Di tích bất kỳ`);
    } else if (type === 'people_count') {
      const num = parseInt(r.querySelector(".cond-people-count-input").value) || 1;
      descs.push(currentLang === 'en' ? `Meet and interview ${num} Living Witnesses` : `Gặp gỡ và giao lưu với ${num} Nhân chứng sống / Ký ức`);
    } else if (type === 'stories_count') {
      const num = parseInt(r.querySelector(".cond-stories-count-input").value) || 2;
      descs.push(currentLang === 'en' ? `Unlock ${num} Historical Tales` : `Mở khóa trọn vẹn ${num} Giai thoại lịch sử`);
    } else if (type === 'custom') {
      const val = r.querySelector(".cond-custom-desc-input").value.trim();
      if (val) descs.push(val);
    }
  });

  if (descs.length > 0) {
    criteriaInput.value = descs.join(" • ");
  }
}

function handleCreateBadge(e) {
  e.preventDefault();
  const name = document.getElementById("badge-input-name").value.trim();
  const tier = document.getElementById("badge-input-tier").value;
  const icon = document.getElementById("badge-input-icon").value;
  const category = document.getElementById("badge-input-cat").value.trim() || "Di sản";
  const lore = document.getElementById("badge-input-lore") ? document.getElementById("badge-input-lore").value.trim() : "";
  const criteriaInput = document.getElementById("badge-input-criteria");
  const criteria = criteriaInput ? criteriaInput.value.trim() : "";
  const isUnlockedCheckbox = document.getElementById("badge-input-is-unlocked");
  const is_unlocked = isUnlockedCheckbox ? isUnlockedCheckbox.checked : false;

  // Gather conditions from dynamic condition rows
  const container = document.getElementById("badge-conditions-container");
  const conditions = [];
  const rows = container ? container.querySelectorAll(".badge-cond-row") : [];

  rows.forEach((r, idx) => {
    const type = r.querySelector(".badge-cond-type-select").value;
    const condObj = {
      id: `c-${Date.now()}-${idx}`,
      type: type,
      desc: ""
    };

    if (type === 'specific_figures') {
      const checkedBoxes = Array.from(r.querySelectorAll(".cond-fig-checkbox:checked"));
      condObj.target_figures = checkedBoxes.map(cb => cb.value);
      condObj.min_count = parseInt(r.querySelector(".cond-fig-min-count").value) || condObj.target_figures.length || 1;
      const names = checkedBoxes.map(cb => {
        const fig = (appState.figures || []).find(f => f.id === cb.value);
        return fig ? fig.name : cb.value;
      });
      condObj.desc = `Khám phá ${condObj.min_count} Danh nhân: ${names.join(", ")}`;
    } else if (type === 'figures_count') {
      condObj.target_num = parseInt(r.querySelector(".cond-figures-count-input").value) || 2;
      condObj.desc = `Khám phá và mở khóa ${condObj.target_num} Danh nhân lịch sử hào kiệt`;
    } else if (type === 'specific_pins') {
      const checkedBoxes = Array.from(r.querySelectorAll(".cond-pin-checkbox:checked"));
      condObj.target_pins = checkedBoxes.map(cb => cb.value);
      condObj.min_count = parseInt(r.querySelector(".cond-pin-min-count").value) || condObj.target_pins.length || 1;
      const names = checkedBoxes.map(cb => {
        const pin = (appState.pins || []).find(p => p.id === cb.value);
        return pin ? pin.name : cb.value;
      });
      condObj.desc = `Check-in tại ${condObj.min_count} Địa danh: ${names.join(", ")}`;
    } else if (type === 'pins_count') {
      condObj.target_num = parseInt(r.querySelector(".cond-pins-count-input").value) || 3;
      condObj.desc = `Check-in tại ${condObj.target_num} Địa danh / Di tích bất kỳ`;
    } else if (type === 'people_count') {
      condObj.target_num = parseInt(r.querySelector(".cond-people-count-input").value) || 1;
      condObj.desc = `Gặp gỡ và giao lưu với ${condObj.target_num} Nhân chứng sống / Ký ức`;
    } else if (type === 'stories_count') {
      condObj.target_num = parseInt(r.querySelector(".cond-stories-count-input").value) || 2;
      condObj.desc = `Mở khóa trọn vẹn ${condObj.target_num} Giai thoại lịch sử`;
    } else if (type === 'custom') {
      condObj.desc = r.querySelector(".cond-custom-desc-input").value.trim() || 'Mục tiêu tự do';
    }

    conditions.push(condObj);
  });

  const finalCriteria = criteria || conditions.map(c => c.desc).join(" • ") || "Yêu cầu mở khóa di sản";

  const newBadge = {
    id: `badge-${Date.now()}`,
    name,
    tier,
    icon,
    category,
    lore: lore || `Vinh danh người chơi đạt thành tựu di sản "${name}".`,
    lore_en: `Honors explorers who have achieved the heritage milestone "${name}".`,
    criteria: finalCriteria,
    conditions: conditions.length > 0 ? conditions : [
      { id: `c-default`, type: "custom", desc: finalCriteria }
    ],
    is_unlocked: is_unlocked,
    unlocked_date: is_unlocked ? new Date().toLocaleDateString("vi-VN") : undefined
  };

  if (!appState.badges) appState.badges = [];
  appState.badges.push(newBadge);

  evaluateAndUnlockBadges();
  saveState();
  saveToServerDataJSON();
  refreshAllViews();

  showToast(`✓ Đã thêm Huy hiệu mới: "${name}"!`);
  e.target.reset();
  if (container) container.innerHTML = "";
  initBadgeConditionRows();

  document.querySelector('[data-tab="tab-badges"]').click();
}

function toggleBadgeUnlock(id) {
  const bg = appState.badges.find(b => b.id === id);
  if (!bg) return;
  bg.is_unlocked = !bg.is_unlocked;
  if (bg.is_unlocked) {
    bg.unlocked_date = new Date().toLocaleDateString("vi-VN");
    showToast(`✓ Đã mở khóa Huy hiệu "${bg.name}"!`);
  } else {
    bg.unlocked_date = undefined;
    showToast(`🔒 Đã khóa lại Huy hiệu "${bg.name}".`);
  }
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
}

// Export backup
function exportDataJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `legacy_keepers_backup_${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Toast notification helper
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// ==========================================================================
// DATA CLEANUP & MANAGEMENT ENGINE
// ==========================================================================

// 1. Delete currently selected pin from map modal
function deleteSelectedPin() {
  if (!selectedPinForModal) return;
  const pin = selectedPinForModal;
  if (!confirm(`Bạn có chắc chắn muốn xóa Ghim "${pin.name}" khỏi bản đồ không?`)) return;

  appState.pins = appState.pins.filter(p => p.id !== pin.id);
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  closeModal();
  showToast(`🗑️ Đã xóa Ghim "${pin.name}" thành công!`);
}

// 2. Delete single items by ID
function deletePinById(id) {
  const pin = appState.pins.find(p => p.id === id);
  if (!pin) return;
  if (!confirm(`Xác nhận xóa Ghim: "${pin.name}"?`)) return;

  appState.pins = appState.pins.filter(p => p.id !== id);
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  showToast(`🗑️ Đã xóa Ghim "${pin.name}"!`);
}

function deleteFigureById(id) {
  const fig = appState.figures.find(f => f.id === id);
  if (!fig) return;
  if (!confirm(`Xác nhận xóa Danh nhân: "${fig.name}"?`)) return;

  appState.figures = appState.figures.filter(f => f.id !== id);
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  showToast(`🗑️ Đã xóa Danh nhân "${fig.name}"!`);
}

function deleteStoryById(id) {
  const st = appState.stories.find(s => s.id === id);
  if (!st) return;
  if (!confirm(`Xác nhận xóa Giai thoại: "${st.name}"?`)) return;

  appState.stories = appState.stories.filter(s => s.id !== id);
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  showToast(`🗑️ Đã xóa Giai thoại "${st.name}"!`);
}

function deleteBadgeById(id) {
  const bg = appState.badges.find(b => b.id === id);
  if (!bg) return;
  if (!confirm(`Xác nhận xóa Huy hiệu: "${bg.name}"?`)) return;

  appState.badges = appState.badges.filter(b => b.id !== id);
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  showToast(`🗑️ Đã xóa Huy hiệu "${bg.name}"!`);
}

// 3. Reset all data to clean initial state (wipe out test items)
function resetToInitialData() {
  if (!confirm("⚠️ CẢNH BÁO: Thao tác này sẽ xóa sạch các dữ liệu bạn đã tạo thử và đưa ứng dụng về nguyên bản thiết kế mặc định ban đầu. Bạn có chắc chắn muốn khôi phục không?")) return;
  appState = JSON.parse(JSON.stringify(INITIAL_DATA));
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  showToast("✓ Đã khôi phục dữ liệu gốc thành công! Mọi bản ghi test đã được dọn sạch.");
}

// 4. Render Manage & Cleanup Tables in Subtab 5
function renderManageTables() {
  // 1. Pins Table
  const pinWrap = document.getElementById("manage-pins-table-wrap");
  const pinCount = document.getElementById("manage-pin-count");
  if (pinCount) pinCount.innerText = appState.pins.length;

  if (pinWrap) {
    if (appState.pins.length === 0) {
      pinWrap.innerHTML = `<p style='color:var(--text-muted); font-size:0.9rem; padding:12px;'>${t('manage_tbl_empty_pins')}</p>`;
    } else {
      let html = `
        <table class="manage-table">
          <thead>
            <tr>
              <th>${t('manage_tbl_icon_name')}</th>
              <th>${t('manage_tbl_type')}</th>
              <th>${t('manage_tbl_rarity')}</th>
              <th>${t('manage_tbl_coords')}</th>
              <th>${t('manage_tbl_radius')}</th>
              <th style="text-align:right;">${t('manage_tbl_action')}</th>
            </tr>
          </thead>
          <tbody>
      `;
      appState.pins.forEach(pin => {
        html += `
          <tr>
            <td><b>${pin.icon || '📍'} ${pin.name}</b></td>
            <td><span style="font-size:0.8rem; background:var(--neutral-100); padding:3px 8px; border-radius:4px;">${pin.category}</span></td>
            <td><span style="font-size:0.8rem; font-weight:600;">${pin.rarity}</span></td>
            <td style="font-family:monospace; font-size:0.8rem;">${Number(pin.lat).toFixed(4)}, ${Number(pin.lng).toFixed(4)}</td>
            <td style="font-size:0.8rem;">${t('manage_radius_scan')} ${pin.discovery_radius}m / ${t('manage_radius_reach')} ${pin.interaction_radius}m</td>
            <td style="text-align:right;">
              <button class="btn-delete-row" onclick="deletePinById('${pin.id}')">${t('manage_tbl_delete')}</button>
            </td>
          </tr>
        `;
      });
      html += `</tbody></table>`;
      pinWrap.innerHTML = html;
    }
  }

  // 2. Figures Table
  const figWrap = document.getElementById("manage-figures-table-wrap");
  const figCount = document.getElementById("manage-figure-count");
  if (figCount) figCount.innerText = appState.figures.length;

  if (figWrap) {
    if (appState.figures.length === 0) {
      figWrap.innerHTML = `<p style='color:var(--text-muted); font-size:0.9rem; padding:12px;'>${t('manage_tbl_empty_figs')}</p>`;
    } else {
      let html = `
        <table class="manage-table">
          <thead>
            <tr>
              <th>${t('manage_tbl_avatar_title')}</th>
              <th>${t('manage_tbl_role')}</th>
              <th>${t('manage_tbl_dynasty')}</th>
              <th style="text-align:right;">${t('manage_tbl_action')}</th>
            </tr>
          </thead>
          <tbody>
      `;
      appState.figures.forEach(fig => {
        html += `
          <tr>
            <td><b>${fig.avatar || '⚔️'} ${fig.name}</b></td>
            <td>${fig.role || '—'}</td>
            <td>${fig.dynasty || '—'}</td>
            <td style="text-align:right;">
              <button class="btn-delete-row" onclick="deleteFigureById('${fig.id}')">${t('manage_tbl_delete')}</button>
            </td>
          </tr>
        `;
      });
      html += `</tbody></table>`;
      figWrap.innerHTML = html;
    }
  }

  // 3. Stories Table
  const storyWrap = document.getElementById("manage-stories-table-wrap");
  const storyCount = document.getElementById("manage-story-count");
  if (storyCount) storyCount.innerText = appState.stories.length;

  if (storyWrap) {
    if (appState.stories.length === 0) {
      storyWrap.innerHTML = `<p style='color:var(--text-muted); font-size:0.9rem; padding:12px;'>${t('manage_tbl_empty_stories')}</p>`;
    } else {
      let html = `
        <table class="manage-table">
          <thead>
            <tr>
              <th>${t('manage_tbl_story_name')}</th>
              <th>${t('manage_tbl_figure')}</th>
              <th>${t('manage_tbl_required_pin')}</th>
              <th>${t('manage_tbl_status')}</th>
              <th style="text-align:right;">${t('manage_tbl_action')}</th>
            </tr>
          </thead>
          <tbody>
      `;
      appState.stories.forEach(st => {
        const fig = appState.figures.find(f => f.id === st.figure_id);
        const pin = appState.pins.find(p => p.id === st.required_pin_id);
        html += `
          <tr>
            <td><b>${st.name}</b></td>
            <td>${fig ? fig.name : '—'}</td>
            <td>${pin ? pin.name : '—'}</td>
            <td><span style="font-size:0.8rem; color:${st.is_locked ? '#e67e22' : '#27ae60'};">${st.is_locked ? t('manage_tbl_locked') : t('manage_tbl_unlocked')}</span></td>
            <td style="text-align:right;">
              <button class="btn-delete-row" onclick="deleteStoryById('${st.id}')">${t('manage_tbl_delete')}</button>
            </td>
          </tr>
        `;
      });
      html += `</tbody></table>`;
      storyWrap.innerHTML = html;
    }
  }

  // 4. Badges Table
  const badgeWrap = document.getElementById("manage-badges-table-wrap");
  const badgeCount = document.getElementById("manage-badge-count");
  if (badgeCount) badgeCount.innerText = appState.badges.length;

  if (badgeWrap) {
    if (appState.badges.length === 0) {
      badgeWrap.innerHTML = `<p style='color:var(--text-muted); font-size:0.9rem; padding:12px;'>${t('manage_tbl_empty_badges')}</p>`;
    } else {
      let html = `
        <table class="manage-table">
          <thead>
            <tr>
              <th>${t('manage_tbl_icon_name')}</th>
              <th>${t('manage_tbl_tier')}</th>
              <th>${t('manage_tbl_criteria')}</th>
              <th>${t('manage_tbl_status')}</th>
              <th style="text-align:right;">${t('manage_tbl_action')}</th>
            </tr>
          </thead>
          <tbody>
      `;
      appState.badges.forEach(bg => {
        const prog = getBadgeProgress(bg);
        const conds = getNormalizedBadgeConditions(bg);
        const condSummaries = conds.map(c => {
          if (c.type === 'specific_figures') return `👑 ${(c.target_figures || []).length} ${t('manage_badge_spec_figs')}`;
          if (c.type === 'figures_count') return `👑 ${c.target_num} ${t('manage_badge_figs')}`;
          if (c.type === 'specific_pins') return `📍 ${(c.target_pins || []).length} ${t('manage_badge_spec_pins')}`;
          if (c.type === 'pins_count') return `🗺️ ${c.target_num} ${t('manage_badge_pins')}`;
          if (c.type === 'people_count') return `🎙️ ${c.target_num} ${t('manage_badge_witnesses')}`;
          if (c.type === 'stories_count') return `📖 ${c.target_num} ${t('manage_badge_stories')}`;
          return `✍️ ${t('manage_badge_custom')}`;
        }).join(" + ");

        const progressLabel = currentLang === 'en'
          ? `Rule: [${condSummaries}] • Progress: <b>${prog.current}</b>/<b>${prog.max}</b> (${prog.percent}%)`
          : `Luật: [${condSummaries}] • Tiến độ: <b>${prog.current}</b>/<b>${prog.max}</b> (${prog.percent}%)`;

        const toggleLabel = bg.is_unlocked
          ? (currentLang === 'en' ? '✓ Owned (Click to lock)' : '✓ Đã nhận (Bấm khóa)')
          : (currentLang === 'en' ? '🔒 Locked (Click to open)' : '🔒 Chưa nhận (Bấm mở)');

        const clickTitle = currentLang === 'en' ? "Click to view details" : "Bấm để xem chi tiết";
        const toggleTitle = currentLang === 'en' ? "Click to toggle unlocked status" : "Bấm để chuyển đổi nhanh đã nhận / chưa nhận";

        html += `
          <tr>
            <td>
              <div style="display:flex; align-items:center; gap:8px; cursor:pointer;" onclick="openBadgeDetailsModal('${bg.id}')" title="${clickTitle}">
                <span style="font-size:1.4rem;">${bg.icon || '🏅'}</span>
                <div>
                  <b style="color:var(--primary);">${bg.name}</b>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${bg.category || (currentLang === 'en' ? 'Heritage' : 'Di sản')}</div>
                </div>
              </div>
            </td>
            <td><span class="badge-tag badge-${bg.tier || 'bronze'}" style="font-size:0.72rem; padding:3px 8px;">${(bg.tier || 'bronze').toUpperCase()}</span></td>
            <td style="font-size:0.82rem; max-width:280px;">
              <div>${bg.criteria}</div>
              <div style="font-size:0.75rem; color:var(--accent-camel); font-weight:600; margin-top:3px;">
                ${progressLabel}
              </div>
            </td>
            <td>
              <button class="btn-secondary" style="font-size:0.76rem; padding:4px 10px; cursor:pointer;" onclick="toggleBadgeUnlock('${bg.id}')" title="${toggleTitle}">
                ${toggleLabel}
              </button>
            </td>
            <td style="text-align:right;">
              <button class="btn-delete-row" onclick="deleteBadgeById('${bg.id}')">${t('manage_tbl_delete')}</button>
            </td>
          </tr>
        `;
      });
      html += `</tbody></table>`;
      badgeWrap.innerHTML = html;
    }
  }
}

// ==========================================================================
// LOCAL FILE UPLOAD & PICKER HELPERS (IMAGES & VIDEOS)
// ==========================================================================

async function handleImageFilePicker(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function(e) {
    const base64 = e.target.result;
    const thumb = document.getElementById("pin-image-preview-thumb");
    const box = document.getElementById("pin-image-preview-box");
    if (thumb && box) {
      thumb.src = base64;
      box.style.display = "flex";
    }

    try {
      const res = await fetch("/api/upload_file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, base64: base64 })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.url) {
          document.getElementById("pin-input-image").value = json.url;
          showToast(`✓ Đã lưu file ảnh vào: ${json.url}`);
          return;
        }
      }
    } catch (err) {
      // offline fallback
    }
    // Fallback: save Base64 data URL directly
    document.getElementById("pin-input-image").value = base64;
    showToast("✓ Đã nạp ảnh thành công (chế độ offline Data URL)!");
  };
  reader.readAsDataURL(file);
}

async function handleMediaFilePicker(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function(e) {
    const base64 = e.target.result;
    try {
      const res = await fetch("/api/upload_file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, base64: base64 })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.url) {
          document.getElementById("pin-input-media").value = json.url;
          showToast(`✓ Đã lưu file media vào: ${json.url}`);
          return;
        }
      }
    } catch (err) {
      // offline fallback
    }
    document.getElementById("pin-input-media").value = `media/videos/${file.name}`;
    showToast(`✓ Đã đặt đường dẫn media/videos/${file.name}`);
  };
  reader.readAsDataURL(file);
}
