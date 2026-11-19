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
    profile_region_sub: "@heritage_seeker • Khu vực: Thăng Long / Nam Bộ",
    profile_quote: "\"Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam.\"",
    profile_exp: "Điểm kinh nghiệm khám phá",
    stat_pins: "Địa danh đã check-in",
    stat_pins_tooltip: "Bấm để xem danh sách địa danh đã check-in",
    stat_stories: "Giai thoại đã mở khóa",
    stat_badges: "Huy hiệu sở hữu",
    stat_km: "Km đã thám hiểm",
    recent_logs: "Nhật Ký Hành Trình Gần Đây",
    map_radar_pos_lbl: "Vị trí Radar:",
    map_nearest_pin_lbl: "Pin gần nhất:",
    role_btn_change: "Đổi ➜",
    radar_tuner_btn: "Chỉnh Radar",
    radar_tuner_tooltip: "Tùy chỉnh khoảng cách vòng quét Radar",
    radar_tuner_title: "🎚️ Chỉnh Khoảng Cách Radar (Chỉ Manager)",
    radar_tuner_cms_sub: "Thử nghiệm các bán kính quét & check-in để tìm thông số tối ưu. Ẩn hoàn toàn với người chơi thường.",
    radar_tuner_view_map: "🧭 Xem trên Bản đồ",
    radar_discovery_lbl: "Vòng quét hiện Pin",
    radar_interaction_lbl: "Vòng cố định Check-in",
    radar_tuner_reset: "↺ Mặc định",
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
    quick_story_btn_save: "💾 Lưu Giai Thoại Ngay",
    // Location Radar Modal (Vietnamese)
    modal_cat_landmark: "🏛️ ĐỊA DANH DI TÍCH",
    modal_cat_battlefield: "⚔️ TRẬN ĐÁNH HÀO HÙNG",
    modal_cat_living: "🎙️ NHÂN CHỨNG SỐNG / KÝ ỨC",
    modal_cat_story: "📖 MẢNH KÝ ỨC & SỰ KIỆN",
    modal_cat_culture: "🎨 VĂN HÓA & LÀNG NGHỀ",
    modal_dist_prefix: "Cách bạn: ",
    modal_checkin_radius_lbl: "Phạm vi Check-in cho phép:",
    modal_checkin_radius_unit: "mét",
    modal_btn_checkin_ready: "Check-in Khám Phá & Mở Khóa Giai Thoại Ngay!",
    modal_btn_checkin_dist: "Chưa thể Check-in (còn cách ",
    modal_btn_checkin_done: "✓ Đã Check-in Khám Phá",
    modal_already_checked_title: "✓ Đã Check-in Khám Phá",
    modal_already_checked_desc: "Bạn đã lưu dấu ấn tại di tích lịch sử này và mở khóa giai thoại thành công!",
    modal_toast_already_checked_in: "✓ Bạn đã hoàn thành check-in tại địa danh này rồi!",
    modal_toast_out_of_range: "📍 Bạn còn ở ngoài phạm vi check-in của địa danh này!",
    modal_btn_delete_pin: "🗑️ Xóa Ghim Này",
    modal_confirm_delete_pin: "Xác nhận xóa Ghim:",
    modal_media_video_title: "🎬 Thước phim Tư liệu Lịch sử:",
    modal_media_video_desc: "Video tư liệu thực địa được phát trực tiếp.",
    modal_media_audio_title: "🎙️ Lời kể Nhân chứng & Âm thanh Lịch sử:",
    modal_media_audio_desc: "Ghi âm hồi ức hoặc tư liệu podcast lịch sử.",
    modal_media_yt_title: "📺 Phim Tư liệu YouTube:",
    modal_media_yt_desc: "Video thuyết minh lịch sử được nhúng trực tiếp.",
    modal_media_living_title: "🎙️ Thước phim Ký ức / Lời kể Nhân chứng:",
    modal_media_living_desc: "Tư liệu sống ghi lại trực tiếp tại không gian sự kiện lịch sử này.",
    modal_media_btn_audio: "▶️ Lắng nghe tư liệu ký ức (30s)",
    modal_media_btn_ext: "🔗 Mở liên kết tư liệu ngoài",
    modal_media_btn_attach: "🔗 Mở xem tư liệu lịch sử đính kèm",
    modal_rarity_common: "Thường (Common)",
    modal_rarity_rare: "Hiếm (Rare)",
    modal_rarity_epic: "Sử thi (Epic)",
    cms_pin_rarity_rare: "Hiếm (Rare) - Radar quét 1.2km, Check-in 80m",
    cms_pin_rarity_epic: "Sử thi (Epic) - Radar quét 1.5km, Check-in 100m",
    modal_rarity_uncommon: "Hiếm (Uncommon)",
    modal_rarity_legendary: "Huyền thoại (Legendary)",
    modal_rarity_event: "Sự kiện Mùa (Limited)",
    cms_pin_name_vi_lbl: "Tên Địa danh (Tiếng Việt)",
    cms_pin_name_en_lbl: "Tên Địa danh (English Name)",
    cms_pin_name_en_ph: "Ví dụ: Imperial Citadel of Thang Long, Bach Dang Victory Site...",
    cms_pin_desc_vi_lbl: "Tóm tắt tư liệu lịch sử (Tiếng Việt)",
    cms_pin_desc_en_lbl: "Tóm tắt tư liệu lịch sử (English Summary)",
    cms_pin_desc_en_ph: "Historical background, significance, glorious feats in English...",
    radar_quick_add_pin: "Thêm Địa Danh Mới",
    figures_search_ph: "🔍 Tìm danh nhân, triều đại...",
    // Figure Form
    cms_fig_name_vi_lbl: "Tên Danh nhân / Anh hùng (Tiếng Việt)",
    cms_fig_name_en_lbl: "Tên Danh nhân / Anh hùng (English Name)",
    cms_fig_name_en_ph: "Ví dụ: General Tran Hung Dao, Emperor Quang Trung...",
    cms_fig_role_vi_lbl: "Tước vị / Vai trò (Tiếng Việt)",
    cms_fig_role_en_lbl: "Tước vị / Vai trò (English Title)",
    cms_fig_role_en_ph: "Ví dụ: Supreme Commander, Emperor, Revolutionary Queen...",
    cms_fig_dynasty_vi_lbl: "Thời đại / Triều đại (Tiếng Việt)",
    cms_fig_dynasty_en_lbl: "Thời đại / Triều đại (English Era)",
    cms_fig_dynasty_en_ph: "Ví dụ: Tran Dynasty, Tay Son Dynasty...",
    cms_fig_quote_vi_lbl: "Câu nói bất hủ / Danh ngôn lịch sử (Tiếng Việt)",
    cms_fig_quote_en_lbl: "Câu nói bất hủ / Danh ngôn lịch sử (English Quote)",
    cms_fig_quote_en_ph: "Ví dụ: 'If your Majesty wishes to surrender, please cut off my head first!'",
    cms_fig_bio_vi_lbl: "Tiểu sử & Cuộc đời hào kiệt (Tiếng Việt)",
    cms_fig_bio_en_lbl: "Tiểu sử & Cuộc đời hào kiệt (English Biography)",
    cms_fig_bio_en_ph: "Glorious feats, strategic triumphs, lifelong devotion in English...",
    // Dynamic Figure Story Rows
    cms_fig_story_title_vi_lbl: "Tiêu đề Giai thoại (Tiếng Việt)",
    cms_fig_story_title_en_lbl: "Tiêu đề Giai thoại (English Title)",
    cms_fig_story_title_en_ph: "Ví dụ: The Wooden Stakes Strategy of Bach Dang River...",
    cms_fig_story_content_vi_lbl: "Nội dung giai thoại (Tiếng Việt)",
    cms_fig_story_content_en_lbl: "Nội dung giai thoại (English Narrative)",
    cms_fig_story_content_en_ph: "Historical narrative, military strategy in English...",
    // Subtab 3 Story Form
    cms_story_title_vi_lbl: "Tiêu đề Giai thoại / Sự kiện (Tiếng Việt)",
    cms_story_title_en_lbl: "Tiêu đề Giai thoại / Sự kiện (English Title)",
    cms_story_title_en_ph: "Ví dụ: The Sacred Poem of Nhu Nguyet River, The Call to Arms...",
    cms_story_content_vi_lbl: "Nội dung chi tiết cốt truyện (Tiếng Việt)",
    cms_story_content_en_lbl: "Nội dung chi tiết cốt truyện (English Content)",
    cms_story_content_en_ph: "Historical events, military strategy, hero feats in English...",
    // Quick Story Modal
    quick_story_title_vi_lbl: "Tiêu đề Giai thoại (Tiếng Việt)",
    quick_story_title_en_lbl: "Tiêu đề Giai thoại (English Title)",
    quick_story_title_en_ph: "Ví dụ: Proclamation to Officers, Binh Than Conference...",
    quick_story_content_vi_lbl: "Nội dung toàn văn câu chuyện (Tiếng Việt)",
    quick_story_content_en_lbl: "Nội dung toàn văn câu chuyện (English Narrative)",
    quick_story_content_en_ph: "Historical events, military strategy, hero feats in English...",
    // Subtab 4 Badges Form
    cms_badge_name_vi_lbl: "Tên Huy hiệu (Tiếng Việt)",
    cms_badge_name_en_lbl: "Tên Huy hiệu (English Name)",
    cms_badge_name_en_ph: "Ví dụ: Knight of Bach Dang River, Spirit of Thang Long...",
    cms_badge_cat_vi_lbl: "Bộ sưu tập (Tiếng Việt)",
    cms_badge_cat_en_lbl: "Bộ sưu tập (English Category)",
    cms_badge_cat_en_ph: "Ví dụ: Heroic Spirits, Living Witnesses, Vietnam Heritage...",
    cms_badge_lore_vi_lbl: "Nội dung & Điển tích của Huy hiệu (Tiếng Việt)",
    cms_badge_lore_en_lbl: "Nội dung & Điển tích của Huy hiệu (English Lore)",
    cms_badge_lore_en_ph: "Historical background, significance and prestige of this badge in English...",
    cms_badge_criteria_vi_lbl: "Tóm tắt yêu cầu (Tiếng Việt)",
    cms_badge_criteria_en_lbl: "Tóm tắt yêu cầu (English Summary)",
    cms_badge_criteria_en_ph: "Auto-generated in English or custom text...",
    celebration_title: "KHÁM PHÁ THÀNH CÔNG!",
    celebration_exp: "Kinh nghiệm thám hiểm: +100 EXP",
    celebration_btn_continue: "Tiếp Tục Hành Trình",
    sim_toggle_btn: "Thử giao diện Điện thoại",
    sim_btn_desktop: "Trở lại Desktop",
    sim_bar_title: "iPhone 15 Pro • 390 × 844",
    sim_bar_title_max: "iPhone 15 Pro Max • 430 × 932",
    sim_btn_size: "Đổi cỡ màn hình",
    sim_toast_on: "📱 Đã bật giả lập giao diện điện thoại! Bạn có thể thao tác trực tiếp trên khung máy.",
    sim_toast_off: "💻 Đã trở lại giao diện máy tính!",
    mob_nav_radar: "Radar",
    mob_nav_figures: "Nhân vật",
    mob_nav_badges: "Huy hiệu",
    mob_nav_profile: "Hồ sơ",
    mob_nav_cms: "Nhập liệu",
    stat_hint_view: "Bấm xem chi tiết ➜",
    stat_modal_pins_title: "Địa danh đã check-in",
    stat_modal_pins_desc: "Danh sách các địa danh, di tích lịch sử và chiến trường bạn đã ghé thăm và quét radar thực địa.",
    stat_modal_stories_title: "Kho giai thoại đã mở khóa",
    stat_modal_stories_desc: "Kho tàng ký ức và điển tích oanh liệt bạn đã giải mã thành công qua các chuyến tuần tra.",
    stat_modal_badges_title: "Huy hiệu sở hữu",
    stat_modal_badges_desc: "Hệ thống huân chương và danh hiệu vinh danh hành trình gìn giữ di sản của bạn.",
    stat_modal_km_title: "Quãng đường & Hành trình thám hiểm",
    stat_modal_km_desc: "Tổng hợp cự ly tuần tra thực địa, cấp độ thám hiểm và tiến độ nhận danh hiệu viễn chinh.",
    stat_btn_view_radar: "🧭 Xem trên Radar",
    stat_btn_read_story: "📖 Đọc Giai Thoại",
    stat_btn_view_badge: "🏅 Xem Chi Tiết",
    stat_modal_empty_pins: "Chưa có địa danh nào được check-in. Hãy tuần tra thực địa và quét radar để khám phá!",
    stat_modal_empty_stories: "Chưa có giai thoại nào được mở khóa. Hãy check-in các địa danh yêu cầu để giải mã!",
    stat_modal_empty_badges: "Chưa có huy hiệu nào được mở khóa. Hãy hoàn thành các mục tiêu khám phá để thu thập!",
    stat_tag_checked_in: "✓ Đã Check-in",
    stat_tag_unlocked: "🔓 Đã mở khóa",
    stat_tag_earned: "🏅 Đã đạt",
    // Role & Permissions System (Manager, Demo User, User)
    role_manager: "Quản Lý (Manager)",
    role_demo_user: "Khách Trải Nghiệm (Demo User)",
    role_user: "Người Dùng Thực Tế (User GPS)",
    role_admin: "Quản Lý (Manager)",
    role_manager_desc: "Toàn quyền thêm/sửa/xóa nội dung CMS và di chuyển tự do bằng phím W-A-S-D.",
    role_demo_user_desc: "Trải nghiệm khám phá bản đồ bằng phím W-A-S-D trên máy tính. Không sửa đổi dữ liệu.",
    role_user_desc: "Khám phá thực địa ngoài đời bằng GPS điện thoại. Khóa phím W-A-S-D và khóa sửa nội dung.",
    role_admin_desc: "Toàn quyền thêm, chỉnh sửa và quản lý dữ liệu di sản",
    role_switch_title: "🔐 Cấp Quyền & Vai Trò Hệ Thống",
    role_switch_subtitle: "Hệ thống phân chia 3 cấp bậc rõ ràng: Quản Lý (Manager), Khách Trải Nghiệm (Demo User), và Người Dùng Thực Tế (User GPS).",
    role_current_label: "Vai trò hiện tại",
    role_btn_switch_manager: "👑 Kích hoạt Manager",
    role_btn_switch_demo: "🎮 Chuyển sang Dùng Thử",
    role_btn_switch_user: "📍 Chuyển sang Người Dùng Thực",
    role_btn_switch_admin: "👑 Đăng nhập Manager",
    role_pass_ph: "Nhập mật khẩu Quản lý:",
    role_btn_verify: "Xác nhận Manager",
    role_btn_quick_demo: "⚡ Bật Nhanh (Demo 1 chạm)",
    role_err_pass: "Mật khẩu Manager không chính xác!",
    role_toast_manager: "👑 Bạn đã kích hoạt quyền Quản Lý (Manager)!",
    role_toast_demo: "🎮 Bạn đã chuyển sang chế độ Khách Trải Nghiệm (Di chuyển phím W-A-S-D)!",
    role_toast_user: "📍 Bạn đã chuyển sang chế độ Người Dùng Thực Tế (Dùng GPS điện thoại)!",
    role_toast_admin: "👑 Bạn đã kích hoạt quyền Quản Lý (Manager)!",
    role_manager_banner: "👑 Chế độ Quản Lý: Toàn quyền thêm, sửa, xóa ghim địa danh và di chuyển tự do bằng phím W A S D.",
    role_demo_banner: "🎮 Chế độ Dùng Thử: Bạn có thể di chuyển bằng phím W A S D để trải nghiệm radar, nhưng quyền sửa dữ liệu bị khóa.",
    role_user_readonly_banner: "📍 Chế độ Thực Địa: Vui lòng sử dụng GPS điện thoại ngoài đời thực. Phím W A S D và quyền sửa dữ liệu bị khóa.",
    role_admin_banner: "👑 Chế độ Quản Lý: Toàn quyền thêm, sửa, xóa ghim địa danh và di chuyển tự do bằng phím W A S D.",
    role_btn_edit_pin: "✏️ Sửa Ghim",
    role_denied_toast: "🔒 Thao tác bị chặn: Bạn cần quyền Quản Lý (Manager) để thêm, sửa hoặc xóa ghim!",
    role_readonly_status: "🔒 Chỉ xem",
    role_demo_readonly_hint: "🎮 Chế độ Dùng Thử: Chỉ xem & Check-in (Hỗ trợ phím W-A-S-D)",
    role_user_readonly_hint: "📍 Chế độ Thực Địa: Chỉ xem & Check-in bằng GPS điện thoại",
    role_wasd_blocked_toast: "🔒 Chế độ Người Dùng: Phím di chuyển bị khóa! Vui lòng dùng định vị GPS điện thoại ngoài đời thực.",
    role_btn_close_modal: "✕ Đóng / Giữ vai trò hiện tại",
    role_status_active_mgr: "✓ Đang kích hoạt (Manager)",
    role_status_active_demo: "✓ Đang kích hoạt (Dùng Thử)",
    role_status_active_user: "✓ Đang kích hoạt (GPS Thực)",
    // Bảng Đăng Nhập & Chào Mừng (Welcome & Login Gate)
    gate_title: "Hành Trình Di Sản Việt Nam",
    gate_subtitle: "Chào mừng Nhà thám hiểm! Hãy nhập danh xưng và chọn vai trò để bắt đầu hành trình khám phá.",
    gate_name_label: "Tên Nhà Thám Hiểm:",
    gate_name_ph: "Nhập tên của bạn (VD: Minh Khang, Tuệ Nhi, Lê Lợi...)",
    gate_role_title: "Chọn Vai Trò Tham Gia:",
    gate_role_mgr_name: "Quản Lý (Manager)",
    gate_role_mgr_tag: "Nhập Mã Code",
    gate_role_mgr_desc: "Toàn quyền quản trị nội dung CMS, thấy mọi pin trên bản đồ, bộ chỉnh Radar.",
    gate_role_mgr_btn: "👑 Nhập Code & Đăng Nhập Quản Lý",
    gate_role_mgr_btn_active: "✓ Xác Nhận & Vào Quản Lý",
    gate_role_mgr_code_ph: "Nhập mã xác thực Quản lý:",
    gate_role_demo_name: "Khách Trải Nghiệm (Demo User)",
    gate_role_demo_tag: "Vào Chơi Ngay • W-A-S-D",
    gate_role_demo_desc: "Di chuyển tự do bằng phím W-A-S-D hoặc mũi tên, quét Radar mô phỏng, trải nghiệm game.",
    gate_role_demo_btn: "🎮 Vào Chơi Ngay (W-A-S-D) ➜",
    gate_role_user_name: "Người Dùng Thực Tế (User GPS)",
    gate_role_user_tag: "Yêu Cầu Vị Trí GPS",
    gate_role_user_desc: "Khám phá thực địa ngoài đời qua GPS điện thoại. Khóa phím W-A-S-D.",
    gate_role_user_btn: "📍 Cấp Quyền GPS & Vào Chơi ➜",
    gate_gps_requesting: "📡 Đang yêu cầu quyền vị trí GPS từ trình duyệt...",
    gate_gps_denied: "⚠️ Trình duyệt chưa được cấp quyền vị trí hoặc thiết bị không có GPS. Bạn có thể cho phép lại trong cài đặt, hoặc chọn 'Khách Trải Nghiệm' để chơi ngay bằng bàn phím.",
    gate_code_err: "Mã bảo mật Manager không chính xác!",
    // Snapshots & Checkpoints System
    cms_tab_backups: "💾 Điểm Phục Hồi & Bản Save",
    cms_btn_quick_save: "💾 Tạo Bản Save Ngay",
    snap_title: "Quản Lý Điểm Phục Hồi & Bản Save Dự Án",
    snap_desc: "Tạo các điểm lưu trữ an toàn trước khi chỉnh sửa. Bạn có thể khôi phục lại bất kỳ lúc nào nếu xảy ra sự cố.",
    snap_input_ph: "Nhập ghi chú cho bản save (ví dụ: Bản chuẩn trước khi sửa pin...)",
    snap_btn_create: "💾 Tạo Điểm Phục Hồi Mới",
    snap_tbl_time: "Thời gian tạo",
    snap_tbl_name: "Ghi chú bản save",
    snap_tbl_data: "Dữ liệu lưu trữ",
    snap_tbl_action: "Thao tác",
    snap_btn_restore: "⏪ Khôi phục",
    snap_btn_download: "📥 Tải JSON",
    snap_confirm_restore: "Bạn có chắc chắn muốn khôi phục lại bản save này? Dữ liệu hiện tại sẽ được thay thế bằng dữ liệu của bản save đã chọn.",
    snap_confirm_delete: "Bạn có chắc muốn xóa bản save này?",
    snap_toast_created: "💾 Đã tạo điểm phục hồi thành công!",
    snap_toast_restored: "✓ Đã khôi phục dự án về bản save thành công!",
    snap_empty: "Chưa có bản save nào. Hãy bấm 'Tạo Điểm Phục Hồi Mới' để lưu lại trạng thái dự án hiện tại!",
    snap_git_guide_title: "🛡️ Hướng Dẫn Tạo Bản Save Mã Nguồn (Tránh Lỗi Phá Hỏng Dự Án)"
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
    profile_region_sub: "@heritage_seeker • Region: Thang Long / Southern Vietnam",
    profile_quote: "\"Our people must know our history, to deeply understand the origins of Vietnam.\"",
    profile_exp: "Exploration Experience Points",
    stat_pins: "Places Checked In",
    stat_pins_tooltip: "Click to view checked-in locations",
    stat_stories: "Tales Unlocked",
    stat_badges: "Badges Owned",
    stat_km: "Km Explored",
    recent_logs: "Recent Journey Logs",
    map_radar_pos_lbl: "Radar Position:",
    map_nearest_pin_lbl: "Nearest Pin:",
    role_btn_change: "Switch ➜",
    radar_tuner_btn: "Tune Radar",
    radar_tuner_tooltip: "Adjust Radar scan & check-in distances",
    radar_tuner_title: "🎚️ Radar Distance Tuner (Manager Only)",
    radar_tuner_cms_sub: "Test different discovery & check-in radii to find optimal balance. Completely hidden from players.",
    radar_tuner_view_map: "🧭 View on Map",
    radar_discovery_lbl: "Discovery Scan Ring",
    radar_interaction_lbl: "Fixed Check-in Ring",
    radar_tuner_reset: "↺ Default",
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
    quick_story_btn_save: "💾 Save Tale Now",
    // Location Radar Modal (English)
    modal_cat_landmark: "🏛️ HERITAGE LANDMARK",
    modal_cat_battlefield: "⚔️ HISTORIC BATTLEFIELD",
    modal_cat_living: "🎙️ LIVING WITNESS / MEMORY",
    modal_cat_story: "📖 MEMORY FRAGMENT & EVENT",
    modal_cat_culture: "🎨 CULTURE & TRADITIONAL CRAFT",
    modal_dist_prefix: "Distance: ",
    modal_checkin_radius_lbl: "Allowed Check-in Radius:",
    modal_checkin_radius_unit: "meters",
    modal_btn_checkin_ready: "Check-in Now to Discover & Unlock Tales!",
    modal_btn_checkin_dist: "Cannot Check-in Yet (remaining ",
    modal_btn_checkin_done: "✓ Already Checked In",
    modal_already_checked_title: "✓ Explored & Checked In",
    modal_already_checked_desc: "You have visited this historical site and successfully unlocked its tales!",
    modal_toast_already_checked_in: "✓ You have already checked in at this location!",
    modal_toast_out_of_range: "📍 You are still outside the check-in range for this location!",
    modal_btn_delete_pin: "🗑️ Delete This Pin",
    modal_confirm_delete_pin: "Confirm deletion of landmark pin:",
    modal_media_video_title: "🎬 Historical Documentary Footage:",
    modal_media_video_desc: "Field historical video played directly.",
    modal_media_audio_title: "🎙️ Living Witness Testimony & Historical Audio:",
    modal_media_audio_desc: "Audio memories and historical recordings.",
    modal_media_yt_title: "📺 YouTube Documentary Video:",
    modal_media_yt_desc: "Historical narrated video embedded directly.",
    modal_media_living_title: "🎙️ Memories & Living Witness Testimonies:",
    modal_media_living_desc: "Living testimonies recorded directly at this historical site.",
    modal_media_btn_audio: "▶️ Listen to witness recording (30s)",
    modal_media_btn_ext: "🔗 Open external documentary link",
    modal_media_btn_attach: "🔗 Open attached historical media",
    modal_rarity_common: "Common",
    modal_rarity_rare: "Rare",
    modal_rarity_epic: "Epic",
    cms_pin_rarity_rare: "Rare - Radar 1.2km, Check-in 80m",
    cms_pin_rarity_epic: "Epic - Radar 1.5km, Check-in 100m",
    modal_rarity_uncommon: "Uncommon",
    modal_rarity_legendary: "Legendary",
    modal_rarity_event: "Limited Event",
    cms_pin_name_vi_lbl: "Landmark Name (Vietnamese)",
    cms_pin_name_en_lbl: "Landmark Name (English)",
    cms_pin_name_en_ph: "e.g., Imperial Citadel of Thang Long, Bach Dang Victory Site...",
    cms_pin_desc_vi_lbl: "Historical Summary (Vietnamese)",
    cms_pin_desc_en_lbl: "Historical Summary (English)",
    cms_pin_desc_en_ph: "Historical background, significance, glorious feats in English...",
    radar_quick_add_pin: "Add New Landmark",
    figures_search_ph: "🔍 Search heroes, dynasties...",
    // Figure Form
    cms_fig_name_vi_lbl: "Hero / Figure Name (Vietnamese)",
    cms_fig_name_en_lbl: "Hero / Figure Name (English)",
    cms_fig_name_en_ph: "e.g., General Tran Hung Dao, Emperor Quang Trung...",
    cms_fig_role_vi_lbl: "Title / Role (Vietnamese)",
    cms_fig_role_en_lbl: "Title / Role (English)",
    cms_fig_role_en_ph: "e.g., Supreme Commander, Emperor, Revolutionary Queen...",
    cms_fig_dynasty_vi_lbl: "Era / Dynasty (Vietnamese)",
    cms_fig_dynasty_en_lbl: "Era / Dynasty (English)",
    cms_fig_dynasty_en_ph: "e.g., Tran Dynasty, Tay Son Dynasty...",
    cms_fig_quote_vi_lbl: "Historic Quote (Vietnamese)",
    cms_fig_quote_en_lbl: "Historic Quote (English)",
    cms_fig_quote_en_ph: "e.g., 'If your Majesty wishes to surrender, please cut off my head first!'",
    cms_fig_bio_vi_lbl: "Heroic Biography (Vietnamese)",
    cms_fig_bio_en_lbl: "Heroic Biography (English)",
    cms_fig_bio_en_ph: "Glorious feats, strategic triumphs, lifelong devotion in English...",
    // Dynamic Figure Story Rows
    cms_fig_story_title_vi_lbl: "Tale Title (Vietnamese)",
    cms_fig_story_title_en_lbl: "Tale Title (English)",
    cms_fig_story_title_en_ph: "e.g., The Wooden Stakes Strategy of Bach Dang River...",
    cms_fig_story_content_vi_lbl: "Story Narrative (Vietnamese)",
    cms_fig_story_content_en_lbl: "Story Narrative (English)",
    cms_fig_story_content_en_ph: "Historical narrative, military strategy in English...",
    // Subtab 3 Story Form
    cms_story_title_vi_lbl: "Tale / Event Title (Vietnamese)",
    cms_story_title_en_lbl: "Tale / Event Title (English)",
    cms_story_title_en_ph: "e.g., The Sacred Poem of Nhu Nguyet River, The Call to Arms...",
    cms_story_content_vi_lbl: "Story Narrative (Vietnamese)",
    cms_story_content_en_lbl: "Story Narrative (English)",
    cms_story_content_en_ph: "Historical events, military strategy, hero feats in English...",
    // Quick Story Modal
    quick_story_title_vi_lbl: "Tale Title (Vietnamese)",
    quick_story_title_en_lbl: "Tale Title (English)",
    quick_story_title_en_ph: "e.g., Proclamation to Officers, Binh Than Conference...",
    quick_story_content_vi_lbl: "Full Narrative (Vietnamese)",
    quick_story_content_en_lbl: "Full Narrative (English)",
    quick_story_content_en_ph: "Historical events, military strategy, hero feats in English...",
    // Subtab 4 Badges Form
    cms_badge_name_vi_lbl: "Badge Name (Vietnamese)",
    cms_badge_name_en_lbl: "Badge Name (English)",
    cms_badge_name_en_ph: "e.g., Knight of Bach Dang River, Spirit of Thang Long...",
    cms_badge_cat_vi_lbl: "Category (Vietnamese)",
    cms_badge_cat_en_lbl: "Category (English)",
    cms_badge_cat_en_ph: "e.g., Heroic Spirits, Living Witnesses, Vietnam Heritage...",
    cms_badge_lore_vi_lbl: "Lore & Significance (Vietnamese)",
    cms_badge_lore_en_lbl: "Lore & Significance (English)",
    cms_badge_lore_en_ph: "Historical background, significance and prestige of this badge in English...",
    cms_badge_criteria_vi_lbl: "Requirement Summary (Vietnamese)",
    cms_badge_criteria_en_lbl: "Requirement Summary (English)",
    cms_badge_criteria_en_ph: "Auto-generated in English or custom text...",
    celebration_title: "DISCOVERY SUCCESSFUL!",
    celebration_exp: "Exploration Experience: +100 EXP",
    celebration_btn_continue: "Continue Journey",
    sim_toggle_btn: "Test Mobile View",
    sim_btn_desktop: "Return to Desktop",
    sim_bar_title: "iPhone 15 Pro • 390 × 844",
    sim_bar_title_max: "iPhone 15 Pro Max • 430 × 932",
    sim_btn_size: "Toggle Device Size",
    sim_toast_on: "📱 Mobile simulator activated! You can interact directly with the phone mockup.",
    sim_toast_off: "💻 Returned to desktop view!",
    mob_nav_radar: "Radar",
    mob_nav_figures: "Figures",
    mob_nav_badges: "Badges",
    mob_nav_profile: "Profile",
    mob_nav_cms: "CMS Portal",
    stat_hint_view: "Click to view details ➜",
    stat_modal_pins_title: "Checked-in Heritage Locations",
    stat_modal_pins_desc: "List of historical landmarks, battlefields, and sites you have personally visited and scanned.",
    stat_modal_stories_title: "Unlocked Heritage Stories",
    stat_modal_stories_desc: "Precious historical records and hero feats you have decoded through field exploration.",
    stat_modal_badges_title: "Earned Heritage Badges",
    stat_modal_badges_desc: "Medals and honors recognizing your journey preserving national heritage.",
    stat_modal_km_title: "Exploration Distance & Journey",
    stat_modal_km_desc: "Summary of your field patrol distance, explorer level progress, and expedition milestones.",
    stat_btn_view_radar: "🧭 View on Radar",
    stat_btn_read_story: "📖 Read Story",
    stat_btn_view_badge: "🏅 View Details",
    stat_modal_empty_pins: "No locations checked in yet. Patrol the field and scan radar to discover heritage sites!",
    stat_modal_empty_stories: "No stories unlocked yet. Check in at required landmarks to decode historical stories!",
    stat_modal_empty_badges: "No badges earned yet. Complete exploration criteria to collect badges!",
    stat_tag_checked_in: "✓ Checked-in",
    stat_tag_unlocked: "🔓 Unlocked",
    stat_tag_earned: "🏅 Earned",
    // Role & Permissions System (Manager, Demo User, User)
    role_manager: "Manager",
    role_demo_user: "Demo Explorer (Demo User)",
    role_user: "Field Explorer (GPS User)",
    role_admin: "Manager",
    role_manager_desc: "Full privileges to add/edit/delete CMS content and freely move with W-A-S-D keys.",
    role_demo_user_desc: "Explore map using W-A-S-D keys on computer. CMS modifications are locked.",
    role_user_desc: "Explore outdoors in the real world via phone GPS. W-A-S-D keys and CMS edits are locked.",
    role_admin_desc: "Full privileges to add/edit/delete CMS content and freely move with W-A-S-D keys.",
    role_switch_title: "🔐 System Role & Permissions",
    role_switch_subtitle: "The platform has 3 clearly defined roles: Manager, Demo User (WASD Explorer), and Field Explorer (Phone GPS).",
    role_current_label: "Current Role",
    role_btn_switch_manager: "👑 Activate Manager",
    role_btn_switch_demo: "🎮 Switch to Demo User",
    role_btn_switch_user: "📍 Switch to Field User",
    role_btn_switch_admin: "👑 Activate Manager",
    role_pass_ph: "Enter Manager Passcode:",
    role_btn_verify: "Verify Manager",
    role_btn_quick_demo: "⚡ Quick Demo (1-Click)",
    role_err_pass: "Incorrect Manager passcode!",
    role_toast_manager: "👑 Switched to Manager role (CMS edit + W-A-S-D movement)!",
    role_toast_demo: "🎮 Switched to Demo User role (W-A-S-D movement enabled, CMS locked)!",
    role_toast_user: "📍 Switched to Field Explorer role (Phone GPS enabled, W-A-S-D locked)!",
    role_toast_admin: "👑 Switched to Manager role (CMS edit + W-A-S-D movement)!",
    role_manager_banner: "👑 Manager Mode: Full access to add, edit, delete pins and move freely with W A S D keys.",
    role_demo_banner: "🎮 Demo Mode: You can move with W A S D keys to test radar, but data editing is locked.",
    role_user_readonly_banner: "📍 Field Mode: Please use your phone GPS outdoors. W A S D movement and editing are locked.",
    role_admin_banner: "👑 Manager Mode: Full access to add, edit, delete pins and move freely with W A S D keys.",
    role_btn_edit_pin: "✏️ Edit Pin",
    role_denied_toast: "🔒 Access Denied: Manager privileges required to add, edit, or delete data!",
    role_readonly_status: "🔒 Read-only",
    role_demo_readonly_hint: "🎮 Demo Mode: Explore & Check-in only (W-A-S-D enabled)",
    role_user_readonly_hint: "📍 Field Mode: Explore & Check-in via phone GPS only",
    role_wasd_blocked_toast: "🔒 Field User Mode: Key movement is locked! Please use your phone GPS outdoors.",
    role_btn_close_modal: "✕ Close / Keep Current Role",
    role_status_active_mgr: "✓ Currently Active (Manager)",
    role_status_active_demo: "✓ Currently Active (Demo User)",
    role_status_active_user: "✓ Currently Active (GPS User)",
    // Welcome & Login Gate System
    gate_title: "Vietnam Heritage Expedition",
    gate_subtitle: "Welcome Explorer! Enter your moniker and select your role to embark on the journey.",
    gate_name_label: "Explorer Name:",
    gate_name_ph: "Enter your name (e.g. Leo, Alex, Heritage Keeper...)",
    gate_role_title: "Select Starting Role:",
    gate_role_mgr_name: "Manager",
    gate_role_mgr_tag: "Passcode Required",
    gate_role_mgr_desc: "Full CMS content management, inspect all map pins, and tune radar parameters.",
    gate_role_mgr_btn: "👑 Enter Code & Login as Manager",
    gate_role_mgr_btn_active: "✓ Verify & Enter as Manager",
    gate_role_mgr_code_ph: "Enter Manager Passcode:",
    gate_role_demo_name: "Demo User",
    gate_role_demo_tag: "Play Instantly • W-A-S-D",
    gate_role_demo_desc: "Freely explore the map using W-A-S-D or arrow keys, test radar & unlock history.",
    gate_role_demo_btn: "🎮 Start Playing Now (W-A-S-D) ➜",
    gate_role_user_name: "Field Explorer (GPS)",
    gate_role_user_tag: "Requires GPS Access",
    gate_role_user_desc: "Explore outdoors in real life using smartphone GPS. W-A-S-D movement locked.",
    gate_role_user_btn: "📍 Grant GPS & Begin Expedition ➜",
    gate_gps_requesting: "📡 Requesting GPS location permission from browser...",
    gate_gps_denied: "⚠️ GPS permission denied or unavailable. Please allow location access or choose 'Demo User' to play with keyboard.",
    gate_code_err: "Incorrect Manager passcode!",
    // Snapshots & Checkpoints System
    cms_tab_backups: "💾 Snapshots & Backups",
    cms_btn_quick_save: "💾 Create Save Point",
    snap_title: "Project Checkpoints & Backup Snapshots",
    snap_desc: "Create safe checkpoints before modifying data. You can restore any previous save point at any time.",
    snap_input_ph: "Enter note for this save (e.g. Stable checkpoint before editing...)",
    snap_btn_create: "💾 Create New Checkpoint",
    snap_tbl_time: "Timestamp",
    snap_tbl_name: "Save Note",
    snap_tbl_data: "Stored Data",
    snap_tbl_action: "Actions",
    snap_btn_restore: "⏪ Restore",
    snap_btn_download: "📥 Download JSON",
    snap_confirm_restore: "Are you sure you want to restore this checkpoint? Current data will be replaced by the selected snapshot.",
    snap_confirm_delete: "Are you sure you want to delete this snapshot?",
    snap_toast_created: "💾 Checkpoint created successfully!",
    snap_toast_restored: "✓ Project restored to selected checkpoint successfully!",
    snap_empty: "No snapshots saved yet. Click 'Create New Checkpoint' to save current project state!",
    snap_git_guide_title: "🛡️ Source Code Backup Guide (Prevent Breaking Project)"
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
  document.querySelectorAll('.lang-btn, .mob-lang-btn, .header-lang-btn').forEach(btn => {
    if (btn.id.includes(lang) || btn.innerText.trim().toLowerCase() === lang) {
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

  // Update simulator button label and title if present
  const toggleLabel = document.getElementById("device-toggle-label");
  if (toggleLabel) {
    toggleLabel.innerText = isSimulatorMode ? t("sim_btn_desktop") : t("sim_toggle_btn");
  }
  const sidebarLabel = document.getElementById("sidebar-sim-label");
  if (sidebarLabel) {
    sidebarLabel.innerText = isSimulatorMode ? t("sim_btn_desktop") : t("sim_toggle_btn");
  }
  const simBarTitle = document.getElementById("sim-bar-title");
  if (simBarTitle) {
    simBarTitle.innerText = isSimulatorMax ? t("sim_bar_title_max") : t("sim_bar_title");
  }

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

  // If location modal is open, re-render it in the new language
  if (selectedPinForModal && document.getElementById("location-modal") && document.getElementById("location-modal").classList.contains("active")) {
    openLocationModal(selectedPinForModal);
  }

  // If badge details modal is open, re-render it in the new language
  if (selectedBadgeIdForModal && document.getElementById("badge-details-modal") && document.getElementById("badge-details-modal").classList.contains("active")) {
    openBadgeDetailsModal(selectedBadgeIdForModal);
  }

  // If story viewer modal is open, re-render it in the new language
  if (selectedStoryIdForModal && document.getElementById("story-modal") && document.getElementById("story-modal").classList.contains("active")) {
    openStoryModal(selectedStoryIdForModal);
  }

  // If profile stat modal is open, re-render it in the new language
  if (currentProfileStatType && document.getElementById("profile-stat-modal") && document.getElementById("profile-stat-modal").classList.contains("active")) {
    openProfileStatModal(currentProfileStatType);
  }

  // Re-render views
  refreshAllViews();
  updateRoleUI();
  if (map) updatePlayerRadarMarker();
  updateNearestUnscannedPinDisplay();
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
    const titleViLbl = row.querySelector('.fig-story-lbl-title-vi');
    if (titleViLbl) titleViLbl.innerHTML = `${t('cms_fig_story_title_vi_lbl')} <span class="req">*</span>`;
    const titleInp = row.querySelector('.fig-story-input-title');
    if (titleInp) titleInp.placeholder = t('cms_fig_story_title_ph');
    const titleEnLbl = row.querySelector('.fig-story-lbl-title-en');
    if (titleEnLbl) titleEnLbl.innerText = t('cms_fig_story_title_en_lbl');
    const titleEnInp = row.querySelector('.fig-story-input-title-en');
    if (titleEnInp) titleEnInp.placeholder = t('cms_fig_story_title_en_ph');
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
    const contentViLbl = row.querySelector('.fig-story-lbl-content-vi');
    if (contentViLbl) contentViLbl.innerText = t('cms_fig_story_content_vi_lbl');
    const contentInp = row.querySelector('.fig-story-input-content');
    if (contentInp) contentInp.placeholder = t('cms_fig_story_content_ph');
    const contentEnLbl = row.querySelector('.fig-story-lbl-content-en');
    if (contentEnLbl) contentEnLbl.innerText = t('cms_fig_story_content_en_lbl');
    const contentEnInp = row.querySelector('.fig-story-input-content-en');
    if (contentEnInp) contentEnInp.placeholder = t('cms_fig_story_content_en_ph');
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
  "pins": [
    {
      "id": "pin-1794545263467",
      "name": "Hầm B – Cơ sở in ấn của Hội Ủng hộ Vệ quốc đoàn",
      "name_en": "B Bunker – Secret Printing Base of the National Defense Guard Support Association",
      "category": "landmark",
      "rarity": "uncommon",
      "lat": 10.7618,
      "lng": 106.6705,
      "discovery_radius": 900,
      "interaction_radius": 80,
      "icon": "💣",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Năm 1952, Sài Gòn đầy mạng lưới an ninh chìm của đối phương. Hội Ủng hộ Vệ quốc đoàn cần một nơi bí mật để in tài liệu, truyền đơn và họp. Hội mua một căn nhà ở vị trí dễ quan sát xung quanh rồi biến nó thành cơ sở làm đàn: ngày nào thợ cũng đục đẽo như một xưởng đàn bình thường. Bên dưới, các chiến sĩ đào một căn hầm đủ chứa 30 người.\nKhó nhất là đất đào lên không thể đổ đâu cũng được. Theo lời ông Lê Văn Quang (Ba Quang), người trực tiếp tham gia, chi bộ của Hội nghĩ ra cách nhờ một chiếc xe tải ký gửi ở nhà để mỗi đêm chở đất đi. Gần bốn tháng, hơn 70 m³ đất được đưa ra ngoài mà không bị phát hiện. Từ tháng 7/1952, hầm được dùng để in ấn và hội họp, và đến cuối năm 1957 thì ngừng hoạt động vì an ninh, khi một cơ sở khác của Hội bị lộ. Hầm sau đó bị lấp đất (1959) và được giữ nguyên trạng đến khi khai quật. Ngày 9/1/1955, hầm còn là nơi diễn ra đám cưới của hai đồng chí. Năm 1988, hầm được công nhận là di tích quốc gia.",
      "desc_en": "In 1952, amid tight covert enemy surveillance in Saigon, the National Defense Guard Support Association established a secret base disguised as a musical instrument workshop. Beneath the floor, soldiers excavated a hidden bunker capable of sheltering 30 people, discreetly removing over 70 m³ of soil over nearly four months using a parked truck. Operating from July 1952 for clandestine printing and meetings until late 1957, the site even hosted a comrade wedding on January 9, 1955. It was sealed in 1959, later preserved, and officially recognized as a National Historical Relic in 1988."
    },
    {
      "id": "pin-1794548816329",
      "name": "Hầm bí mật chứa vũ khí – Nhà ông Đỗ Văn Căn",
      "name_en": "Secret Weapons Cache – Residence of Do Van Can",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 10.7695,
      "lng": 106.6748,
      "discovery_radius": 1800,
      "interaction_radius": 80,
      "icon": "💣",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Giữa năm 1964, đơn vị bảo đảm chiến đấu của Biệt động thành (J9 – T700) chọn một căn nhà nhỏ trong hẻm đường 3/2 làm cơ sở. Vị trí này gần nhiều cơ quan đầu não và khu quân sự của Mỹ và chính quyền Sài Gòn, thuận lợi cho việc chuẩn bị nhiệm vụ. Theo phân công, ông Đỗ Văn Căn (Ba Mủ), người làm nghề ép đế giày, đưa cả gia đình về ở. Ban ngày tiếng máy ép đế giày vang đều khiến căn nhà trông như một cơ sở sản xuất bình thường.\nBan đêm, ông Ba Mủ cùng đồng đội đào hầm ngay dưới nền phòng khách, đất được đưa ra ngoài từng ít một để tránh bị chú ý. Sau 25 đêm, tháng 5/1965 hầm hoàn thành; lối xuống nằm dưới bộ bàn ghế giữa phòng. Từ tháng 7/1965, vũ khí được chuyển về liên tục: 7 khẩu AK, khoảng 21.000 viên đạn, 50 quả lựu đạn, 50 kg thuốc nổ cùng nhiều quân trang và vật tư y tế. Số vũ khí này được chuẩn bị cho các hoạt động của Biệt động Sài Gòn, và hầm được giữ bí mật đến Chiến dịch Hồ Chí Minh tháng 4/1975. Năm 1998, hầm được xếp hạng di tích quốc gia.",
      "desc_en": "In mid-1964, the J9–T700 combat support unit of the Saigon Commandos acquired a discreet house in an alley off 3/2 Street. Commando soldier Do Van Can (Ba Mu) moved his family in, masking clandestine operations under the sound of a shoe-sole pressing machine. Over 25 nights, they excavated a secret bunker beneath the living room floor, completed in May 1965. Starting in July 1965, it held extensive arsenals—including AK rifles, 21,000 rounds of ammunition, grenades, and 50 kg of explosives—safeguarded until the April 1975 victory. It was designated a National Historical Relic in 1998."
    },
    {
      "id": "pin-1794548888256",
      "name": "Việt Nam Quốc Tự",
      "name_en": "Vietnam National Buddhist Temple (Viet Nam Quoc Tu)",
      "category": "landmark",
      "rarity": "common",
      "lat": 10.77115,
      "lng": 106.67322,
      "discovery_radius": 600,
      "interaction_radius": 50,
      "icon": "🏛️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Việt Nam Quốc Tự của Giáo hội Phật giáo Việt Nam Thống Nhất được xây dựng vào khoảng 1963–1964, trên khu đất rộng hơn 4 ha. Sau năm 1975, phần lớn khuôn viên được dùng cho những mục đích khác, trong đó có khu vực Kỳ Hòa gồm nhà hát và trụ sở ủy ban quận. Năm 1993, đơn đề nghị trả lại đất được chấp thuận, nhưng diện tích còn lại chỉ khoảng 3.712 m². Sau nhiều năm trùng tu, chùa được khánh thành lại vào tháng 11/2017. Điểm nhấn của chùa là bảo tháp 13 tầng cao 63 m, được mô tả là cao nhất TP.HCM.",
      "desc_en": "Built between 1963 and 1964 by the Unified Buddhist Sangha of Vietnam across more than 4 hectares, Viet Nam Quoc Tu served as a prominent religious center. Following 1975, parts of its grounds were repurposed, and after reclaiming land in 1993 with around 3,712 m², the temple underwent major reconstruction, inaugurating anew in November 2017. Its standout architectural landmark is the 13-story, 63-meter-tall stupa, recognized as the tallest Buddhist stupa in Ho Chi Minh City."
    },
    {
      "id": "pin-1794549001001",
      "name": "Chùa Ấn Quang",
      "name_en": "An Quang Pagoda",
      "category": "landmark",
      "rarity": "uncommon",
      "lat": 10.76585,
      "lng": 106.67179,
      "discovery_radius": 900,
      "interaction_radius": 50,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Chùa Ấn Quang được xây dựng năm 1948 (một số danh sách ghi 1949). Chùa là một trung tâm quan trọng của Phật giáo hiện đại ở miền Nam, từng là nơi đặt trường đào tạo Phật học và cơ quan lãnh đạo của Giáo hội Phật giáo Việt Nam Thống Nhất. Ngày 12/7/2005, UBND TP.HCM công nhận chùa là di tích lịch sử – văn hóa cấp thành phố theo Quyết định 120/2005/QĐ-UBND.",
      "desc_en": "Constructed in 1948, An Quang Pagoda became a leading center for modern Southern Vietnamese Buddhism, housing Buddhist education institutes and key leadership headquarters of the Unified Buddhist Sangha of Vietnam. On July 12, 2005, the People's Committee of Ho Chi Minh City recognized the pagoda as a City-level Historical and Cultural Relic under Decision No. 120/2005/QD-UBND."
    },
    {
      "id": "pin-1794549062917",
      "name": "Công viên Lê Thị Riêng",
      "name_en": "Le Thi Rieng Park",
      "category": "landmark",
      "rarity": "common",
      "lat": 10.7851,
      "lng": 106.6644,
      "discovery_radius": 600,
      "interaction_radius": 50,
      "icon": "🌳",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Công viên Lê Thị Riêng được xây trên nền nghĩa địa Đô Thành, thường gọi là nghĩa địa Chí Hòa – Chợ Quán. Đây từng là nơi chôn cất phần lớn người bình dân của Sài Gòn – Gia Định, cùng nhiều nấm mồ không tên của lính chết trận không người thân nhận xác. Nghĩa địa rộng khoảng 25–30 ha tùy nguồn; từ năm 1978 đến năm 1983, khu này được giải tỏa, quy hoạch để xây dựng công viên.\nNơi này gắn với Tổng Bí thư Trần Phú. Ông bị bắt ngày 18/4/1931 và mất ngày 6/9/1931 tại Nhà thương Chợ Quán. Gần 68 năm sau, ngày 5/1/1999, hài cốt ông được khai quật tại công viên này; ngày 12/1/1999, sau lễ truy điệu, hài cốt được đưa về an táng ở Đức Thọ, Hà Tĩnh.\nNăm 2026, công viên trở thành nơi tìm kiếm, quy tập hài cốt liệt sĩ hy sinh trong Tổng tiến công và nổi dậy Tết Mậu Thân 1968. Sau hội thảo xác minh ngày 8/6, lực lượng chức năng bắt đầu tìm kiếm từ ngày 23/6, và lễ triển khai chính thức diễn ra ngày 6/7. Đợt 1 (23/6–14/10) quy tập được 731 hài cốt (698 hài cốt riêng lẻ và 33 hài cốt trong một mộ tập thể), được an táng tại Nghĩa trang Liệt sĩ TP.HCM ngày 14/10/2026. Đợt 2 bắt đầu từ ngày 15/10; tính đến hết ngày 28/10/2026, tổng số hài cốt đã quy tập được là 852 và công việc vẫn đang tiếp diễn.",
      "desc_en": "Established on the former grounds of the 25–30-hectare Do Thanh Cemetery (Chi Hoa – Cho Quan), Le Thi Rieng Park was cleared and developed between 1978 and 1983. The site is intimately linked to General Secretary Tran Phu, whose remains were excavated here on January 5, 1999, before being reinterred in his hometown. In 2026, the park became a major site for searching and repatriating martyrs' remains from the 1968 Tet Offensive, gathering over 850 remains."
    },
    {
      "id": "pin-1794549129587",
      "name": "Dinh Độc Lập",
      "name_en": "Independence Palace",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 10.77694,
      "lng": 106.69528,
      "discovery_radius": 1800,
      "interaction_radius": 50,
      "icon": "🏛️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Dinh Độc Lập nằm trên khu đất rộng 12 ha giữa trung tâm Sài Gòn. Từ năm 1868, người Pháp xây tại đây dinh của Thống đốc Nam Kỳ, về sau gọi là Dinh Norodom rồi Dinh Toàn quyền Đông Dương. Năm 1954, dinh được bàn giao cho chính quyền Sài Gòn; từ năm 1955, dinh mang tên Dinh Độc Lập. Ngày 27/2/1962, hai phi công của chính quyền này ném bom làm hư hại nặng dinh cũ. Công trình bị san bằng, và dinh mới do kiến trúc sư Ngô Viết Thụ thiết kế được khởi công ngày 1/7/1962, khánh thành ngày 31/10/1966. Mặt bằng dinh gợi hình chữ “Cát” (tốt lành), kết hợp kiến trúc hiện đại với tinh thần truyền thống phương Đông.\nTrưa 30/4/1975, xe tăng của quân giải phóng húc cổng dinh, lá cờ Mặt trận Dân tộc Giải phóng được kéo lên nóc dinh và Tổng thống Dương Văn Minh tuyên bố đầu hàng, đánh dấu sự kết thúc cuộc chiến tranh. Từ 16 đến 21/11/1975, Hội nghị Hiệp thương chính trị thống nhất hai miền diễn ra tại đây, nên dinh được đổi tên thành Hội trường Thống Nhất. Năm 2009, Thủ tướng Chính phủ xếp hạng dinh là di tích quốc gia đặc biệt.",
      "desc_en": "Spanning 12 hectares in central Saigon, the site originally housed Norodom Palace (built 1868) and was renamed Independence Palace in 1955. Following heavy bombing damage in 1962, the current landmark designed by architect Ngo Viet Thu was constructed between 1962 and 1966, subtly shaped in Chinese calligraphy to symbolize good fortune. On April 30, 1975, liberation tanks breached its gates, marking the end of the war. Designated a Special National Relic in 2009, it remains a premier historical symbol."
    },
    {
      "id": "pin-hamtranvanlai",
      "name": "Hầm bí mật chứa vũ khí – Nhà ông Trần Văn Lai (287/70 Nguyễn Đình Chiểu)",
      "name_en": "Secret Weapons Cache – Residence of Tran Van Lai (287/70 Nguyen Dinh Chieu)",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 10.7711,
      "lng": 106.6828,
      "discovery_radius": 1800,
      "interaction_radius": 120,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Năm 1966, ông Trần Văn Lai (Năm Lai) – nhà thầu khoán chuyên trang trí nội thất, từng làm cho Dinh Độc Lập – mua liền ba căn nhà 287/68, 287/70 và 287/72 trong hẻm đường Nguyễn Đình Chiểu (nay thuộc phường Bàn Cờ). Dưới vỏ bọc người giàu có, ông cùng gia đình đào hầm chứa vũ khí cho Biệt động Sài Gòn, đất đào được đưa đi lặng lẽ để tránh bị phát hiện.\nHầm dài khoảng 8 m (một số nguồn ghi hơn 10 m), rộng 2 m, sâu 2,5 m, có 4 lỗ thoát hiểm thông ra hệ thống cống. Hầm từng cất giấu gần 2 tấn vũ khí; đêm giao thừa Tết Mậu Thân 1968, các chiến sĩ Đội 5 Biệt động nhận súng AK, B40, thuốc nổ tại đây để xuất kích đánh vào Dinh Độc Lập. Nơi này được xếp hạng di tích lịch sử – văn hóa cấp quốc gia năm 1988 (Quyết định 1288-VH/QĐ).",
      "desc_en": "In 1966, Tran Van Lai (Nam Lai), a wealthy contractor who had worked on interior decoration for the Independence Palace, bought three adjoining houses (287/68, 287/70 and 287/72) in an alley off Nguyen Dinh Chieu Street. Under this cover, he and his family dug a hidden bunker for the Saigon Commandos, quietly removing the soil at night. The bunker is about 8 m long (some sources say over 10 m), 2 m wide and 2.5 m deep, with four escape hatches leading to the sewer system. It once held nearly 2 tons of weapons; on the eve of the 1968 Tet Offensive, Team 5 collected AK rifles, B40 launchers and explosives here before striking the Independence Palace. It was designated a National Historical Relic in 1988 (Decision 1288-VH/QD)."
    },
    {
      "id": "pin-photbinh",
      "name": "Quán Phở Bình – Sở chỉ huy tiền phương Phân khu 6",
      "name_en": "Pho Binh Restaurant – Forward Command Post of Sub-zone 6",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7905,
      "lng": 106.6872,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "🍲",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Quán phở Bắc của ông Ngô Toại (Ngô Văn Toại), mở từ thập niên 1960 tại số 7 Lý Chính Thắng (xưa là đường Yên Đổ). Tầng trệt luôn đông khách, có cả cảnh sát, sĩ quan chế độ cũ và cố vấn Mỹ – tấm bình phong tự nhiên che mắt mật thám.\nCả tầng lầu phía trên được chọn làm Sở chỉ huy tiền phương của Phân khu 6 trong cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân 1968. Các lãnh đạo biệt động họp bàn, nhận mật lệnh và điều phối mũi tấn công vào Dinh Độc Lập, Tòa Đại sứ Mỹ, Đài Phát thanh Sài Gòn. Sau đợt 1, cơ sở bị lộ, gia đình ông Ngô Toại bị bắt giam, tra tấn nhưng vẫn giữ vững khí tiết. Ngày nay tầng trệt vẫn bán phở, lầu 1 là không gian trưng bày tư liệu.",
      "desc_en": "Owned by Ngo Toai, this Northern-style pho shop at 7 Ly Chinh Thang Street opened in the 1960s. Its busy ground floor, serving police officers, officers of the former regime and American advisors, was a natural screen against secret agents. The entire upper floor served as the Forward Command Post of Sub-zone 6 during the 1968 Tet Offensive, where commando leaders met, received secret orders and coordinated attacks on the Independence Palace, the US Embassy and Saigon Radio Station. After the first wave, the base was exposed and Ngo Toai's family was arrested and tortured, yet held firm. Today the restaurant still serves pho downstairs, while the first floor is an exhibition space."
    },
    {
      "id": "pin-chuaxaloi",
      "name": "Chùa Xá Lợi",
      "name_en": "Xa Loi Pagoda",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7781,
      "lng": 106.6867,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Chùa Xá Lợi do Hội Phật học Nam Việt khởi công ngày 5/8/1956, khánh thành ngày 2/5/1958, theo thiết kế của hai kiến trúc sư Trần Văn Đường và Đỗ Bá Vinh, nhằm tôn thờ xá lợi Phật Thích Ca. Tháp chuông 7 tầng hoàn thành năm 1961, cao 32 m, treo quả đại hồng chung nặng 2 tấn đúc theo mẫu chuông chùa Thiên Mụ.\nChùa là tâm điểm của phong trào đấu tranh Phật giáo năm 1963. Đêm 20 rạng sáng 21/8/1963, lực lượng đặc biệt của chính quyền Ngô Đình Diệm đột kích chùa, bắt giữ hàng trăm tăng ni – một bước ngoặt dẫn đến sự sụp đổ của chế độ Đệ nhất Cộng hòa vào tháng 11/1963. Thư viện chùa lưu giữ hơn 3.000 đầu sách Phật học và 2 bộ Đại tạng kinh chữ Hán.",
      "desc_en": "Xa Loi Pagoda was begun by the Southern Vietnam Buddhist Studies Association on August 5, 1956 and inaugurated on May 2, 1958, designed by architects Tran Van Duong and Do Ba Vinh to enshrine the relics of Shakyamuni Buddha. Its 7-story, 32 m bell tower (1961) holds a 2-ton bronze bell modeled on the one at Thien Mu Pagoda. The pagoda was the focal point of the 1963 Buddhist movement: on the night of August 20–21, 1963, special forces of the Ngo Dinh Diem government raided it and arrested hundreds of monks and nuns, a turning point that led to the fall of the First Republic in November 1963. Its library holds over 3,000 Buddhist titles and two sets of the Chinese Tripitaka."
    },
    {
      "id": "pin-tuongdaithichquangduc",
      "name": "Công viên Tượng đài Bồ tát Thích Quảng Đức",
      "name_en": "Bodhisattva Thich Quang Duc Monument Park",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7731,
      "lng": 106.6853,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "🌳",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Ngày 11/6/1963, tại ngã tư Lê Văn Duyệt – Phan Đình Phùng (nay là giao lộ Cách Mạng Tháng Tám – Nguyễn Đình Chiểu), Hòa thượng Thích Quảng Đức (thế danh Lâm Văn Tuất, 66 tuổi) bước xuống từ chiếc xe Austin màu xanh, ngồi kiết già giữa vòng vây hàng trăm tăng ni và tự thiêu để phản đối chính sách đàn áp Phật giáo. Chiếc xe hiện được lưu giữ tại chùa Thiên Mụ, Huế.\nBức ảnh của phóng viên Malcolm Browne (hãng AP) đoạt giải Pulitzer năm 1963, làm thay đổi sâu sắc dư luận quốc tế về tình hình miền Nam. Sau lễ hỏa táng, trái tim Hòa thượng vẫn nguyên vẹn, nay được tôn thờ tại Bảo tháp Đa Bảo, Việt Nam Quốc Tự. Công viên tượng đài rộng hơn 3.000 m², khánh thành năm 2010, có tượng đồng cao 6 m và phù điêu đá khắc họa cuộc đấu tranh năm 1963.",
      "desc_en": "On June 11, 1963, at the former Le Van Duyet – Phan Dinh Phung intersection (now Cach Mang Thang Tam – Nguyen Dinh Chieu), Venerable Thich Quang Duc (born Lam Van Tuat, aged 66) stepped out of a light blue Austin car, sat in the lotus position among hundreds of monks and nuns, and self-immolated to protest the persecution of Buddhists. The car is preserved at Thien Mu Pagoda in Hue. Malcolm Browne's photograph for the Associated Press won the 1963 Pulitzer Prize and shifted international opinion on South Vietnam. His heart remained intact after cremation and is enshrined at Da Bao Stupa in Viet Nam Quoc Tu. The 3,000 m² park, inaugurated in 2010, features a 6 m bronze statue and a stone relief of the 1963 struggle."
    },
    {
      "id": "pin-hoconrua",
      "name": "Hồ Con Rùa (Công trường Quốc tế)",
      "name_en": "Turtle Lake (International Square)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7826,
      "lng": 106.6959,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🏛️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Vòng xoay ở giao lộ Võ Văn Tần – Phạm Ngọc Thạch – Trần Cao Vân ẩn chứa nhiều lớp lịch sử. Năm 1790, vị trí này tương ứng cổng Khảm Khuyết của Thành Bát Quái do Nguyễn Ánh xây dựng. Năm 1878, người Pháp dựng tháp nước (Château d'Eau) cấp nước sạch cho trung tâm Sài Gòn.\nTừ năm 1921, nơi đây là công trường Maréchal Joffre với tượng đài tưởng niệm lính Pháp tử trận trong Thế chiến I (dân gian gọi là Công trường Ba Hình), bị tháo dỡ năm 1956. Giai đoạn 1965–1967, kiến trúc sư Nguyễn Kỳ thiết kế lại thành hồ phun nước bát giác với đài hoa trên 5 cột bê tông cách điệu; giữa hồ từng đặt tượng một con rùa lớn bằng hợp kim đồng. Năm 1976, tượng rùa bị nổ phá hủy, nhưng cái tên Hồ Con Rùa vẫn gắn bó với người dân thành phố đến nay.",
      "desc_en": "This roundabout at the Vo Van Tan – Pham Ngoc Thach – Tran Cao Van intersection holds several layers of history. In 1790 the site corresponded to Kham Khuyet Gate of the Bat Quai Citadel built by Nguyen Anh; in 1878 the French built a water tower here. From 1921 it was Place du Maréchal Joffre, with a monument to French soldiers killed in World War I, dismantled in 1956. In 1965–1967 architect Nguyen Ky redesigned it as an octagonal fountain with five stylized concrete pillars supporting a flower-shaped platform; a large bronze-alloy turtle once stood in the pool. The statue was destroyed by an explosion in 1976, but the name Turtle Lake (Ho Con Rua) has endured."
    },
    {
      "id": "pin-baotangchungtich",
      "name": "Bảo tàng Chứng tích Chiến tranh",
      "name_en": "War Remnants Museum",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 10.7795,
      "lng": 106.6921,
      "discovery_radius": 1800,
      "interaction_radius": 120,
      "icon": "🏛️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Trước năm 1975, tòa nhà là trụ sở Cơ quan Thông tin Hoa Kỳ (USIS) tại Sài Gòn. Bảo tàng thành lập ngày 4/9/1975 với tên Nhà trưng bày tội ác Mỹ – Ngụy, đổi thành Nhà trưng bày tội ác chiến tranh xâm lược năm 1990, và mang tên Bảo tàng Chứng tích Chiến tranh từ ngày 4/7/1995 nhằm hướng đến thông điệp hòa bình và hòa giải.\nBảo tàng lưu giữ hơn 20.000 hiện vật, phim ảnh, tài liệu với 9 chuyên đề thường xuyên, nổi bật là bộ ảnh Hồi niệm (Requiem) của các phóng viên chiến trường đã ngã xuống từ cả hai phía, chuyên đề hậu quả chất độc da cam/dioxin, khu tái hiện nhà tù \"chuồng cọp\" Côn Đảo và khu trưng bày khí tài ngoài trời (máy bay UH-1, A-37, xe tăng M48).",
      "desc_en": "Before 1975 the building housed the United States Information Service (USIS) in Saigon. The museum was founded on September 4, 1975 as the Exhibition House for US and Puppet Crimes, renamed in 1990, and officially became the War Remnants Museum on July 4, 1995, reflecting a message of peace and reconciliation. It holds over 20,000 artifacts, photographs and documents across 9 permanent themes, including the Requiem photo collection by war correspondents killed from both sides, the Agent Orange/dioxin gallery, a recreation of the Con Dao 'tiger cage' prisons and an outdoor display of military equipment such as UH-1 helicopters, A-37 aircraft and M48 tanks."
    },
    {
      "id": "pin-nhathotandinh",
      "name": "Nhà thờ Tân Định (Nhà thờ Thánh Tâm Chúa Giêsu)",
      "name_en": "Tan Dinh Church (Church of the Sacred Heart of Jesus)",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7884,
      "lng": 106.6907,
      "discovery_radius": 1500,
      "interaction_radius": 50,
      "icon": "⛪",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nhà thờ Tân Định khởi công năm 1870 và khánh thành ngày 16/12/1876 dưới sự giám sát của linh mục Donatien Éveillard, là một trong hai nhà thờ cổ nhất TP.HCM cùng giai đoạn với Nhà thờ Đức Bà.\nCông trình mang phong cách Gothic chủ đạo, kết hợp chi tiết trang trí Roman và Baroque. Tháp chuông chính cao 52,6 m, đỉnh có cây thánh giá đồng cao 3 m, bên trong treo 5 quả chuông nặng tổng cộng 5,5 tấn. Từ năm 1957, sau nhiều lần trùng tu, nhà thờ được sơn màu hồng phấn cả ngoại thất lẫn nội thất, trở thành \"nhà thờ màu hồng\" – điểm nhận diện kiến trúc biểu tượng của Quận 3 và TP.HCM.",
      "desc_en": "Construction of Tan Dinh Church began in 1870 and it was inaugurated on December 16, 1876 under Father Donatien Éveillard, making it one of the two oldest churches in Ho Chi Minh City alongside Saigon Notre-Dame Basilica. Its style is mainly Gothic with Romanesque and Baroque decorative details. The main bell tower is 52.6 m tall, topped by a 3 m bronze cross, and houses five bells weighing 5.5 tons in total. Since 1957, after several renovations, the church has been painted pastel pink inside and out, becoming the iconic 'Pink Church' and a landmark of District 3."
    },
    {
      "id": "pin-chuavinhnghiem",
      "name": "Chùa Vĩnh Nghiêm",
      "name_en": "Vinh Nghiem Pagoda",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7904,
      "lng": 106.6823,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Chùa do hai Hòa thượng Thích Tâm Giác và Thích Thanh Kiểm khởi xướng xây dựng từ năm 1964 và hoàn thành năm 1971, lấy mẫu từ tổ đình Vĩnh Nghiêm (Bắc Giang) – trung tâm của Thiền phái Trúc Lâm Yên Tử, như một cầu nối văn hóa Phật giáo Bắc – Nam.\nDo kiến trúc sư Nguyễn Bá Lăng thiết kế (cộng tác cùng Lê Tấn Chuyên và Cổ Văn Hậu), đây là công trình đầu tiên ở Việt Nam dùng bê tông cốt thép hiện đại để tái hiện trọn vẹn mái cong, đầu đao cổ truyền miền Bắc. Điểm nhấn là Tháp Quan Thế Âm 7 tầng cao 40 m (1971) và Tháp Xá Lợi Cộng đồng (1982); chùa còn giữ Chuông Hòa Bình do cộng đồng Phật tử Nhật Bản tặng với lời nguyện chấm dứt chiến tranh.",
      "desc_en": "Vinh Nghiem Pagoda was begun in 1964 by Venerables Thich Tam Giac and Thich Thanh Kiem and completed in 1971, modeled on the ancestral Vinh Nghiem Pagoda in Bac Giang, center of the Truc Lam Yen Tu Zen sect, as a cultural bridge between North and South. Designed by architect Nguyen Ba Lang with Le Tan Chuyen and Co Van Hau, it was the first pagoda in Vietnam to use modern reinforced concrete to recreate traditional Northern curved roofs and upturned eaves. Highlights include the 7-story, 40 m Avalokiteshvara Tower (1971), the Community Relics Stupa (1982) and the Bell of Peace, a gift from Japanese Buddhists with a prayer for an end to war."
    },
    {
      "id": "pin-baotangphunuNamBo",
      "name": "Bảo tàng Phụ nữ Nam Bộ",
      "name_en": "Southern Women's Museum",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7806,
      "lng": 106.6883,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🏛️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Bảo tàng tiền thân là Nhà Truyền thống Phụ nữ Nam Bộ (thành lập năm 1984, khánh thành ngày 29/4/1985), đến năm 1990 được nâng cấp thành Bảo tàng Phụ nữ Nam Bộ. Nơi đây lưu giữ hơn 31.000 hiện vật và trên 11.000 đầu sách tư liệu.\nBộ sưu tập khắc họa đời sống văn hóa của phụ nữ miền Nam – lịch sử chiếc áo dài, áo bà ba, khăn rằn, các nghề thủ công truyền thống – cùng vai trò của họ trong các phong trào đấu tranh chính trị (Đội quân tóc dài), Biệt động Sài Gòn và công cuộc xây dựng đô thị. Bảo tàng có trưng bày ứng dụng công nghệ 3D.",
      "desc_en": "The museum grew out of the Southern Women's Traditional House (established 1984, inaugurated April 29, 1985) and was upgraded to a museum in 1990. It preserves over 31,000 artifacts and more than 11,000 reference books, portraying the cultural life of Southern women – the history of the ao dai, ao ba ba, khan ran scarf and traditional crafts – and their role in political struggles (the 'Long-Haired Army'), the Saigon Commandos and urban development. Exhibits include modern 3D-technology presentations."
    },
    {
      "id": "pin-dichikhaoco-lhp-thd",
      "name": "Di chỉ khảo cổ góc Lê Hồng Phong – Trần Hưng Đạo (Louis Malleret, 1940)",
      "name_en": "Archaeological Site at Le Hong Phong – Tran Hung Dao Corner (Louis Malleret, 1940)",
      "category": "landmark",
      "rarity": "uncommon",
      "lat": 10.7583,
      "lng": 106.6789,
      "discovery_radius": 900,
      "interaction_radius": 50,
      "icon": "🏛️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Năm 1940, nhà khảo cổ người Pháp Louis Malleret khai quật tại giao lộ Lê Hồng Phong (xưa là đường Pétrus Ký) – Trần Hưng Đạo (xưa là đường Galliéni), gần vòng xoay Ngã Sáu Cộng Hòa, và phát hiện một bức tường gạch cỡ lớn cùng các tấm đan sa thạch, phiến thạch của một công trình có niên đại từ khoảng thế kỷ XI.\nHiện vật tiêu biểu gồm pho tượng đồng nhỏ người quỳ gối nâng chậu theo phong cách Baphuôn (ký hiệu MBB N° 3009) và 4 tấm đan đá (ký hiệu MBB N° 3005, 3006, 3007…), trong đó có bệ đá trang trí hoa sen cách điệu và hình đầu voi. Khu đất năm xưa nay đã đô thị hóa hoàn toàn; hiện vật gốc được lưu trữ tại Bảo tàng Lịch sử TP.HCM (2 Nguyễn Bỉnh Khiêm, Quận 1).",
      "desc_en": "In 1940, French archaeologist Louis Malleret excavated at the intersection of Le Hong Phong (formerly Pétrus Ky) and Tran Hung Dao (formerly Galliéni), near Nga Sau Cong Hoa roundabout, uncovering a large brick wall and sandstone and schist slabs from a structure dating to around the 11th century. Notable finds include a small bronze statue of a kneeling figure holding a basin in Baphuon style (MBB N° 3009) and four stone slabs (MBB N° 3005–3007 among them), including a pedestal decorated with stylized lotus and elephant heads. The site is now fully urbanized; the original artifacts are held by the Ho Chi Minh City Museum of History (2 Nguyen Binh Khiem, District 1)."
    },
    {
      "id": "pin-chuahunglong",
      "name": "Chùa Hưng Long (Ngã Sáu Ngô Gia Tự)",
      "name_en": "Hung Long Pagoda (Ngo Gia Tu Six-Way Intersection)",
      "category": "landmark",
      "rarity": "uncommon",
      "lat": 10.7645,
      "lng": 106.6713,
      "discovery_radius": 900,
      "interaction_radius": 70,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Chùa Hưng Long tại số 298 đường Ngô Gia Tự gắn với phong trào chấn hưng Phật giáo thập niên 1930. Danh tăng yêu nước Thiện Chiếu từng ở chùa, chứng kiến cảnh tăng đồ giữ tục lệ mê tín, ra sức sửa sang việc thờ phượng cho giản tiện nhưng không được ủng hộ. Sau đó sư rời chùa, năm 1933 cởi áo cà sa, viết sách và làm guốc kiếm sống; về sau đi theo con đường cách mạng, bị Pháp đày ra Côn Đảo và mất năm 1974.\nNăm 1933, tại chùa này, nhà sư Minh Trí (1886–1958) thành lập Tịnh độ cư sĩ Phật hội và đặt trụ sở chính. Hội được chính quyền Pháp ở Nam Kỳ phê chuẩn ngày 20/2/1934; Đại hội lần thứ nhất họp tại hội quán Hưng Long tự ngày 13/3/1934. Phòng thuốc Nam từ thiện của hội vẫn hoạt động đến nay.",
      "desc_en": "Hung Long Pagoda at 298 Ngo Gia Tu Street is tied to the Buddhist revival of the 1930s. The patriotic monk Thien Chieu stayed here, tried to simplify worship and oppose superstition, but met resistance; he left, shed his robes in 1933, earned a living writing books and making clogs, later joined the revolution, was exiled by the French to Con Dao and died in 1974. In 1933, Venerable Minh Tri (1886–1958) founded the Pure Land Lay Buddhist Association here and made the pagoda its headquarters. French authorities approved it on February 20, 1934, and its first General Assembly met at the pagoda on March 13, 1934. Its charitable traditional medicine clinic still operates today."
    },
    {
      "id": "pin-dinhchihoa",
      "name": "Đình Chí Hòa (Đình Hòa Hưng xưa)",
      "name_en": "Chi Hoa Communal House (Former Hoa Hung Communal House)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7804,
      "lng": 106.6749,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Đình hình thành sau cuộc kinh lược của Thống suất Nguyễn Hữu Cảnh (1698), được sắc phong năm Tự Đức thứ 5 (1852); tên Hòa Hưng xưa đổi thành Đình Chí Hòa sau năm 1910. Khoảng năm 1785–1792, nhà giáo Võ Trường Toản mở trường dạy học trong khuôn viên đình, đào tạo nhóm Gia Định Tam Gia (Trịnh Hoài Đức, Lê Quang Định, Ngô Nhân Tịnh) và Ngô Tùng Châu.\nĐầu thế kỷ XX, gian võ ca của đình là Rạp Hòa Hưng, nơi các đoàn hát bội như Bầu Mười Vàng, Biện Vực, Bầu Tồn biểu diễn. Năm 1915–1917, nghĩa quân Thiên Địa Hội của Phan Xích Long luyện võ bí mật ở đây; tháng 8/1945, Thanh niên Tiền phong đào hầm dưới bệ sân khấu để cất vũ khí và xuất phát chặn đánh quân Pháp ngày 25/8/1945. Đình được xếp hạng di tích quốc gia (Quyết định 1460-QĐ/VH, 28/6/1996).",
      "desc_en": "The communal house formed after Commander Nguyen Huu Canh's expedition in 1698 and received a royal decree in 1852; it was renamed Chi Hoa after 1910. Around 1785–1792 educator Vo Truong Toan taught here, training the 'Gia Dinh Tam Gia' (Trinh Hoai Duc, Le Quang Dinh, Ngo Nhan Tinh) and Ngo Tung Chau. In the early 20th century its martial opera hall was the Hoa Hung Theater, home to hat boi troupes such as Bau Muoi Vang, Bien Vuc and Bau Ton. Phan Xich Long's Heaven and Earth Society trained here in 1915–1917, and in August 1945 the Vanguard Youth dug a secret bunker beneath the stage to store weapons before intercepting French troops on August 25. It is a National Historical Relic (Decision 1460-QD/VH, 1996)."
    },
    {
      "id": "pin-garagetuluc",
      "name": "Garage Tự Lực – Garage Citroen Dương Văn Đức",
      "name_en": "Tu Luc Garage – Duong Van Duc Citroen Garage",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7812,
      "lng": 106.6738,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "🚗",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Chủ garage là nhà tư sản yêu nước Dương Văn Đức (sinh 1928, thường gọi Hai Đức). Năm 1947 ông dựng căn nhà gỗ tại 499/20 Lê Văn Duyệt (nay là Cách Mạng Tháng Tám); năm 1959 mở rộng thành Garage Citroen Dương Văn Đức D'Indochine (sau là Garage Tự Lực), một trong những garage đóng thùng xe lớn nhất Sài Gòn thời bấy giờ.\nQua hai cơ sở Phật giáo cách mạng là chùa Định Thành và chùa Khánh Hưng, cùng sự kết nối của Anh hùng LLVTND Trần Văn Lai vào năm 1963, ông biến garage thành trạm bảo dưỡng ô tô tối mật của Biệt động Sài Gòn. Tại đây, ông cùng những người thợ thân tín thiết kế thùng xe hai đáy để ngụy trang vận chuyển vũ khí, chất nổ vào nội đô. Garage nay được phục dựng với căn gác gỗ bí mật và 2 xe lịch sử, trong đó có chiếc Citroen NCE-345 chở Đội 5 đánh vào Dinh Độc Lập năm 1968.",
      "desc_en": "Patriotic businessman Duong Van Duc (born 1928, known as Hai Duc) built a wooden house at 499/20 Le Van Duyet Street (now Cach Mang Thang Tam) in 1947 and expanded it in 1959 into Garage Citroen Duong Van Duc D'Indochine, later Tu Luc Garage – one of Saigon's largest vehicle body-building garages. Through two revolutionary Buddhist bases, Dinh Thanh and Khanh Hung pagodas, and his link with Tran Van Lai in 1963, he turned the garage into a top-secret maintenance station for the Saigon Commandos, where he and trusted mechanics engineered double-bottomed vehicles to smuggle weapons and explosives into the city. It now displays the restored attic and two historic cars, including the Citroen NCE-345 used in the 1968 attack on the Independence Palace."
    },
    {
      "id": "pin-khamchihoa",
      "name": "Trại giam Chí Hòa (Khám Chí Hòa)",
      "name_en": "Chi Hoa Prison (Kham Chi Hoa)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7769,
      "lng": 106.669,
      "discovery_radius": 1200,
      "interaction_radius": 149,
      "icon": "🗝️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Khám Chí Hòa xây dựng từ năm 1943 đến 1953, trên khu đất hơn 7 ha, theo kiến trúc Bát Quái Đồ tám cạnh độc đáo. Đây từng là nơi giam giữ nhiều chiến sĩ cách mạng và nhà hoạt động chính trị.\nKhu đất nằm trong Danh mục kiểm kê di tích lịch sử – văn hóa của TP.HCM. Theo định hướng quy hoạch gần đây, chức năng giam giữ được di dời về cơ sở mới; giới chuyên gia và chính quyền thành phố đang hướng đến bảo tồn cấu trúc Bát Quái và chuyển thành không gian di sản, bảo tàng, công viên văn hóa công cộng.",
      "desc_en": "Chi Hoa Prison was built between 1943 and 1953 on a site of over 7 hectares, in a distinctive eight-sided Bat Quai (Bagua) layout. It once held many revolutionaries and political activists. The site is included in Ho Chi Minh City's inventory of historical-cultural relics. According to recent planning, its detention functions are being relocated, and experts and city authorities are working to preserve the octagonal structure and convert it into a heritage space, museum and public cultural park."
    },
    {
      "id": "pin-fitomuseum",
      "name": "Bảo tàng Y học Cổ truyền Việt Nam (FITO Museum)",
      "name_en": "Museum of Traditional Vietnamese Medicine (FITO Museum)",
      "category": "landmark",
      "rarity": "uncommon",
      "lat": 10.7745,
      "lng": 106.6728,
      "discovery_radius": 900,
      "interaction_radius": 70,
      "icon": "🏛️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Bảo tàng tại số 41 Hoàng Dư Khương có quy mô 6 tầng bằng khung nhà gỗ cổ truyền Bắc Bộ. Nơi đây lưu giữ hơn 3.000 hiện vật y học cổ truyền, từ thời kỳ đồ đá (dao cầu, thuyền tán 2.500 năm tuổi) đến bức chạm gỗ \"Việt Nam bách gia y\" và hơn 100.000 trang sách y học Hán Nôm.",
      "desc_en": "Located at 41 Hoang Du Khuong Street, the six-story museum is built with a traditional Northern Vietnamese wooden house frame. It houses over 3,000 traditional medicine artifacts, from the Stone Age to 2,500-year-old herb cutters and mortar boats, the woodcarving 'Viet Nam bach gia y' (Hundred Families of Vietnamese Medicine) and more than 100,000 pages of Han-Nom medical texts."
    },
    {
      "id": "pin-chohoahothiky",
      "name": "Chợ hoa Hồ Thị Kỷ & Khu chung cư cổ Lê Hồng Phong",
      "name_en": "Ho Thi Ky Flower Market & Le Hong Phong Old Apartment Complex",
      "category": "landmark",
      "rarity": "common",
      "lat": 10.7641,
      "lng": 106.6775,
      "discovery_radius": 600,
      "interaction_radius": 50,
      "icon": "🏪",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Chợ hoa hình thành từ năm 1987 trong hẻm 52 Hồ Thị Kỷ, bao quanh các lô chung cư cũ Lê Hồng Phong mang đậm dấu ấn kiến trúc và đời sống đô thị Sài Gòn sau năm 1975. Đây cũng là phố ẩm thực sầm uất bậc nhất Quận 10.",
      "desc_en": "The flower market, established in 1987 in Alley 52 Ho Thi Ky, surrounds the old Le Hong Phong apartment blocks, which carry the architecture and daily life of post-1975 Saigon. It is also District 10's most bustling street food hub."
    },
    {
      "id": "pin-ben-nharong",
      "name": "Bến Nhà Rồng (Bảo tàng Hồ Chí Minh – Chi nhánh TP.HCM)",
      "name_en": "Nha Rong Wharf (Ho Chi Minh Museum – HCMC Branch)",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 10.7683,
      "lng": 106.7068,
      "discovery_radius": 1800,
      "interaction_radius": 60,
      "icon": "🚢",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Công trình tọa lạc tại số 1 Nguyễn Tất Thành (Quận 4), ngay ngã ba sông Sài Gòn – kênh Bến Nghé, do hãng vận tải biển Pháp Messageries Maritimes xây dựng năm 1862–1863. Trên nóc tòa nhà có gắn đôi rồng chầu mặt trời bằng đất nung tráng men nên dân gian gọi là Nhà Rồng.\nNgày 5/6/1911, từ bến cảng này, người thanh niên yêu nước Nguyễn Tất Thành (lấy tên Văn Ba) lên tàu Amiral Latouche-Tréville làm phụ bếp, bắt đầu hành trình 30 năm bôn ba tìm đường cứu nước. Từ năm 1979 nơi đây trở thành Khu lưu niệm Chủ tịch Hồ Chí Minh và từ năm 1995 mang tên Bảo tàng Hồ Chí Minh – Chi nhánh TP.HCM.",
      "desc_en": "Located at 1 Nguyen Tat Thanh Street (District 4) at the confluence of the Saigon River and Ben Nghe Canal, the building was constructed in 1862–1863 as the headquarters of the French shipping company Messageries Maritimes. Its roof features two glazed terracotta dragons facing the sun, earning it the popular name Nha Rong (Dragon House).\nOn June 5, 1911, young patriot Nguyen Tat Thanh (under the name Van Ba) boarded the French steamer Amiral Latouche-Treville here as a kitchen helper, beginning his 30-year quest for national salvation. It became a Ho Chi Minh Memorial Site in 1979 and the Ho Chi Minh Museum – HCMC Branch in 1995."
    },
    {
      "id": "pin-nhathoducba",
      "name": "Nhà thờ Chính tòa Đức Bà Sài Gòn",
      "name_en": "Saigon Notre-Dame Cathedral Basilica",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 10.7798,
      "lng": 106.699,
      "discovery_radius": 1800,
      "interaction_radius": 55,
      "icon": "⛪",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 1 Công xã Paris (Quận 1), Nhà thờ Đức Bà Sài Gòn khởi công ngày 7/10/1877 và khánh thành ngày 11/4/1880 theo đồ án của kiến trúc sư Pháp J. Bourard, kết hợp phong cách kiến trúc Roman và Gothic. Toàn bộ gạch xây mặt ngoài được chở từ Marseille (Pháp) sang, đến nay vẫn giữ nguyên sắc đỏ hồng đặc trưng.\nNăm 1895, hai tháp chuông được xây thêm, nâng tổng chiều cao công trình lên hơn 60 m tính đến đỉnh thánh giá. Năm 1959, tượng Đức Mẹ Hòa Bình bằng đá cẩm thạch trắng được dựng trước quảng trường; năm 1962, Tòa thánh Vatican nâng nhà thờ lên bậc Vương cung thánh đường.",
      "desc_en": "Situated at 1 Cong Xa Paris Square (District 1), Saigon Notre-Dame Cathedral was begun on October 7, 1877 and inaugurated on April 11, 1880 to a Romanesque–Gothic design by French architect J. Bourard. All exterior bricks were imported from Marseille and retain their warm reddish hue.\nTwo bell towers added in 1895 brought the spires to over 60 meters including the crosses. A white marble statue of Our Lady of Peace was erected in front of the cathedral in 1959, and the Vatican elevated it to a Minor Basilica in 1962."
    },
    {
      "id": "pin-buudientrungtam",
      "name": "Bưu điện Trung tâm Sài Gòn",
      "name_en": "Saigon Central Post Office",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.78,
      "lng": 106.7,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "📮",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm tại số 2 Công xã Paris (Quận 1) bên cạnh Nhà thờ Đức Bà, Bưu điện Trung tâm Sài Gòn được xây dựng từ năm 1886 đến năm 1891 theo thiết kế của kiến trúc sư Alfred Foulhoux (với kết cấu vòm thép chịu ảnh hưởng rõ nét từ trường phái Gustave Eiffel).\nMặt tiền mang phong cách Tân cổ điển châu Âu kết hợp họa tiết phương Đông, đắp nổi danh sách các nhà phát minh điện báo – khoa học. Bên trong đại sảnh vòm cao thoáng vẫn bảo tồn hai tấm bản đồ lịch sử lớn vẽ năm 1892 và 1936 cùng dãy buồng điện thoại gỗ cổ kính.",
      "desc_en": "Standing at 2 Cong Xa Paris Square (District 1) next to Notre-Dame Cathedral, Saigon Central Post Office was built between 1886 and 1891 to plans by architect Alfred Foulhoux, featuring an arched iron-framed hall influenced by Gustave Eiffel’s school.\nIts Neoclassical facade is adorned with plaques honoring pioneers of telegraphy and science, while the vaulted interior preserves two historic painted maps (1892 and 1936) and vintage wooden telephone booths."
    },
    {
      "id": "pin-chobenthanh",
      "name": "Chợ Bến Thành",
      "name_en": "Ben Thanh Market",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 10.7725,
      "lng": 106.698,
      "discovery_radius": 1800,
      "interaction_radius": 65,
      "icon": "🏪",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tiền thân là ngôi chợ họp ven sông Bến Nghé gần thành Gia Định từ thế kỷ XVII–XVIII. Ngôi chợ hiện nay được hãng thầu Brossard et Mopin xây dựng từ năm 1912 và khánh thành cuối tháng 3/1914 trên khu vực ao Bồ Rệt đã san lấp, diện tích khoảng 13.000 m².\nChợ có 4 cửa chính (Đông, Tây, Nam, Bắc) và 12 cửa phụ; nổi bật nhất là tháp đồng hồ 3 mặt ở cửa Nam và các bức phù điêu gốm Biên Hòa trên các cổng. Quảng trường trước cửa Nam từng ghi dấu cuộc biểu tình ngày 25/8/1963 nơi nữ sinh Quách Thị Trang hy sinh.",
      "desc_en": "Originating from a 17th–18th century riverside market near Gia Dinh Citadel, the present Ben Thanh Market was built between 1912 and March 1914 by Brossard et Mopin on reclaimed marshland, spanning roughly 13,000 m².\nWith four main gates and twelve side doors, its iconic South Gate clock tower and Bien Hoa ceramic reliefs have become symbols of Ho Chi Minh City. The square outside the South Gate also commemorates student activist Quach Thi Trang, killed during a protest on August 25, 1963."
    },
    {
      "id": "pin-nhahatthanhpho",
      "name": "Nhà hát Thành phố Hồ Chí Minh",
      "name_en": "Ho Chi Minh City Opera House (Municipal Theatre)",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7766,
      "lng": 106.7032,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "🎭",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 7 Công trường Lam Sơn (Quận 1), Nhà hát Thành phố khởi công năm 1898 và khánh thành ngày 1/1/1900 do nhóm kiến trúc sư Pháp (chính là Eugène Ferret) thiết kế theo phong cách kiến trúc Đệ tam Cộng hòa Pháp, gợi nhớ công trình Petit Palais ở Paris.\nGiai đoạn 1955–1975, tòa nhà từng được trưng dụng làm trụ sở Hạ nghị viện chính quyền Sài Gòn trước khi trở về đúng chức năng biểu diễn nghệ thuật sau năm 1975. Công trình được trùng tu khôi phục nguyên bản phù điêu mặt tiền năm 1998 và xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia.",
      "desc_en": "Located at 7 Lam Son Square (District 1), the Municipal Theatre was begun in 1898 and opened on January 1, 1900, designed by French architects led by Eugene Ferret in French Third Republic style inspired by Paris’s Petit Palais.\nFrom 1955 to 1975 it served as the Lower House of the South Vietnamese National Assembly before returning to performing arts after 1975. Restored to its original facade ornamentation in 1998, it is a National Architectural and Artistic Relic."
    },
    {
      "id": "pin-ubndtphcm",
      "name": "Trụ sở Ủy ban Nhân dân TP.HCM (Dinh Xã Tây)",
      "name_en": "Ho Chi Minh City People's Committee Building (Former Hotel de Ville)",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7765,
      "lng": 106.7009,
      "discovery_radius": 1500,
      "interaction_radius": 50,
      "icon": "🏛️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm tại số 86 Lê Thánh Tôn (Quận 1), hướng thẳng ra phố đi bộ Nguyễn Huệ, công trình được xây dựng giai đoạn 1898–1909 theo bản vẽ của kiến trúc sư Paul Gardès, mô phỏng kiến trúc tòa thị chính miền Bắc nước Pháp với tháp đồng hồ trung tâm và phù điêu trang trí tinh xảo.\nThời Pháp thuộc, nơi đây gọi là Dinh Xã Tây (Hôtel de Ville), sau đó là Tòa Đô chánh Sài Gòn. Từ sau ngày 30/4/1975, tòa nhà là trụ sở làm việc của HĐND và UBND TP.HCM, được xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia năm 2020.",
      "desc_en": "At 86 Le Thanh Ton Street (District 1) overlooking Nguyen Hue Pedestrian Street, this building was erected from 1898 to 1909 to a design by Paul Gardes modeled after northern French city halls, complete with a central clock tower and ornate reliefs.\nKnown as the Hotel de Ville (Dinh Xa Tay) during the colonial era and later Saigon City Hall, it has housed the HCMC People’s Council and People’s Committee since 1975 and was designated a National Architectural Relic in 2020."
    },
    {
      "id": "pin-baotangtphcm",
      "name": "Bảo tàng TP.HCM (Dinh Gia Long xưa)",
      "name_en": "Ho Chi Minh City Museum (Former Gia Long Palace)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7759,
      "lng": 106.6997,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🏛️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 65 Lý Tự Trọng (Quận 1), tòa nhà xây dựng từ năm 1885 đến 1890 do kiến trúc sư Alfred Foulhoux thiết kế, ban đầu dự định làm Bảo tàng Thương mại Nam Kỳ nhưng sau đó trở thành Dinh Thống đốc Nam Kỳ rồi Dinh Gia Long.\nKiến trúc kết hợp hài hòa phong cách Tân cổ điển châu Âu với mái ngói và họa tiết Á Đông. Ngày 25/8/1945, tòa nhà là nơi diễn ra lễ tiếp quản chính quyền trong Cách mạng Tháng Tám tại Sài Gòn. Từ năm 1978 trở thành Bảo tàng Cách mạng TP.HCM và năm 1999 đổi tên thành Bảo tàng TP.HCM.",
      "desc_en": "Situated at 65 Ly Tu Trong Street (District 1), this landmark was built in 1885–1890 by architect Alfred Foulhoux, originally intended as a trade museum before serving as the Governor of Cochinchina’s Palace and later Gia Long Palace.\nBlending European Neoclassicism with Asian roof motifs, it witnessed the August 25, 1945 revolutionary takeover in Saigon. Converted into the HCMC Revolutionary Museum in 1978, it became the Ho Chi Minh City Museum in 1999."
    },
    {
      "id": "pin-baotanglichsu",
      "name": "Bảo tàng Lịch sử TP.HCM & Thảo Cầm Viên Sài Gòn",
      "name_en": "Ho Chi Minh City Museum of History & Saigon Zoo",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.788,
      "lng": 106.7048,
      "discovery_radius": 1500,
      "interaction_radius": 60,
      "icon": "🏺",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 2 Nguyễn Bỉnh Khiêm (Quận 1) trong khuôn viên Thảo Cầm Viên Sài Gòn — vườn thú và thực vật thành lập từ năm 1864, thuộc nhóm lâu đời nhất thế giới. Tòa nhà bảo tàng khánh thành năm 1929 (ban đầu là Bảo tàng Blanchard de la Brosse) theo thiết kế của kiến trúc sư Auguste Delaval, tiêu biểu cho phong cách kiến trúc Đông Dương (Indochine).\nBảo tàng lưu giữ hơn 40.000 hiện vật quý hiếm trải dài từ thời Tiền sử, văn hóa Đông Sơn, Óc Eo, Chămpa đến triều Nguyễn và nghệ thuật các nước châu Á.",
      "desc_en": "Located at 2 Nguyen Binh Khiem Street (District 1) inside Saigon Zoo and Botanical Gardens (founded in 1864, one of the oldest in the world), the museum opened in 1929 as the Blanchard de la Brosse Museum to an Indochine design by Auguste Delaval.\nIts collections encompass over 40,000 artifacts spanning Prehistory, Dong Son, Oc Eo, Champa, and the Nguyen Dynasty alongside Asian art treasures."
    },
    {
      "id": "pin-baotangmythuat",
      "name": "Bảo tàng Mỹ thuật TP.HCM (Nhà Chú Hỏa)",
      "name_en": "Ho Chi Minh City Museum of Fine Arts (Hua Bon Hoa Mansion)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7699,
      "lng": 106.6991,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🎨",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 97A Phó Đức Chính (Quận 1), tòa biệt thự đồ sộ được xây dựng giai đoạn 1929–1934 theo thiết kế của kiến trúc sư Pháp Rivera cho gia đình thương nhân Hoa kiều nổi tiếng Hứa Bổn Hòa (Chú Hỏa).\nCông trình kết hợp tinh tế kiến trúc Art Deco châu Âu với nét trang trí phương Đông: 99 cánh cửa, gạch bông hoa văn thủ công, kính màu và thang máy gỗ cổ. Thành lập năm 1987, bảo tàng lưu giữ hàng nghìn tác phẩm hội họa, điêu khắc cổ đại và mỹ thuật hiện đại Việt Nam.",
      "desc_en": "At 97A Pho Duc Chinh Street (District 1), this grand mansion was constructed between 1929 and 1934 by French architect Rivera for the prominent Chinese-Vietnamese merchant family of Hua Bon Hoa (Uncle Hoa).\nBlending Art Deco architecture with Asian decorative motifs—including 99 doors, patterned cement tiles, stained glass, and a vintage wooden elevator—it became the HCMC Museum of Fine Arts in 1987, housing thousands of ancient and modern Vietnamese artworks."
    },
    {
      "id": "pin-congvienbachdang",
      "name": "Công viên Bến Bạch Đằng & Tượng đài Trần Hưng Đạo",
      "name_en": "Bach Dang Wharf Park & Tran Hung Dao Monument",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7758,
      "lng": 106.7061,
      "discovery_radius": 1200,
      "interaction_radius": 55,
      "icon": "⚓",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Trải dài bên bờ Tây sông Sài Gòn (Quận 1), Bến Bạch Đằng gắn liền với hơn 300 năm hình thành và phát triển của thương cảng Bến Nghé – Sài Gòn. Đối diện công viên là Công trường Mê Linh, nơi đặt Tượng đài Hưng Đạo Đại Vương Trần Quốc Tuấn do nhà điêu khắc Phạm Thông thực hiện năm 1967, dáng đứng uy nghiêm hướng tay ra dòng sông lớn.\nKhu vực công viên được chỉnh trang đồng bộ năm 2022, kết nối tuyến buýt đường sông, cầu Ba Son và Cột cờ Thủ Ngữ cổ, tạo thành không gian di sản ven sông biểu tượng của thành phố.",
      "desc_en": "Stretching along the western bank of the Saigon River (District 1), Bach Dang Wharf has witnessed over three centuries of Saigon’s port history. Across the road at Me Linh Square stands the imposing 1967 statue of Supreme Commander Tran Quoc Tuan by sculptor Pham Thong, pointing out over the river.\nRenovated in 2022, the waterfront park links the Saigon Waterbus, Ba Son Bridge, and historic Thu Ngu Flagpole as a signature civic space."
    },
    {
      "id": "pin-cotcothungu",
      "name": "Cột cờ Thủ Ngữ",
      "name_en": "Thu Ngu Flagpole",
      "category": "landmark",
      "rarity": "uncommon",
      "lat": 10.7703,
      "lng": 106.7061,
      "discovery_radius": 900,
      "interaction_radius": 70,
      "icon": "🚩",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Xây dựng vào tháng 10/1865 tại số 2 Tôn Đức Thắng (Quận 1), ngay ngã ba sông Sài Gòn và kênh Bến Nghé. Ban đầu công trình làm đài kéo cờ tín hiệu hướng dẫn tàu buôn ra vào thương cảng Sài Gòn (tên Thủ Ngữ bắt nguồn từ chức quan trông coi việc kiểm soát tàu thuyền xưa).\nNgày 23/9/1945, tiểu đội cảm tử quân bảo vệ Cột cờ Thủ Ngữ đã chiến đấu anh dũng đến người cuối cùng trước quân Pháp – Anh trong ngày mở đầu Nam Bộ kháng chiến. Công trình đã được trùng tu và xếp hạng Di tích lịch sử cấp thành phố.",
      "desc_en": "Built in October 1865 at 2 Ton Duc Thang Street (District 1) where the Saigon River meets Ben Nghe Canal, the flagpole originally served as a signal station guiding merchant ships entering Saigon Port.\nOn September 23, 1945, a squad of Vietnamese defenders fought heroically here against French and British troops on the opening day of the Southern Resistance. Today the restored landmark is a City-level Historical Relic."
    },
    {
      "id": "pin-caumong",
      "name": "Cầu Mống (Cầu Mống Bến Nghé)",
      "name_en": "Mong Bridge (Rainbow Footbridge)",
      "category": "landmark",
      "rarity": "uncommon",
      "lat": 10.7686,
      "lng": 106.7037,
      "discovery_radius": 900,
      "interaction_radius": 70,
      "icon": "🌉",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Bắc qua kênh Bến Nghé nối Quận 1 với Quận 4, Cầu Mống được hãng vận tải biển Messageries Maritimes của Pháp cho xây dựng năm 1893–1894 bằng kết cấu thép tán đinh kiên cố, dài khoảng 128 m, uốn cong hình vòng cung như cầu vồng nên dân gian gọi là Cầu Mống.\nĐây là một trong những cây cầu cổ nhất TP.HCM. Sau khi tháo dỡ tạm để thi công đại lộ Võ Văn Kiệt và hầm vượt sông Sài Gòn, cầu được phục dựng theo nguyên bản bằng thép gốc và trở thành cây cầu đi bộ sơn xanh ngọc nổi tiếng.",
      "desc_en": "Spanning Ben Nghe Canal between Districts 1 and 4, Mong Bridge was built in 1893–1894 by the French shipping company Messageries Maritimes using riveted steel, measuring about 128 meters with a rainbow-like arch.\nOne of Ho Chi Minh City’s oldest surviving bridges, it was carefully dismantled during construction of the Saigon River Tunnel and faithfully reconstructed with original steel components as a beloved mint-green pedestrian bridge."
    },
    {
      "id": "pin-chuangochoang",
      "name": "Chùa Ngọc Hoàng (Phước Hải Tự)",
      "name_en": "Jade Emperor Pagoda (Phuoc Hai Tu)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7921,
      "lng": 106.6982,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🏮",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 73 Mai Thị Lựu (Quận 1), chùa do cộng đồng người Hoa xây dựng từ khoảng năm 1892 đến 1909, ban đầu là Điện Ngọc Hoàng thờ Ngọc Hoàng Thượng đế, sau thuộc hệ thống Phật giáo và đổi tên thành Phước Hải Tự.\nChùa nổi tiếng với mái ngói âm dương gắn nhiều quần thể tượng gốm màu tinh xảo cùng hơn 100 pho tượng cổ bằng gỗ, giấy bồi và gốm (Ngọc Hoàng, Thập Điện Diêm Vương, Kim Hoa Thánh Mẫu). Công trình được xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia năm 1994 và từng đón Tổng thống Mỹ Barack Obama đến thăm năm 2016.",
      "desc_en": "Located at 73 Mai Thi Luu Street (District 1), the pagoda was built by the local Chinese community between 1892 and 1909 as the Jade Emperor Hall before becoming Phuoc Hai Pagoda.\nFamed for its ornate ceramic roof figurines and over 100 antique wood, papier-mache, and ceramic statues—including the Jade Emperor and the Ten Courts of Hell—it was designated a National Architectural Relic in 1994 and visited by U.S. President Barack Obama in 2016."
    },
    {
      "id": "pin-caphedophu",
      "name": "Cà phê Đỗ Phủ – Hộp thư bí mật & Hầm nổi Biệt động Sài Gòn (113A Đặng Dung)",
      "name_en": "Do Phu Coffee – Secret Mailbox & Concealed Bunker of Saigon Commandos",
      "category": "living_history",
      "rarity": "epic",
      "lat": 10.7916,
      "lng": 106.6889,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "☕",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Căn nhà tại số 113A Đặng Dung (phường Tân Định, Quận 1) do gia đình Anh hùng LLVTND Trần Văn Lai xây dựng năm 1946 và giao cho cơ sở Biệt động là vợ chồng ông Đỗ Miễn – bà Nguyễn Thị Sự mở quán cà phê, cơm tấm Đại Hàn làm bình phong hoạt động.\nNơi đây đóng vai trò \"hộp thư bí mật\" tiếp nhận, chuyển giao tài liệu, chỉ thị và tài chính phục vụ lực lượng Biệt động Sài Gòn. Hầm nổi giấu trong tường, tủ hai đáy và lối thoát hiểm trên trần nhà vẫn được hậu duệ gia đình gìn giữ nguyên trạng như một bảo tàng sống kết hợp quán cà phê ký ức.",
      "desc_en": "The house at 113A Dang Dung Street (Tan Dinh Ward, District 1) was built in 1946 by Hero Tran Van Lai’s family and entrusted to commando operatives Do Mien and Nguyen Thi Su to run a neighborhood coffee and broken-rice eatery as cover.\nIt functioned as a covert mailbox transferring secret messages, funds, and directives for the Saigon Commandos. Its concealed wall bunker, double-compartment cabinets, and ceiling escape hatch remain preserved by descendants as a living heritage cafe."
    },
    {
      "id": "pin-baotang-bietdong",
      "name": "Bảo tàng Biệt động Sài Gòn – Gia Định (145 Trần Quang Khải)",
      "name_en": "Saigon – Gia Dinh Commandos Museum (145 Tran Quang Khai)",
      "category": "living_history",
      "rarity": "epic",
      "lat": 10.7913,
      "lng": 106.6887,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "🎖️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Đặt trong ngôi nhà 3 tầng xây dựng năm 1963 của gia đình Anh hùng LLVTND Trần Văn Lai (Năm Lai) tại số 145 Trần Quang Khải (Quận 1), nơi từng là cơ sở hoạt động bí mật và chuyển giao mệnh lệnh quan trọng của Biệt động Sài Gòn – Gia Định.\nBảo tàng trưng bày hơn 300 hiện vật gốc độc đáo như chiếc thang máy bằng gỗ cổ, hầm giấu tài liệu, máy đánh chữ, xe gắn máy và tư liệu quý gắn với ký ức trực tiếp của các chiến sĩ biệt động và gia đình nhân chứng.",
      "desc_en": "Housed in a three-story 1963 building at 145 Tran Quang Khai Street (District 1) belonging to Hero Tran Van Lai’s family, this site once served as a clandestine liaison house for the Saigon – Gia Dinh Commandos.\nThe museum preserves over 300 authentic artifacts—including a vintage wooden elevator, secret document compartments, typewriters, motorbikes, and firsthand testimonies from commando veterans and their families."
    },
    {
      "id": "pin-langongbachieu",
      "name": "Lăng Tả quân Lê Văn Duyệt (Lăng Ông – Bà Chiểu)",
      "name_en": "Mausoleum of Marshal Le Van Duyet (Lang Ong Ba Chieu)",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 10.8018,
      "lng": 106.697,
      "discovery_radius": 1800,
      "interaction_radius": 60,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 1 Vũ Tùng (Quận Bình Thạnh), là khu lăng mộ và miếu thờ Tả quân Lê Văn Duyệt (1764–1832) — vị công thần nhà Nguyễn hai lần giữ chức Tổng trấn Gia Định Thành, có công lớn ổn định an ninh, đào kênh Vĩnh Tế và phát triển vùng đất Nam Bộ.\nSau biến cố án phạt thời Minh Mạng, ông được vua Thiệu Trị và Tự Đức minh oan, khôi phục lăng miếu. Quần thể mang đậm kiến trúc cung đình Nguyễn kết hợp nghệ thuật khảm sành sứ Nam Bộ đặc sắc, được xếp hạng Di tích lịch sử – văn hóa cấp quốc gia năm 1988.",
      "desc_en": "Located at 1 Vu Tung Street (Binh Thanh District), this mausoleum and temple honors Marshal Le Van Duyet (1764–1832), two-time Viceroy of Gia Dinh Citadel who safeguarded Southern Vietnam and oversaw major canal and civic works.\nAfter being posthumously exonerated by Emperors Thieu Tri and Tu Duc, his tomb complex was restored in Nguyen imperial architecture enriched with Southern porcelain mosaic art. It was designated a National Historical and Cultural Relic in 1988."
    },
    {
      "id": "pin-hoiquantue-thanh",
      "name": "Hội quán Tuệ Thành (Chùa Bà Thiên Hậu – Chợ Lớn)",
      "name_en": "Tue Thanh Assembly Hall (Thien Hau Temple – Cho Lon)",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 10.7534,
      "lng": 106.6612,
      "discovery_radius": 1800,
      "interaction_radius": 120,
      "icon": "🏮",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm tại số 710 Nguyễn Trãi (Quận 5), do cộng đồng người Hoa gốc Quảng Đông xây dựng khoảng năm 1760 để thờ Thiên Hậu Thánh Mẫu — vị thần che chở người vượt biển. Đây là một trong những ngôi chùa cổ nhất TP.HCM.\nCông trình xây dựng theo kiểu kiến trúc hình chữ \"Khẩu\" với sân thiên tỉnh thoáng rộng, nổi tiếng với hàng trăm vòng nhang lớn treo cao và các quần thể tượng gốm Cây Mai tinh xảo trên mái ngói. Hội quán được xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia năm 1993.",
      "desc_en": "At 710 Nguyen Trai Street (District 5), Tue Thanh Assembly Hall was founded around 1760 by Cantonese immigrants to worship Mazu (Thien Hau), goddess of the sea, making it one of Ho Chi Minh City’s oldest temples.\nBuilt around an open courtyard filled with hanging incense coils, it is celebrated for its intricate Cay Mai ceramic roof friezes and was designated a National Architectural and Artistic Relic in 1993."
    },
    {
      "id": "pin-hoiquannghiaan",
      "name": "Hội quán Nghĩa An (Chùa Ông – Chợ Lớn)",
      "name_en": "Nghia An Assembly Hall (Quan Cong Temple)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7536,
      "lng": 106.6634,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🏮",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 676 Nguyễn Trãi (Quận 5), do cộng đồng người Hoa Triều Châu và Hẹ xây dựng vào cuối thế kỷ XVIII – đầu thế kỷ XIX nhằm thờ Quan Công (Quan Thánh Đế Quân), biểu tượng của lòng trung nghĩa.\nHội quán nổi bật với nghệ thuật điêu khắc gỗ sơn son thếp vàng đỉnh cao qua các bao lam, hoành phi, liễn đối cổ cùng pho tượng ngựa Xích Thố bằng gỗ cỡ lớn. Công trình được xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia năm 1993.",
      "desc_en": "Located at 676 Nguyen Trai Street (District 5), Nghia An Assembly Hall was built in the late 18th to early 19th century by Teochew and Hakka communities to honor General Guan Yu, symbol of loyalty and righteousness.\nRenowned for its gilded woodcarvings, antique plaques, and a large wooden statue of the Red Hare steed, it was recognized as a National Architectural and Artistic Relic in 1993."
    },
    {
      "id": "pin-dinh-minh-huong",
      "name": "Đình Minh Hương Gia Thạnh",
      "name_en": "Minh Huong Gia Thanh Communal House",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7524,
      "lng": 106.663,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 380 Trần Hưng Đạo (Quận 5), được cộng đồng người Minh Hương thành lập từ khoảng năm 1789 nhằm thờ các bậc tiền hiền có công khai khẩn và xây dựng vùng đất Gia Định như Trịnh Hoài Đức, Ngô Nhân Tịnh, Trần Thắng Tài.\nĐình lưu giữ nhiều hoành phi, câu đối quý mang giá trị lịch sử – văn hóa sâu sắc về sự giao hòa giữa cư dân Việt và Minh Hương tại Sài Gòn – Chợ Lớn, được xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia năm 1993.",
      "desc_en": "Situated at 380 Tran Hung Dao Street (District 5), this communal house was founded around 1789 by the Minh Huong community to honor pioneers of Gia Dinh such as Trinh Hoai Duc, Ngo Nhan Tinh, and Tran Thang Tai.\nPreserving precious classical plaques and couplets that testify to centuries of Vietnamese–Minh Huong cultural fusion, it was designated a National Architectural and Artistic Relic in 1993."
    },
    {
      "id": "pin-nhalubac-q5",
      "name": "Di tích Lưu niệm Chủ tịch Hồ Chí Minh (Số 5 Châu Văn Liêm)",
      "name_en": "Ho Chi Minh Memorial House (5 Chau Van Liem Street)",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.751,
      "lng": 106.6592,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "🏠",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Ngôi nhà phố cổ tại số 5 Châu Văn Liêm (Quận 5) xưa từng là trụ sở phân cuộc Liên Thành thương quán tại Sài Gòn – Chợ Lớn. Từ khoảng tháng 9/1910 đến trước ngày 5/6/1911, người thanh niên yêu nước Nguyễn Tất Thành đã dừng chân sinh sống tại đây.\nTrong thời gian ở ngôi nhà này, Người tìm hiểu đời sống người lao động Sài Gòn và chuẩn bị hành trang trước khi xuống tàu rời Bến Nhà Rồng ra đi tìm đường cứu nước. Di tích được xếp hạng Di tích lịch sử cấp quốc gia năm 1988.",
      "desc_en": "This historic townhouse at 5 Chau Van Liem Street (District 5) once housed the Saigon–Cho Lon branch of the Lien Thanh Trading Company. From around September 1910 until early June 1911, young patriot Nguyen Tat Thanh resided here.\nDuring his stay, he observed the lives of Saigon laborers and prepared for his departure from Nha Rong Wharf in search of national liberation. The site was designated a National Historical Relic in 1988."
    },
    {
      "id": "pin-chobinhtay",
      "name": "Chợ Bình Tây (Chợ Lớn Mới)",
      "name_en": "Binh Tay Market (New Cho Lon)",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7496,
      "lng": 106.651,
      "discovery_radius": 1500,
      "interaction_radius": 60,
      "icon": "🏪",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 57A Tháp Mười (Quận 6), Chợ Bình Tây khởi công năm 1928 và khánh thành năm 1930 trên khu đất rộng khoảng 25.000 m² do thương nhân Quách Đàm hiến đất và đóng góp tài chính xây dựng (tượng đồng của ông được đặt trang trọng trong khuôn viên sân giữa).\nChợ kết hợp kỹ thuật xây dựng phương Tây với kiến trúc Á Đông đặc sắc: mái ngói lưu ly, lầu bát giác, tháp đồng hồ 4 mặt và tượng rồng phượng. Đây là trung tâm thương mại đầu mối lịch sử lớn nhất vùng Chợ Lớn và là Di tích kiến trúc nghệ thuật cấp thành phố.",
      "desc_en": "Located at 57A Thap Muoi Street (District 6), Binh Tay Market was built from 1928 to 1930 over 25,000 m² with land and funding donated by merchant Quach Dam, whose bronze statue stands in the central courtyard.\nMarrying Western engineering with Asian glazed tiled roofs, an octagonal pavilion, and a four-faced clock tower, it remains Cho Lon’s historic wholesale hub and a City-level Architectural Relic."
    },
    {
      "id": "pin-nhathochatam",
      "name": "Nhà thờ Cha Tam (Nhà thờ Thánh Phanxicô Xaviê)",
      "name_en": "Cha Tam Church (St. Francis Xavier Parish Church)",
      "category": "landmark",
      "rarity": "uncommon",
      "lat": 10.7507,
      "lng": 106.6542,
      "discovery_radius": 900,
      "interaction_radius": 70,
      "icon": "⛪",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 25 Học Lạc (Quận 5), nhà thờ khởi công năm 1900 và khánh thành năm 1902 do linh mục Phanxicô Xaviê Tam Assou (Cha Tam) xây dựng cho cộng đồng giáo dân người Hoa vùng Chợ Lớn.\nCông trình giao thoa độc đáo giữa kiến trúc Gothic phương Tây với mái ngói âm dương, cổng tam quan và câu đối chữ Hán phương Đông. Nơi đây còn ghi dấu biến cố lịch sử ngày 2/11/1963 khi Tổng thống Ngô Đình Diệm và cố vấn Ngô Đình Nhu trú ẩn tại nhà thờ trước khi bị bắt trong cuộc đảo chính.",
      "desc_en": "Situated at 25 Hoc Lac Street (District 5), the church was built between 1900 and 1902 by Father Francis Xavier Tam Assou (Cha Tam) for the Chinese Catholic community of Cho Lon.\nIt uniquely merges Gothic architecture with Asian yin-yang roof tiles, a triple gate, and Chinese couplets. Historically, it was also the final refuge of President Ngo Dinh Diem and advisor Ngo Dinh Nhu on November 2, 1963 before their capture during the coup."
    },
    {
      "id": "pin-truonglehongphong",
      "name": "Trường THPT Chuyên Lê Hồng Phong (Trường Pétrus Ký xưa)",
      "name_en": "Le Hong Phong High School for the Gifted (Former Lycee Petrus Ky)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7647,
      "lng": 106.6819,
      "discovery_radius": 1200,
      "interaction_radius": 50,
      "icon": "🏫",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm tại số 235 Nguyễn Văn Cừ (Quận 5), trường khởi công năm 1925 và khai giảng năm 1927 (tên ban đầu là Trường Trung học bản xứ Nam Kỳ – Lycée Pétrus Trương Vĩnh Ký) do kiến trúc sư Ernest Hébrard thiết kế theo phong cách kiến trúc Đông Dương tinh tế.\nTrường là cái nôi của phong trào yêu nước học sinh – sinh viên Sài Gòn gắn liền với tên tuổi liệt sĩ Trần Văn Ơn (9/1/1950), đồng thời đào tạo nhiều danh nhân trí thức lớn như GS Trần Đại Nghĩa, nhạc sĩ Lưu Hữu Phước, GS Trần Văn Khê. Từ năm 1976 trường mang tên Lê Hồng Phong.",
      "desc_en": "At 235 Nguyen Van Cu Street (District 5), the school was begun in 1925 and opened in 1927 as Lycee Petrus Truong Vinh Ky, designed by Ernest Hebrard in graceful Indochine architecture.\nA cradle of the Saigon patriotic student movement linked to martyr Tran Van On (January 9, 1950), it educated major figures including Professor Tran Dai Nghia, composer Luu Huu Phuoc, and Professor Tran Van Khe. Renamed Le Hong Phong High School in 1976."
    },
    {
      "id": "pin-khu-trai-giam-choquan",
      "name": "Khu Trại giam Bệnh viện Chợ Quán (Nơi Tổng Bí thư Trần Phú hy sinh)",
      "name_en": "Cho Quan Hospital Detention Ward (Where General Secretary Tran Phu Passed Away)",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7534,
      "lng": 106.6787,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "🏥",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm trong khuôn viên Bệnh viện Bệnh Nhiệt đới TP.HCM (764 Võ Văn Kiệt, Quận 5 — tiền thân là Bệnh viện Chợ Quán xây dựng từ năm 1861, một trong những bệnh viện lâu đời nhất Việt Nam). Khu nhà giam riêng biệt tại đây từng giam giữ các tù nhân chính trị bị bệnh nặng.\nNgày 6/9/1931, đồng chí Trần Phú — Tổng Bí thư đầu tiên của Đảng Cộng sản Đông Dương — đã trút hơi thở cuối cùng tại đây sau thời gian bị thực dân Pháp tra tấn dã man, để lại lời căn dặn bất hủ \"Hãy giữ vững chí khí chiến đấu!\". Khu trại giam được xếp hạng Di tích lịch sử cấp quốc gia năm 1988.",
      "desc_en": "Inside the Hospital for Tropical Diseases (764 Vo Van Kiet, District 5—originally Cho Quan Hospital founded in 1861, among Vietnam’s oldest hospitals), this secure ward held gravely ill political prisoners.\nOn September 6, 1931, Tran Phu—the first General Secretary of the Indochinese Communist Party—passed away here following brutal colonial torture, leaving his immortal testament: \"Keep up the fighting spirit!\" Designated a National Historical Relic in 1988."
    },
    {
      "id": "pin-chuagiaclam",
      "name": "Chùa Giác Lâm (Cẩm Sơn Tự)",
      "name_en": "Giac Lam Pagoda",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 10.7798,
      "lng": 106.6477,
      "discovery_radius": 1800,
      "interaction_radius": 50,
      "icon": "🛕",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 565 Lạc Long Quân (Quận Tân Bình), được cư sĩ Lý Thụy Long xây dựng vào mùa xuân năm 1744 trên gò Cẩm Sơn. Đây là ngôi tổ đình cổ nhất còn giữ được diện mạo kiến trúc truyền thống Nam Bộ tại TP.HCM.\nChùa có bố cục chữ \"Tam\", lưu giữ hơn 110 pho tượng cổ bằng gỗ mít sơn son thếp vàng và hàng nghìn đĩa gốm sứ cổ khảm trên tường và mái tháp. Trong sân chùa có cây bồ đề chiết từ Sri Lanka năm 1953 và tháp xá lợi 7 tầng. Chùa được xếp hạng Di tích lịch sử – văn hóa cấp quốc gia năm 1988.",
      "desc_en": "Located at 565 Lac Long Quan Street (Tan Binh District), Giac Lam Pagoda was founded in the spring of 1744 on Cam Son Mound, making it the oldest traditional Buddhist temple in Ho Chi Minh City.\nBuilt in the three-wing Southern style, it houses over 110 antique gilded jackfruit-wood statues, thousands of antique porcelain plates inlaid into its walls, a 1953 Bodhi tree from Sri Lanka, and a seven-story stupa. It was named a National Historical and Cultural Relic in 1988."
    },
    {
      "id": "pin-diadaophuthohoa",
      "name": "Di tích Lịch sử Địa đạo Phú Thọ Hòa",
      "name_en": "Phu Tho Hoa Tunnels Historical Site",
      "category": "battlefield",
      "rarity": "rare",
      "lat": 10.7848,
      "lng": 106.6258,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "⚔️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm tại số 139 Phú Thọ Hòa (Quận Tân Phú), hệ thống địa đạo được quân và dân địa phương bí mật đào từ năm 1947 trong những năm đầu kháng chiến chống thực dân Pháp, là một trong những địa đạo ra đời sớm nhất khu vực Sài Gòn – Gia Định.\nĐịa đạo có cấu trúc hai tầng cùng các hầm bí mật cất giấu vũ khí, tài liệu và làm nơi đứng chân, xuất kích của lực lượng cách mạng sát nội đô trong suốt hai cuộc kháng chiến. Di tích được xếp hạng Di tích lịch sử cấp quốc gia năm 1996.",
      "desc_en": "Situated at 139 Phu Tho Hoa Street (Tan Phu District), these tunnels were secretly excavated starting in 1947 during the early resistance against French colonialism, making them among the earliest tunnel networks in the Saigon – Gia Dinh area.\nFeaturing two underground levels and hidden caches for weapons and cadres right on the city’s edge across two wars, the site was designated a National Historical Relic in 1996."
    },
    {
      "id": "pin-dinhthongtayhoi",
      "name": "Đình Thông Tây Hội",
      "name_en": "Thong Tay Hoi Communal House",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.8384,
      "lng": 106.6626,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc trên đường Thống Nhất (Quận Gò Vấp), hình thành vào cuối thế kỷ XVII (tương truyền năm 1679 hoặc 1698), Đình Thông Tây Hội là một trong những ngôi đình cổ nhất vùng đất Gia Định – TP.HCM.\nĐình thờ Thành hoàng Bổn cảnh cùng hai vị Đông Chinh Vương và Dực Thánh Vương, nổi bật với kết cấu 48 cột gỗ quý, mái ngói âm dương, phù điêu gỗ chạm trổ công phu và nhiều sắc phong cổ thời Nguyễn. Công trình được xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia năm 1998.",
      "desc_en": "Located on Thong Nhat Street (Go Vap District) and dating to the late 17th century (traditionally 1679 or 1698), Thong Tay Hoi is among the oldest communal houses in Ho Chi Minh City.\nDedicated to the local tutelary deity alongside Dong Chinh Vuong and Duc Thanh Vuong, it preserves 48 antique timber columns, yin-yang tiled roofs, intricate woodcarvings, and Nguyen imperial decrees. It became a National Architectural Relic in 1998."
    },
    {
      "id": "pin-denhung-thuduc",
      "name": "Đền Tưởng niệm Các Vua Hùng (Công viên Lịch sử – Văn hóa Dân tộc)",
      "name_en": "Hung Kings Memorial Temple (National Historical & Cultural Park)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.8803,
      "lng": 106.8266,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🏯",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Khánh thành năm 2009 trên đỉnh đồi cao tại phường Long Bình (TP. Thủ Đức) theo thiết kế của kiến trúc sư Nguyễn Trường Lưu. Đền được xây dựng trên ý niệm \"trời tròn đất vuông\" cách điệu hình trống đồng Đông Sơn, kết hợp 9 đốt tre cách điệu vươn cao và lối dẫn qua 18 biểu tượng đời Vua Hùng.\nĐây là công trình văn hóa tâm linh quy mô lớn tôn vinh cội nguồn dân tộc và là trung tâm tổ chức Lễ Giỗ Tổ Hùng Vương (mùng 10 tháng 3 âm lịch) hằng năm của TP.HCM.",
      "desc_en": "Inaugurated in 2009 atop a hill in Long Binh Ward (Thu Duc City) to a design by architect Nguyen Truong Luu, the temple draws on the \"round sky, square earth\" cosmology and stylized Dong Son bronze drum motifs, accented by nine soaring bamboo pillars and 18 emblems of the Hung Kings.\nIt serves as Ho Chi Minh City’s premier spiritual landmark for the annual Hung Kings’ Commemoration Day on the 10th day of the third lunar month."
    },
    {
      "id": "pin-ngabagioi",
      "name": "Khu Di tích Lịch sử Ngã Ba Giồng",
      "name_en": "Nga Ba Giong Historical Site",
      "category": "battlefield",
      "rarity": "epic",
      "lat": 10.8588,
      "lng": 106.5648,
      "discovery_radius": 1500,
      "interaction_radius": 90,
      "icon": "🔥",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại xã Xuân Thới Thượng (huyện Hóc Môn) — vùng đất 18 Thôn Vườn Trầu giàu truyền thống cách mạng, gắn liền với cuộc Khởi nghĩa Nam Kỳ lịch sử ngày 23/11/1940.\nNăm 1941, thực dân Pháp lập trường bắn tại đây và xử bắn nhiều nhà lãnh đạo kiên trung của Đảng như Nguyễn Văn Cừ, Phan Đăng Lưu cùng đông đảo chiến sĩ khởi nghĩa Nam Kỳ. Khu di tích rộng hơn 10 ha với tượng đài, đền tưởng niệm và nhà trưng bày được xếp hạng Di tích lịch sử cấp quốc gia năm 2002.",
      "desc_en": "Located in Xuan Thoi Thuong Commune (Hoc Mon District) in the famed \"18 Betel-Garden Villages\" heartland, Nga Ba Giong is closely tied to the November 23, 1940 Southern Uprising.\nIn 1941, colonial authorities used the site as an execution ground for senior revolutionary leaders including Nguyen Van Cu and Phan Dang Luu alongside countless uprising fighters. Covering over 10 hectares with a memorial temple and monument, it was designated a National Historical Relic in 2002."
    },
    {
      "id": "pin-diadaocuchi",
      "name": "Khu Di tích Lịch sử Địa đạo Củ Chi (Bến Dược)",
      "name_en": "Cu Chi Tunnels Historical Site (Ben Duoc)",
      "category": "battlefield",
      "rarity": "legendary",
      "lat": 11.1437,
      "lng": 106.4622,
      "discovery_radius": 500,
      "interaction_radius": 120,
      "icon": "⚔️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm tại xã Phú Mỹ Hưng (huyện Củ Chi), Địa đạo Củ Chi là kỳ tích quân sự dưới lòng đất dài khoảng 250 km trên vùng \"Đất Thép Thành Đồng\", bắt đầu đào từ năm 1948 thời kháng chiến chống Pháp và phát triển quy mô lớn trong kháng chiến chống Mỹ.\nHệ thống có nhiều tầng sâu (3–12 m) gồm hầm chỉ huy, bệnh xá, bếp Hoàng Cầm giấu khói, xưởng chế tạo vũ khí và lỗ thông hơi ngụy trang tinh vi. Khu Bến Dược còn có Đền Tưởng niệm Liệt sĩ Bến Dược ghi danh hơn 45.000 anh hùng liệt sĩ. Địa đạo được xếp hạng Di tích quốc gia đặc biệt năm 2015.",
      "desc_en": "Located in Phu My Hung Commune (Cu Chi District), the Cu Chi Tunnels form an extraordinary 250 km underground network in the \"Land of Steel,\" begun in 1948 against French forces and expanded massively during the Vietnam War.\nBuilt across multiple levels (3–12 meters deep), the complex contained command rooms, field hospitals, smokeless Hoang Cam kitchens, and workshops. Adjacent Ben Duoc Memorial Temple honors over 45,000 fallen heroes. Designated a Special National Relic in 2015."
    },
    {
      "id": "pin-chiencurungsac",
      "name": "Chiến khu Rừng Sác – Cần Giờ",
      "name_en": "Rung Sac Guerrilla Base – Can Gio",
      "category": "battlefield",
      "rarity": "epic",
      "lat": 10.506,
      "lng": 106.8798,
      "discovery_radius": 500,
      "interaction_radius": 100,
      "icon": "🌿",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc giữa vùng rừng ngập mặn chằng chịt sông rạch tại xã Long Hòa (huyện Cần Giờ), Chiến khu Rừng Sác là địa bàn bám trụ chiến đấu oanh liệt của Đoàn 10 Đặc công Rừng Sác giai đoạn 1966–1975.\nBất chấp bom đạn, chất độc hóa học và điều kiện sinh tồn khắc nghiệt, lực lượng Đặc công Rừng Sác đã lập nhiều chiến công vang dội trên tuyến sông Lòng Tàu và trận đánh kho xăng Nhà Bè (12/1973). Khu căn cứ được xếp hạng Di tích lịch sử cấp quốc gia năm 2004, nằm trong Khu Dự trữ Sinh quyển Thế giới Cần Giờ (UNESCO công nhận năm 2000).",
      "desc_en": "Set deep within the mangrove waterways of Long Hoa Commune (Can Gio District), Rung Sac Base was the legendary stronghold of the 10th Special Forces Regiment from 1966 to 1975.\nDespite heavy bombardment, defoliants, and harsh tidal terrain, the Rung Sac commandos executed daring raids along the Long Tau shipping channel and destroyed the Nha Be fuel depot in December 1973. Designated a National Historical Relic in 2004, it lies within the UNESCO-recognized Can Gio Mangrove Biosphere Reserve (2000)."
    },
    {
      "id": "pin-giongcavo",
      "name": "Di chỉ khảo cổ học Giồng Cá Vồ",
      "name_en": "Giong Ca Vo Archaeological Site",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.422,
      "lng": 106.9535,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🏺",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm tại xã Long Hòa (huyện Cần Giờ), được phát hiện và khai quật quy mô lớn năm 1993–1994, Di chỉ Giồng Cá Vồ có niên đại khoảng 2.500 năm cách ngày nay (giai đoạn văn hóa tiền Óc Eo có giao lưu sâu rộng với văn hóa Sa Huỳnh).\nCác nhà khảo cổ đã tìm thấy hơn 300 mộ chum cùng di cốt người cổ, công cụ sắt, đồ gốm và đặc biệt là bộ sưu tập khuyên tai hai đầu thú bằng đá nephrite tinh xảo — bằng chứng quan trọng về đời sống cư dân cổ vùng đất TP.HCM. Di chỉ được xếp hạng Di tích khảo cổ cấp quốc gia năm 2000.",
      "desc_en": "Situated in Long Hoa Commune (Can Gio District) and extensively excavated in 1993–1994, Giong Ca Vo dates back roughly 2,500 years to the Pre-Oc Eo period with strong cultural links to the Sa Huynh civilization.\nArchaeologists uncovered over 300 jar burials, ancient human remains, iron tools, ceramics, and exquisite double-headed animal ear ornaments carved from nephrite—vital evidence of early settlement in the Ho Chi Minh City region. Designated a National Archaeological Relic in 2000."
    },
    {
      "id": "pin-chuabuulong",
      "name": "Tổ đình Bửu Long (Chùa Bửu Long)",
      "name_en": "Buu Long Pagoda (Buu Long Monastery)",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.8842,
      "lng": 106.8427,
      "discovery_radius": 1500,
      "interaction_radius": 65,
      "icon": "🛕",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 81 Nguyễn Xiển (phường Long Bình, TP. Thủ Đức), chùa được cư sĩ Võ Hà Thuật thành lập năm 1942 theo hệ phái Phật giáo Nguyên thủy (Theravada). Từ năm 2007, chùa được trùng tu quy mô lớn theo ý tưởng kiến trúc của Hòa thượng Thích Viên Minh.\nĐiểm nhấn nổi bật là Bảo tháp Gotama Cetiya (xây dựng giai đoạn 2007–2013) cao 56 m, kết hợp tinh tế kiến trúc Phật giáo Ấn Độ – Đông Nam Á với đường nét chạm khắc thời Nguyễn. Năm 2019, tạp chí National Geographic (Mỹ) bình chọn Chùa Bửu Long vào nhóm những ngôi chùa có thiết kế đẹp bậc nhất thế giới.",
      "desc_en": "Located at 81 Nguyen Xien Street (Long Binh Ward, Thu Duc City), Buu Long Pagoda was founded in 1942 in the Theravada Buddhist tradition and expanded extensively from 2007 under Venerable Thich Vien Minh.\nIts centerpiece, the 56-meter Gotama Cetiya Stupa (2007–2013), fuses Indian and Southeast Asian Buddhist architecture with Nguyen-era ornamentation. In 2019, National Geographic named Buu Long among the most beautiful Buddhist temples in the world."
    },
    {
      "id": "pin-nhathothuthiem",
      "name": "Nhà thờ Thủ Thiêm & Tu viện Hội dòng Mến Thánh Giá Thủ Thiêm",
      "name_en": "Thu Thiem Parish Church & Lovers of the Holy Cross Convent",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7745,
      "lng": 106.7107,
      "discovery_radius": 1500,
      "interaction_radius": 50,
      "icon": "⛪",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm ven bờ Đông sông Sài Gòn đối diện trung tâm Quận 1 (phường Thủ Thiêm, TP. Thủ Đức), Tu viện Hội dòng Mến Thánh Giá Thủ Thiêm thành lập năm 1840 (một trong những dòng tu nữ bản địa lâu đời nhất miền Nam), còn Nhà thờ Thủ Thiêm hình thành từ năm 1859 và xây dựng hoàn chỉnh bằng gạch vào giai đoạn 1872–1875.\nHai công trình mang kiến trúc Pháp cổ hài hòa với không gian sông nước Nam Bộ, là dấu tích lịch sử – tôn giáo hiếm hoi được bảo tồn nguyên vẹn giữa Khu đô thị mới Thủ Thiêm và được UBND TP.HCM xếp hạng Di tích kiến trúc nghệ thuật cấp thành phố năm 2019.",
      "desc_en": "Standing along the eastern bank of the Saigon River across from District 1 (Thu Thiem Ward, Thu Duc City), the Lovers of the Holy Cross Convent was founded in 1840 and Thu Thiem Parish Church originated in 1859 (built in masonry in 1872–1875).\nPreserved intact amid the modern Thu Thiem urban area, the twin French-colonial religious landmarks were designated City-level Architectural and Artistic Relics in 2019."
    },
    {
      "id": "pin-chuahoison",
      "name": "Chùa Hội Sơn",
      "name_en": "Hoi Son Pagoda",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.8805,
      "lng": 106.8358,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🛕",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc trên đường Nguyễn Xiển (phường Long Bình, TP. Thủ Đức), Chùa Hội Sơn hình thành từ cuối thế kỷ XVIII do Thiền sư Khánh Long khai sơn, là một trong những ngôi chùa cổ nổi tiếng bậc nhất vùng đất Thủ Đức – Gia Định xưa.\nCông trình được xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia năm 1993. Dù ngôi chánh điện gỗ cổ không may gặp hỏa hoạn vào năm 2012, chùa đã được phục dựng tôn nghiêm trên nền xưa, vẫn lưu giữ truyền thống Phật giáo lâu đời của khu vực cửa ngõ Đông Bắc TP.HCM.",
      "desc_en": "Situated on Nguyen Xien Street (Long Binh Ward, Thu Duc City), Hoi Son Pagoda dates to the late 18th century under Zen Master Khanh Long and ranks among the oldest Buddhist temples of historic Thu Duc.\nDesignated a National Architectural and Artistic Relic in 1993, its ancient timber main hall suffered a fire in 2012 and was faithfully reconstructed on its original foundations."
    },
    {
      "id": "pin-baotangaodai",
      "name": "Bảo tàng Áo Dài (Nhà vườn Long Thuận)",
      "name_en": "Ao Dai Museum (Long Thuan Garden House)",
      "category": "story",
      "rarity": "rare",
      "lat": 10.8087,
      "lng": 106.8548,
      "discovery_radius": 1200,
      "interaction_radius": 60,
      "icon": "👘",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 206/19/30 Long Thuận (phường Long Phước, TP. Thủ Đức), Bảo tàng Áo Dài do nhà thiết kế Sĩ Hoàng sáng lập và chính thức mở cửa năm 2014 giữa không gian cù lao sông nước rộng gần 2 ha mang kiến trúc nhà rường truyền thống.\nBảo tàng trưng bày hàng trăm bộ áo dài tái hiện hành trình phát triển của quốc phục từ thế kỷ XVII đến hiện đại, cùng những bộ áo dài kỷ vật gắn liền với các nhân vật nữ tiêu biểu như bà Nguyễn Thị Bình, bà Nguyễn Thị Định và GS.TS Nguyễn Thị Ngọc Phượng.",
      "desc_en": "Located at 206/19/30 Long Thuan Street (Long Phuoc Ward, Thu Duc City), the Ao Dai Museum was founded by designer Si Hoang and opened in 2014 on a lush 2-hectare riverside estate featuring traditional timber houses.\nIts galleries trace the evolution of Vietnam’s iconic garment from the 17th century to today, alongside historic ao dai worn by notable figures such as Nguyen Thi Binh, Nguyen Thi Dinh, and Dr. Nguyen Thi Ngoc Phuong."
    },
    {
      "id": "pin-dinhphongphu",
      "name": "Đình Phong Phú",
      "name_en": "Phong Phu Communal House",
      "category": "landmark",
      "rarity": "uncommon",
      "lat": 10.8407,
      "lng": 106.7745,
      "discovery_radius": 900,
      "interaction_radius": 70,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm trên đường Trương Văn Thành (phường Tăng Nhơn Phú B, TP. Thủ Đức), Đình Phong Phú được dựng vào cuối thế kỷ XIX nhằm thờ Thành hoàng Bổn cảnh và các vị tiền hiền có công khai khẩn đất đai vùng Thủ Đức xưa.\nĐình còn bảo lưu sắc phong thời vua Tự Đức, hệ khung gỗ chạm khắc tứ linh tinh xảo cùng lễ hội Kỳ yên truyền thống đặc sắc của cư dân Nam Bộ, được xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia năm 1993.",
      "desc_en": "Located on Truong Van Thanh Street (Tang Nhon Phu B Ward, Thu Duc City), Phong Phu Communal House was built in the late 19th century to honor the village tutelary deity and early pioneers of Thu Duc.\nPreserving an imperial decree from Emperor Tu Duc, finely carved hardwood pillars, and traditional Ky Yen festivals, it was designated a National Architectural Relic in 1993."
    },
    {
      "id": "pin-nghiatranglietsi-tphcm",
      "name": "Nghĩa trang Liệt sĩ TP.HCM (Đồi Không Tên)",
      "name_en": "Ho Chi Minh City Martyrs Cemetery (Nameless Hill)",
      "category": "battlefield",
      "rarity": "epic",
      "lat": 10.8758,
      "lng": 106.8095,
      "discovery_radius": 1500,
      "interaction_radius": 90,
      "icon": "🕯️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc dọc trục đường Võ Nguyên Giáp (phường Long Bình, TP. Thủ Đức) trên khu đất rộng khoảng 30 ha, Nghĩa trang Liệt sĩ TP.HCM được xây dựng từ năm 1978 tại khu vực Đồi Không Tên lịch sử.\nĐây là nơi yên nghỉ của hơn 14.000 anh hùng liệt sĩ đã hy sinh vì độc lập, tự do của Tổ quốc qua các thời kỳ, trong đó có nhiều chiến sĩ Mậu Thân 1968 và Chiến dịch Hồ Chí Minh 1975. Chính giữa là Tượng đài Mẹ Việt Nam Anh hùng cùng tháp tưởng niệm trang nghiêm.",
      "desc_en": "Spanning roughly 30 hectares along Vo Nguyen Giap Boulevard (Long Binh Ward, Thu Duc City), the HCMC Martyrs Cemetery was established in 1978 on historic Nameless Hill.\nIt is the resting place of over 14,000 fallen soldiers from Vietnam’s liberation struggles—including heroes of the 1968 Tet Offensive and the 1975 Ho Chi Minh Campaign—anchored by a solemn Vietnamese Heroic Mother monument."
    },
    {
      "id": "pin-langlebauco",
      "name": "Khu Di tích Lịch sử Láng Le – Bàu Cò",
      "name_en": "Lang Le – Bau Co Historical Battlefield Site",
      "category": "battlefield",
      "rarity": "epic",
      "lat": 10.7285,
      "lng": 106.5356,
      "discovery_radius": 1500,
      "interaction_radius": 85,
      "icon": "⚔️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại xã Tân Nhựt (huyện Bình Chánh), Láng Le – Bàu Cò nằm trong vùng căn cứ bưng biền Vườn Thơm – Bà Vụ nổi tiếng thời kháng chiến chống Pháp.\nNgày 15/4/1948, tại đây, Trung đoàn 308 cùng quân dân Chợ Lớn đã chiến đấu ngoan cường bẻ gãy cuộc hành quân càn quét quy mô lớn của hàng nghìn quân Pháp có máy bay, pháo binh yểm trợ, bảo vệ an toàn cơ quan đầu não Khu ủy và Ủy ban Kháng chiến Hành chính Sài Gòn – Chợ Lớn. Khu di tích được xếp hạng Di tích lịch sử cấp thành phố năm 2003.",
      "desc_en": "Located in Tan Nhut Commune (Binh Chanh District) within the wartime Vuon Thom – Ba Vu marshland base, Lang Le – Bau Co witnessed a decisive battle on April 15, 1948.\nThere, Regiment 308 and local Cho Lon forces repelled a massive French sweep backed by artillery and aircraft, safeguarding the Saigon–Cho Lon resistance leadership. It was designated a City-level Historical Relic in 2003."
    },
    {
      "id": "pin-ditich-mauthan-binhchanh",
      "name": "Khu Di tích Lịch sử Cuộc Tổng tiến công Xuân Mậu Thân 1968",
      "name_en": "1968 Tet Offensive Historical Memorial Site (Binh Chanh)",
      "category": "battlefield",
      "rarity": "rare",
      "lat": 10.7252,
      "lng": 106.5446,
      "discovery_radius": 1200,
      "interaction_radius": 85,
      "icon": "🔥",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại ấp 1, xã Tân Nhựt (huyện Bình Chánh) — vùng căn cứ bàn đạp phía Tây Nam Sài Gòn năm 1968, khu di tích rộng gần 15 ha được khánh thành năm 2018 nhân kỷ niệm 50 năm Cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân.\nCông trình gồm cụm tượng đài hoành tráng, đền tưởng niệm, nhà trưng bày tư liệu và không gian cây xanh trang nghiêm, tưởng nhớ đồng bào, chiến sĩ đã chiến đấu và hy sinh trên mặt trận Sài Gòn – Gia Định.",
      "desc_en": "Situated in Tan Nhut Commune (Binh Chanh District), the southwestern staging ground of Saigon in 1968, this nearly 15-hectare memorial complex opened in 2018 for the 50th anniversary of the Tet Offensive.\nIt features a monumental sculpture group, memorial temple, and exhibition hall honoring the soldiers and civilians who fought across the Saigon – Gia Dinh front."
    },
    {
      "id": "pin-khoxangnhabe",
      "name": "Di tích Chiến thắng Kho xăng Nhà Bè (1973)",
      "name_en": "Nha Be Fuel Depot Victory Site (1973)",
      "category": "battlefield",
      "rarity": "legendary",
      "lat": 10.6952,
      "lng": 106.7524,
      "discovery_radius": 1800,
      "interaction_radius": 75,
      "icon": "💥",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm dọc tuyến đường Huỳnh Tấn Phát bên sông Nhà Bè (thị trấn Nhà Bè, huyện Nhà Bè), Tổng kho xăng dầu Nhà Bè trước năm 1975 là kho nhiên liệu lớn bậc nhất phục vụ bộ máy chiến tranh của Mỹ và chính quyền Sài Gòn với hệ thống phòng thủ nhiều lớp cực kỳ kiên cố.\nRạng sáng ngày 3/12/1973, 8 chiến sĩ Đội 5 thuộc Đoàn 10 Đặc công Rừng Sác đã bí mật vượt vòng vây đặt mìn đánh nổ tung hàng chục bồn chứa, thiêu rụi hơn 140 triệu lít xăng dầu (cháy liên tục 12 ngày đêm), lập nên chiến công kinh điển của bộ đội Đặc công Việt Nam.",
      "desc_en": "Along Huynh Tan Phat Road by the Nha Be River (Nha Be District), the Nha Be Fuel Depot was the largest military fuel complex in South Vietnam, guarded by dense perimeter defenses.\nBefore dawn on December 3, 1973, eight commandos of Team 5 (10th Rung Sac Special Forces Regiment) infiltrated the depot and detonated charges that destroyed over 140 million liters of fuel in a blaze lasting 12 days—a legendary feat of Vietnamese special forces."
    },
    {
      "id": "pin-dinhbinhdong",
      "name": "Đình Bình Đông (Cù lao Bà Tàng)",
      "name_en": "Binh Dong Communal House (Ba Tang Islet)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7393,
      "lng": 106.6471,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 158 Bến Bình Đông (cù lao Bà Tàng, Quận 8), ngôi đình cổ hình thành từ giữa thế kỷ XIX và nhận sắc phong năm Tự Đức thứ 6 (1853), mang kiến trúc đình làng Nam Bộ truyền thống giữa vùng sông nước.\nGiai đoạn 1925–1930, đình còn là cơ sở cách mạng bí mật quan trọng gắn liền với hoạt động của đồng chí Tôn Đức Thắng và tổ chức Công hội Đỏ Sài Gòn – Chợ Lớn. Công trình được xếp hạng Di tích lịch sử – văn hóa cấp quốc gia năm 1997.",
      "desc_en": "Located at 158 Ben Binh Dong on Ba Tang Islet (District 8), this mid-19th century communal house received an imperial decree in 1853 and preserves classic Southern riverine temple architecture.\nFrom 1925 to 1930 it also served as a covert meeting place for Ton Duc Thang and the Saigon–Cho Lon Red Trade Union. It was designated a National Historical and Cultural Relic in 1997."
    },
    {
      "id": "pin-benbinhdong",
      "name": "Bến Bình Đông – Không gian Văn hóa \"Trên bến dưới thuyền\"",
      "name_en": "Binh Dong Wharf – Floating Flower Market Heritage Street",
      "category": "story",
      "rarity": "rare",
      "lat": 10.7478,
      "lng": 106.654,
      "discovery_radius": 1200,
      "interaction_radius": 60,
      "icon": "🌸",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Chạy dọc bờ kênh Tàu Hủ (Quận 8), Bến Bình Đông hình thành từ cuối thế kỷ XIX – đầu thế kỷ XX với những dãy nhà phố cổ, nhà kho lúa gạo và bến ghe thương hồ nhộn nhịp nối liền Chợ Lớn với Đồng bằng sông Cửu Long.\nMỗi dịp giáp Tết Nguyên đán, nơi đây bừng sáng trong Chợ hoa Xuân \"Trên bến dưới thuyền\" với hàng trăm ghe hoa kiểng từ miền Tây cập bến, trở thành một trong những di sản sinh hoạt đô thị – lễ hội giàu bản sắc nhất của TP.HCM.",
      "desc_en": "Lining the Tau Hu Canal (District 8), Binh Dong Wharf grew in the late 19th and early 20th centuries as a bustling rice-trading waterfront linking Cho Lon with the Mekong Delta, framed by vintage shophouses and warehouses.\nEach Lunar New Year, hundreds of flower boats from southern provinces dock here for the vibrant \"On the Wharf, Under the Boats\" Spring Flower Market—one of HCMC’s signature living traditions."
    },
    {
      "id": "pin-chienkhuanphudong",
      "name": "Di tích Lịch sử Chiến khu An Phú Đông",
      "name_en": "An Phu Dong Resistance Base Historical Site",
      "category": "battlefield",
      "rarity": "rare",
      "lat": 10.8617,
      "lng": 106.6976,
      "discovery_radius": 1200,
      "interaction_radius": 65,
      "icon": "🛡️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại phường An Phú Đông (Quận 12) trên dải đất cù lao bao bọc bởi sông Sài Gòn và sông Vàm Thuật, Chiến khu An Phú Đông hình thành ngay sau ngày Nam Bộ kháng chiến (23/9/1945).\nNằm sát cửa ngõ phía Bắc Sài Gòn, \"lõm căn cứ\" kiên cường này từng che chở cơ quan chỉ huy kháng chiến Gia Định và ghi dấu hàng trăm trận đánh chống càn oanh liệt suốt hai cuộc kháng chiến. Nhà truyền thống Chiến khu An Phú Đông hiện là địa chỉ đỏ giáo dục lịch sử của thành phố.",
      "desc_en": "Situated in An Phu Dong Ward (District 12) on a peninsula framed by the Saigon and Vam Thuat rivers, the An Phu Dong Resistance Base was established right after September 23, 1945.\nSitting just north of downtown Saigon, this resilient pocket base sheltered Gia Dinh command units and endured hundreds of counter-sweep battles across both wars."
    },
    {
      "id": "pin-dentranhungdao-q1",
      "name": "Đền thờ Đức Thánh Trần Hưng Đạo (Tân Định)",
      "name_en": "Tran Hung Dao Temple (Tan Dinh, District 1)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7905,
      "lng": 106.6929,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "⚔️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 36 Võ Thị Sáu (phường Tân Định, Quận 1), ngôi đền khởi dựng năm 1932 từ miếu thờ nhỏ của cộng đồng người gốc Bắc tại Sài Gòn và được xây dựng quy mô khang trang vào giai đoạn 1957–1958.\nCông trình mang đậm kiến trúc truyền thống Việt Nam với mái ngói mũi hài và các bức phù điêu khắc họa chiến công nhà Trần, tôn thờ Hưng Đạo Đại Vương Trần Quốc Tuấn cùng gia quyến và các danh tướng Yết Kiêu, Dã Tượng, Phạm Ngũ Lão. Hằng năm vào ngày 20/8 âm lịch, đền tổ chức lễ giỗ Đức Thánh Trần trang trọng.",
      "desc_en": "Located at 36 Vo Thi Sau Street (Tan Dinh Ward, District 1), this temple began in 1932 as a modest shrine built by northern migrants in Saigon and was expanded in 1957–1958.\nFeaturing traditional Vietnamese curved tiled roofs and reliefs of Tran Dynasty victories, it honors Supreme Commander Tran Quoc Tuan alongside generals Yet Kieu, Da Tuong, and Pham Ngu Lao, hosting major annual commemorations on the 20th day of the 8th lunar month."
    },
    {
      "id": "pin-baotangtonducthang",
      "name": "Bảo tàng Tôn Đức Thắng",
      "name_en": "Ton Duc Thang Museum",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7782,
      "lng": 106.7063,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "⚓",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 5 Tôn Đức Thắng (phường Bến Nghé, Quận 1) ngay bên bờ sông Sài Gòn, bảo tàng thành lập ngày 20/8/1988 nhân kỷ niệm 100 năm ngày sinh Chủ tịch Tôn Đức Thắng (1888–1980) — người thợ máy Ba Son kiệt xuất, người sáng lập Công hội Đỏ đầu tiên của Việt Nam và là Chủ tịch nước đầu tiên của nước CHXHCN Việt Nam.\nTòa nhà bảo tàng mới hiện đại khánh thành đầu năm 2025 với các chuyên đề tương tác sinh động tái hiện cuộc đời cách mạng kiên trung và giản dị của Bác Tôn.",
      "desc_en": "Situated at 5 Ton Duc Thang Street (District 1) overlooking the Saigon River, the museum was founded on August 20, 1988 for the birth centenary of President Ton Duc Thang (1888–1980)—famed Ba Son shipyard mechanic, founder of Vietnam’s first Red Trade Union, and first President of the Socialist Republic of Vietnam.\nIts newly rebuilt modern facility opened in early 2025 with interactive exhibits chronicling his steadfast revolutionary life."
    },
    {
      "id": "pin-xuongbason",
      "name": "Di tích Lịch sử Xưởng đóng tàu Ba Son",
      "name_en": "Historic Ba Son Shipyard Relic",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 10.7834,
      "lng": 106.7073,
      "discovery_radius": 1800,
      "interaction_radius": 55,
      "icon": "🚢",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm tại số 2 Tôn Đức Thắng (Quận 1) bên bờ sông Sài Gòn, Xưởng đóng tàu Ba Son thành lập năm 1863 trên nền xưởng thủy (Chu sư) của triều Nguyễn cuối thế kỷ XVIII, trở thành cơ sở công nghiệp cơ khí – đóng tàu đầu tiên và lớn bậc nhất Đông Dương.\nĐây là cái nôi của phong trào công nhân Việt Nam: năm 1920, người thợ máy Tôn Đức Thắng bí mật lập Công hội Đỏ tại đây; tháng 8/1925, công nhân Ba Son bãi công kìm chân chiến hạm Michelet của Pháp, mở đầu bước ngoặt đấu tranh tự giác của giai cấp công nhân. Khu xưởng cơ khí lịch sử được xếp hạng Di tích lịch sử cấp quốc gia năm 1993.",
      "desc_en": "At 2 Ton Duc Thang Street (District 1) along the Saigon River, Ba Son Shipyard was established in 1863 on the site of a late-18th century Nguyen naval yard, becoming one of Indochina’s earliest and largest industrial shipyards.\nA cradle of Vietnam’s labor movement, it was where mechanic Ton Duc Thang secretly founded the Red Trade Union in 1920 and where workers staged the historic August 1925 strike delaying the French cruiser Michelet. Its historic workshop was designated a National Historical Relic in 1993."
    },
    {
      "id": "pin-langvodinguy",
      "name": "Lăng Võ Di Nguy",
      "name_en": "Mausoleum of Admiral Vo Di Nguy",
      "category": "landmark",
      "rarity": "uncommon",
      "lat": 10.7971,
      "lng": 106.6828,
      "discovery_radius": 900,
      "interaction_radius": 70,
      "icon": "⛩️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 19 Cô Giang (phường 2, quận Phú Nhuận), khu lăng mộ cổ được xây dựng vào đầu thế kỷ XIX (sau năm 1801) để an táng và thờ phụng Đô đốc thủy quân Võ Di Nguy (1745–1801) — vị võ tướng nhà Nguyễn tử trận tại cửa biển Thị Nại năm 1801.\nLăng được xây bằng đá ong và vữa ô dước truyền thống với tường thành bao quanh và bình phong cổ kính, là một trong số ít kiến trúc lăng mộ đầu thế kỷ XIX còn bảo tồn tại đất Gia Định xưa, xếp hạng Di tích lịch sử – văn hóa cấp quốc gia năm 1993.",
      "desc_en": "Located at 19 Co Giang Street (Phu Nhuan District), this early 19th-century mausoleum honors Nguyen naval commander Admiral Vo Di Nguy (1745–1801), killed in action at the Battle of Thi Nai.\nConstructed of laterite blocks and traditional lime-molasses mortar with protective screen walls, it is among the oldest surviving tombs of historic Gia Dinh and was designated a National Historical Relic in 1993."
    },
    {
      "id": "pin-chuagiacvien",
      "name": "Chùa Giác Viên",
      "name_en": "Giac Vien Pagoda",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7681,
      "lng": 106.6416,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🛕",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 161/35/20 Lạc Long Quân (phường 3, Quận 11), Chùa Giác Viên hình thành vào cuối thế kỷ XVIII – đầu thế kỷ XIX (cùng hệ phái Tổ đình Giác Lâm), là một trong những ngôi cổ tự nguyên bản hiếm hoi của TP.HCM còn giữ vẹn toàn không gian kiến trúc gỗ truyền thống Nam Bộ.\nChùa lưu giữ hơn 150 pho tượng cổ chạm khắc tinh xảo bằng gỗ quý, nhiều bức bao lam, hoành phi, liễn đối thế kỷ XIX và vườn tháp cổ thanh tịnh, được xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia năm 1993.",
      "desc_en": "Located at 161/35/20 Lac Long Quan Street (District 11) and dating to the late 18th–early 19th century, Giac Vien Pagoda belongs to the same lineage as Giac Lam and remains one of HCMC’s most intact traditional Southern wooden temples.\nIt houses over 150 antique carved timber statues, 19th-century gilded plaques, and a tranquil stupa garden, earning National Architectural Relic status in 1993."
    },
    {
      "id": "pin-diachido-botcatinat",
      "name": "Tòa nhà 164 Đồng Khởi (Bót Catinat xưa)",
      "name_en": "164 Dong Khoi Building (Former Catinat Police Station)",
      "category": "landmark",
      "rarity": "epic",
      "lat": 10.7787,
      "lng": 106.7006,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "🏛️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 164 Đồng Khởi (phường Bến Nghé, Quận 1), tòa nhà xây dựng năm 1881, ban đầu là trụ sở Cục Thuế quan rồi từ năm 1917 trở thành Sở Mật thám Đông Dương — nổi tiếng với tên gọi Bót Catinat.\nTrong giai đoạn 1917–1945, nơi đây từng giam giữ và tra khảo hàng nghìn chiến sĩ yêu nước và nhà lãnh đạo cách mạng kiệt xuất như Tôn Đức Thắng, Trần Phú, Nguyễn Thị Minh Khai, Phạm Văn Đồng, Lý Tự Trọng. Từ sau năm 1975, công trình là trụ sở Sở Văn hóa và Thể thao TP.HCM.",
      "desc_en": "Located at 164 Dong Khoi Street (District 1), this 1881 colonial building originally served as the Customs Office before becoming the Indochinese Secret Police headquarters (Catinat Station) in 1917.\nBetween 1917 and 1945, thousands of Vietnamese patriots and leaders—including Ton Duc Thang, Tran Phu, Nguyen Thi Minh Khai, Pham Van Dong, and Ly Tu Trong—were interrogated and detained within its cells. Since 1975 it has housed the HCMC Department of Culture and Sports."
    },
    {
      "id": "pin-toaantphcm",
      "name": "Tòa án Nhân dân TP.HCM (Pháp đình Sài Gòn xưa)",
      "name_en": "Ho Chi Minh City People's Court (Former Palais de Justice)",
      "category": "landmark",
      "rarity": "rare",
      "lat": 10.7759,
      "lng": 106.6976,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "⚖️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 131 Nam Kỳ Khởi Nghĩa (Quận 1), công trình được xây dựng giai đoạn 1881–1885 theo đồ án của kiến trúc sư Pháp Alfred Foulhoux theo phong cách Tân cổ điển châu Âu bề thế với hệ thức cột Corinth và cụm điêu khắc Công lý.\nĐây là một trong những công trình công quyền cổ nhất Sài Gòn còn giữ gần như nguyên trạng, từng diễn ra nhiều phiên tòa lịch sử thời thuộc địa — trong đó có phiên tòa Đại hình xử người thanh niên yêu nước Lý Tự Trọng năm 1931. Tòa nhà được xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia năm 2012.",
      "desc_en": "At 131 Nam Ky Khoi Nghia Street (District 1), the Palais de Justice was built between 1881 and 1885 to a Neoclassical design by Alfred Foulhoux featuring grand Corinthian columns and allegorical justice sculptures.\nAmong Saigon’s oldest intact civic buildings, it hosted landmark colonial trials including that of young patriot Ly Tu Trong in 1931, and was named a National Architectural and Artistic Relic in 2012."
    },
    {
      "id": "pin-baotang-chiendichhcm",
      "name": "Bảo tàng Chiến dịch Hồ Chí Minh",
      "name_en": "Ho Chi Minh Campaign Museum",
      "category": "battlefield",
      "rarity": "epic",
      "lat": 10.7859,
      "lng": 106.7042,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "🗺️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 2 Lê Duẩn (Quận 1) trong khuôn viên tòa nhà kiến trúc cổ đầu thế kỷ XX (trước năm 1975 là Trường Cao đẳng Quốc phòng chính quyền Sài Gòn), Bảo tàng Chiến dịch Hồ Chí Minh thành lập năm 1987.\nBảo tàng lưu giữ nhiều hiện vật quý giá của cuộc Tổng tiến công mùa Xuân 1975: sa bàn điện tử quy mô lớn tái hiện 5 cánh quân tiến công giải phóng Sài Gòn, bản đồ tác chiến gốc, xe tăng T-54B, pháo 130 mm cùng kỷ vật của các tướng lĩnh và chiến sĩ tham gia chiến dịch lịch sử.",
      "desc_en": "Located at 2 Le Duan Boulevard (District 1) in an early 20th-century heritage building (formerly South Vietnam’s National Defense College), the Ho Chi Minh Campaign Museum opened in 1987.\nIt showcases a large-scale illuminated battle diorama of the five army columns converging on Saigon in April 1975, original operational maps, a T-54B tank, 130mm artillery, and personal artifacts of campaign commanders and troops."
    },
    {
      "id": "pin-dai-phat-thanh-saigon",
      "name": "Đài Tiếng nói Nhân dân TP.HCM (Đài Phát thanh Sài Gòn xưa)",
      "name_en": "Voice of Ho Chi Minh City People (Former Saigon Radio Station)",
      "category": "battlefield",
      "rarity": "epic",
      "lat": 10.7888,
      "lng": 106.701,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "📻",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm tại số 3 Nguyễn Đình Chiểu (giao lộ Nguyễn Bỉnh Khiêm, Quận 1), Đài Phát thanh Sài Gòn xưa là một trong năm mục tiêu trọng yếu của lực lượng Biệt động Sài Gòn trong đêm Tết Mậu Thân 1968, nơi các chiến sĩ Đội 4 đã chiếm giữ đài và chiến đấu anh dũng đến người cuối cùng.\nTrưa ngày 30/4/1975, chính tại phòng thu của đài phát thanh này, Tổng thống Dương Văn Minh đã đọc tuyên bố đầu hàng vô điều kiện phát đi toàn miền Nam, mở ra thời khắc hòa bình thống nhất đất nước.",
      "desc_en": "At 3 Nguyen Dinh Chieu Street (District 1), the former Saigon Radio Station was one of five strategic targets assaulted by Saigon Commando Team 4 during the 1968 Tet Offensive, where fighters held the compound to the end.\nAt noon on April 30, 1975, it was from this station’s studio that President Duong Van Minh broadcast his unconditional surrender across South Vietnam."
    },
    {
      "id": "pin-caphe-cheo-leo",
      "name": "Cà phê vợt Cheo Leo (Từ năm 1938 – Khu Bàn Cờ)",
      "name_en": "Cheo Leo Sock-Brewed Coffee (Est. 1938 – Ban Co)",
      "category": "living_history",
      "rarity": "rare",
      "lat": 10.7686,
      "lng": 106.6788,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "☕",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Tọa lạc tại số 109/36 Nguyễn Thiện Thuật (khu cư xá Bàn Cờ, Quận 3), quán cà phê vợt Cheo Leo do ông Vĩnh Ngô sáng lập từ năm 1938 và là một trong những quán cà phê lâu đời nhất còn hoạt động liên tục tại TP.HCM.\nSuốt gần 90 năm qua, các thế hệ con cháu gia đình (bà Nguyễn Thị Sương và người thân) vẫn giữ nguyên cách pha cà phê bằng vợt vải trong siêu đất nung trên bếp lò cùng không gian mộc mạc, trở thành nhân chứng sống lưu giữ ký ức sinh viên, văn nghệ sĩ và đời sống khu Bàn Cờ xưa.",
      "desc_en": "Tucked at 109/36 Nguyen Thien Thuat Street in District 3’s Ban Co neighborhood, Cheo Leo was founded in 1938 by Vinh Ngo and is among Ho Chi Minh City’s oldest continuously operating coffee houses.\nFor nearly nine decades, his descendants have preserved the traditional cloth-filter brewing method in clay pots, serving as living storytellers of Saigon’s student, artistic, and neighborhood heritage."
    },
    {
      "id": "pin-caphevot-330pdp",
      "name": "Cà phê vợt Hẻm 330 Phan Đình Phùng (Từ năm 1954)",
      "name_en": "Alley 330 Phan Dinh Phung Sock-Brewed Coffee (Est. 1954)",
      "category": "living_history",
      "rarity": "rare",
      "lat": 10.7975,
      "lng": 106.6838,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "☕",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Ẩn mình trong con hẻm nhỏ số 330/2 Phan Đình Phùng (quận Phú Nhuận), quán cà phê vợt gia truyền này đã đỏ lửa liên tục từ năm 1954, nổi tiếng phục vụ gần như 24/24 cho người lao động, tài xế, nghệ sĩ và cư dân Sài Gòn qua nhiều thế hệ.\nChiếc siêu đất nung đen bóng, bếp than hồng và chiếc vợt vải nhuốm màu thời gian cùng những câu chuyện đời thường của gia đình chủ quán tạo nên lát cắt nhân chứng sống chân thực của nhịp sống thị dân Sài Gòn suốt hơn 70 năm.",
      "desc_en": "Hidden at 330/2 Phan Dinh Phung Street (Phu Nhuan District), this family-run sock-brewed coffee stall has kept its charcoal hearth burning since 1954, welcoming night-shift workers, artists, and neighbors almost round the clock.\nIts weathered clay kettles, cloth filters, and multigenerational hosts embody over seven decades of authentic Saigon street life."
    },
    {
      "id": "pin-caphevot-balu",
      "name": "Cà phê vợt Ba Lù – Chợ Phùng Hưng (Chợ Lớn)",
      "name_en": "Ba Lu Sock-Brewed Coffee – Phung Hung Market (Cho Lon)",
      "category": "living_history",
      "rarity": "rare",
      "lat": 10.7527,
      "lng": 106.6596,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "☕",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Nằm tại số 193 Phùng Hưng (Quận 5) ngay trung tâm chợ Phùng Hưng vùng Chợ Lớn, quán cà phê vợt Ba Lù ra đời từ thập niên 1950 và nổi tiếng với nghệ thuật rang cà phê thủ công bằng chảo gang hòa quyện bơ, muối theo phong vị người Hoa Sài Gòn xưa.\nHơn 70 năm trôi qua, thế hệ con cháu gia đình vẫn gìn giữ trọn vẹn kỹ nghệ pha vợt truyền thống và trực tiếp chia sẻ ký ức thương hồ, ẩm thực đa văn hóa của vùng Chợ Lớn.",
      "desc_en": "Located at 193 Phung Hung Street inside Cho Lon’s Phung Hung Market (District 5), Ba Lu Coffee opened in the 1950s and is famed for hand-roasting beans in cast-iron woks with butter and salt in classic Saigon–Chinese style.\nMore than 70 years on, the founder’s descendants continue brewing by cloth filter and sharing living memories of Cho Lon’s culinary heritage."
    },
    {
      "id": "pin-nhaluuniem-trinhcongson",
      "name": "Không gian Lưu niệm Nhạc sĩ Trịnh Công Sơn (47C Phạm Ngọc Thạch)",
      "name_en": "Musician Trinh Cong Son Memorial House (47C Pham Ngoc Thach)",
      "category": "living_history",
      "rarity": "epic",
      "lat": 10.7852,
      "lng": 106.6939,
      "discovery_radius": 1500,
      "interaction_radius": 100,
      "icon": "🎸",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Tọa lạc tại số 47C Phạm Ngọc Thạch (Quận 3), ngôi nhà từng là chốn đi về và sáng tác thân thuộc của cố nhạc sĩ tài hoa Trịnh Công Sơn (1939–2001) trong những năm tháng gắn bó sâu nặng với TP.HCM.\nKhông gian hiện lưu giữ cây đàn guitar, bản thảo viết tay, tranh vẽ và nhiều kỷ vật quý của ông; gia đình nhạc sĩ cùng bạn bè văn nghệ sĩ vẫn thường xuyên tổ chức các buổi tưởng niệm, trò chuyện âm nhạc, gìn giữ ký ức sống động của một biểu tượng tân nhạc Việt Nam.",
      "desc_en": "At 47C Pham Ngoc Thach Street (District 3), this home was the beloved residence and creative sanctuary of acclaimed Vietnamese songwriter Trinh Cong Son (1939–2001) during his years in Ho Chi Minh City.\nPreserving his guitars, handwritten manuscripts, paintings, and personal keepsakes, his family and fellow artists continue to host intimate memorial gatherings that keep his musical legacy alive."
    },
    {
      "id": "pin-phoco-hai-thuong-lan-ong",
      "name": "Phố Đông y Hải Thượng Lãn Ông (Chợ Lớn)",
      "name_en": "Hai Thuong Lan Ong Traditional Medicine Street (Cho Lon)",
      "category": "living_history",
      "rarity": "rare",
      "lat": 10.7514,
      "lng": 106.6625,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🌿",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Trải dọc tuyến đường Hải Thượng Lãn Ông – Triệu Quang Phục – Lương Nhữ Học (Quận 5), khu phố Đông y trăm năm tuổi hình thành từ cuối thế kỷ XIX – đầu thế kỷ XX tại trung tâm Chợ Lớn.\nHàng chục nhà thuốc Bắc, thuốc Nam gia truyền tồn tại qua 3–4 thế hệ với tủ thuốc gỗ trăm ngăn, dao cầu thái dược liệu và các lương y cao niên trực tiếp bắt mạch, bốc thuốc — tạo nên không gian di sản nghề truyền thống sống động bậc nhất TP.HCM.",
      "desc_en": "Stretching along Hai Thuong Lan Ong, Trieu Quang Phuc, and Luong Nhu Hoc streets (District 5), Cho Lon’s century-old traditional medicine quarter took shape in the late 19th and early 20th centuries.\nDozens of multi-generational herbal apothecaries—lined with hundred-drawer wooden cabinets, fragrant dried herbs, and veteran practitioners—form one of HCMC’s richest living craft quarters."
    },
    {
      "id": "pin-pholongden-luongnhuhoc",
      "name": "Phố Lồng đèn Lương Nhữ Học",
      "name_en": "Luong Nhu Hoc Lantern Street",
      "category": "story",
      "rarity": "uncommon",
      "lat": 10.753,
      "lng": 106.6626,
      "discovery_radius": 900,
      "interaction_radius": 70,
      "icon": "🏮",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nằm tại khu vực đường Lương Nhữ Học – Phú Định (phường 11, Quận 5), làng nghề làm lồng đèn thủ công hình thành từ khoảng thập niên 1950 do cộng đồng người Hoa Chợ Lớn gây dựng.\nSuốt hơn 70 năm, mỗi độ rằm tháng Tám (Tết Trung thu), cả khu phố lại rực rỡ hàng nghìn chiếc lồng đèn giấy kiếng khung tre thủ công hình cá chép, ngôi sao, bướm hoa — lưu giữ ký ức tuổi thơ khó phai của bao thế hệ cư dân Sài Gòn.",
      "desc_en": "Centered on Luong Nhu Hoc and Phu Dinh streets (District 5), this artisanal lantern neighborhood grew in the 1950s among Cho Lon’s Chinese-Vietnamese craftsmen.\nEvery Mid-Autumn Festival for over seven decades, its alleys glow with thousands of handmade bamboo-and-cellophane carp, star, and butterfly lanterns cherished by generations of Saigon residents."
    },
    {
      "id": "pin-chungcu-42nguyenhue",
      "name": "Chung cư Cổ 42 Nguyễn Huệ (Ký ức Đô thị Sài Gòn)",
      "name_en": "42 Nguyen Hue Historic Apartment Building (Cafe Apartments)",
      "category": "story",
      "rarity": "uncommon",
      "lat": 10.7745,
      "lng": 106.7037,
      "discovery_radius": 900,
      "interaction_radius": 70,
      "icon": "🏢",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 42 phố đi bộ Nguyễn Huệ (Quận 1), tòa chung cư 9 tầng xây dựng từ đầu thập niên 1960 từng là nơi sinh sống của nhiều gia đình công chức, sĩ quan trước năm 1975 và sau đó trở thành khu tập thể cán bộ, công nhân nhà máy đóng tàu Ba Son.\nNgày nay, những ô ban công vuông vức nhìn ra đại lộ trung tâm trở thành điểm hẹn văn hóa sáng tạo độc đáo với hàng chục quán cà phê, hiệu sách và studio nghệ thuật độc lập — biểu trưng cho sức sống giao thoa cũ và mới của TP.HCM.",
      "desc_en": "At 42 Nguyen Hue Pedestrian Street (District 1), this nine-story early-1960s apartment block housed civil servants before 1975 and later became residences for Ba Son Shipyard workers.\nToday its patchwork balconies overlooking the boulevard form a beloved creative landmark filled with independent cafes, bookshops, and art studios, capturing Ho Chi Minh City’s blend of vintage architecture and youthful energy."
    },
    {
      "id": "pin-duongsach-nguyenvanbinh",
      "name": "Đường Sách TP.HCM (Đường Nguyễn Văn Bình)",
      "name_en": "Ho Chi Minh City Book Street (Nguyen Van Binh Street)",
      "category": "story",
      "rarity": "common",
      "lat": 10.7805,
      "lng": 106.6997,
      "discovery_radius": 600,
      "interaction_radius": 50,
      "icon": "📚",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Khai trương ngày 9/1/2016 trên đoạn đường Nguyễn Văn Bình dài khoảng 144 m rợp bóng cây xanh (Quận 1), nằm kề hai di sản trăm năm là Bưu điện Trung tâm và Nhà thờ Đức Bà Sài Gòn.\nLà mô hình Đường Sách đầu tiên và thành công bậc nhất Việt Nam, nơi đây quy tụ hàng chục gian hàng nhà xuất bản, quầy sách cổ quý hiếm, các buổi triển lãm tư liệu lịch sử – báo chí và giao lưu tác giả giữa lòng thành phố.",
      "desc_en": "Opened on January 9, 2016 along a leafy 144-meter lane beside Saigon Central Post Office and Notre-Dame Cathedral (District 1), Ho Chi Minh City Book Street was Vietnam’s pioneering pedestrian book boulevard.\nHome to major publishers, rare antique book stalls, historical photo exhibitions, and author talks, it stands as a vibrant hub of Saigon’s reading culture."
    },
    {
      "id": "pin-nhahat-tranhuutrang",
      "name": "Nhà hát Cải lương Trần Hữu Trang (Rạp Hưng Đạo xưa)",
      "name_en": "Tran Huu Trang Cai Luong Theatre (Former Hung Dao Theatre)",
      "category": "story",
      "rarity": "rare",
      "lat": 10.7654,
      "lng": 106.693,
      "discovery_radius": 1200,
      "interaction_radius": 80,
      "icon": "🎭",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Tọa lạc tại số 136 Trần Hưng Đạo (Quận 1) trên nền Rạp Hưng Đạo lừng danh của Sài Gòn từ thập niên 1950, nơi từng được mệnh danh là \"thánh đường\" của sân khấu cải lương Nam Bộ gắn với tên tuổi các nghệ sĩ huyền thoại như NSND Phùng Há, NSND Út Trà Ôn, NSƯT Thanh Nga và soạn giả Trần Hữu Trang.\nSau năm 1975 trở thành Nhà hát Cải lương Trần Hữu Trang và được xây dựng lại khang trang, tiếp tục bảo tồn và lan tỏa di sản nghệ thuật Đờn ca tài tử – Cải lương phương Nam.",
      "desc_en": "At 136 Tran Hung Dao Street (District 1) on the site of Saigon’s famed 1950s Hung Dao Theatre, this venue was long hailed as the cathedral of Southern Cai Luong opera—associated with legends like Phung Ha, Ut Tra On, Thanh Nga, and playwright Tran Huu Trang.\nRebuilt as the Tran Huu Trang Cai Luong Theatre, it continues to preserve and revitalize Southern Vietnam’s signature theatrical heritage."
    },
    {
      "id": "pin-thanglong",
      "name": "Hoàng thành Thăng Long",
      "name_en": "Imperial Citadel of Thang Long",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 21.03456,
      "lng": 105.84074,
      "discovery_radius": 1800,
      "interaction_radius": 120,
      "icon": "🏛️",
      "image_url": "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Di tích quốc gia đặc biệt, trung tâm quyền lực suốt hơn 13 thế kỷ từ thời Tiền Thăng Long đến triều Lý, Trần, Lê.",
      "desc_en": "Special National Relic and UNESCO World Heritage site, the power hub of Vietnam for over 13 centuries from the pre-Thang Long era through the Ly, Tran, and Le dynasties."
    },
    {
      "id": "pin-bachdang",
      "name": "Khu di tích Chiến thắng Bạch Đằng",
      "name_en": "Bach Dang Victory Historic Site",
      "category": "battlefield",
      "rarity": "legendary",
      "lat": 20.9168,
      "lng": 106.6667,
      "discovery_radius": 1800,
      "interaction_radius": 100,
      "icon": "⚔️",
      "image_url": "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=800&q=80",
      "media_url": "",
      "hasLivingHistory": true,
      "desc": "Chiến trường xưa với 3 lần đánh bại quân xâm lược phương Bắc bằng kế sách cắm cọc hiểm yếu dưới lòng sông của Ngô Quyền, Lê Hoàn và Trần Hưng Đạo.",
      "desc_en": "Ancient battlefield where three foreign naval invasions were crushed with the sunken timber stakes strategy led by Ngo Quyen, Le Hoan, and Tran Hung Dao."
    },
    {
      "id": "pin-dongda",
      "name": "Công viên Văn hóa Đống Đa",
      "name_en": "Dong Da Cultural Park & Mound",
      "category": "battlefield",
      "rarity": "uncommon",
      "lat": 21.0152,
      "lng": 105.8239,
      "discovery_radius": 900,
      "interaction_radius": 80,
      "icon": "⚔️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Địa danh ghi dấu chiến công vang dội của Hoàng đế Quang Trung đại phá 29 vạn quân Mãn Thanh mùa xuân năm Kỷ Dậu 1789.",
      "desc_en": "Historic site marking the historic victory of Emperor Quang Trung annihilating 290,000 Qing troops in the spring of 1789."
    },
    {
      "id": "pin-hatmon",
      "name": "Đền thờ Hai Bà Trưng (Hát Môn)",
      "name_en": "Hat Mon Temple of the Trung Sisters",
      "category": "landmark",
      "rarity": "legendary",
      "lat": 21.1354,
      "lng": 105.5786,
      "discovery_radius": 1800,
      "interaction_radius": 100,
      "icon": "🏛️",
      "image_url": "",
      "media_url": "",
      "hasLivingHistory": false,
      "desc": "Nơi Hai Bà Trưng tế cờ khởi nghĩa và đọc 4 lời thề cứu nước son sắt trước khi xuất quân trừng trị giặc Tô Định.",
      "desc_en": "The hallowed site where the Trung Sisters raised the flag of rebellion and pledged their four solemn vows before marching to liberate Vietnam."
    }
  ],
  "figures": [
    {
      "id": "fig-haibatrung",
      "name": "Hai Bà Trưng (Trưng Trắc & Trưng Nhị)",
      "name_en": "The Trung Sisters (Trung Trac & Trung Nhi)",
      "role": "Nữ vương phất cờ độc lập",
      "role_en": "Revolutionary Queens of Independence",
      "dynasty": "Nhà Trưng",
      "dynasty_en": "Trung Dynasty",
      "years": "Năm 40 – 43 SCN",
      "avatar": "🛡️",
      "image_url": "media/design_assets/hai_ba_trung_portrait.jpg",
      "background_image": "media/design_assets/hero_banner_bg.jpg",
      "quote": "Một xin rửa sạch nước thù / Hai xin đem lại nghiệp xưa họ Hùng!",
      "quote_en": "First, avenge our country's grievance; Second, restore the ancient heritage of the Hung Kings!",
      "bio": "Hai nữ anh hùng dân tộc đầu tiên phất cờ khởi nghĩa, thu phục 65 thành trì, đánh đuổi thái thú Tô Định, giành lại độc lập tự chủ cho non sông sau hơn 200 năm Bắc thuộc.",
      "bio_en": "The first female national heroes to raise the banner of rebellion, liberating 65 citadels and driving out the foreign governor To Dinh to reclaim national sovereignty after more than two centuries of northern domination.",
      "related_pins": [
        "pin-hatmon"
      ]
    },
    {
      "id": "fig-tranquoctuan",
      "name": "Hưng Đạo Đại Vương - Trần Quốc Tuấn",
      "name_en": "Supreme Prince Tran Quoc Tuan (Tran Hung Dao)",
      "role": "Quốc công Tiết chế (Tổng tư lệnh quân đội)",
      "role_en": "Supreme Commander of Dai Viet Forces",
      "dynasty": "Nhà Trần",
      "dynasty_en": "Tran Dynasty",
      "years": "1228 – 1300",
      "avatar": "⚔️",
      "image_url": "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80",
      "background_image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "quote": "Nếu bệ hạ muốn hàng, xin hãy chém đầu thần trước rồi hãy hàng!",
      "quote_en": "If your Majesty wishes to surrender, please cut off my head first!",
      "bio": "Anh hùng dân tộc, thiên tài quân sự kiệt xuất ba lần chỉ huy quân dân Đại Việt đánh tan quân Nguyên Mông hung hãn, tác giả của bản 'Hịch Tướng Sĩ' truyền đời non sông.",
      "bio_en": "Legendary national hero and military genius who led the Dai Viet army and people to defeat the fierce Mongol Yuan invasions three times, and authored the immortal martial proclamation 'Hich Tuong Si'.",
      "related_pins": [
        "pin-bachdang",
        "pin-thanglong",
        "pin-congvienbachdang",
        "pin-dentranhungdao-q1"
      ]
    },
    {
      "id": "fig-quangtrung",
      "name": "Quang Trung - Nguyễn Huệ",
      "name_en": "Emperor Quang Trung (Nguyen Hue)",
      "role": "Hoàng đế bách chiến bách thắng",
      "role_en": "Invincible Emperor & Commander",
      "dynasty": "Nhà Tây Sơn",
      "dynasty_en": "Tay Son Dynasty",
      "years": "1753 – 1792",
      "avatar": "👑",
      "image_url": "",
      "background_image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "quote": "Đánh cho để dài tóc, đánh cho để đen răng, đánh cho nó chích luân bất phản, phiến giáp bất hoàn!",
      "quote_en": "Fight to keep our long hair, fight to keep our black teeth, fight so that not a single enemy chariot returns, nor a piece of armor remains whole!",
      "bio": "Người anh hùng áo vải cờ đào kiệt xuất, đánh tan 5 vạn quân Xiêm rạch Gầm Xoài Mút và thần tốc vượt hơn 600km quét sạch 29 vạn quân Mãn Thanh chỉ trong vài ngày Tết Kỷ Dậu 1789.",
      "bio_en": "Brilliant peasant-turned-emperor who crushed 50,000 Siamese invaders at Rach Gam - Xoai Mut and executed an unprecedented 600km lightning march to route 290,000 Qing imperial troops in the Spring of 1789.",
      "related_pins": [
        "pin-dongda"
      ]
    },
    {
      "id": "fig-hochiminh",
      "name": "Chủ tịch Hồ Chí Minh (Nguyễn Tất Thành)",
      "name_en": "President Ho Chi Minh (Nguyen Tat Thanh)",
      "role": "Anh hùng giải phóng dân tộc, Danh nhân văn hóa thế giới",
      "role_en": "National Liberation Hero & World Cultural Celebrity",
      "dynasty": "Thời đại Hồ Chí Minh",
      "dynasty_en": "Modern Era",
      "years": "1890 – 1969",
      "avatar": "⭐",
      "image_url": "",
      "background_image": "",
      "quote": "Không có gì quý hơn độc lập, tự do!",
      "quote_en": "Nothing is more precious than independence and freedom!",
      "bio": "Vị lãnh tụ vĩ đại của dân tộc Việt Nam. Năm 1910–1911, Người dừng chân tại Sài Gòn (số 5 Châu Văn Liêm) rồi rời Bến Nhà Rồng ngày 5/6/1911 trên tàu Amiral Latouche-Tréville để bắt đầu hành trình 30 năm tìm đường cứu nước, lãnh đạo Cách mạng Tháng Tám 1945 thành công và khai sinh nước Việt Nam Dân chủ Cộng hòa. Tháng 7/1976, Sài Gòn – Gia Định vinh dự được mang tên Thành phố Hồ Chí Minh.",
      "bio_en": "The founding leader of modern Vietnam. After staying in Saigon at 5 Chau Van Liem Street, he departed Nha Rong Wharf on June 5, 1911 aboard the Amiral Latouche-Treville on a 30-year quest for national liberation, leading the August 1945 Revolution and founding the Democratic Republic of Vietnam. In July 1976, Saigon–Gia Dinh was officially named Ho Chi Minh City in his honor.",
      "related_pins": [
        "pin-ben-nharong",
        "pin-nhalubac-q5",
        "pin-1794549129587"
      ]
    },
    {
      "id": "fig-nguyenhuucanh",
      "name": "Lễ Thành Hầu – Nguyễn Hữu Cảnh",
      "name_en": "Lord Marshal Nguyen Huu Canh",
      "role": "Thống suất kinh lược, người khai sinh Sài Gòn – Gia Định",
      "role_en": "Royal Commissioner & Founder of Saigon – Gia Dinh",
      "dynasty": "Chúa Nguyễn (Đàng Trong)",
      "dynasty_en": "Nguyen Lords Era",
      "years": "1650 – 1700",
      "avatar": "🗡️",
      "image_url": "",
      "background_image": "",
      "quote": "Mùa xuân năm Mậu Dần 1698, lập phủ Gia Định, dựng dinh Phiên Trấn — đặt nền móng hành chính cho vùng đất Sài Gòn – TP.HCM.",
      "quote_en": "In the spring of 1698, established Gia Dinh Prefecture and Phien Tran Garrison—laying the administrative foundation of Saigon – Ho Chi Minh City.",
      "bio": "Danh tướng kiệt xuất thời Chúa Nguyễn Phúc Chu. Năm 1698, ông vâng mệnh kinh lược phương Nam, lập phủ Gia Định, chia đất Đồng Nai thành huyện Phước Long (dinh Trấn Biên) và xứ Sài Gòn thành huyện Tân Bình (dinh Phiên Trấn), lập sổ bộ, chiêu dân lập ấp, chính thức mở ra trang sử hơn 300 năm của Sài Gòn – TP.HCM.",
      "bio_en": "A distinguished commander under Lord Nguyen Phuc Chu. In 1698, he led a southern administrative expedition that established Gia Dinh Prefecture—creating Tan Binh District and Phien Tran Garrison in Saigon—registering inhabitants and officially marking the birth of Saigon – Ho Chi Minh City.",
      "related_pins": [
        "pin-dinhchihoa",
        "pin-dinhthongtayhoi",
        "pin-congvienbachdang"
      ]
    },
    {
      "id": "fig-levanduyet",
      "name": "Tả quân Lê Văn Duyệt",
      "name_en": "Marshal Le Van Duyet (Left Army Commander)",
      "role": "Tổng trấn Gia Định Thành, bậc công thần mở mang Nam Bộ",
      "role_en": "Viceroy of Gia Dinh Citadel & Builder of Southern Vietnam",
      "dynasty": "Nhà Nguyễn",
      "dynasty_en": "Nguyen Dynasty",
      "years": "1764 – 1832",
      "avatar": "⛩️",
      "image_url": "",
      "background_image": "",
      "quote": "Hai lần làm Tổng trấn Gia Định Thành, giữ yên bờ cõi phương Nam và mở mang dân sinh trăm họ.",
      "quote_en": "Twice Viceroy of Gia Dinh Citadel, safeguarding the southern frontier and championing the welfare of the people.",
      "bio": "Một trong những võ tướng và nhà quản trị tài ba bậc nhất đầu triều Nguyễn. Hai lần giữ chức Tổng trấn Gia Định Thành (1812–1815 và 1820–1832), ông nổi tiếng thanh liêm, trọng hiền tài, phát triển thương mại cảng Sài Gòn và chỉ đạo hoàn thành kênh Vĩnh Tế. Lăng Ông – Bà Chiểu là nơi nhân dân Sài Gòn hương khói tôn kính ông suốt gần hai thế kỷ.",
      "bio_en": "One of the foremost generals and administrators of the early Nguyen Dynasty. Serving twice as Viceroy of Gia Dinh Citadel (1812–1815 and 1820–1832), he championed upright governance, grew Saigon’s trade, and oversaw the Vinh Te Canal. His mausoleum at Lang Ong Ba Chieu remains deeply revered by city residents.",
      "related_pins": [
        "pin-langongbachieu"
      ]
    },
    {
      "id": "fig-votruongtoan",
      "name": "Xử sĩ Võ Trường Toản",
      "name_en": "Master Scholar Vo Truong Toan",
      "role": "Sùng Đức Xử sĩ, người thầy khai sáng nền giáo dục Gia Định",
      "role_en": "Pioneering Educator & Moral Pillar of Gia Dinh",
      "dynasty": "Cuối thế kỷ XVIII",
      "dynasty_en": "Late 18th Century",
      "years": "? – 1792",
      "avatar": "📜",
      "image_url": "",
      "background_image": "",
      "quote": "Sống thanh bạch giữ trọn đạo học, đào tạo nên lớp danh sĩ kiệt xuất bậc nhất đất Gia Định xưa.",
      "quote_en": "Living in quiet integrity, he mentored the finest generation of scholars and statesmen of historic Gia Dinh.",
      "bio": "Bậc đại nho đức độ mở trường dạy học tại thôn Hòa Hưng (khu vực Đình Chí Hòa ngày nay) vào cuối thế kỷ XVIII. Không ra làm quan nhưng ông đã đào tạo nên những bậc hiền tài lẫy lừng như \"Gia Định Tam Gia\" (Trịnh Hoài Đức, Lê Quang Định, Ngô Nhân Tịnh) và Ngô Tùng Châu, đặt nền móng truyền thống hiếu học cho Sài Gòn – Nam Bộ.",
      "bio_en": "A revered Confucian master who opened a school in Hoa Hung Village (today’s Chi Hoa Communal House area) in the late 18th century. Declining official office, he mentored Southern Vietnam’s greatest scholars—including the \"Gia Dinh Trio\" (Trinh Hoai Duc, Le Quang Dinh, Ngo Nhan Tinh) and Ngo Tung Chau.",
      "related_pins": [
        "pin-dinhchihoa",
        "pin-dinh-minh-huong"
      ]
    },
    {
      "id": "fig-tranphu",
      "name": "Tổng Bí thư Trần Phú",
      "name_en": "General Secretary Tran Phu",
      "role": "Tổng Bí thư đầu tiên của Đảng Cộng sản Đông Dương",
      "role_en": "First General Secretary of the Indochinese Communist Party",
      "dynasty": "Cách mạng Việt Nam (1930)",
      "dynasty_en": "Vietnamese Revolutionary Era",
      "years": "1904 – 1931",
      "avatar": "🔥",
      "image_url": "",
      "background_image": "",
      "quote": "Hãy giữ vững chí khí chiến đấu!",
      "quote_en": "Keep up the fighting spirit!",
      "bio": "Nhà lãnh đạo cách mạng kiệt xuất, tác giả bản Luận cương chính trị tháng 10/1930. Tháng 4/1931, ông bị thực dân Pháp bắt tại Sài Gòn và tra tấn dã man nhưng vẫn giữ trọn khí tiết. Ngày 6/9/1931, ông hy sinh tại Khu Trại giam Bệnh viện Chợ Quán (Quận 5); hài cốt ông được tìm thấy năm 1999 tại khu vực Công viên Lê Thị Riêng trước khi đưa về an táng tại Hà Tĩnh.",
      "bio_en": "An outstanding revolutionary leader and author of the October 1930 Political Theses. Arrested by French colonial police in Saigon in April 1931, he withstood brutal torture without yielding and died on September 6, 1931 at Cho Quan Hospital Detention Ward. His remains were recovered at Le Thi Rieng Park in 1999.",
      "related_pins": [
        "pin-khu-trai-giam-choquan",
        "pin-1794549062917"
      ]
    },
    {
      "id": "fig-nguyenvancu",
      "name": "Tổng Bí thư Nguyễn Văn Cừ",
      "name_en": "General Secretary Nguyen Van Cu",
      "role": "Tổng Bí thư Đảng Cộng sản Đông Dương, nhà lý luận xuất sắc",
      "role_en": "General Secretary & Revolutionary Theorist",
      "dynasty": "Cách mạng Việt Nam (1938 – 1941)",
      "dynasty_en": "Vietnamese Revolutionary Era",
      "years": "1912 – 1941",
      "avatar": "✊",
      "image_url": "",
      "background_image": "",
      "quote": "Công khai, mạnh dạn, thành thực vạch những nhược điểm để sửa chữa — đó là sức mạnh của tự chỉ trích.",
      "quote_en": "Openly, boldly, and honestly identifying shortcomings to correct them—that is the strength of self-criticism.",
      "bio": "Trở thành Tổng Bí thư trẻ nhất của Đảng năm 1938 khi mới 26 tuổi, tác giả tác phẩm lý luận nổi tiếng \"Tự chỉ trích\" (1939). Ông bị thực dân Pháp bắt tại Sài Gòn đầu năm 1940 và bị kết án tử hình sau cuộc Khởi nghĩa Nam Kỳ, anh dũng hy sinh tại trường bắn Ngã Ba Giồng (Hóc Môn) ngày 28/8/1941.",
      "bio_en": "Becoming the youngest General Secretary of the Party in 1938 at age 26 and authoring the landmark essay \"Self-Criticism\" (1939), he was arrested in Saigon in early 1940 and executed by colonial firing squad at Nga Ba Giong (Hoc Mon) on August 28, 1941 following the Southern Uprising.",
      "related_pins": [
        "pin-ngabagioi"
      ]
    },
    {
      "id": "fig-thichquangduc",
      "name": "Bồ tát Thích Quảng Đức",
      "name_en": "Bodhisattva Thich Quang Duc",
      "role": "Cao tăng Phật giáo, biểu tượng từ bi và hòa bình năm 1963",
      "role_en": "Venerable Buddhist Monk & Symbol of Compassion (1963)",
      "dynasty": "Phong trào Phật giáo 1963",
      "dynasty_en": "1963 Buddhist Movement",
      "years": "1897 – 1963",
      "avatar": "🪷",
      "image_url": "",
      "background_image": "",
      "quote": "Nguyện đem thân giả tạm này cúng dường chư Phật, cầu cho Phật pháp trường tồn, đất nước hòa bình, nhân dân an lạc.",
      "quote_en": "I vow to offer this transient body to the Buddhas, praying for the endurance of the Dharma, peace for the nation, and happiness for the people.",
      "bio": "Thế danh Lâm Văn Tuất, quê Khánh Hòa, từng dày công hoằng pháp và kiến tạo hơn 30 ngôi chùa tại miền Trung và Nam Bộ. Ngày 11/6/1963, tại ngã tư Lê Văn Duyệt – Phan Đình Phùng (nay là Cách Mạng Tháng Tám – Nguyễn Đình Chiểu, Quận 3), Hòa thượng đã tự thiêu phản đối chính sách kỳ thị tôn giáo, làm chấn động lương tri nhân loại. Trái tim bất diệt của Ngài hiện được tôn thờ tại Việt Nam Quốc Tự.",
      "bio_en": "Born Lam Van Tuat in Khanh Hoa, he helped build or restore over 30 pagodas across Central and Southern Vietnam. On June 11, 1963, at a central Saigon intersection in District 3, he self-immolated in peaceful protest against religious persecution, moving global conscience. His intact heart relic is enshrined at Viet Nam Quoc Tu.",
      "related_pins": [
        "pin-tuongdaithichquangduc",
        "pin-chuaxaloi",
        "pin-1794548888256"
      ]
    },
    {
      "id": "fig-tranvanlai",
      "name": "Anh hùng LLVTND Trần Văn Lai (Năm Lai)",
      "name_en": "Hero of the Armed Forces Tran Van Lai (Nam Lai)",
      "role": "Chiến sĩ Biệt động Sài Gòn, nhà thầu khoán khoác áo vỏ bọc huyền thoại",
      "role_en": "Legendary Saigon Commando & Covert Logistics Mastermind",
      "dynasty": "Kháng chiến chống Mỹ",
      "dynasty_en": "Resistance War (1954 – 1975)",
      "years": "1920 – 2002",
      "avatar": "🕵️",
      "image_url": "",
      "background_image": "",
      "quote": "Giữa lòng địch, mỗi căn nhà là một pháo đài thầm lặng chuẩn bị cho ngày toàn thắng.",
      "quote_en": "In the heart of enemy territory, every safe house is a silent fortress preparing for the day of victory.",
      "bio": "Chiến sĩ Biệt động Sài Gòn kiệt xuất hoạt động dưới vỏ bọc nhà thầu khoán giàu có Mai Hồng Quế, từng trực tiếp trang trí nội thất cho Dinh Độc Lập. Ông đã mua nhiều căn nhà ở nội đô Sài Gòn, đào hầm chứa gần 2 tấn vũ khí tại 287/70 Nguyễn Đình Chiểu và xây dựng mạng lưới hộp thư bí mật (113A Đặng Dung, 145 Trần Quang Khải) phục vụ mũi tấn công Dinh Độc Lập Tết Mậu Thân 1968. Ông được truy tặng danh hiệu Anh hùng LLVTND năm 2015.",
      "bio_en": "An extraordinary Saigon Commando operating under the cover of wealthy contractor Mai Hong Que—even doing interior work inside Independence Palace. He acquired multiple urban properties, dug the 2-ton weapons bunker at 287/70 Nguyen Dinh Chieu, and ran covert liaison houses (113A Dang Dung, 145 Tran Quang Khai) vital to the 1968 Tet Offensive. Posthumously awarded Hero of the People’s Armed Forces in 2015.",
      "related_pins": [
        "pin-hamtranvanlai",
        "pin-caphedophu",
        "pin-baotang-bietdong",
        "pin-garagetuluc"
      ]
    },
    {
      "id": "fig-ngovietthu",
      "name": "Kiến trúc sư Ngô Viết Thụ",
      "name_en": "Architect Ngo Viet Thu",
      "role": "Kiến trúc sư tài hoa, tác giả công trình Dinh Độc Lập",
      "role_en": "Master Architect & Designer of Independence Palace",
      "dynasty": "Kiến trúc Hiện đại Việt Nam",
      "dynasty_en": "Modern Vietnamese Architecture",
      "years": "1926 – 2000",
      "avatar": "📐",
      "image_url": "",
      "background_image": "",
      "quote": "Kiến trúc hiện đại Việt Nam phải biết kế thừa triết lý phương Đông và hòa nhịp với khí hậu, thiên nhiên bản địa.",
      "quote_en": "Modern Vietnamese architecture must inherit Eastern philosophy while harmonizing with local climate and nature.",
      "bio": "Người châu Á đầu tiên đoạt giải Khôi nguyên La Mã (Grand Prix de Rome) danh giá về kiến trúc năm 1955 và là Viện sĩ danh dự Viện Kiến trúc sư Hoa Kỳ (1962). Ông là tác giả thiết kế Dinh Độc Lập (1962–1966) tại TP.HCM — kiệt tác kết hợp kiến trúc hiện đại với triết lý chữ Hán phương Đông và hệ rèm hoa đá cách điệu đốt trúc.",
      "bio_en": "The first Asian architect to win the prestigious Grand Prix de Rome (1955) and an Honorary Fellow of the American Institute of Architects (1962). He designed Saigon’s Independence Palace (1962–1966), a masterpiece uniting tropical modernism with traditional Eastern calligraphic symbolism and stylized bamboo-curtain stone louvers.",
      "related_pins": [
        "pin-1794549129587"
      ]
    },
    {
      "id": "fig-tranvanon",
      "name": "Liệt sĩ Trần Văn Ơn",
      "name_en": "Student Martyr Tran Van On",
      "role": "Biểu tượng phong trào đấu tranh yêu nước Học sinh – Sinh viên Sài Gòn",
      "role_en": "Icon of the Saigon Patriotic Student Movement",
      "dynasty": "Kháng chiến chống Pháp",
      "dynasty_en": "First Indochina War Era",
      "years": "1931 – 1950",
      "avatar": "🕯️",
      "image_url": "",
      "background_image": "",
      "quote": "Ngã xuống tuổi mười chín để thắp sáng ngọn lửa bất khuất của ngày truyền thống Học sinh – Sinh viên Việt Nam 9/1.",
      "quote_en": "Falling at nineteen to kindle the enduring flame of Vietnam’s Traditional Students’ Day (January 9).",
      "bio": "Học sinh xuất sắc của Trường Pétrus Ký (nay là Trường THPT Chuyên Lê Hồng Phong, Quận 5). Trong cuộc biểu tình ngày 9/1/1950 đòi trả tự do cho học sinh bị bắt tại Sài Gòn, anh đã dũng cảm che chở cho các em nhỏ trước họng súng đàn áp và hy sinh. Đám tang của anh quy tụ hàng trăm nghìn người dân Sài Gòn xuống đường; từ đó ngày 9/1 hằng năm trở thành Ngày truyền thống Học sinh – Sinh viên Việt Nam.",
      "bio_en": "An outstanding student at Lycee Petrus Ky (now Le Hong Phong High School, District 5). During the January 9, 1950 Saigon rally demanding the release of detained students, he shielded younger classmates from gunfire and was killed. His funeral drew hundreds of thousands of mourners, inspiring Vietnam’s annual Students’ Day on January 9.",
      "related_pins": [
        "pin-truonglehongphong"
      ]
    },
    {
      "id": "fig-tonducthang",
      "name": "Chủ tịch Tôn Đức Thắng (Bác Tôn)",
      "name_en": "President Ton Duc Thang (Uncle Ton)",
      "role": "Nhà sáng lập Công hội Đỏ, Chủ tịch nước CHXHCN Việt Nam",
      "role_en": "Founder of the Red Trade Union & President of Vietnam",
      "dynasty": "Cách mạng Việt Nam (Thế kỷ XX)",
      "dynasty_en": "20th-Century Revolutionary Era",
      "years": "1888 – 1980",
      "avatar": "⚓",
      "image_url": "",
      "background_image": "",
      "quote": "Giai cấp công nhân Sài Gòn – Ba Son phải đoàn kết thành một khối để đấu tranh vì độc lập và quyền sống của người lao động.",
      "quote_en": "The working class of Saigon and Ba Son must unite as one force to fight for independence and the dignity of labor.",
      "bio": "Sinh tại cù lao Ông Hổ (An Giang), là người thợ máy xuất sắc của Xưởng đóng tàu Ba Son. Năm 1920, ông bí mật thành lập Công hội Đỏ — tổ chức công đoàn đầu tiên của giai cấp công nhân Việt Nam, và lãnh đạo cuộc bãi công Ba Son tháng 8/1925. Bị thực dân Pháp bắt giam tại Bót Catinat rồi đày ra Côn Đảo suốt 15 năm, sau năm 1945 ông đảm nhận nhiều trọng trách và trở thành Chủ tịch nước đầu tiên của nước CHXHCN Việt Nam (1976–1980).",
      "bio_en": "Born on Ong Ho Islet (An Giang), Ton Duc Thang worked as a skilled mechanic at Ba Son Shipyard, where he secretly founded Vietnam’s first Red Trade Union in 1920 and led the historic August 1925 Ba Son strike. Imprisoned at Catinat Station and Con Dao for 15 years, he later served as the first President of the Socialist Republic of Vietnam (1976–1980).",
      "related_pins": [
        "pin-xuongbason",
        "pin-baotangtonducthang",
        "pin-dinhbinhdong",
        "pin-diachido-botcatinat"
      ]
    },
    {
      "id": "fig-lytutrong",
      "name": "Anh hùng Liệt sĩ Lý Tự Trọng",
      "name_en": "Youth Martyr Ly Tu Trong",
      "role": "Người đoàn viên Thanh niên Cộng sản đầu tiên, biểu tượng tuổi trẻ kiên trung",
      "role_en": "First Communist Youth Union Member & Icon of Vietnamese Youth",
      "dynasty": "Cách mạng Việt Nam (1930 – 1931)",
      "dynasty_en": "Vietnamese Revolutionary Era",
      "years": "1914 – 1931",
      "avatar": "🔥",
      "image_url": "",
      "background_image": "",
      "quote": "Con đường của thanh niên chỉ là con đường cách mạng, không thể có con đường nào khác!",
      "quote_en": "The path of youth can only be the revolutionary path—there can be no other!",
      "bio": "Tên thật là Lê Hữu Trọng, quê Hà Tĩnh, sinh tại Thái Lan, là một trong những thiếu niên ưu tú được lãnh tụ Nguyễn Ái Quốc trực tiếp đào tạo rồi cử về Sài Gòn hoạt động giao liên và vận động thanh niên năm 1929. Tháng 2/1931, anh bắn chết tên mật thám Pháp để bảo vệ đồng chí đang diễn thuyết tại Sài Gòn, bị bắt giam ở Bót Catinat – Khám Lớn và bị tòa án thực dân kết án tử hình khi mới 17 tuổi.",
      "bio_en": "Born Le Huu Trong and mentored by Nguyen Ai Quoc before being sent to Saigon in 1929 as a youth organizer and courier. In February 1931, he shot a French secret police officer to protect a comrade addressing a Saigon rally, was jailed at Catinat Station and Saigon Central Prison, and was executed by colonial authorities at age 17.",
      "related_pins": [
        "pin-toaantphcm",
        "pin-diachido-botcatinat"
      ]
    },
    {
      "id": "fig-nguyenthiminhkhai",
      "name": "Liệt sĩ Nguyễn Thị Minh Khai",
      "name_en": "Revolutionary Martyr Nguyen Thi Minh Khai",
      "role": "Bí thư Thành ủy Sài Gòn – Chợ Lớn, nữ lãnh đạo cách mạng kiệt xuất",
      "role_en": "Secretary of the Saigon – Cho Lon Party Committee",
      "dynasty": "Cách mạng Việt Nam (1930 – 1941)",
      "dynasty_en": "Vietnamese Revolutionary Era",
      "years": "1910 – 1941",
      "avatar": "🌺",
      "image_url": "",
      "background_image": "",
      "quote": "Vững chí bền gan, dù gươm kề cổ vẫn giữ trọn khí tiết người chiến sĩ cộng sản.",
      "quote_en": "Steadfast in heart and resolve, holding firm to revolutionary honor even before the blade.",
      "bio": "Quê Nghệ An, là đại biểu chính thức của Đông Dương tại Đại hội VII Quốc tế Cộng sản ở Matxcơva (1935). Trở về nước, bà giữ trọng trách Bí thư Thành ủy Sài Gòn – Chợ Lớn, trực tiếp chỉ đạo phong trào công nhân và chuẩn bị Khởi nghĩa Nam Kỳ 1940. Bị thực dân Pháp bắt giam tại Bót Catinat và Khám Lớn, bà anh dũng hy sinh tại trường bắn Hóc Môn (Ngã Ba Giồng) ngày 28/8/1941.",
      "bio_en": "Born in Nghe An and a delegate to the 7th Comintern Congress in Moscow (1935), she returned to serve as Secretary of the Saigon – Cho Lon Party Committee, leading urban labor movements and preparing the 1940 Southern Uprising. Captured and detained at Catinat Station, she was executed at Hoc Mon (Nga Ba Giong) on August 28, 1941.",
      "related_pins": [
        "pin-ngabagioi",
        "pin-diachido-botcatinat",
        "pin-baotangphunuNamBo"
      ]
    },
    {
      "id": "fig-trinhhoaiduc",
      "name": "Danh sĩ Trịnh Hoài Đức",
      "name_en": "Scholar-Statesman Trinh Hoai Duc",
      "role": "Hiệp tổng trấn Gia Định Thành, tác giả \"Gia Định thành thông chí\"",
      "role_en": "Deputy Viceroy of Gia Dinh & Author of the Gia Dinh Gazetteer",
      "dynasty": "Nhà Nguyễn",
      "dynasty_en": "Nguyen Dynasty",
      "years": "1765 – 1825",
      "avatar": "📖",
      "image_url": "",
      "background_image": "",
      "quote": "Ghi chép tường tận núi sông, phong tục, nhân vật đất Gia Định để lưu truyền muôn đời sau.",
      "quote_en": "Faithfully chronicling the rivers, customs, and people of Gia Dinh for all future generations.",
      "bio": "Học trò xuất sắc của xử sĩ Võ Trường Toản tại lớp học Đình Hòa Hưng, đứng đầu bộ ba danh sĩ \"Gia Định Tam Gia\" (Trịnh Hoài Đức, Lê Quang Định, Ngô Nhân Tịnh). Ông từng giữ chức Thượng thư Bộ Lễ, Bộ Lại và Hiệp tổng trấn Gia Định Thành. Tác phẩm đồ sộ \"Gia Định thành thông chí\" của ông là bộ tư liệu lịch sử – địa lý quý giá bậc nhất về vùng đất Sài Gòn – Nam Bộ thế kỷ XVII–XIX.",
      "bio_en": "Top disciple of scholar Vo Truong Toan at Hoa Hung and leader of the famed \"Gia Dinh Trio.\" Serving as Minister and Deputy Viceroy of Gia Dinh Citadel, his monumental work \"Gia Dinh Thanh Thong Chi\" (Gazetteer of Gia Dinh) remains the premier historical and geographical record of early Saigon and Southern Vietnam.",
      "related_pins": [
        "pin-dinh-minh-huong",
        "pin-dinhchihoa"
      ]
    },
    {
      "id": "fig-vantiendung",
      "name": "Đại tướng Văn Tiến Dũng",
      "name_en": "General Van Tien Dung",
      "role": "Tư lệnh Chiến dịch Hồ Chí Minh lịch sử (Tháng 4/1975)",
      "role_en": "Commander of the Historic Ho Chi Minh Campaign (April 1975)",
      "dynasty": "Thời đại Hồ Chí Minh",
      "dynasty_en": "Modern Era",
      "years": "1917 – 2002",
      "avatar": "⭐",
      "image_url": "",
      "background_image": "",
      "quote": "Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa — quyết tâm giải phóng hoàn toàn miền Nam!",
      "quote_en": "Swift, swifter still; bold, bolder still—determined to completely liberate the South!",
      "bio": "Vị tướng tài ba, Tổng Tham mưu trưởng Quân đội Nhân dân Việt Nam suốt hơn 25 năm (1953–1978), sau giữ chức Bộ trưởng Bộ Quốc phòng. Mùa Xuân năm 1975, ông trực tiếp làm Tư lệnh Chiến dịch Hồ Chí Minh, chỉ huy 5 cánh quân hợp vây tiến vào giải phóng Sài Gòn – Gia Định trưa ngày 30/4/1975 và là tác giả hồi ký nổi tiếng \"Đại thắng mùa Xuân\".",
      "bio_en": "Chief of the General Staff of the Vietnam People’s Army for over 25 years (1953–1978) and later Minister of National Defense. In April 1975 he commanded the Ho Chi Minh Campaign, directing five converging army columns into Saigon on April 30, 1975, and authored the renowned memoir \"Our Great Spring Victory.\"",
      "related_pins": [
        "pin-baotang-chiendichhcm",
        "pin-dai-phat-thanh-saigon",
        "pin-1794549129587"
      ]
    },
    {
      "id": "fig-tranvantra",
      "name": "Thượng tướng Trần Văn Trà",
      "name_en": "Colonel General Tran Van Tra",
      "role": "Tư lệnh Quân Giải phóng miền Nam, Chủ tịch Ủy ban Quân quản Sài Gòn – Gia Định",
      "role_en": "Commander of the Liberation Army of South Vietnam & Chair of Saigon Military Management Committee",
      "dynasty": "Thời đại Hồ Chí Minh",
      "dynasty_en": "Modern Era",
      "years": "1919 – 1996",
      "avatar": "🎖️",
      "image_url": "",
      "background_image": "",
      "quote": "Chiến trường Sài Gòn – Gia Định – Nam Bộ là máu thịt, nơi ý chí nhân dân làm nên sức mạnh vô địch.",
      "quote_en": "The Saigon – Gia Dinh – Southern theater is our very lifeblood, where the people’s resolve forged invincible strength.",
      "bio": "Vị tướng gắn bó gần trọn cuộc đời binh nghiệp với chiến trường Sài Gòn – Gia Định và Nam Bộ từ những ngày đầu Nam Bộ kháng chiến (Khu 8, Phân liên khu miền Đông) đến suốt cuộc kháng chiến chống Mỹ. Ông là Tư lệnh Quân Giải phóng miền Nam (B2), Phó Tư lệnh Chiến dịch Hồ Chí Minh và là Chủ tịch Ủy ban Quân quản TP. Sài Gòn – Gia Định ngay sau ngày giải phóng 30/4/1975.",
      "bio_en": "A senior commander deeply tied to Saigon – Gia Dinh and Southern Vietnam from the 1945 Southern Resistance through 1975. Serving as Commander of the B2 Southern Theater and Deputy Commander of the Ho Chi Minh Campaign, he became Chairman of the Saigon – Gia Dinh Military Management Committee immediately after April 30, 1975.",
      "related_pins": [
        "pin-langlebauco",
        "pin-khoxangnhabe",
        "pin-chienkhuanphudong",
        "pin-baotang-chiendichhcm"
      ]
    },
    {
      "id": "fig-trinhcongson",
      "name": "Nhạc sĩ Trịnh Công Sơn",
      "name_en": "Musician Trinh Cong Son",
      "role": "Nhạc sĩ tài hoa bậc nhất tân nhạc Việt Nam, tiếng lòng hòa bình và tình yêu",
      "role_en": "Celebrated Vietnamese Songwriter of Peace & Humanism",
      "dynasty": "Văn hóa Nghệ thuật Hiện đại",
      "dynasty_en": "Modern Arts & Culture",
      "years": "1939 – 2001",
      "avatar": "🎸",
      "image_url": "",
      "background_image": "",
      "quote": "Sống trong đời sống cần có một tấm lòng — để làm gì, em biết không? Để gió cuốn đi...",
      "quote_en": "To live in this life, one needs a generous heart—do you know why? So the wind may carry it afar...",
      "bio": "Tác giả của hơn 600 ca khúc bất hủ (\"Diễm xưa\", \"Hạ trắng\", \"Cát bụi\", \"Nối vòng tay lớn\", \"Em còn nhớ hay em đã quên\"...), người đã khơi nguồn dòng nhạc giàu chất thơ, nhân bản và khát vọng hòa bình. Suốt nhiều thập kỷ gắn bó với Sài Gòn – TP.HCM, ông để lại dấu ấn văn hóa sâu đậm trong đời sống tinh thần bao thế hệ người Việt.",
      "bio_en": "Composer of over 600 timeless songs including \"Diem Xua,\" \"Cat Bui,\" and \"Noi Vong Tay Lon,\" Trinh Cong Son infused Vietnamese music with poetic depth, humanism, and longing for peace. Spending decades in Ho Chi Minh City, he remains an enduring cultural icon across generations.",
      "related_pins": [
        "pin-nhaluuniem-trinhcongson"
      ]
    },
    {
      "id": "fig-tranhuutrang",
      "name": "Soạn giả – Liệt sĩ Trần Hữu Trang",
      "name_en": "Playwright & Martyr Tran Huu Trang",
      "role": "Bậc thầy soạn giả cải lương Nam Bộ, Chủ tịch Hội Văn nghệ Giải phóng miền Nam",
      "role_en": "Master Cai Luong Playwright & Southern Cultural Leader",
      "dynasty": "Văn hóa Nghệ thuật Nam Bộ",
      "dynasty_en": "Southern Theatrical Heritage",
      "years": "1906 – 1966",
      "avatar": "🎭",
      "image_url": "",
      "background_image": "",
      "quote": "Sân khấu cải lương không chỉ mua vui mà phải cất lên tiếng nói bênh vực thân phận con người và lòng yêu nước.",
      "quote_en": "Cai Luong theater must do more than entertain—it must voice human dignity and love of country.",
      "bio": "Quê Mỹ Tho (Tiền Giang), là một trong những soạn giả đặt nền móng đỉnh cao cho nghệ thuật sân khấu cải lương Nam Bộ với những vở kinh điển như \"Đời cô Lựu\", \"Tô Ánh Nguyệt\", \"Lan và Điệp\". Tham gia kháng chiến và giữ chức Chủ tịch Hội Văn nghệ Giải phóng miền Nam, ông hy sinh năm 1966 và được truy tặng Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật (1996); tên ông được đặt trang trọng cho Nhà hát Cải lương TP.HCM.",
      "bio_en": "Born in My Tho, Tran Huu Trang elevated Southern Cai Luong opera to literary heights through classics such as \"Doi Co Luu\" and \"To Anh Nguyet.\" Serving as Chair of the Southern Liberation Arts and Literature Association before his death in 1966, he was posthumously awarded the Ho Chi Minh Prize (1996) and honored through Ho Chi Minh City’s premier Cai Luong theatre.",
      "related_pins": [
        "pin-nhahat-tranhuutrang"
      ]
    }
  ],
  "stories": [
    {
      "id": "story-camcoc",
      "name": "Kế sách cắm cọc sông Bạch Đằng",
      "name_en": "The Sunken Wooden Stakes Strategy on Bach Dang River",
      "figure_id": "fig-tranquoctuan",
      "required_pin_id": "pin-bachdang",
      "is_locked": false,
      "background_image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "content": "Năm 1288, trước thế giặc Nguyên Mông hung hãn rút lui bằng đường thủy, Trần Quốc Tuấn đã lợi dụng con nước thủy triều hiểm yếu của sông Bạch Đằng.\n\nÔng cho đẵn gỗ lim, vót nhọn bịt sắt rồi cắm xuống lòng sông. Nhân lúc nước triều dâng che khuất bãi cọc, quân ta nhử thuyền giặc vào sâu. Khi nước triều rút mạnh, thuyền địch mắc cạn vào cọc nhọn vỡ toác hàng loạt, toàn bộ hạm đội giặc bị tiêu diệt vang dội non sông.",
      "content_en": "In 1288, faced with the retreating Mongol-Yuan navy, Tran Quoc Tuan masterminded an ambush along the Bach Dang River.\n\nHe had sharpened iron-capped ironwood stakes driven into the riverbed. At high tide, our light boats lured the enemy fleet past the submerged stakes. When the tide rapidly ebbed, the massive enemy warships were impaled and trapped upon the timber spikes, leading to the complete annihilation of the invading armada."
    },
    {
      "id": "story-dienhong",
      "name": "Hội nghị Diên Hồng & Lời thề Sát Thát",
      "name_en": "The Dien Hong Conference & The Sat That Oath",
      "figure_id": "fig-tranquoctuan",
      "required_pin_id": "pin-thanglong",
      "is_locked": true,
      "background_image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "content": "Tại thềm điện Diên Hồng, vua Trần mở tiệc hỏi ý kiến muôn dân: 'Nên hòa hay nên đánh?'. Muôn người cùng muôn miệng reo hò rung chuyển kinh thành: 'ĐÁNH!'.\n\nCác tướng sĩ đồng lòng thích hai chữ 'Sát Thát' vào cánh tay, thề quyết tử cho Tổ quốc quyết sinh.",
      "content_en": "At the steps of Dien Hong Palace, the Tran Emperor convened elders from across the kingdom asking: 'Shall we make peace or shall we fight?'. With one voice, thousands shouted 'FIGHT!', shaking the citadel.\n\nThe commanders and warriors tattooed 'Sat That' (Slay the Invaders) onto their arms, swearing to fight to the death for the homeland."
    },
    {
      "id": "story-hanhquan-thantoc",
      "name": "Cuộc hành quân thần tốc mùa xuân Kỷ Dậu",
      "name_en": "The Lightning March of Spring 1789",
      "figure_id": "fig-quangtrung",
      "required_pin_id": "pin-dongda",
      "is_locked": true,
      "background_image": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
      "content": "Từ Phú Xuân ra Thăng Long dài hơn 600km, vua Quang Trung tổ chức đội hình 3 người một cáng, 2 người khiêng 1 người ngủ luân phiên ngày đêm không nghỉ.\n\nĐoàn quân thần tốc vừa đi vừa tuyển thêm tân binh, tạo nên cuộc hành quân kỳ tích vô tiền khoáng hậu khiến tướng giặc Tôn Sĩ Nghị không kịp trở tay.",
      "content_en": "Spanning over 600 kilometers from Phu Xuan to Thang Long, Emperor Quang Trung organized troops into three-man hammock teams, with two carrying while one rested in continuous day-and-night shifts.\n\nEnlisting recruits along the march, this unprecedented tactical feat caught Qing general Sun Shiyi completely off guard."
    },
    {
      "id": "story-ngochoi-dongda",
      "name": "Trận đại thắng Ngọc Hồi - Đống Đa",
      "name_en": "The Great Victory of Ngoc Hoi - Dong Da",
      "figure_id": "fig-quangtrung",
      "required_pin_id": "pin-dongda",
      "is_locked": true,
      "background_image": "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&w=800&q=80",
      "content": "Rạng sáng mùng 5 Tết Kỷ Dậu, vua Quang Trung cho quân lấy thuyền nan bọc rơm ướt khiêng đi trước che đạn lửa của giặc, áp sát đồn Ngọc Hồi phá tan tuyến phòng thủ kiên cố nhất của địch.",
      "content_en": "At dawn on the 5th day of Tet 1789, Emperor Quang Trung spearheaded an assault using wood rafts shielded with wet straw to deflect flaming enemy cannons, breaching Ngoc Hoi fortress and dismantling the enemy's most fortified defensive line."
    },
    {
      "id": "story-loithe-songhat",
      "name": "Lời thề trên sông Hát",
      "name_en": "The Sacred Oath on the Hat River",
      "figure_id": "fig-haibatrung",
      "required_pin_id": "pin-hatmon",
      "is_locked": true,
      "background_image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "content": "Trước giờ xuất trận tại cửa sông Hát, Trưng Trắc dõng dạc tuyên thệ 4 câu thề:\n\n'Một xin rửa sạch nước thù\nHai xin đem lại nghiệp xưa họ Hùng\nBa kẻo oan ức lòng chồng\nBốn xin vẹn vẹn sở công lênh này.'",
      "content_en": "Prior to marching into battle at the mouth of the Hat River, Trung Trac proclaimed the four historic oaths:\n\n'First, cleanse our land of the enemy's stain,\nSecond, restore the Hung clan's ancestral reign,\nThird, avenge the wrongful death of my spouse,\nFourth, fulfill this vow that we hereby espouse.'"
    },
    {
      "id": "story-nharong-1911",
      "name": "Chuyến tàu Amiral Latouche-Tréville ngày 5/6/1911",
      "name_en": "The Amiral Latouche-Treville Departure (June 5, 1911)",
      "figure_id": "fig-hochiminh",
      "required_pin_id": "pin-ben-nharong",
      "is_locked": true,
      "background_image": "",
      "content": "Đầu tháng 6 năm 1911, người thanh niên 21 tuổi Nguyễn Tất Thành tìm đến bến cảng Nhà Rồng xin làm phụ bếp trên con tàu buôn Pháp Amiral Latouche-Tréville với tên gọi Văn Ba.\n\nKhi người bạn thân hỏi lấy đâu ra tiền để đi ra nước ngoài, Nguyễn Tất Thành giơ hai bàn tay lên và trả lời dứt khoát: \"Đây, tiền đây! Chúng ta sẽ làm việc, chúng ta sẽ làm bất cứ việc gì để sống và để đi\". Ngày 5/6/1911, con tàu rời bến Nhà Rồng, mở đầu hành trình 30 năm vạn dặm tìm thấy ánh sáng độc lập cho dân tộc Việt Nam.",
      "content_en": "In early June 1911, 21-year-old Nguyen Tat Thanh came to Nha Rong Wharf and signed on as a kitchen helper named Van Ba aboard the French liner Amiral Latouche-Treville.\n\nWhen a close friend asked where he would find the money to travel abroad, he held up his bare hands and replied firmly: \"Here is the money! We will work—we will do any honest labor to live and to go.\" On June 5, 1911, the ship sailed out of Nha Rong, beginning a 30-year odyssey that changed Vietnam’s destiny."
    },
    {
      "id": "story-nha-so5-chauvanliem",
      "name": "Những tháng ngày trọ học tại Liên Thành thương quán",
      "name_en": "Months of Preparation at Lien Thanh Trading House",
      "figure_id": "fig-hochiminh",
      "required_pin_id": "pin-nhalubac-q5",
      "is_locked": true,
      "background_image": "",
      "content": "Trước ngày rời Bến Nhà Rồng, từ khoảng tháng 9/1910 đến đầu tháng 6/1911, Nguyễn Tất Thành sống tại căn nhà số 5 Châu Văn Liêm (Quận 5) — trụ sở phân cuộc công ty nước mắm Liên Thành do các sĩ phu yêu nước sáng lập.\n\nTại đây, Người tranh thủ theo học lớp kỹ nghệ thực hành, tự trau dồi tiếng Pháp và đi khắp các xóm thợ, bến tàu Sài Gòn – Chợ Lớn để chứng kiến tận mắt cảnh sống lầm than của đồng bào mình, hun đúc ý chí quyết tâm vượt đại dương tìm con đường giải phóng mới.",
      "content_en": "From around September 1910 to early June 1911 before sailing from Nha Rong, Nguyen Tat Thanh resided at 5 Chau Van Liem Street (District 5), the Saigon branch of the patriotic Lien Thanh Trading Company.\n\nWhile staying here, he studied practical trades and French, walking through worker quarters and docks across Saigon–Cho Lon to witness the hardships of his compatriots—forging his resolve to seek a new path to freedom."
    },
    {
      "id": "story-khaisinh-saigon-1698",
      "name": "Năm Mậu Dần 1698 – Dấu mốc khai sinh Sài Gòn – Gia Định",
      "name_en": "Spring 1698 – The Founding of Saigon – Gia Dinh",
      "figure_id": "fig-nguyenhuucanh",
      "required_pin_id": "pin-congvienbachdang",
      "is_locked": true,
      "background_image": "",
      "content": "Mùa xuân năm 1698, Thống suất Nguyễn Hữu Cảnh vâng lệnh Chúa Nguyễn Phúc Chu vào kinh lược vùng đất phương Nam. Ông lập phủ Gia Định, đặt xứ Đồng Nai làm huyện Phước Long (dựng dinh Trấn Biên) và đặt xứ Sài Gòn làm huyện Tân Bình (dựng dinh Phiên Trấn).\n\nBằng việc tổ chức bộ máy hành chính, chiêu tập lưu dân lập xã thôn và thiết lập sổ đinh – sổ điền, ông đã chính thức đánh dấu mốc khai sinh lịch sử hơn 300 năm của đô thị Sài Gòn – Thành phố Hồ Chí Minh ngày nay.",
      "content_en": "In the spring of 1698, Commander Nguyen Huu Canh sailed south under orders from Lord Nguyen Phuc Chu. He established Gia Dinh Prefecture, organizing Dong Nai as Phuoc Long District (Tran Bien Garrison) and Saigon as Tan Binh District (Phien Tran Garrison).\n\nBy setting up civil administration, settling pioneers into villages, and creating land and population registries, he marked the official historical birth of Saigon – Ho Chi Minh City."
    },
    {
      "id": "story-langong-taquan",
      "name": "Nỗi oan lịch sử và lòng dân nhớ Tả quân Lê Văn Duyệt",
      "name_en": "The Historic Injustice and Enduring Reverence for Marshal Le Van Duyet",
      "figure_id": "fig-levanduyet",
      "required_pin_id": "pin-langongbachieu",
      "is_locked": true,
      "background_image": "",
      "content": "Trong hai nhiệm kỳ làm Tổng trấn Gia Định Thành, Tả quân Lê Văn Duyệt được dân Nam Bộ kính trọng vì tính cương trực, công minh và hết lòng chăm lo đời sống bách tính. Thế nhưng sau khi ông qua đời năm 1832 và nổ ra cuộc nổi dậy Lê Văn Khôi, triều Minh Mạng đã san phẳng mộ ông và dựng bia khắc án phạt.\n\nDù vậy, người dân Gia Định vẫn lén thắp hương tưởng nhớ ông không ngớt. Đến thời vua Thiệu Trị và Tự Đức, nỗi oan được giải tỏa, mộ phần và đền thờ được dựng lại khang trang thành Lăng Ông – Bà Chiểu, nơi đông đảo người dân thành phố vẫn đến chiêm bái mỗi dịp lễ Tết.",
      "content_en": "Across two terms as Viceroy of Gia Dinh Citadel, Marshal Le Van Duyet won deep affection for his integrity and care for Southern residents. Yet after his death in 1832 and the Le Van Khoi revolt, Emperor Minh Mang had his grave leveled and indicted.\n\nEven then, Saigon locals quietly continued burning incense for him. Emperors Thieu Tri and Tu Duc later exonerated him and restored his mausoleum at Lang Ong Ba Chieu, where generations still pay tribute today."
    },
    {
      "id": "story-votruongtoan-dinhchihoa",
      "name": "Lớp học Đình Hòa Hưng và \"Gia Định Tam Gia\"",
      "name_en": "The Hoa Hung School and the \"Gia Dinh Trio\"",
      "figure_id": "fig-votruongtoan",
      "required_pin_id": "pin-dinhchihoa",
      "is_locked": true,
      "background_image": "",
      "content": "Vào khoảng năm 1785–1792, giữa vùng thôn quê thanh bình Hòa Hưng (nay là khu vực Đình Chí Hòa, Quận 10), xử sĩ Võ Trường Toản mở trường dạy học, thu hút đông đảo sĩ tử khắp Nam Bộ tìm về tầm sư.\n\nChính từ mái trường giản dị ấy đã trưởng thành bộ ba danh sĩ lừng lẫy \"Gia Định Tam Gia\" gồm Trịnh Hoài Đức (tác giả Gia Định thành thông chí), Lê Quang Định và Ngô Nhân Tịnh cùng trung thần Ngô Tùng Châu — góp phần định hình cốt cách văn hiến, hào hiệp của đất Sài Gòn – Gia Định.",
      "content_en": "Between roughly 1785 and 1792 in tranquil Hoa Hung Village (today’s Chi Hoa Communal House, District 10), master scholar Vo Truong Toan taught aspiring students from across the South.\n\nFrom his modest classroom emerged the celebrated \"Gia Dinh Trio\"—Trinh Hoai Duc (author of the Gazetteer of Gia Dinh), Le Quang Dinh, and Ngo Nhan Tinh—alongside Ngo Tung Chau, shaping the scholarly and chivalrous spirit of historic Saigon."
    },
    {
      "id": "story-loicandan-tranphu",
      "name": "\"Hãy giữ vững chí khí chiến đấu!\" tại Trại giam Chợ Quán",
      "name_en": "\"Keep Up the Fighting Spirit!\" at Cho Quan Detention Ward",
      "figure_id": "fig-tranphu",
      "required_pin_id": "pin-khu-trai-giam-choquan",
      "is_locked": true,
      "background_image": "",
      "content": "Bị thực dân Pháp bắt ngày 18/4/1931 tại Sài Gòn, Tổng Bí thư Trần Phú chịu đựng những trận tra tấn khốc liệt tại bót Catinat và Khám Lớn nhưng tuyệt nhiên không khai báo bất cứ bí mật nào của tổ chức.\n\nKhi lâm bệnh lao phổi nặng và bị đưa vào phòng giam Bệnh viện Chợ Quán, trước khi trút hơi thở cuối cùng ngày 6/9/1931 ở tuổi 27, ông nắm tay các đồng chí cùng phòng giam căn dặn câu nói bất hủ: \"Hãy giữ vững chí khí chiến đấu!\".",
      "content_en": "Arrested by colonial police in Saigon on April 18, 1931, General Secretary Tran Phu endured relentless torture at Catinat Station and Saigon Central Prison without revealing a single Party secret.\n\nStricken with severe tuberculosis and transferred to the detention ward of Cho Quan Hospital, before passing away on September 6, 1931 at age 27, he gripped his fellow prisoners’ hands and left his immortal words: \"Keep up the fighting spirit!\""
    },
    {
      "id": "story-ngabagioi-1940",
      "name": "Ngọn lửa Khởi nghĩa Nam Kỳ và 18 Thôn Vườn Trầu",
      "name_en": "The Flame of the 1940 Southern Uprising in Hoc Mon",
      "figure_id": "fig-nguyenvancu",
      "required_pin_id": "pin-ngabagioi",
      "is_locked": true,
      "background_image": "",
      "content": "Đêm 22 rạng sáng 23/11/1940, từ trung tâm vùng 18 Thôn Vườn Trầu (Hóc Môn – Bà Điểm), tiếng mõ, tiếng trống vang dội khắp Nam Kỳ mở đầu cuộc khởi nghĩa vũ trang quy mô lớn chống ách thống trị thực dân; lá cờ đỏ sao vàng năm cánh lần đầu xuất hiện rộng khắp.\n\nSau khi cuộc khởi nghĩa bị đàn áp khốc liệt, năm 1941 thực dân Pháp đưa nhiều nhà lãnh đạo cách mạng kiệt xuất như Nguyễn Văn Cừ, Phan Đăng Lưu ra xử bắn tại trường bắn Ngã Ba Giồng. Máu của các anh hùng đã thấm sâu vào đất Hóc Môn, trở thành ngọn đuốc dẫn đường cho thắng lợi Cách mạng Tháng Tám 1945.",
      "content_en": "On the night of November 22–23, 1940, drums and gongs echoed from the 18 Betel-Garden Villages of Hoc Mon – Ba Diem, sparking the widespread Southern Uprising where the red flag with a five-pointed gold star flew prominently for the first time.\n\nFollowing brutal colonial repression, senior leaders including Nguyen Van Cu and Phan Dang Luu were executed at the Nga Ba Giong firing ground in 1941—their sacrifice lighting the path toward the August 1945 Revolution."
    },
    {
      "id": "story-traitim-batdiet",
      "name": "Trái tim bất diệt của Bồ tát Thích Quảng Đức (11/6/1963)",
      "name_en": "The Unburned Heart of Bodhisattva Thich Quang Duc (June 11, 1963)",
      "figure_id": "fig-thichquangduc",
      "required_pin_id": "pin-tuongdaithichquangduc",
      "is_locked": true,
      "background_image": "",
      "content": "Sáng ngày 11/6/1963, giữa giao lộ Lê Văn Duyệt – Phan Đình Phùng (Quận 3), Hòa thượng Thích Quảng Đức bước ra từ chiếc xe Austin màu xanh dương nhạt, bình thản ngồi kiết già trong vòng vây hàng trăm tăng ni và tự thiêu để phản đối chính sách đàn áp Phật giáo.\n\nTrong suốt ngọn lửa rực cháy, Ngài vẫn giữ tư thế thiền định bất động. Bức ảnh do phóng viên Malcolm Browne chụp đã đoạt giải Pulitzer năm 1963, gây chấn động toàn cầu. Kỳ lạ hơn, sau khi hỏa táng ở nhiệt độ cực cao, trái tim của Ngài vẫn còn nguyên vẹn và được tôn kính gọi là Xá lợi Trái tim Bồ tát Thích Quảng Đức.",
      "content_en": "On the morning of June 11, 1963, at a central District 3 intersection, Venerable Thich Quang Duc stepped from a light blue Austin sedan, calmly assumed the lotus posture surrounded by monks and nuns, and self-immolated to protest religious persecution.\n\nHe remained completely still amid the flames. Associated Press photojournalist Malcolm Browne’s photograph won the 1963 Pulitzer Prize and stunned the world. Even more remarkably, after cremation at extreme heat, his heart remained intact and is venerated as a sacred relic."
    },
    {
      "id": "story-dem-daoham-287",
      "name": "Nhà thầu khoán giàu có và căn hầm giấu gần 2 tấn vũ khí",
      "name_en": "The Wealthy Contractor and the Two-Ton Secret Weapons Bunker",
      "figure_id": "fig-tranvanlai",
      "required_pin_id": "pin-hamtranvanlai",
      "is_locked": true,
      "background_image": "",
      "content": "Dưới vỏ bọc nhà thầu khoán Mai Hồng Quế giàu có chuyên trang trí nội thất cho Dinh Độc Lập, chiến sĩ Biệt động Trần Văn Lai (Năm Lai) mua liền ba căn nhà trong hẻm 287 Nguyễn Đình Chiểu (Quận 3).\n\nĐêm đêm, ông âm thầm đào căn hầm kiên cố dài hơn 8 m, có 4 cửa thoát hiểm nối thẳng ra cống ngầm thành phố, còn đất đào lên được bỏ vào sọt hoa quả, bao xi măng chở đi phi tang từng chút một. Căn hầm đã cất giấu an toàn gần 2 tấn súng AK, B40 và thuốc nổ ngay giữa lòng Sài Gòn để Đội 5 Biệt động nhận lệnh xuất kích đánh Dinh Độc Lập đêm giao thừa Tết Mậu Thân 1968.",
      "content_en": "Under the cover of affluent contractor Mai Hong Que—who even furnished rooms inside Independence Palace—Saigon Commando Tran Van Lai bought three adjoining alley houses at 287 Nguyen Dinh Chieu (District 3).\n\nNight after night, he excavated a reinforced bunker over 8 meters long with four escape hatches linked to city sewers, smuggling the soil out in fruit baskets and cement sacks. Nearly two tons of AK rifles, B40 launchers, and explosives were hidden there until Team 5 armed themselves on Tet Eve 1968 to strike Independence Palace."
    },
    {
      "id": "story-hopthu-caphedophu",
      "name": "Hộp thư bí mật trong quán cà phê – cơm tấm 113A Đặng Dung",
      "name_en": "The Secret Mailbox Inside 113A Dang Dung Coffee Shop",
      "figure_id": "fig-tranvanlai",
      "required_pin_id": "pin-caphedophu",
      "is_locked": true,
      "background_image": "",
      "content": "Nằm trong khu phố đông đúc sĩ quan và nhân viên chế độ cũ, quán cà phê – cơm tấm bình dân tại số 113A Đặng Dung (Quận 1) là mắt xích giao liên tối mật do gia đình ông Trần Văn Lai xây dựng và giao cho vợ chồng ông Đỗ Miễn – bà Nguyễn Thị Sự vận hành.\n\nGiữa tiếng trò chuyện râm ran của thực khách, những bức mật thư, chỉ thị và ngân quỹ cách mạng được bí mật luân chuyển qua hộp thư ngụy trang và cất giấu sau căn hầm nổi ẩn trong bức tường tầng lầu, góp phần giữ mạch liên lạc thông suốt cho Biệt động Sài Gòn suốt nhiều năm liền.",
      "content_en": "Set in a neighborhood frequented by former regime officers, the unassuming coffee and broken-rice shop at 113A Dang Dung Street (District 1) was a vital covert liaison link established by Tran Van Lai and run by Do Mien and Nguyen Thi Su.\n\nAmid everyday diner chatter, classified orders, letters, and funds passed discreetly through a camouflaged mailbox and were hidden in a concealed upper-floor wall bunker, keeping Saigon Commando communications alive for years."
    },
    {
      "id": "story-kientruc-chucat",
      "name": "Bí mật kiến trúc chữ \"Cát\" của Dinh Độc Lập",
      "name_en": "The Hidden Calligraphy \"Cat\" in Independence Palace",
      "figure_id": "fig-ngovietthu",
      "required_pin_id": "pin-1794549129587",
      "is_locked": true,
      "background_image": "",
      "content": "Khi thiết kế Dinh Độc Lập mới năm 1962, kiến trúc sư Ngô Viết Thụ khéo léo lồng ghép triết lý phương Đông vào từng đường nét kiến trúc hiện đại. Tổng thể mặt bằng dinh tạo hình chữ \"Cát\" (吉 – nghĩa là tốt lành, may mắn), tâm điểm là phòng trình quốc thư hình chữ \"Khẩu\" (口 – đề cao giáo dục và tự do ngôn luận).\n\nCột cờ xuyên qua chính giữa tạo nét chữ \"Trung\" (忠 – trung kiên), các mái hiên và bao lơn hợp thành chữ \"Tam\" (三 – nhân, minh, võ) và chữ \"Vương\" (王), phía trên có kỳ đài tạo thành chữ \"Chủ\" (主 – chủ quyền đất nước). Hệ rèm hoa đá mặt tiền lại mang dáng dấp đốt trúc thanh tao, vừa che nắng gắt phương Nam vừa đón trọn gió trời.",
      "content_en": "When designing the new Independence Palace in 1962, architect Ngo Viet Thu wove Eastern symbolism into clean tropical modernism. Its floor plan forms the character \"Cat\" (good fortune), centered on the credentials hall shaped like \"Khau\" (voice and learning).\n\nThe flagpole axis traces \"Trung\" (loyalty), the three main terraces form \"Tam\" (humanity, clarity, strength) and \"Vuong,\" crowned by the rooftop mast forming \"Chu\" (sovereignty)—all veiled behind graceful bamboo-inspired stone louvers that filter harsh sun while inviting natural breezes."
    },
    {
      "id": "story-ngay-9-thang-1",
      "name": "Biển người đưa tang Trần Văn Ơn và Ngày Học sinh – Sinh viên 9/1",
      "name_en": "Tran Van On’s Funeral Procession and Vietnam Students’ Day (Jan 9)",
      "figure_id": "fig-tranvanon",
      "required_pin_id": "pin-truonglehongphong",
      "is_locked": true,
      "background_image": "",
      "content": "Ngày 9/1/1950, hàng nghìn học sinh – sinh viên các trường trung học Sài Gòn (nòng cốt là Trường Pétrus Ký) xuống đường biểu tình đòi chính quyền thả các bạn học bị bắt giữ. Khi cảnh sát nổ súng đàn áp, nam sinh Trần Văn Ơn đã dũng cảm che chắn cho các em học sinh nhỏ tuổi hơn và ngã xuống ở tuổi 19.\n\nBa ngày sau (12/1/1950), đám tang của anh biến thành cuộc biểu dương lực lượng yêu nước khổng lồ với hàng trăm nghìn đồng bào Sài Gòn – Chợ Lớn tiễn đưa. Đại hội toàn quốc Liên đoàn Thanh niên Việt Nam tháng 2/1950 đã quyết định chọn ngày 9/1 hằng năm làm Ngày truyền thống Học sinh – Sinh viên Việt Nam.",
      "content_en": "On January 9, 1950, thousands of Saigon students—spearheaded by Lycee Petrus Ky—marched to demand the release of imprisoned classmates. When police opened fire, 19-year-old Tran Van On shielded younger students and was mortally wounded.\n\nThree days later, his funeral became a massive patriotic demonstration attended by hundreds of thousands across Saigon–Cho Lon. In February 1950, January 9 was officially proclaimed Vietnam’s Traditional Day of Students."
    },
    {
      "id": "story-xe-tang-390",
      "name": "Trưa 30/4/1975 – Thời khắc lịch sử tại cổng Dinh Độc Lập",
      "name_en": "Noon on April 30, 1975 – Historic Moment at Independence Palace",
      "figure_id": "fig-hochiminh",
      "required_pin_id": "pin-1794549129587",
      "is_locked": true,
      "background_image": "",
      "content": "Trưa ngày 30/4/1975, đoàn xe tăng Quân Giải phóng thuộc Lữ đoàn 203 (Quân đoàn 2) tiến dọc đại lộ Thống Nhất tiến thẳng vào trung tâm Sài Gòn. Xe tăng 843 húc nghiêng cổng phụ, ngay sau đó xe tăng 390 húc tung cánh cổng chính Dinh Độc Lập tiến thẳng vào bãi cỏ trung tâm.\n\nLúc 11 giờ 30 phút, Đại đội trưởng Bùi Quang Thận cắm lá cờ Mặt trận Dân tộc Giải phóng miền Nam Việt Nam trên nóc dinh, Tổng thống Dương Văn Minh tuyên bố đầu hàng vô điều kiện — khép lại 30 năm chiến tranh gian khổ và mở ra kỷ nguyên hòa bình, thống nhất non sông.",
      "content_en": "At noon on April 30, 1975, tanks of the 203rd Armored Brigade (2nd Corps) rolled down Thong Nhat Boulevard into the heart of Saigon. Tank 843 struck the side gate before Tank 390 crashed straight through the main gates of Independence Palace.\n\nAt 11:30 a.m., Captain Bui Quang Than raised the Liberation Flag atop the palace roof as President Duong Van Minh announced unconditional surrender—ending decades of war and reunifying Vietnam."
    },
    {
      "id": "story-tuongdai-melinh",
      "name": "Tượng đài Hưng Đạo Đại Vương hướng ra sông Sài Gòn",
      "name_en": "Supreme Commander Tran Hung Dao Gazing Over the Saigon River",
      "figure_id": "fig-tranquoctuan",
      "required_pin_id": "pin-congvienbachdang",
      "is_locked": true,
      "background_image": "",
      "content": "Cách dòng Bạch Đằng lịch sử hàng nghìn cây số, hào khí Đông A vẫn sừng sững hiện diện giữa trái tim TP.HCM qua Tượng đài Hưng Đạo Đại Vương Trần Quốc Tuấn tại Công trường Mê Linh (Quận 1).\n\nTác phẩm do nhà điêu khắc Phạm Thông thực hiện và dựng năm 1967, khắc họa vị Quốc công Tiết chế tay trái nắm đốc kiếm, tay phải chỉ thẳng ra sông Sài Gòn lộng gió; dưới bệ đài là các bức phù điêu tái hiện Hội nghị Diên Hồng và chiến thắng Bạch Đằng 1288, nhắc nhớ hậu thế về tinh thần giữ nước muôn đời.",
      "content_en": "Thousands of kilometers south of the historic Bach Dang River, the martial spirit of the Tran Dynasty stands tall in central Ho Chi Minh City through the statue of Tran Hung Dao at Me Linh Square (District 1).\n\nCreated by sculptor Pham Thong in 1967, the monument depicts the Supreme Commander gripping his sword hilt while pointing boldly across the Saigon River, its pedestal reliefs recounting the Dien Hong Conference and the 1288 Bach Dang victory."
    },
    {
      "id": "story-baicong-bason-1925",
      "name": "Cuộc bãi công kìm chân chiến hạm Michelet tại Ba Son (8/1925)",
      "name_en": "The Historic August 1925 Ba Son Shipyard Strike",
      "figure_id": "fig-tonducthang",
      "required_pin_id": "pin-xuongbason",
      "is_locked": true,
      "background_image": "",
      "content": "Tháng 8 năm 1925, chiến hạm Pháp Jules Michelet cập Xưởng đóng tàu Ba Son để sửa chữa khẩn cấp trước khi chở quân sang đàn áp phong trào cách mạng ở Trung Quốc.\n\nDưới sự tổ chức và lãnh đạo tài tình của đồng chí Tôn Đức Thắng cùng tổ chức Công hội Đỏ, hơn 1.000 công nhân Ba Son đồng loạt bãi công đòi tăng lương 20%, khéo léo kéo dài thời gian sửa chữa khiến chiến hạm bị kìm chân suốt nhiều tháng. Đây là mốc son mở đầu phong trào đấu tranh tự giác mang tinh thần quốc tế vô sản của giai cấp công nhân Việt Nam.",
      "content_en": "In August 1925, the French cruiser Jules Michelet docked at Ba Son Shipyard for urgent repairs before sailing to suppress revolutionary movements in China.\n\nLed by Ton Duc Thang and the clandestine Red Trade Union, over 1,000 Ba Son workers launched a coordinated strike demanding a 20% wage increase and deliberately delaying repairs for months—marking the shift of Vietnam’s labor movement into organized political action."
    },
    {
      "id": "story-conghoido-binhdong",
      "name": "Những cuộc họp bí mật của Công hội Đỏ tại Đình Bình Đông",
      "name_en": "Secret Red Trade Union Meetings at Binh Dong Communal House",
      "figure_id": "fig-tonducthang",
      "required_pin_id": "pin-dinhbinhdong",
      "is_locked": true,
      "background_image": "",
      "content": "Tọa lạc trên cù lao Bà Tàng biệt lập giữa sông nước Quận 8, Đình Bình Đông vào giai đoạn 1925–1930 không chỉ là chốn sinh hoạt tín ngưỡng mà còn trở thành điểm hẹn bí mật lý tưởng của những người thợ yêu nước Sài Gòn – Chợ Lớn.\n\nLợi dụng cảnh thuyền ghe qua lại tấp nập và lễ cúng đình, đồng chí Tôn Đức Thắng cùng các hội viên Công hội Đỏ đã tổ chức nhiều cuộc họp bàn tuyên truyền, truyền tay báo chí cách mạng và xây dựng mạng lưới đấu tranh công nhân ngay giữa lòng thành phố.",
      "content_en": "Set on the riverine Ba Tang Islet in District 8, Binh Dong Communal House served between 1925 and 1930 not only as a village shrine but as a discreet gathering point for patriotic Saigon – Cho Lon workers.\n\nBlending in with bustling boat traffic and temple ceremonies, Ton Duc Thang and Red Trade Union activists held covert meetings here to circulate revolutionary papers and expand urban worker networks."
    },
    {
      "id": "story-phientoa-lytutrong",
      "name": "Phiên tòa 1931 và câu nói bất hủ của người thanh niên 17 tuổi",
      "name_en": "The 1931 Trial and the Immortal Words of 17-Year-Old Ly Tu Trong",
      "figure_id": "fig-lytutrong",
      "required_pin_id": "pin-toaantphcm",
      "is_locked": true,
      "background_image": "",
      "content": "Tháng 11 năm 1931, tại Pháp đình Sài Gòn (nay là Tòa án Nhân dân TP.HCM, 131 Nam Kỳ Khởi Nghĩa), thực dân Pháp mở phiên tòa Đại hình xét xử người thanh niên yêu nước Lý Tự Trọng khi anh vừa bước sang tuổi 17.\n\nKhi luật sư bào chữa xin tòa giảm nhẹ án với lý do anh còn vị thành niên và \"hành động thiếu suy nghĩ\", Lý Tự Trọng ngẩng cao đầu khẳng định dõng dạc: \"Tôi hành động có suy nghĩ, tôi hiểu việc tôi làm... Con đường của thanh niên chỉ là con đường cách mạng, không thể có con đường nào khác!\" — câu nói đã trở thành kim chỉ nam cho nhiều thế hệ tuổi trẻ Việt Nam.",
      "content_en": "In November 1931, at Saigon’s Palais de Justice (now the HCMC People’s Court at 131 Nam Ky Khoi Nghia), French colonial authorities put 17-year-old patriot Ly Tu Trong on trial for his life.\n\nWhen his defense counsel pleaded for leniency on grounds of his youth and \"impulsiveness,\" Ly Tu Trong stood tall and declared: \"I acted with full awareness... The path of youth can only be the revolutionary path—there can be no other!\"—a credo that inspired generations of Vietnamese youth."
    },
    {
      "id": "story-nu-bithu-saigon",
      "name": "Khí tiết nữ Bí thư Thành ủy Nguyễn Thị Minh Khai tại Bót Catinat",
      "name_en": "Unbreakable Resolve of Nguyen Thi Minh Khai at Catinat Station",
      "figure_id": "fig-nguyenthiminhkhai",
      "required_pin_id": "pin-diachido-botcatinat",
      "is_locked": true,
      "background_image": "",
      "content": "Bị mật thám Pháp bắt giữ tại Sài Gòn tháng 7/1940 ngay trước thềm Khởi nghĩa Nam Kỳ, nữ Bí thư Thành ủy Sài Gòn – Chợ Lớn Nguyễn Thị Minh Khai bị đưa về tra khảo khốc liệt tại Bót Catinat (164 Đồng Khởi).\n\nTrước mọi cực hình của mật thám và bản án tử hình khốc liệt, bà không hề khai báo một tên đồng chí hay cơ sở nào; trong nhà lao, bà còn viết nên những vần thơ rực lửa niềm tin cách mạng trước khi hiên ngang bước ra trường bắn Ngã Ba Giồng ngày 28/8/1941.",
      "content_en": "Arrested by French secret police in Saigon in July 1940 on the eve of the Southern Uprising, Saigon – Cho Lon Party Secretary Nguyen Thi Minh Khai endured brutal interrogation at Catinat Station (164 Dong Khoi).\n\nRefusing to betray a single comrade or safe house despite torture and a death sentence, she composed resolute prison poems before facing the firing squad at Nga Ba Giong on August 28, 1941."
    },
    {
      "id": "story-giadinh-thanhthongchi",
      "name": "Trịnh Hoài Đức và kiệt tác địa chí \"Gia Định thành thông chí\"",
      "name_en": "Trinh Hoai Duc and the Monumental Gazetteer of Gia Dinh",
      "figure_id": "fig-trinhhoaiduc",
      "required_pin_id": "pin-dinh-minh-huong",
      "is_locked": true,
      "background_image": "",
      "content": "Vốn sinh trưởng trong cộng đồng Minh Hương vùng Biên Hòa – Gia Định và là đại đệ tử của xử sĩ Võ Trường Toản, danh sĩ Trịnh Hoài Đức dành nhiều năm điền dã, sưu khảo để hoàn thành bộ \"Gia Định thành thông chí\" (khoảng năm 1820).\n\nTác phẩm ghi chép cực kỳ tỉ mỉ về địa lý, kênh rạch, sản vật, phố chợ Bến Nghé – Sài Gòn – Chợ Lớn và phong tục hào sảng của người dân phương Nam thuở mở cõi. Cho đến hôm nay, đây vẫn là \"bách khoa toàn thư\" cổ quý giá nhất về lịch sử TP.HCM; bài vị ông được thờ trang trọng tại Đình Minh Hương Gia Thạnh.",
      "content_en": "Raised in the Minh Huong community and chief pupil of scholar Vo Truong Toan, statesman Trinh Hoai Duc spent years surveying southern provinces to complete \"Gia Dinh Thanh Thong Chi\" around 1820.\n\nDocumenting waterways, markets, flora, and the open-hearted customs of early Saigon and Cho Lon in extraordinary detail, it remains the single most vital primary source on early HCMC history; his ancestral tablet is honored at Minh Huong Gia Thanh Communal House."
    },
    {
      "id": "story-5-canh-quan-1975",
      "name": "Năm cánh quân hội tụ trong Chiến dịch Hồ Chí Minh lịch sử",
      "name_en": "Five Converging Columns of the 1975 Ho Chi Minh Campaign",
      "figure_id": "fig-vantiendung",
      "required_pin_id": "pin-baotang-chiendichhcm",
      "is_locked": true,
      "background_image": "",
      "content": "Từ ngày 26 đến 30/4/1975, dưới sự chỉ huy trực tiếp của Bộ Tư lệnh Chiến dịch do Đại tướng Văn Tiến Dũng làm Tư lệnh, 5 cánh quân chủ lực hùng hậu từ các hướng Tây Bắc, Bắc, Đông, Đông Nam và Tây Nam đồng loạt tiến công theo phương châm \"Thần tốc, táo bạo, bất ngờ, chắc thắng\".\n\nCác cánh quân đánh thẳng vào 5 mục tiêu đầu não tại Sài Gòn gồm Dinh Độc Lập, Bộ Tổng tham mưu, Sân bay Tân Sơn Nhất, Biệt khu Thủ đô và Tổng nha Cảnh sát — làm nên thắng lợi trọn vẹn ngày 30/4/1975 được tái hiện sinh động trên sa bàn lớn tại Bảo tàng Chiến dịch Hồ Chí Minh.",
      "content_en": "From April 26 to 30, 1975, under Campaign Commander General Van Tien Dung, five main-force army columns struck simultaneously from the northwest, north, east, southeast, and southwest under the motto \"Swift, bold, unexpected, and decisive.\"\n\nDriving straight into five strategic Saigon objectives—Independence Palace, the Joint General Staff, Tan Son Nhat Air Base, Capital Military District, and National Police Headquarters—they achieved total victory on April 30, vividly recreated on the giant diorama at the Ho Chi Minh Campaign Museum."
    },
    {
      "id": "story-ban-tuyen-bo-30-4",
      "name": "Bản tin lịch sử trưa 30/4/1975 tại Đài Phát thanh Sài Gòn",
      "name_en": "The Historic Noon Broadcast at Saigon Radio Station (April 30, 1975)",
      "figure_id": "fig-vantiendung",
      "required_pin_id": "pin-dai-phat-thanh-saigon",
      "is_locked": true,
      "background_image": "",
      "content": "Ngay sau khi lá cờ Giải phóng tung bay trên nóc Dinh Độc Lập trưa ngày 30/4/1975, lực lượng Quân Giải phóng nhanh chóng đưa Tổng thống Dương Văn Minh sang Đài Phát thanh Sài Gòn tại số 3 Nguyễn Đình Chiểu.\n\nTrước làn sóng phát thanh phát đi khắp miền Nam, lời tuyên bố đầu hàng vô điều kiện cùng lời tiếp nhận đầu hàng của Chính ủy Bùi Văn Tùng đã vang lên — chấm dứt tiếng súng trên toàn tuyến, giữ cho TP.HCM gần như nguyên vẹn trong ngày hòa bình đoàn tụ.",
      "content_en": "Minutes after the Liberation Flag rose over Independence Palace at noon on April 30, 1975, liberation officers escorted President Duong Van Minh to Saigon Radio Station at 3 Nguyen Dinh Chieu.\n\nBroadcast live across South Vietnam, his unconditional surrender and Political Commissar Bui Van Tung’s formal acceptance silenced the guns across the region, sparing Ho Chi Minh City from urban destruction."
    },
    {
      "id": "story-tran-langle-bauco",
      "name": "Trận chống càn vang dội giữa đồng bưng Láng Le – Bàu Cò (15/4/1948)",
      "name_en": "The Fierce Marshland Defense at Lang Le – Bau Co (April 15, 1948)",
      "figure_id": "fig-tranvantra",
      "required_pin_id": "pin-langlebauco",
      "is_locked": true,
      "background_image": "",
      "content": "Sáng ngày 15/4/1948, thực dân Pháp huy động hàng nghìn quân cùng pháo binh và máy bay mở cuộc càn quét lớn hòng tiêu diệt cơ quan đầu não kháng chiến Sài Gòn – Chợ Lớn đóng tại căn cứ Vườn Thơm – Láng Le – Bàu Cò (Bình Chánh).\n\nLợi dụng địa hình đồng bưng lau sậy hiểm trở và chiến thuật đánh gần linh hoạt, Trung đoàn 308 cùng dân quân địa phương đã cầm cự suốt một ngày trời, loại khỏi vòng chiến hàng trăm quân địch và bảo vệ nguyên vẹn khu căn cứ — mở ra bài học kinh điển về thế trận chiến tranh nhân dân vùng ven đô.",
      "content_en": "On the morning of April 15, 1948, French forces launched a massive sweep backed by artillery and planes to wipe out the Saigon – Cho Lon resistance headquarters in the Vuon Thom – Lang Le – Bau Co marshes (Binh Chanh).\n\nUsing dense reed swamps and agile close-quarters ambushes, Regiment 308 and local militias held off the offensive all day, inflicting heavy casualties and safeguarding the leadership in a textbook victory of suburban people’s warfare."
    },
    {
      "id": "story-khoxang-nhabe-1973",
      "name": "12 ngày đêm rực lửa trong trận đánh Kho xăng Nhà Bè (12/1973)",
      "name_en": "Twelve Days of Fire: The December 1973 Nha Be Fuel Depot Raid",
      "figure_id": "fig-tranvantra",
      "required_pin_id": "pin-khoxangnhabe",
      "is_locked": true,
      "background_image": "",
      "content": "Được mệnh danh là \"trái tim nhiên liệu\" của bộ máy chiến tranh Sài Gòn, Tổng kho xăng dầu Nhà Bè được canh phòng nghiêm ngặt bậc nhất với nhiều lớp hàng rào kẽm gai, đèn pha, chó nghiệp vụ và tàu tuần tiễu dày đặc.\n\nĐêm mùng 2 rạng sáng 3/12/1973, 8 chiến sĩ Đội 5 thuộc Đoàn 10 Đặc công Rừng Sác đã dầm mình nhiều giờ dưới dòng sông lạnh, bí mật áp sát đặt mìn đánh nổ hàng loạt bồn xăng khổng lồ. Ngọn lửa bùng cao hàng trăm mét cháy rực bầu trời Sài Gòn suốt 12 ngày đêm, thiêu rụi hơn 140 triệu lít nhiên liệu và đi vào lịch sử như một kỳ tích của nghệ thuật đặc công.",
      "content_en": "Protected by layers of barbed wire, floodlights, guard dogs, and river patrol boats, the Nha Be Fuel Depot was the vital energy hub of Saigon’s wartime logistics.\n\nOn the night of December 2–3, 1973, eight commandos of Team 5 (10th Rung Sac Special Forces Regiment) swam silently through tidal currents to plant explosive charges across the storage tanks. The resulting inferno lit up Saigon’s night sky for 12 days straight, destroying over 140 million liters of fuel."
    },
    {
      "id": "story-giang-sinh-nhac-trinh",
      "name": "Ký ức âm nhạc và tấm lòng Trịnh Công Sơn tại 47C Phạm Ngọc Thạch",
      "name_en": "Musical Memories at 47C Pham Ngoc Thach",
      "figure_id": "fig-trinhcongson",
      "required_pin_id": "pin-nhaluuniem-trinhcongson",
      "is_locked": true,
      "background_image": "",
      "content": "Trong ngôi nhà nhỏ rợp bóng cây tại số 47C Phạm Ngọc Thạch (Quận 3), cố nhạc sĩ Trịnh Công Sơn từng dành những buổi chiều bình yên bên cây đàn guitar, giá vẽ hội họa và những cuộc trò chuyện tri âm cùng bạn bè văn nghệ sĩ.\n\nKhông gian ấm cúng ấy còn lưu giữ nguyên vẹn nhiều bản thảo viết tay nét chữ tài hoa của ông. Hằng năm vào dịp ngày 1/4, hàng nghìn người yêu nhạc từ khắp nơi lại lặng lẽ tìm về thắp nến, cất cao những giai điệu nhân bản vượt thời gian.",
      "content_en": "Inside the tree-shaded home at 47C Pham Ngoc Thach Street (District 3), songwriter Trinh Cong Son spent quiet afternoons with his guitar, painting easel, and intimate gatherings of poets and musicians.\n\nStill preserving his graceful handwritten scores and personal art, the house draws thousands of admirers every April 1 to light candles and sing his timeless melodies of peace and love."
    },
    {
      "id": "story-anh-den-rap-hungdao",
      "name": "Ánh đèn Rạp Hưng Đạo và thời hoàng kim cải lương Nam Bộ",
      "name_en": "Stage Lights of Hung Dao Theatre and the Golden Age of Cai Luong",
      "figure_id": "fig-tranhuutrang",
      "required_pin_id": "pin-nhahat-tranhuutrang",
      "is_locked": true,
      "background_image": "",
      "content": "Từ thập niên 1950–1960, ánh đèn sân khấu Rạp Hưng Đạo trên đại lộ Trần Hưng Đạo (Quận 1) là niềm tự hào của giới mộ điệu Sài Gòn, nơi những vở cải lương kinh điển như \"Đời cô Lựu\", \"Tô Ánh Nguyệt\" của soạn giả Trần Hữu Trang lấy đi bao nước mắt và cảm phục của khán giả.\n\nGiữa lòng đô thị sôi động, tiếng đờn kìm, điệu vọng cổ ngọt ngào và những số phận nhân vật đậm nghĩa tình phương Nam đã vượt qua mọi biến thiên thời cuộc để tiếp nối tới Nhà hát Cải lương Trần Hữu Trang hôm nay.",
      "content_en": "Throughout the 1950s and 1960s, the marquee of Hung Dao Theatre on Tran Hung Dao Boulevard shone as Saigon’s temple of Cai Luong, where playwright Tran Huu Trang’s masterpieces like \"Doi Co Luu\" and \"To Anh Nguyet\" moved audiences to tears.\n\nAmidst a bustling metropolis, the soulful moon lute and vong co melodies carried Southern Vietnam’s compassion and moral spirit onward into today’s Tran Huu Trang Theatre."
    },
    {
      "id": "story-dentranhungdao-tandinh",
      "name": "Ngôi đền năm 1932 và hào khí Đông A giữa lòng Tân Định",
      "name_en": "The 1932 Shrine and Tran Dynasty Spirit in Central Saigon",
      "figure_id": "fig-tranquoctuan",
      "required_pin_id": "pin-dentranhungdao-q1",
      "is_locked": true,
      "background_image": "",
      "content": "Từ một ngôi miếu nhỏ dựng lên năm 1932 giữa khu Tân Định do những người con phương Bắc lập nghiệp tại Sài Gòn chung tay góp sức, Đền thờ Đức Thánh Trần Hưng Đạo tại số 36 Võ Thị Sáu đã trở thành điểm tựa tâm linh thân quen của cư dân thành phố suốt gần một thế kỷ.\n\nMỗi năm đến ngày 20 tháng 8 âm lịch, tiếng trống hội và hương trầm lại lan tỏa khắp khu phố, kết nối hào khí Bạch Đằng thế kỷ XIII với nhịp sống nghĩa tình của Sài Gòn – TP.HCM hôm nay.",
      "content_en": "Growing from a modest 1932 shrine founded by northern settlers in Saigon’s Tan Dinh quarter, the Tran Hung Dao Temple at 36 Vo Thi Sau has stood as a cherished spiritual anchor for nearly a century.\n\nEach year on the 20th day of the 8th lunar month, festival drums and incense fill the street, linking 13th-century Bach Dang heroism with the heart of modern Ho Chi Minh City."
    }
  ],
  "badges": [
    {
      "id": "badge-bachdang",
      "name": "Kỵ Sĩ Sông Bạch Đằng",
      "name_en": "Knight of Bach Dang River",
      "tier": "gold",
      "icon": "🎖️",
      "image_url": "media/design_assets/badge_bach_dang_asset.png",
      "category": "Người chinh phục lịch sử",
      "category_en": "Historical Conqueror",
      "lore": "Vinh danh những bước chân tìm về dòng sông Bạch Đằng lịch sử – nơi ba lần ghi dấu chiến công hiển hách của cha ông, đánh tan quân Nam Hán và Nguyên Mông bằng kế sách cắm cọc tài tình.",
      "lore_en": "Honors travelers to the historic Bach Dang River – where three naval victories crushed foreign invasions with brilliant submerged iron-tipped stake tactics.",
      "criteria": "Check-in thành công tại Di tích Bạch Đằng và mở khóa kế sách cắm cọc.",
      "criteria_en": "Check in at Bach Dang Historic Site and unlock the timber stakes strategy.",
      "conditions": [
        {
          "id": "c-badge-bachdang-1",
          "type": "specific_pins",
          "desc": "Check-in thực địa tại Khu di tích Bạch Đằng",
          "desc_en": "On-site check-in at Bach Dang Historic Relic",
          "target_pins": [
            "pin-bachdang"
          ],
          "min_count": 1
        }
      ],
      "is_unlocked": true
    },
    {
      "id": "badge-thanglong",
      "name": "Hào Khí Thăng Long",
      "name_en": "Spirit of Thang Long",
      "tier": "gold",
      "icon": "🏛️",
      "image_url": "media/design_assets/badge_thang_long_asset.png",
      "category": "Người chinh phục lịch sử",
      "category_en": "Historical Conqueror",
      "lore": "Biểu trưng cho tinh thần bất khuất của kinh đô ngàn năm văn hiến, nơi từng vang vọng tiếng hô 'ĐÁNH!' đồng lòng muôn người như một trong Hội nghị Diên Hồng oanh liệt.",
      "lore_en": "Symbolizes the indomitable spirit of Hanoi's thousand-year-old imperial citadel, where the iconic cry 'FIGHT!' united the people in the historic Dien Hong Conference.",
      "criteria": "Ghé thăm Hoàng thành Thăng Long và khám phá hội nghị Diên Hồng.",
      "criteria_en": "Visit the Imperial Citadel of Thang Long and discover the Dien Hong Conference.",
      "conditions": [
        {
          "id": "c-badge-thanglong-1",
          "type": "specific_pins",
          "desc": "Ghé thăm và check-in tại Hoàng thành Thăng Long",
          "desc_en": "Visit and check in at the Imperial Citadel of Thang Long",
          "target_pins": [
            "pin-thanglong"
          ],
          "min_count": 1
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-bacho",
      "name": "Dấu Chân Bác Hồ",
      "name_en": "Footsteps of Uncle Ho",
      "tier": "silver",
      "icon": "🐾",
      "image_url": "media/design_assets/badge_dau_chan_bac_ho.png",
      "category": "Khám phá Việt Nam",
      "category_en": "Exploring Vietnam",
      "lore": "Kỷ niệm ngày 5/6/1911 khi người thanh niên yêu nước Nguyễn Tất Thành rời Bến Nhà Rồng ra đi tìm đường cứu nước, mở ra con đường độc lập tự do cho non sông đất Việt.",
      "lore_en": "Commemorates June 5, 1911, when young patriot Nguyen Tat Thanh departed Nha Rong Harbor on his legendary global quest for national independence.",
      "criteria": "Check-in Bến Nhà Rồng và lắng nghe tư liệu hành trình cứu nước 1911.",
      "criteria_en": "Check in at Nha Rong Wharf and listen to the 1911 salvation journey recordings.",
      "conditions": [
        {
          "id": "c-badge-bacho-1",
          "type": "specific_pins",
          "desc": "Check-in thực địa tại Bến Nhà Rồng",
          "desc_en": "On-site check-in at Nha Rong Wharf",
          "target_pins": [
            "pin-ben-nharong"
          ],
          "min_count": 1
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-saigon",
      "name": "Trái Tim Sài Gòn",
      "name_en": "Heart of Saigon",
      "tier": "bronze",
      "icon": "🎙️",
      "image_url": "",
      "category": "Nhân chứng sống",
      "category_en": "Living Witnesses",
      "lore": "Tôn vinh lòng quả cảm phi thường của lực lượng Biệt động Sài Gòn, những người đã mưu trí đào hầm cất giấu vũ khí ngay giữa lòng địch chuẩn bị cho cuộc Tổng tiến công Tết Mậu Thân 1968.",
      "lore_en": "Honors the extraordinary valor of Saigon Rangers, who covertly built weapons bunkers in the heart of the city for the historic 1968 Tet Offensive.",
      "criteria": "Check-in tại Căn hầm bí mật Biệt động Sài Gòn và nghe lời kể nhân chứng.",
      "criteria_en": "Check in at Saigon Commandos secret bunker and hear witness testimonies.",
      "conditions": [
        {
          "id": "c-badge-saigon-1",
          "type": "specific_pins",
          "desc": "Ghé thăm Căn hầm bí mật Biệt động Sài Gòn",
          "desc_en": "Visit the Saigon Commandos secret weapons bunker",
          "target_pins": [
            "pin-hamtranvanlai"
          ],
          "min_count": 1
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-anh-hung-hoi-ngo",
      "name": "Hội Ngộ Hào Kiệt",
      "name_en": "Gathering of Heroes",
      "tier": "silver",
      "icon": "👑",
      "image_url": "",
      "category": "Hào Khí Danh Nhân",
      "category_en": "Heroic Spirits",
      "lore": "Minh chứng cho người lữ khách đã giải mã và học hỏi tấm gương của 2 vị anh hùng dân tộc, tiếp nối khí phách quật cường của tiền nhân.",
      "lore_en": "Awarded to explorers who have discovered and unlocked 2 legendary Vietnamese historical heroes.",
      "criteria": "Khám phá và mở khóa 2 Danh nhân lịch sử hào kiệt bất kỳ.",
      "criteria_en": "Discover and unlock any 2 legendary historical figures.",
      "conditions": [
        {
          "id": "c-badge-anh-hung-hoi-ngo-1",
          "type": "figures_count",
          "desc": "Mở khóa 2 Danh nhân lịch sử bất kỳ",
          "desc_en": "Unlock any 2 historical heroes",
          "min_count": 2
        }
      ],
      "is_unlocked": true
    },
    {
      "id": "badge-su-thi-bach-nien",
      "name": "Đại Nam Liệt Truyện",
      "name_en": "Chronicles of Dai Nam",
      "tier": "gold",
      "icon": "📜",
      "image_url": "",
      "category": "Hào Khí Danh Nhân",
      "category_en": "Heroic Spirits",
      "lore": "Bản trường ca lịch sử sống động được khắc ghi khi người chơi thấu suốt trọn vẹn cả 3 vị đại anh hùng dân tộc: Hưng Đạo Đại Vương Trần Quốc Tuấn, Hoàng đế Quang Trung và Hai Bà Trưng.",
      "lore_en": "An epic milestone achieved when discovering all 3 legendary national heroes: Tran Hung Dao, Emperor Quang Trung, and the Trung Sisters.",
      "criteria": "Khám phá trọn vẹn 3 Danh nhân: Trần Hưng Đạo, Quang Trung và Hai Bà Trưng.",
      "criteria_en": "Discover all 3 heroes: Tran Hung Dao, Emperor Quang Trung, and the Trung Sisters.",
      "conditions": [
        {
          "id": "c-badge-su-thi-bach-nien-1",
          "type": "specific_figures",
          "desc": "Khám phá 3 Danh nhân: Trần Quốc Tuấn, Quang Trung và Hai Bà Trưng",
          "desc_en": "Discover 3 Heroes: Tran Quoc Tuan, Quang Trung, and Hai Ba Trung",
          "target_figures": [
            "fig-tranquoctuan",
            "fig-quangtrung",
            "fig-haibatrung"
          ],
          "min_count": 3
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-nguoi-giu-lua",
      "name": "Người Giữ Lửa Lịch Sử",
      "name_en": "Keeper of History's Flame",
      "tier": "silver",
      "icon": "🎙️",
      "image_url": "",
      "category": "Nhân Chứng Sống",
      "category_en": "Living Witnesses",
      "lore": "Ghi nhận sự kết nối thiêng liêng giữa thế hệ hôm nay với các nhân chứng lịch sử và cựu chiến binh, những người trực tiếp trải qua khói lửa để giữ gìn nền độc lập non sông.",
      "lore_en": "Recognizes the sacred bond between modern youth and living history witnesses who fought through warfare to safeguard the nation.",
      "criteria": "Gặp gỡ và lắng nghe chia sẻ từ 1 Nhân chứng lịch sử / Cựu chiến binh.",
      "criteria_en": "Meet and interview 1 living witness / war veteran.",
      "conditions": [
        {
          "id": "c-badge-nguoi-giu-lua-1",
          "type": "people_count",
          "desc": "Check-in điểm có tư liệu Nhân chứng sống / Cựu chiến binh",
          "desc_en": "Check in at a site with Living Witness / War Veteran testimony",
          "target_num": 1
        }
      ],
      "is_unlocked": true
    },
    {
      "id": "badge-tieng-vong-thoi-gian",
      "name": "Tiếng Vọng Thời Gian",
      "name_en": "Echoes of Time",
      "tier": "gold",
      "icon": "🎖️",
      "image_url": "",
      "category": "Nhân Chứng Sống",
      "category_en": "Living Witnesses",
      "lore": "Vinh danh nhà thám hiểm đã giao lưu và lắng nghe ký ức chân thực nhất từ 2 nhân chứng lịch sử sống, đưa những ký ức vô giá vượt thời gian đến với đời sau.",
      "lore_en": "Honors explorers who have engaged with 2 living history witnesses, keeping priceless wartime memories alive across generations.",
      "criteria": "Giao lưu và check-in với 2 Nhân chứng sống / Người kể chuyện lịch sử.",
      "criteria_en": "Check-in and listen to testimonies from 2 living history witnesses.",
      "conditions": [
        {
          "id": "c-badge-tieng-vong-thoi-gian-1",
          "type": "people_count",
          "desc": "Check-in tại 2 điểm có Nhân chứng sống / Ký ức cựu chiến binh",
          "desc_en": "Check in at 2 sites with Living Witnesses / Veteran memories",
          "target_num": 2
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-dau-chan-di-san",
      "name": "Nhà Thám Hiểm Non Sông",
      "name_en": "Realm Explorer",
      "tier": "bronze",
      "icon": "🗺️",
      "image_url": "",
      "category": "Khám Phá Di Sản",
      "category_en": "Heritage Explorer",
      "lore": "Chiếc huân chương đồng trao tặng cho bước chân kiên trì chu du khắp 3 địa danh lịch sử, nối dài dải đất hình chữ S bằng niềm tự hào dân tộc.",
      "lore_en": "Awarded to devoted explorers who have journeyed to at least 3 historical landmarks across Vietnam.",
      "criteria": "Hành trình thám hiểm và check-in tại 3 Địa danh / Di tích lịch sử.",
      "criteria_en": "Journey to and check in at 3 historical heritage landmarks.",
      "conditions": [
        {
          "id": "c-badge-dau-chan-di-san-1",
          "type": "pins_count",
          "desc": "Check-in tại 3 Địa danh / Di tích bất kỳ",
          "desc_en": "Check in at any 3 historical landmarks",
          "min_count": 3
        }
      ],
      "is_unlocked": true
    },
    {
      "id": "badge-ngay-thong-nhat",
      "name": "Ký Ức Thống Nhất",
      "name_en": "Memory of Reunification",
      "tier": "gold",
      "icon": "🏛️",
      "image_url": "",
      "category": "Di sản Sài Gòn – TP.HCM",
      "category_en": "Saigon – HCMC Heritage",
      "lore": "Vinh danh hành trình tìm hiểu thời khắc lịch sử trọng đại ngày 30/4/1975 và giá trị thiêng liêng của hòa bình tại Dinh Độc Lập cùng Bảo tàng Chứng tích Chiến tranh.",
      "lore_en": "Honors explorers who trace the historic April 30, 1975 reunification milestone and the enduring value of peace at Independence Palace and the War Remnants Museum.",
      "criteria": "Check-in tại Dinh Độc Lập và Bảo tàng Chứng tích Chiến tranh.",
      "criteria_en": "Check in at Independence Palace and the War Remnants Museum.",
      "conditions": [
        {
          "id": "c-badge-ngay-thong-nhat-1",
          "type": "specific_pins",
          "desc": "Check-in thực địa tại 2 di tích: Dinh Độc Lập và Bảo tàng Chứng tích Chiến tranh",
          "desc_en": "On-site check-in at Independence Palace and War Remnants Museum",
          "target_pins": [
            "pin-1794549129587",
            "pin-baotangchungtich"
          ],
          "min_count": 2
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-biet-dong-huyen-thoai",
      "name": "Huyền Thoại Biệt Động Thành",
      "name_en": "Legend of Saigon Commandos",
      "tier": "gold",
      "icon": "🕵️",
      "image_url": "",
      "category": "Biệt động Sài Gòn",
      "category_en": "Saigon Commandos",
      "lore": "Danh hiệu cao quý tôn vinh hành trình giải mã mạng lưới 5 cơ sở bí mật, hầm vũ khí, garage hai đáy, hộp thư bí mật và sở chỉ huy tiền phương của Biệt động Sài Gòn.",
      "lore_en": "A prestigious honor for uncovering five legendary covert bases, weapons caches, double-bottomed garages, secret mailboxes, and forward command posts of the Saigon Commandos.",
      "criteria": "Check-in đủ 5 cơ sở lịch sử tiêu biểu của Biệt động Sài Gòn.",
      "criteria_en": "Check in at 5 iconic secret bases of the Saigon Commandos.",
      "conditions": [
        {
          "id": "c-badge-biet-dong-huyen-thoai-1",
          "type": "specific_pins",
          "desc": "Check-in tại 5 địa điểm: Hầm Trần Văn Lai, Hầm Đỗ Văn Căn, Phở Bình, Garage Tự Lực, Cà phê Đỗ Phủ",
          "desc_en": "Check in at Tran Van Lai Bunker, Do Van Can Bunker, Pho Binh, Tu Luc Garage, and Do Phu Coffee",
          "target_pins": [
            "pin-hamtranvanlai",
            "pin-1794548816329",
            "pin-photbinh",
            "pin-garagetuluc",
            "pin-caphedophu"
          ],
          "min_count": 5
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-hon-pho-sai-gon",
      "name": "Hồn Phố Sài Gòn Xưa",
      "name_en": "Soul of Old Saigon",
      "tier": "silver",
      "icon": "⛪",
      "image_url": "",
      "category": "Kiến trúc Di sản",
      "category_en": "Architectural Heritage",
      "lore": "Ghi dấu bước chân khám phá 5 công trình kiến trúc biểu tượng hơn trăm năm tuổi làm nên diện mạo văn hóa đặc trưng của trung tâm Sài Gòn – TP.HCM.",
      "lore_en": "Celebrates discovering five century-old architectural icons that define the historic urban character of central Saigon – Ho Chi Minh City.",
      "criteria": "Check-in tại 5 công trình kiến trúc biểu tượng khu vực Quận 1.",
      "criteria_en": "Check in at 5 iconic architectural landmarks in District 1.",
      "conditions": [
        {
          "id": "c-badge-hon-pho-sai-gon-1",
          "type": "specific_pins",
          "desc": "Check-in tại Nhà thờ Đức Bà, Bưu điện Trung tâm, Chợ Bến Thành, Nhà hát Thành phố và Trụ sở UBND TP.HCM",
          "desc_en": "Check in at Notre-Dame Cathedral, Central Post Office, Ben Thanh Market, Opera House, and City Hall",
          "target_pins": [
            "pin-nhathoducba",
            "pin-buudientrungtam",
            "pin-chobenthanh",
            "pin-nhahatthanhpho",
            "pin-ubndtphcm"
          ],
          "min_count": 5
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-dau-an-cho-lon",
      "name": "Dấu Ấn Chợ Lớn",
      "name_en": "Footprints of Cho Lon",
      "tier": "silver",
      "icon": "🏮",
      "image_url": "",
      "category": "Văn hóa Chợ Lớn",
      "category_en": "Cho Lon Culture",
      "lore": "Tôn vinh hành trình tìm hiểu di sản giao thoa văn hóa Việt – Hoa hơn 250 năm tuổi qua các hội quán cổ, đình Minh Hương và khu chợ đầu mối lịch sử vùng Chợ Lớn.",
      "lore_en": "Honors exploring over 250 years of Vietnamese–Chinese heritage across historic assembly halls, Minh Huong communal house, and Cho Lon’s grand market.",
      "criteria": "Check-in tại 4 di sản tiêu biểu khu vực Chợ Lớn (Quận 5 – Quận 6).",
      "criteria_en": "Check in at 4 landmark heritage sites in Cho Lon (Districts 5 & 6).",
      "conditions": [
        {
          "id": "c-badge-dau-an-cho-lon-1",
          "type": "specific_pins",
          "desc": "Check-in tại Hội quán Tuệ Thành, Hội quán Nghĩa An, Chợ Bình Tây và Đình Minh Hương Gia Thạnh",
          "desc_en": "Check in at Tue Thanh Hall, Nghia An Hall, Binh Tay Market, and Minh Huong Gia Thanh Communal House",
          "target_pins": [
            "pin-hoiquantue-thanh",
            "pin-hoiquannghiaan",
            "pin-chobinhtay",
            "pin-dinh-minh-huong"
          ],
          "min_count": 4
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-dat-thep-thanh-dong",
      "name": "Đất Thép Thành Đồng",
      "name_en": "Land of Steel & Bronze Citadel",
      "tier": "gold",
      "icon": "⚔️",
      "image_url": "",
      "category": "Chiến trường hào hùng",
      "category_en": "Heroic Battlefields",
      "lore": "Vinh danh bước chân kiên cường đi qua những hệ thống địa đạo, vùng căn cứ và chiến khu huyền thoại bao quanh Sài Gòn từ Củ Chi, Hóc Môn, Tân Phú đến Rừng Sác Cần Giờ.",
      "lore_en": "Salutes explorers who journey through the legendary tunnels, uprising grounds, and guerrilla bases surrounding Saigon from Cu Chi and Hoc Mon to Rung Sac.",
      "criteria": "Check-in đủ 4 di tích chiến trường và căn cứ cách mạng TP.HCM.",
      "criteria_en": "Check in at 4 major battlefield and resistance base sites in HCMC.",
      "conditions": [
        {
          "id": "c-badge-dat-thep-thanh-dong-1",
          "type": "specific_pins",
          "desc": "Check-in tại Địa đạo Củ Chi, Ngã Ba Giồng, Chiến khu Rừng Sác và Địa đạo Phú Thọ Hòa",
          "desc_en": "Check in at Cu Chi Tunnels, Nga Ba Giong, Rung Sac Base, and Phu Tho Hoa Tunnels",
          "target_pins": [
            "pin-diadaocuchi",
            "pin-ngabagioi",
            "pin-chiencurungsac",
            "pin-diadaophuthohoa"
          ],
          "min_count": 4
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-coi-nguon-gia-dinh",
      "name": "Cội Nguồn Gia Định",
      "name_en": "Roots of Ancient Gia Dinh",
      "tier": "gold",
      "icon": "⛩️",
      "image_url": "",
      "category": "Di sản Sài Gòn – TP.HCM",
      "category_en": "Saigon – HCMC Heritage",
      "lore": "Trao tặng người lữ khách tìm về những ngôi đình, tổ đình và lăng miếu cổ kính 200–300 năm tuổi lưu giữ ký ức khai hoang, mở cõi vùng đất Gia Định xưa.",
      "lore_en": "Awarded to travelers visiting 200–300-year-old temples, communal houses, and mausoleums that preserve the early pioneering memory of ancient Gia Dinh.",
      "criteria": "Check-in tại 4 di tích cổ hơn 200 năm tuổi của Sài Gòn – Gia Định.",
      "criteria_en": "Check in at 4 historic landmarks over 200 years old in Saigon – Gia Dinh.",
      "conditions": [
        {
          "id": "c-badge-coi-nguon-gia-dinh-1",
          "type": "specific_pins",
          "desc": "Check-in tại Lăng Ông Bà Chiểu, Chùa Giác Lâm, Đình Thông Tây Hội và Đình Chí Hòa",
          "desc_en": "Check in at Lang Ong Ba Chieu, Giac Lam Pagoda, Thong Tay Hoi, and Chi Hoa Communal House",
          "target_pins": [
            "pin-langongbachieu",
            "pin-chuagiaclam",
            "pin-dinhthongtayhoi",
            "pin-dinhchihoa"
          ],
          "min_count": 4
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-tinh-than-1963",
      "name": "Ngọn Lửa Từ Bi 1963",
      "name_en": "Flame of Compassion 1963",
      "tier": "silver",
      "icon": "🪷",
      "image_url": "",
      "category": "Phật giáo & Di sản",
      "category_en": "Buddhist Heritage",
      "lore": "Tưởng niệm phong trào đấu tranh ôn hòa năm 1963 và khám phá các tổ đình, tự viện lịch sử tiêu biểu giữa lòng TP.HCM.",
      "lore_en": "Commemorates the peaceful 1963 Buddhist movement while exploring four historically significant pagodas and monuments in central Ho Chi Minh City.",
      "criteria": "Check-in tại 4 địa điểm gắn với lịch sử Phật giáo TP.HCM.",
      "criteria_en": "Check in at 4 landmarks linked to Ho Chi Minh City’s Buddhist heritage.",
      "conditions": [
        {
          "id": "c-badge-tinh-than-1963-1",
          "type": "specific_pins",
          "desc": "Check-in tại Tượng đài Thích Quảng Đức, Chùa Xá Lợi, Việt Nam Quốc Tự và Chùa Ấn Quang",
          "desc_en": "Check in at Thich Quang Duc Monument, Xa Loi Pagoda, Viet Nam Quoc Tu, and An Quang Pagoda",
          "target_pins": [
            "pin-tuongdaithichquangduc",
            "pin-chuaxaloi",
            "pin-1794548888256",
            "pin-1794549001001"
          ],
          "min_count": 4
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-hanh-trinh-1911",
      "name": "Theo Dấu Hành Trình 1911",
      "name_en": "Following the 1911 Journey",
      "tier": "gold",
      "icon": "🚢",
      "image_url": "",
      "category": "Khám phá Việt Nam",
      "category_en": "Exploring Vietnam",
      "lore": "Tái hiện trọn vẹn cung đường lịch sử từ ngôi nhà số 5 Châu Văn Liêm đến Bến Nhà Rồng, nơi người thanh niên Nguyễn Tất Thành chuẩn bị và lên tàu ra đi tìm đường cứu nước năm 1911.",
      "lore_en": "Retraces the historic path from 5 Chau Van Liem Street to Nha Rong Wharf, where young Nguyen Tat Thanh prepared and embarked on his 1911 quest for national liberation.",
      "criteria": "Check-in đủ 2 di tích lưu niệm Bác Hồ năm 1910–1911 tại TP.HCM.",
      "criteria_en": "Check in at both 1910–1911 Ho Chi Minh memorial landmarks in HCMC.",
      "conditions": [
        {
          "id": "c-badge-hanh-trinh-1911-1",
          "type": "specific_pins",
          "desc": "Check-in tại Di tích số 5 Châu Văn Liêm và Bến Nhà Rồng",
          "desc_en": "Check in at 5 Chau Van Liem Memorial House and Nha Rong Wharf",
          "target_pins": [
            "pin-nhalubac-q5",
            "pin-ben-nharong"
          ],
          "min_count": 2
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-hao-kiet-phuong-nam",
      "name": "Hào Kiệt Phương Nam",
      "name_en": "Heroes of the Southern Land",
      "tier": "silver",
      "icon": "👑",
      "image_url": "",
      "category": "Hào Khí Danh Nhân",
      "category_en": "Heroic Spirits",
      "lore": "Vinh danh nhà thám hiểm đã mở khóa trọn vẹn 3 bậc tiền hiền khai mở, trị quốc và truyền đạo học đặt nền móng văn hiến cho vùng đất Sài Gòn – Gia Định.",
      "lore_en": "Honors explorers who unlock all three foundational figures who established, governed, and educated historic Saigon – Gia Dinh.",
      "criteria": "Khám phá 3 Danh nhân phương Nam: Nguyễn Hữu Cảnh, Lê Văn Duyệt, Võ Trường Toản.",
      "criteria_en": "Discover 3 Southern pioneers: Nguyen Huu Canh, Le Van Duyet, and Vo Truong Toan.",
      "conditions": [
        {
          "id": "c-badge-hao-kiet-phuong-nam-1",
          "type": "specific_figures",
          "desc": "Mở khóa 3 Danh nhân: Nguyễn Hữu Cảnh, Lê Văn Duyệt và Võ Trường Toản",
          "desc_en": "Unlock 3 Heroes: Nguyen Huu Canh, Le Van Duyet, and Vo Truong Toan",
          "target_figures": [
            "fig-nguyenhuucanh",
            "fig-levanduyet",
            "fig-votruongtoan"
          ],
          "min_count": 3
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-su-gia-di-san-hcm",
      "name": "Sứ Giả Di Sản TP.HCM",
      "name_en": "Ho Chi Minh City Heritage Ambassador",
      "tier": "gold",
      "icon": "🏆",
      "image_url": "",
      "category": "Khám Phá Di Sản",
      "category_en": "Heritage Explorer",
      "lore": "Danh hiệu cao quý dành cho nhà thám hiểm đã đặt chân và check-in tại ít nhất 20 địa danh lịch sử – văn hóa, lan tỏa trọn vẹn tinh thần \"Lịch sử theo bước chân ta\".",
      "lore_en": "A distinguished honor for explorers who have checked in at 20 or more historical and cultural landmarks, embodying the spirit of \"History Follows Our Footsteps.\"",
      "criteria": "Hành trình check-in thực địa tại 20 Địa danh lịch sử bất kỳ.",
      "criteria_en": "Check in on-site at any 20 historical heritage landmarks.",
      "conditions": [
        {
          "id": "c-badge-su-gia-di-san-hcm-1",
          "type": "pins_count",
          "desc": "Check-in thực địa tại ít nhất 20 Địa danh / Di tích lịch sử",
          "desc_en": "On-site check-in at at least 20 historical landmarks",
          "min_count": 20
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-di-san-thu-duc",
      "name": "Hành Trình Đất Thủ Đức",
      "name_en": "Thu Duc Heritage Journey",
      "tier": "silver",
      "icon": "🛕",
      "image_url": "",
      "category": "Khám phá TP. Thủ Đức",
      "category_en": "Thu Duc Exploration",
      "lore": "Vinh danh hành trình khám phá vùng đất cửa ngõ phía Đông giàu bản sắc — từ Đền Hùng, Chùa Bửu Long, Nhà thờ cổ Thủ Thiêm, Đình Phong Phú đến Bảo tàng Áo Dài.",
      "lore_en": "Honors exploring Ho Chi Minh City’s vibrant eastern heritage—from Hung Kings Temple and Buu Long Pagoda to historic Thu Thiem Church, Phong Phu Communal House, and the Ao Dai Museum.",
      "criteria": "Check-in đủ 5 di sản tiêu biểu tại TP. Thủ Đức.",
      "criteria_en": "Check in at 5 signature heritage landmarks in Thu Duc City.",
      "conditions": [
        {
          "id": "c-badge-di-san-thu-duc-1",
          "type": "specific_pins",
          "desc": "Check-in tại Đền Hùng Thủ Đức, Chùa Bửu Long, Nhà thờ Thủ Thiêm, Bảo tàng Áo Dài và Đình Phong Phú",
          "desc_en": "Check in at Hung Kings Temple, Buu Long Pagoda, Thu Thiem Church, Ao Dai Museum, and Phong Phu Communal House",
          "target_pins": [
            "pin-denhung-thuduc",
            "pin-chuabuulong",
            "pin-nhathothuthiem",
            "pin-baotangaodai",
            "pin-dinhphongphu"
          ],
          "min_count": 5
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-vanh-dai-phuong-nam",
      "name": "Vành Đai Kiên Cường",
      "name_en": "Resilient Belt of Saigon",
      "tier": "gold",
      "icon": "🔥",
      "image_url": "",
      "category": "Chiến trường hào hùng",
      "category_en": "Heroic Battlefields",
      "lore": "Tưởng nhớ những chiến trường và vùng căn cứ kiên trung bao quanh Sài Gòn từ Láng Le – Bàu Cò, Tân Nhựt (Bình Chánh), Chiến khu An Phú Đông (Quận 12) đến Kho xăng Nhà Bè.",
      "lore_en": "Commemorates the steadfast battlefields and wartime bases ringing Saigon—from Lang Le – Bau Co and Tan Nhut (Binh Chanh) to An Phu Dong (District 12) and Nha Be Fuel Depot.",
      "criteria": "Check-in đủ 4 di tích vành đai kháng chiến Bình Chánh – Nhà Bè – Quận 12.",
      "criteria_en": "Check in at 4 resistance belt relics across Binh Chanh, Nha Be, and District 12.",
      "conditions": [
        {
          "id": "c-badge-vanh-dai-phuong-nam-1",
          "type": "specific_pins",
          "desc": "Check-in tại Láng Le – Bàu Cò, Khu di tích Mậu Thân 1968 Bình Chánh, Kho xăng Nhà Bè và Chiến khu An Phú Đông",
          "desc_en": "Check in at Lang Le – Bau Co, 1968 Tet Memorial Binh Chanh, Nha Be Fuel Depot, and An Phu Dong Base",
          "target_pins": [
            "pin-langlebauco",
            "pin-ditich-mauthan-binhchanh",
            "pin-khoxangnhabe",
            "pin-chienkhuanphudong"
          ],
          "min_count": 4
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-huong-vi-sai-gon-xua",
      "name": "Hương Vị Sài Gòn Xưa",
      "name_en": "Taste of Old Saigon",
      "tier": "silver",
      "icon": "☕",
      "image_url": "",
      "category": "Nhân Chứng Sống",
      "category_en": "Living Witnesses",
      "lore": "Tôn vinh hành trình lắng nghe ký ức gần một thế kỷ qua những chiếc siêu đất, vợt vải và hộp thư bí mật tại 4 quán cà phê di sản nổi tiếng nhất Sài Gòn – TP.HCM.",
      "lore_en": "Celebrates discovering nearly a century of living memory through clay kettles, cloth filters, and secret mailboxes at four iconic heritage coffee houses in Saigon.",
      "criteria": "Check-in tại 4 quán cà phê di sản & ký ức lịch sử Sài Gòn.",
      "criteria_en": "Check in at 4 historic heritage coffee spots in Saigon.",
      "conditions": [
        {
          "id": "c-badge-huong-vi-sai-gon-xua-1",
          "type": "specific_pins",
          "desc": "Check-in tại Cà phê vợt Cheo Leo, Cà phê vợt 330 Phan Đình Phùng, Cà phê vợt Ba Lù và Cà phê Đỗ Phủ",
          "desc_en": "Check in at Cheo Leo Coffee, 330 Phan Dinh Phung Coffee, Ba Lu Coffee, and Do Phu Coffee",
          "target_pins": [
            "pin-caphe-cheo-leo",
            "pin-caphevot-330pdp",
            "pin-caphevot-balu",
            "pin-caphedophu"
          ],
          "min_count": 4
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-ky-uc-do-thi",
      "name": "Người Lưu Giữ Ký Ức Phố",
      "name_en": "Urban Memory Keeper",
      "tier": "bronze",
      "icon": "📚",
      "image_url": "",
      "category": "Ký ức Đô thị Sài Gòn",
      "category_en": "Saigon Urban Memories",
      "lore": "Ghi dấu hành trình cảm nhận nhịp thở văn hóa Sài Gòn sống động qua Chung cư cổ 42 Nguyễn Huệ, Đường Sách TP.HCM, Bến Bình Đông và Phố Lồng đèn Lương Nhữ Học.",
      "lore_en": "Marks an exploration of Saigon’s living urban culture across the 42 Nguyen Hue Cafe Apartments, HCMC Book Street, Binh Dong Wharf, and Luong Nhu Hoc Lantern Street.",
      "criteria": "Check-in tại 4 không gian văn hóa – ký ức đô thị đặc trưng TP.HCM.",
      "criteria_en": "Check in at 4 signature urban culture and memory hubs in HCMC.",
      "conditions": [
        {
          "id": "c-badge-ky-uc-do-thi-1",
          "type": "specific_pins",
          "desc": "Check-in tại Chung cư 42 Nguyễn Huệ, Đường Sách TP.HCM, Bến Bình Đông và Phố Lồng đèn Lương Nhữ Học",
          "desc_en": "Check in at 42 Nguyen Hue Apartments, HCMC Book Street, Binh Dong Wharf, and Luong Nhu Hoc Lantern Street",
          "target_pins": [
            "pin-chungcu-42nguyenhue",
            "pin-duongsach-nguyenvanbinh",
            "pin-benbinhdong",
            "pin-pholongden-luongnhuhoc"
          ],
          "min_count": 4
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-song-nuoc-ba-son",
      "name": "Hào Khí Ba Son – Bến Nghé",
      "name_en": "Spirit of Ba Son & Ben Nghe",
      "tier": "gold",
      "icon": "⚓",
      "image_url": "",
      "category": "Di sản Sài Gòn – TP.HCM",
      "category_en": "Saigon – HCMC Heritage",
      "lore": "Vinh danh dấu ấn lịch sử công nhân và thương cảng ven sông Sài Gòn gắn liền với Bác Tôn Đức Thắng, Xưởng đóng tàu Ba Son, Đình Bình Đông và Cột cờ Thủ Ngữ.",
      "lore_en": "Honors Saigon’s riverside maritime and labor heritage linked to President Ton Duc Thang, Ba Son Shipyard, Binh Dong Communal House, and Thu Ngu Flagpole.",
      "criteria": "Check-in tại 4 di tích sông nước và phong trào công nhân Sài Gòn.",
      "criteria_en": "Check in at 4 riverside and labor-history landmarks in Saigon.",
      "conditions": [
        {
          "id": "c-badge-song-nuoc-ba-son-1",
          "type": "specific_pins",
          "desc": "Check-in tại Xưởng Ba Son, Bảo tàng Tôn Đức Thắng, Đình Bình Đông và Cột cờ Thủ Ngữ",
          "desc_en": "Check in at Ba Son Shipyard, Ton Duc Thang Museum, Binh Dong Communal House, and Thu Ngu Flagpole",
          "target_pins": [
            "pin-xuongbason",
            "pin-baotangtonducthang",
            "pin-dinhbinhdong",
            "pin-cotcothungu"
          ],
          "min_count": 4
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-chien-dich-ho-chi-minh",
      "name": "Dấu Ấn Mùa Xuân 1975",
      "name_en": "Footprints of Spring 1975",
      "tier": "gold",
      "icon": "🗺️",
      "image_url": "",
      "category": "Chiến trường hào hùng",
      "category_en": "Heroic Battlefields",
      "lore": "Khắc ghi trọn vẹn dấu mốc Đại thắng mùa Xuân 1975 qua Bảo tàng Chiến dịch Hồ Chí Minh, Đài Phát thanh Sài Gòn xưa, Dinh Độc Lập và Nghĩa trang Liệt sĩ TP.HCM.",
      "lore_en": "Chronicles the historic Spring 1975 victory across the Ho Chi Minh Campaign Museum, former Saigon Radio Station, Independence Palace, and HCMC Martyrs Cemetery.",
      "criteria": "Check-in đủ 4 địa điểm gắn với Chiến dịch Hồ Chí Minh 1975.",
      "criteria_en": "Check in at 4 key landmarks of the 1975 Ho Chi Minh Campaign.",
      "conditions": [
        {
          "id": "c-badge-chien-dich-ho-chi-minh-1",
          "type": "specific_pins",
          "desc": "Check-in tại Bảo tàng Chiến dịch Hồ Chí Minh, Đài Phát thanh Sài Gòn xưa, Dinh Độc Lập và Nghĩa trang Liệt sĩ TP.HCM",
          "desc_en": "Check in at Ho Chi Minh Campaign Museum, Former Saigon Radio Station, Independence Palace, and HCMC Martyrs Cemetery",
          "target_pins": [
            "pin-baotang-chiendichhcm",
            "pin-dai-phat-thanh-saigon",
            "pin-1794549129587",
            "pin-nghiatranglietsi-tphcm"
          ],
          "min_count": 4
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-nguoi-nghe-ke-chuyen",
      "name": "Người Nghe Chuyện Trăm Năm",
      "name_en": "Listener of Century Tales",
      "tier": "gold",
      "icon": "🎙️",
      "image_url": "",
      "category": "Nhân Chứng Sống",
      "category_en": "Living Witnesses",
      "lore": "Trao tặng người lữ khách kiên trì tìm gặp, trò chuyện và check-in tại 5 không gian Nhân chứng sống, giữ cho ký ức Sài Gòn – TP.HCM mãi vang vọng cùng thế hệ trẻ.",
      "lore_en": "Awarded to dedicated explorers who visit and check in at 5 Living Witness sites, keeping Saigon’s authentic human stories alive for younger generations.",
      "criteria": "Check-in tại 5 địa điểm thuộc nhóm Nhân chứng sống bất kỳ.",
      "criteria_en": "Check in at any 5 Living History / Living Witness sites.",
      "conditions": [
        {
          "id": "c-badge-nguoi-nghe-ke-chuyen-1",
          "type": "people_count",
          "desc": "Check-in thực địa tại 5 điểm có Nhân chứng sống / Di sản nghề sống",
          "desc_en": "On-site check-in at 5 Living Witness / Living Heritage sites",
          "target_num": 5
        }
      ],
      "is_unlocked": false
    },
    {
      "id": "badge-bac-thay-di-san-tphcm",
      "name": "Bậc Thầy Di Sản TP.HCM",
      "name_en": "Master of HCMC Heritage",
      "tier": "gold",
      "icon": "👑",
      "image_url": "",
      "category": "Khám Phá Di Sản",
      "category_en": "Heritage Explorer",
      "lore": "Huân chương vàng danh giá nhất dành cho Người Gìn Giữ Di Sản đã đặt chân check-in tại ít nhất 40 địa danh lịch sử – văn hóa khắp các quận, huyện TP.HCM.",
      "lore_en": "The highest gold distinction for a Legacy Keeper who has checked in at 40 or more historical and cultural landmarks across Ho Chi Minh City.",
      "criteria": "Hành trình check-in thực địa tại 40 Địa danh lịch sử bất kỳ.",
      "criteria_en": "Check in on-site at any 40 historical heritage landmarks.",
      "conditions": [
        {
          "id": "c-badge-bac-thay-di-san-tphcm-1",
          "type": "pins_count",
          "desc": "Check-in thực địa tại ít nhất 40 Địa danh / Di tích lịch sử",
          "desc_en": "On-site check-in at at least 40 historical landmarks",
          "min_count": 40
        }
      ],
      "is_unlocked": false
    }
  ],
  "profile": {
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
};

// ==========================================================================
// STATE MANAGEMENT & DATA RESET
// ==========================================================================
function resetAllPlayerDataToZero(silent = false) {
  if (!appState.profile) appState.profile = {};
  appState.profile.level = 0;
  appState.profile.exp = 0;
  appState.profile.maxExp = 100;
  appState.profile.km_traveled = 0;
  appState.profile.checked_in_pins = [];
  appState.profile.discovered_pins = [];
  appState.profile.discovered_figures = [];
  appState.profile.check_in_history = {};
  appState.profile.logs = [];

  (appState.badges || []).forEach(b => {
    b.is_unlocked = false;
    delete b.unlocked_date;
  });
  (appState.stories || []).forEach(s => {
    s.is_locked = true;
  });
  (appState.pins || []).forEach(p => {
    p.isVisited = false;
    p.visited = false;
  });

  saveState();
  if (!silent) {
    if (typeof refreshAllViews === "function") refreshAllViews();
    if (typeof renderProfileStats === "function") renderProfileStats();
  }
}

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
      // Auto-migrate: Backfill bilingual names and descriptions for pins
      (appState.pins || []).forEach(p => {
        const initPin = INITIAL_DATA.pins.find(initP => initP.id === p.id);
        if (initPin) {
          if (!p.name_en && initPin.name_en) p.name_en = initPin.name_en;
          if (!p.desc_en && initPin.desc_en) p.desc_en = initPin.desc_en;
        }
      });
      // Auto-migrate: Backfill bilingual fields & background images for figures
      (appState.figures || []).forEach(f => {
        const initFig = INITIAL_DATA.figures.find(initF => initF.id === f.id);
        if (initFig) {
          if (!f.name_en && initFig.name_en) f.name_en = initFig.name_en;
          if (!f.role_en && initFig.role_en) f.role_en = initFig.role_en;
          if (!f.dynasty_en && initFig.dynasty_en) f.dynasty_en = initFig.dynasty_en;
          if (!f.quote_en && initFig.quote_en) f.quote_en = initFig.quote_en;
          if (!f.bio_en && initFig.bio_en) f.bio_en = initFig.bio_en;
          if (!f.background_image && initFig.background_image) f.background_image = initFig.background_image;
        }
      });

      // Auto-migrate: Backfill bilingual fields & background images for stories
      (appState.stories || []).forEach(s => {
        const initStory = INITIAL_DATA.stories.find(initS => initS.id === s.id);
        if (initStory) {
          if (!s.name_en && initStory.name_en) s.name_en = initStory.name_en;
          if (!s.content_en && initStory.content_en) s.content_en = initStory.content_en;
          if (!s.background_image && initStory.background_image) s.background_image = initStory.background_image;
        }
      });

      // Auto-migrate: Ensure profile arrays and objects exist cleanly
      if (!appState.profile) appState.profile = {};
      if (!Array.isArray(appState.profile.checked_in_pins)) {
        appState.profile.checked_in_pins = [];
      }
      if (!Array.isArray(appState.profile.discovered_pins)) {
        appState.profile.discovered_pins = [];
      }
      if (!Array.isArray(appState.profile.discovered_figures)) {
        appState.profile.discovered_figures = [];
      }
      if (!appState.profile.check_in_history) {
        appState.profile.check_in_history = {};
      }
      if (!Array.isArray(appState.profile.logs)) {
        appState.profile.logs = [];
      }

      // One-time automatic reset of character stats & level to 0 for existing clients
      const RESET_FLAG = "legacy_keepers_reset_zero_v3";
      if (localStorage.getItem(RESET_FLAG) !== "done") {
        appState.profile = {
          name: appState.profile.name || "Người Giữ Gìn Di Sản #001",
          username: appState.profile.username || "@heritage_seeker",
          level: 0,
          exp: 0,
          maxExp: 100,
          km_traveled: 0,
          checked_in_pins: [],
          discovered_pins: [],
          discovered_figures: [],
          check_in_history: {},
          logs: []
        };
        (appState.badges || []).forEach(b => {
          b.is_unlocked = false;
          delete b.unlocked_date;
        });
        (appState.stories || []).forEach(s => {
          s.is_locked = true;
        });
        localStorage.setItem(RESET_FLAG, "done");
        saveState();
      }

      // Force reset of player progression data to 0 per user requirement
      const RESET_ZERO_FLAG = "legacy_keepers_reset_zero_v5";
      if (localStorage.getItem(RESET_ZERO_FLAG) !== "done") {
        resetAllPlayerDataToZero(true);
        localStorage.setItem(RESET_ZERO_FLAG, "done");
      }

      // One-time automatic migration for realistic radar radii and demo_user role
      const RADAR_MIGRATE_FLAG = "legacy_keepers_radar_clean_v5";
      if (localStorage.getItem(RADAR_MIGRATE_FLAG) !== "done") {
        if (appState.profile) {
          appState.profile.discovered_pins = [...(appState.profile.checked_in_pins || [])];
        }
        currentUserRole = "demo_user";
        localStorage.setItem("legacy_keepers_user_role", "demo_user");
        localStorage.setItem(RADAR_MIGRATE_FLAG, "done");
        saveState();
      }

      // One-time auto-clean: prune any unvisited pins outside the radar circle from discovered_pins
            // Auto-migrate: Synchronize and enrich 22 cleaned historical pins from INITIAL_DATA / data.json
      const PINS_SYNC_FLAG = "legacy_keepers_full_sync_88_v1";
      if (localStorage.getItem(PINS_SYNC_FLAG) !== "done" || (appState.pins || []).length < 88) {
        appState.pins = JSON.parse(JSON.stringify(INITIAL_DATA.pins));
        appState.figures = JSON.parse(JSON.stringify(INITIAL_DATA.figures));
        appState.stories = JSON.parse(JSON.stringify(INITIAL_DATA.stories));
        appState.badges = JSON.parse(JSON.stringify(INITIAL_DATA.badges));
        if (appState.profile) {
          appState.profile.discovered_pins = [...(appState.profile.checked_in_pins || [])];
        }
        localStorage.setItem(PINS_SYNC_FLAG, "done");
        saveState();
      }

      const RADAR_SYNC_FLAG = "legacy_keepers_radar_sync_v6";
      if (localStorage.getItem(RADAR_SYNC_FLAG) !== "done") {
        if (appState.profile) {
          appState.profile.discovered_pins = [...(appState.profile.checked_in_pins || [])];
        }
        localStorage.setItem(RADAR_SYNC_FLAG, "done");
        saveState();
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
            if (!existing.name_en && initBg.name_en) existing.name_en = initBg.name_en;
            if (!existing.category_en && initBg.category_en) existing.category_en = initBg.category_en;
            if (!existing.criteria_en && initBg.criteria_en) existing.criteria_en = initBg.criteria_en;
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
          appState.profile = { ...data.profile };
        }
        if (!Array.isArray(appState.profile.checked_in_pins)) {
          appState.profile.checked_in_pins = [];
        }
        if (!Array.isArray(appState.profile.discovered_pins)) {
          appState.profile.discovered_pins = [];
        }
        if (!Array.isArray(appState.profile.discovered_figures)) {
          appState.profile.discovered_figures = [];
        }
        if (!appState.profile.check_in_history) {
          appState.profile.check_in_history = {};
        }
        if (!Array.isArray(appState.profile.logs)) {
          appState.profile.logs = [];
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

// Player coordinates (Default: Centered around active heritage landmarks)
// System Role & Permission System (Default: 'demo_user' so players immediately experience realistic radar discovery)
let currentUserRole = localStorage.getItem("legacy_keepers_user_role") || "demo_user";
if (currentUserRole === "admin") currentUserRole = "manager";
let editingPinId = null;

let userCoords = [10.7712, 106.6732];
let playerHeadingDeg = 0;
let map, playerRadarMarker, playerCoreMarker, playerAccuracyCircle, playerDiscoveryCircle;
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
  initKeyboardMovement();
  initFigureStoryRows();
  initBadgeConditionRows();
  setLanguage(currentLang);
  updateRoleUI();
  refreshAllViews();
  initMobileSimulator();

  // Window resize handler for Leaflet map
  window.addEventListener("resize", () => {
    if (map) {
      map.invalidateSize();
    }
  });

  // Đóng modal khi bấm vào nền tối bên ngoài (backdrop overlay)
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        if (overlay.id === "welcome-login-modal") return; // Bảng đăng nhập không tự tắt khi click ra ngoài
        overlay.classList.remove("active");
        if (overlay.id === "location-modal") selectedPinForModal = null;
      }
    });
  });

  // Đóng modal khi ấn phím Escape (Esc)
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(overlay => {
        overlay.classList.remove("active");
        if (overlay.id === "location-modal") selectedPinForModal = null;
      });
    }
  });

  // Reset handler cho form Ghim (hủy chế độ chỉnh sửa)
  const pinForm = document.getElementById("form-new-pin");
  if (pinForm) {
    pinForm.addEventListener("reset", () => {
      editingPinId = null;
      const submitBtn = pinForm.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.innerText = `💾 ${currentLang === 'en' ? 'Save Radar Pin & Sync' : 'Lưu Ghim Bản Đồ & Đồng Bộ'}`;
      }
      const previewBox = document.getElementById("pin-image-preview-box");
      if (previewBox) previewBox.style.display = "none";
    });
  }

  // Tự động kiểm tra file data.json nếu server đang chạy
  reloadFromDataJSON(false);

  // Tự động bật bảng đăng nhập & chọn vai trò khi vào trang web
  setTimeout(() => {
    openWelcomeGateModal();
  }, 180);
});

// ==========================================================================
// NAVIGATION & TABS (SYNCS DESKTOP SIDEBAR & MOBILE BOTTOM NAV)
// ==========================================================================
function switchTab(targetTab) {
  if (!targetTab) return;

  // Guard: Cổng Nhập Liệu & CMS chỉ dành cho Quản Lý (Manager/Admin)
  if (targetTab === "tab-input-portal" && !isManager()) {
    showToast(t('role_denied_toast'));
    targetTab = "tab-map";
  }

  // Sync active classes on both Desktop sidebar (.nav-item) and Mobile bottom bar (.mobile-nav-item)
  document.querySelectorAll(".nav-item, .mobile-nav-item").forEach(item => {
    if (item.getAttribute("data-tab") === targetTab) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Switch active tab pane
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === targetTab);
  });

  // Floating top bar removed per user specification
  const floatBar = document.getElementById("desktop-floating-bar");
  if (floatBar) {
    floatBar.style.display = "none";
  }

  // Refresh tab-specific views & invalidate map
  if (targetTab === "tab-map" && map) {
    setTimeout(() => map.invalidateSize(), 200);
  }
  if (targetTab === "tab-figures") {
    renderFiguresSplitView();
  }
  if (targetTab === "tab-badges") {
    renderBadgesGrid();
  }
  if (targetTab === "tab-profile") {
    renderProfileStats();
  }
  if (targetTab === "tab-input-portal") {
    updateRoleUI();
    renderManageTables();
  }
}

function initNavigation() {
  document.querySelectorAll(".nav-item, .mobile-nav-item").forEach(item => {
    item.addEventListener("click", () => {
      const targetTab = item.getAttribute("data-tab");
      if (targetTab) {
        switchTab(targetTab);
      }
    });
  });
}

function switchToInputTab(subtabId) {
  switchTab("tab-input-portal");
  if (subtabId) {
    const subTabBtn = document.querySelector(`[data-subtab="${subtabId}"]`);
    if (subTabBtn) {
      subTabBtn.click();
    }
  }
}

// ==========================================================================
// MOBILE SIMULATOR LOGIC (TEST PHONE VIEW ON DESKTOP)
// ==========================================================================
let isSimulatorMode = false;
let isSimulatorMax = false;

function toggleMobileSimulator(forceState) {
  if (typeof forceState === 'boolean') {
    isSimulatorMode = forceState;
  } else {
    isSimulatorMode = !isSimulatorMode;
  }

  const body = document.body;
  const toggleBtn = document.getElementById("btn-device-toggle");
  const toggleLabel = document.getElementById("device-toggle-label");
  const toggleIcon = document.getElementById("device-toggle-icon");
  const sidebarLabel = document.getElementById("sidebar-sim-label");
  const sidebarIcon = document.getElementById("sidebar-sim-icon");
  const simBarTitle = document.getElementById("sim-bar-title");

  if (isSimulatorMode) {
    body.classList.add("simulator-mode");
    localStorage.setItem("legacy_keepers_mobile_sim", "true");
    if (toggleLabel) toggleLabel.innerText = t("sim_btn_desktop");
    if (toggleIcon) toggleIcon.innerText = "💻";
    if (sidebarLabel) sidebarLabel.innerText = t("sim_btn_desktop");
    if (sidebarIcon) sidebarIcon.innerText = "💻";
    if (simBarTitle) simBarTitle.innerText = isSimulatorMax ? t("sim_bar_title_max") : t("sim_bar_title");
    showToast(t("sim_toast_on"));
  } else {
    body.classList.remove("simulator-mode");
    localStorage.removeItem("legacy_keepers_mobile_sim");
    if (toggleLabel) toggleLabel.innerText = t("sim_toggle_btn");
    if (toggleIcon) toggleIcon.innerText = "📱";
    if (sidebarLabel) sidebarLabel.innerText = t("sim_toggle_btn");
    if (sidebarIcon) sidebarIcon.innerText = "📱";
    showToast(t("sim_toast_off"));
  }

  // Refresh active tab views if needed
  const activeFigures = document.querySelector("#tab-figures.tab-pane.active");
  if (activeFigures) {
    renderFiguresSplitView();
  }

  // Force Leaflet recalculation for crisp rendering inside phone frame
  if (map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 280);
  }
}

function toggleDeviceSize() {
  const chassis = document.getElementById("phone-chassis");
  const title = document.getElementById("sim-bar-title");
  if (!chassis) return;

  isSimulatorMax = !isSimulatorMax;
  if (isSimulatorMax) {
    chassis.classList.add("phone-size-max");
    if (title) title.innerText = t("sim_bar_title_max");
  } else {
    chassis.classList.remove("phone-size-max");
    if (title) title.innerText = t("sim_bar_title");
  }

  if (map) {
    setTimeout(() => map.invalidateSize(), 300);
  }
}

function initMobileSimulator() {
  const savedSim = localStorage.getItem("legacy_keepers_mobile_sim");
  if (savedSim === "true" && window.innerWidth > 768) {
    toggleMobileSimulator(true);
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
      if (targetSubtab === "subtab-backups") {
        renderSnapshotsList();
      }
    });
  });
}

// ==========================================================================
// RADAR MAP ENGINE: 10M SWEEP + CONCENTRIC CIRCLE PINS
// ==========================================================================

// ==========================================================================
// ROLE & PERMISSION ENGINE (MANAGER, DEMO USER, USER)
// ==========================================================================
function isManager() {
  return currentUserRole === "manager" || currentUserRole === "admin";
}

function isDemoUser() {
  return currentUserRole === "demo_user";
}

function isRealUser() {
  return currentUserRole === "user";
}

function canMoveWithKeys() {
  return isManager() || isDemoUser();
}

function getCurrentUserRole() {
  return currentUserRole;
}

function updateRoleUI() {
  const isMgr = isManager();
  const isDemo = isDemoUser();
  const isReal = isRealUser();

  let roleName = t("role_user");
  let roleIcon = "📍";
  let mobLabel = "User GPS";

  if (isMgr) {
    roleName = t("role_manager");
    roleIcon = "👑";
    mobLabel = "Manager";
  } else if (isDemo) {
    roleName = t("role_demo_user");
    roleIcon = "🎮";
    mobLabel = "Demo";
  }

  // 1. Sidebar Card
  const iconEl = document.getElementById("sidebar-role-icon");
  const nameEl = document.getElementById("sidebar-role-name");
  const cardEl = document.getElementById("sidebar-role-card");
  if (iconEl) iconEl.innerText = roleIcon;
  if (nameEl) nameEl.innerText = roleName;
  if (cardEl) {
    cardEl.classList.toggle("role-admin", isMgr);
    cardEl.classList.toggle("role-demo", isDemo);
    cardEl.classList.toggle("role-user", isReal);
  }

  // 2. Mobile Top Bar Pill
  const mobIcon = document.getElementById("mob-role-icon");
  const mobLabelEl = document.getElementById("mob-role-label");
  if (mobIcon) mobIcon.innerText = roleIcon;
  if (mobLabelEl) mobLabelEl.innerText = mobLabel;

  // 3. Location Modal Admin Footer vs User Hint
  const modalAdmin = document.getElementById("modal-admin-actions");
  const modalUserHint = document.getElementById("modal-user-readonly-hint");
  if (modalAdmin) modalAdmin.style.display = isMgr ? "flex" : "none";
  if (modalUserHint) {
    modalUserHint.style.display = isMgr ? "none" : "block";
    const userHintTxt = modalUserHint.querySelector("span:last-child") || modalUserHint;
    if (userHintTxt) {
      userHintTxt.innerText = isDemo ? t("role_demo_readonly_hint") : t("role_user_readonly_hint");
    }
  }

  // 4. CMS Role Banner
  const cmsBanner = document.getElementById("cms-role-banner");
  if (cmsBanner) {
    if (isMgr) {
      cmsBanner.innerHTML = `
        <div class="role-banner-admin">
          <div class="role-banner-icon">👑</div>
          <div style="flex:1;">
            <strong>${t("role_manager_banner")}</strong>
            <p style="margin-top:2px; font-size:0.8rem; color:rgba(255,255,255,0.85);">${currentLang === 'en' ? 'Manager privileges active: Full control over landmarks, coordinates & lore + WASD movement.' : 'Đang kích hoạt quyền Quản Lý: Toàn quyền thêm, sửa, xóa tọa độ & dữ liệu + di chuyển phím W A S D.'}</p>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button type="button" class="btn-secondary" style="background:rgba(255,255,255,0.2); color:#fff; border-color:rgba(255,255,255,0.4); padding:6px 12px; font-size:0.78rem; white-space:nowrap; cursor:pointer;" onclick="confirmSwitchToDemoUser()">${t("role_btn_switch_demo")}</button>
            <button type="button" class="btn-secondary" style="background:rgba(255,255,255,0.2); color:#fff; border-color:rgba(255,255,255,0.4); padding:6px 12px; font-size:0.78rem; white-space:nowrap; cursor:pointer;" onclick="confirmSwitchToUser()">${t("role_btn_switch_user")}</button>
          </div>
        </div>
      `;
    } else if (isDemo) {
      cmsBanner.innerHTML = `
        <div class="role-banner-demo">
          <div class="role-banner-icon">🎮</div>
          <div style="flex:1;">
            <strong>${t("role_demo_banner")}</strong>
            <p style="margin-top:2px; font-size:0.8rem; color:rgba(255,255,255,0.9);">${currentLang === 'en' ? 'Demo Explorer Mode: Move with W A S D to test radar scanning. Content editing is locked.' : 'Chế độ Dùng Thử: Dùng phím W A S D để trải nghiệm quét radar. Chức năng sửa nội dung bị khóa.'}</p>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button type="button" class="btn-primary" style="background:var(--accent-gold); color:var(--primary-dark); padding:6px 12px; font-size:0.78rem; white-space:nowrap; cursor:pointer; border:none;" onclick="openRoleModal()">${t("role_btn_switch_manager")}</button>
            <button type="button" class="btn-secondary" style="background:rgba(255,255,255,0.2); color:#fff; border-color:rgba(255,255,255,0.4); padding:6px 12px; font-size:0.78rem; white-space:nowrap; cursor:pointer;" onclick="confirmSwitchToUser()">${t("role_btn_switch_user")}</button>
          </div>
        </div>
      `;
    } else {
      cmsBanner.innerHTML = `
        <div class="role-banner-user">
          <div class="role-banner-icon">📍</div>
          <div style="flex:1;">
            <strong>${t("role_user_readonly_banner")}</strong>
            <p style="margin-top:2px; font-size:0.8rem; color:var(--text-secondary);">${currentLang === 'en' ? 'Field Explorer Mode: Use your phone GPS outdoors. W A S D movement and CMS editing are locked.' : 'Chế độ Người Dùng Thực Tế: Vui lòng dùng GPS điện thoại ngoài đời thực. Phím W A S D và quyền sửa dữ liệu bị khóa.'}</p>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button type="button" class="btn-secondary" style="padding:6px 12px; font-size:0.78rem; white-space:nowrap; cursor:pointer;" onclick="confirmSwitchToDemoUser()">${t("role_btn_switch_demo")}</button>
            <button type="button" class="btn-primary" style="padding:6px 12px; font-size:0.78rem; white-space:nowrap; cursor:pointer;" onclick="openRoleModal()">${t("role_btn_switch_manager")}</button>
          </div>
        </div>
      `;
    }
  }

  // 4a. Ẩn/Hiện mục Cổng Nhập Liệu & CMS (cả thanh Desktop và thanh đáy Mobile) nếu không phải Manager/Admin
  document.querySelectorAll('[data-tab="tab-input-portal"]').forEach(el => {
    el.style.display = isMgr ? "" : "none";
  });
  const cmsTabPane = document.getElementById("tab-input-portal");
  if (!isMgr && cmsTabPane && cmsTabPane.classList.contains("active")) {
    switchTab("tab-map");
  }

  // 4b. Manager-Only Radar Distance Tuner Card inside CMS Portal
  const cmsRadarTuner = document.getElementById("cms-manager-radar-tuner");
  if (cmsRadarTuner) {
    cmsRadarTuner.style.display = isMgr ? "block" : "none";
    if (isMgr && typeof syncRadarTunerUI === "function") {
      syncRadarTunerUI();
    }
  }

  // 5. Disable / Enable Form Inputs for CMS (Pins, Figures, Badges)
  const formsToToggle = ["form-new-pin", "form-new-figure", "form-new-badge"];
  formsToToggle.forEach(formId => {
    const f = document.getElementById(formId);
    if (!f) return;
    const inputs = f.querySelectorAll("input, select, textarea, button[type='submit']");
    inputs.forEach(el => {
      if (!isMgr) {
        el.disabled = true;
        if (el.tagName === "BUTTON") {
          const lockHint = isDemo ? t("role_demo_readonly_hint") : t("role_user_readonly_hint");
          el.innerText = `🔒 ${lockHint}`;
          el.style.opacity = "0.65";
          el.style.cursor = "not-allowed";
        }
      } else {
        el.disabled = false;
        if (el.tagName === "BUTTON") {
          if (formId === "form-new-pin") {
            el.innerText = editingPinId ? `💾 ${currentLang === 'en' ? 'Update Landmark Pin' : 'Cập Nhật Địa Danh Di Sản'}` : `💾 ${t("cms_btn_save_pin")}`;
          } else if (formId === "form-new-figure") {
            el.innerText = `💾 ${t("cms_btn_save_figure")}`;
          } else if (formId === "form-new-badge") {
            el.innerText = `💾 ${t("cms_btn_save_badge")}`;
          }
          el.style.opacity = "1";
          el.style.cursor = "pointer";
        }
      }
    });
  });

  // 6. Refresh tables if on CMS
  const manageWrap = document.getElementById("manage-pins-table-wrap");
  if (manageWrap && manageWrap.offsetParent !== null) {
    renderManageTables();
  }

  // 7. Toggle Walk Sim Button on Map (Locked for real users)
  const walkBtn = document.getElementById("btn-walk-sim");
  if (walkBtn) {
    walkBtn.style.display = isReal ? "none" : "inline-block";
  }

  // 8. Re-render pins on map according to role visibility rules
  renderPinsOnMap();
}

// ==========================================================================
// WELCOME & LOGIN GATE MODAL CONTROLLER
// Bảng đăng nhập xuất hiện khi vào trang web: Nhập tên + Chọn vai trò (Manager / Demo / User GPS)
// ==========================================================================
function openWelcomeGateModal() {
  const modal = document.getElementById("welcome-login-modal");
  if (!modal) return;
  modal.classList.add("active");

  const nameInput = document.getElementById("gate-player-name-input");
  if (nameInput) {
    const rawName = (appState.profile && appState.profile.name) ? appState.profile.name.trim() : "";
    const isDefault = !rawName || rawName === "Người Giữ Gìn Di Sản #001" || rawName === "Heritage Keeper #001" || rawName === "Nhà Thám Hiểm Di Sản";
    nameInput.value = isDefault ? "" : rawName;
    setTimeout(() => {
      try { nameInput.focus(); } catch (e) {}
    }, 120);
  }

  // Reset Manager code section
  const codeBox = document.getElementById("gate-manager-code-box");
  const codeInput = document.getElementById("gate-manager-code-input");
  const codeErr = document.getElementById("gate-manager-err-msg");
  const btnMgr = document.getElementById("gate-btn-manager");
  if (codeBox) codeBox.style.display = "none";
  if (codeInput) codeInput.value = "";
  if (codeErr) codeErr.style.display = "none";
  if (btnMgr) btnMgr.innerText = t("gate_role_mgr_btn");

  // Reset GPS Status Box
  const gpsBox = document.getElementById("gate-gps-status-box");
  const btnUser = document.getElementById("gate-btn-user");
  if (gpsBox) {
    gpsBox.style.display = "none";
    gpsBox.innerHTML = "";
    gpsBox.className = "gate-gps-status-box";
  }
  if (btnUser) btnUser.disabled = false;

  // Highlight currently active role card
  const cards = document.querySelectorAll(".gate-role-card");
  cards.forEach(c => c.classList.remove("selected"));
  if (isManager()) {
    const cMgr = document.getElementById("gate-card-manager");
    if (cMgr) cMgr.classList.add("selected");
  } else if (isRealUser()) {
    const cUser = document.getElementById("gate-card-user");
    if (cUser) cUser.classList.add("selected");
  } else {
    const cDemo = document.getElementById("gate-card-demo");
    if (cDemo) cDemo.classList.add("selected");
  }
}

function closeWelcomeGateModal() {
  const modal = document.getElementById("welcome-login-modal");
  if (modal) modal.classList.remove("active");
}

function handleGateRoleClick(role) {
  if (role === "manager") {
    const codeBox = document.getElementById("gate-manager-code-box");
    const codeInput = document.getElementById("gate-manager-code-input");
    const btnMgr = document.getElementById("gate-btn-manager");
    if (!codeBox || codeBox.style.display === "none") {
      if (codeBox) codeBox.style.display = "block";
      if (btnMgr) btnMgr.innerText = t("gate_role_mgr_btn_active");
      if (codeInput) {
        setTimeout(() => codeInput.focus(), 50);
      }
    } else {
      submitGateLogin("manager");
    }
    return;
  }
  if (role === "demo_user") {
    submitGateLogin("demo_user");
    return;
  }
  if (role === "user") {
    submitGateLogin("user");
    return;
  }
}

function submitGateLogin(role) {
  const nameInput = document.getElementById("gate-player-name-input");
  let enteredName = nameInput ? nameInput.value.trim() : "";
  if (!enteredName) {
    if (role === "manager") {
      enteredName = currentLang === "en" ? "Heritage Manager" : "Quản Lý Di Sản";
    } else if (role === "user") {
      enteredName = currentLang === "en" ? "Field Explorer" : "Nhà Thám Hiểm Thực Địa";
    } else {
      enteredName = currentLang === "en" ? "Heritage Explorer" : "Nhà Thám Hiểm Di Sản";
    }
  }

  if (role === "manager") {
    const codeInput = document.getElementById("gate-manager-code-input");
    const codeErr = document.getElementById("gate-manager-err-msg");
    const val = codeInput ? codeInput.value.trim().toLowerCase() : "";
    if (val === "admin" || val === "manager" || val === "123456" || val === "admin123") {
      applyGateLoginSuccess(enteredName, "manager");
    } else {
      if (codeErr) codeErr.style.display = "block";
      if (codeInput) {
        codeInput.focus();
        codeInput.select();
      }
      showToast(t("gate_code_err"));
    }
    return;
  }

  if (role === "demo_user") {
    applyGateLoginSuccess(enteredName, "demo_user");
    return;
  }

  if (role === "user") {
    const statusBox = document.getElementById("gate-gps-status-box");
    const btnUser = document.getElementById("gate-btn-user");
    if (statusBox) {
      statusBox.style.display = "block";
      statusBox.className = "gate-gps-status-box loading";
      statusBox.innerHTML = `<span>${t("gate_gps_requesting")}</span>`;
    }
    if (btnUser) btnUser.disabled = true;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          if (btnUser) btnUser.disabled = false;
          userCoords = [pos.coords.latitude, pos.coords.longitude];
          if (typeof updatePlayerRadarMarker === "function") updatePlayerRadarMarker();
          if (map) map.setView(userCoords, 16);
          if (typeof renderPinsOnMap === "function") renderPinsOnMap();
          applyGateLoginSuccess(enteredName, "user", true);
        },
        (err) => {
          if (btnUser) btnUser.disabled = false;
          if (statusBox) {
            statusBox.className = "gate-gps-status-box error";
            statusBox.innerHTML = `<span>${t("gate_gps_denied")}</span>`;
          }
          showToast(currentLang === 'en' ? '⚠️ GPS access denied' : '⚠️ Chưa cấp quyền vị trí GPS');
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    } else {
      if (btnUser) btnUser.disabled = false;
      if (statusBox) {
        statusBox.className = "gate-gps-status-box error";
        statusBox.innerHTML = `<span>${currentLang === 'en' ? 'Device does not support GPS. Please select Demo User.' : 'Thiết bị không hỗ trợ GPS. Vui lòng chọn Khách Trải Nghiệm.'}</span>`;
      }
    }
    return;
  }
}

function applyGateLoginSuccess(name, role, gpsActive = false) {
  if (!appState.profile) appState.profile = {};
  appState.profile.name = name;
  currentUserRole = role;
  localStorage.setItem("legacy_keepers_user_role", role);
  if (role !== "manager") {
    // Khi người chơi đăng nhập vai trò mới, đặt lại lịch sử phát hiện chỉ giữ pin đã check-in
    // Các pin ở ngoài vòng quét radar sẽ ẩn hoàn toàn cho đến khi người chơi thực sự di chuyển tới gần
    appState.profile.discovered_pins = [...(appState.profile.checked_in_pins || [])];
  }
  saveState();
  updateRoleUI();
  renderProfileStats();
  renderPinsOnMap();
  closeWelcomeGateModal();

  if (role === "manager") {
    showToast(currentLang === 'en' ? `👑 Welcome Manager ${name}! Full admin mode activated.` : `👑 Chào mừng Quản lý ${name}! Đã kích hoạt toàn quyền hệ thống.`);
  } else if (role === "user") {
    showToast(currentLang === 'en' ? `📍 Welcome ${name}! Field GPS expedition mode activated.` : `📍 Chào mừng ${name}! Đã kích hoạt chế độ thám hiểm thực địa GPS.`);
  } else {
    showToast(currentLang === 'en' ? `🎮 Welcome ${name}! Use W-A-S-D keys to explore the heritage map.` : `🎮 Chào mừng ${name}! Dùng phím W-A-S-D để di chuyển trên bản đồ.`);
  }
}

function openRoleModal() {
  openWelcomeGateModal();
}

function closeRoleModal() {
  const modal = document.getElementById("role-modal");
  if (modal) modal.classList.remove("active");
}

function showManagerPasscodeBox() {
  if (isManager()) {
    showToast(t("role_toast_manager"));
    closeRoleModal();
    return;
  }
  const passBox = document.getElementById("manager-passcode-box") || document.getElementById("admin-passcode-box");
  const passInput = document.getElementById("manager-passcode-input") || document.getElementById("admin-passcode-input");
  if (passBox) {
    passBox.style.display = "block";
    setTimeout(() => {
      if (passInput) passInput.focus();
    }, 50);
  }
}

function showAdminPasscodeBox() {
  showManagerPasscodeBox();
}

function confirmSwitchToUser() {
  currentUserRole = "user";
  localStorage.setItem("legacy_keepers_user_role", "user");
  updateRoleUI();
  closeRoleModal();
  showToast(t("role_toast_user"));
}

function confirmSwitchToDemoUser() {
  currentUserRole = "demo_user";
  localStorage.setItem("legacy_keepers_user_role", "demo_user");
  updateRoleUI();
  closeRoleModal();
  showToast(t("role_toast_demo"));
}

function resetDiscoveredPins() {
  if (appState.profile) {
    appState.profile.discovered_pins = [...(appState.profile.checked_in_pins || [])];
  }
  saveState();
  renderPinsOnMap();
  showToast(currentLang === 'en' ? '🔄 Radar scan history reset! Far-away pins hidden.' : '🔄 Đã đặt lại lịch sử quét Radar! Các pin ở xa đã được ẩn.');
}

function verifyAndSwitchToManager() {
  const passInput = document.getElementById("manager-passcode-input") || document.getElementById("admin-passcode-input");
  const val = passInput ? passInput.value.trim().toLowerCase() : "";
  if (val === "admin" || val === "manager" || val === "123456" || val === "admin123") {
    currentUserRole = "manager";
    localStorage.setItem("legacy_keepers_user_role", "manager");
    updateRoleUI();
    closeRoleModal();
    showToast(t("role_toast_manager"));
  } else {
    showToast(t("role_err_pass"));
    if (passInput) passInput.select();
  }
}

function verifyAndSwitchToAdmin() {
  verifyAndSwitchToManager();
}

function quickSwitchToManagerDemo() {
  currentUserRole = "manager";
  localStorage.setItem("legacy_keepers_user_role", "manager");
  updateRoleUI();
  closeRoleModal();
  showToast(t("role_toast_manager"));
}

function quickSwitchToAdminDemo() {
  quickSwitchToManagerDemo();
}

// ==========================================================================
// KEYBOARD MOVEMENT ENGINE (W-A-S-D & ARROWS)
// Pure keyboard listener — NO on-screen movement buttons
// ==========================================================================
let lastBlockedToastTime = 0;
let isKeyMoving = false;

function initKeyboardMovement() {
  window.addEventListener("keydown", handleKeyboardMovement, { passive: false });
}

function handleKeyboardMovement(e) {
  // 1. Guard: Ignore if user is currently typing inside form input, textarea, select or contenteditable
  const activeEl = document.activeElement;
  if (activeEl) {
    const tag = activeEl.tagName ? activeEl.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || tag === "select" || activeEl.isContentEditable) {
      return;
    }
  }

  // 2. Identify direction
  const key = (e.key || "").toLowerCase();
  let deltaLatSign = 0;
  let deltaLngSign = 0;

  if (key === "w" || key === "arrowup") {
    deltaLatSign = 1;
  } else if (key === "s" || key === "arrowdown") {
    deltaLatSign = -1;
  } else if (key === "a" || key === "arrowleft") {
    deltaLngSign = -1;
  } else if (key === "d" || key === "arrowright") {
    deltaLngSign = 1;
  } else {
    return; // Not a movement key
  }

  // 3. Role Guard: If Real User, block movement and show reminder toast to use phone GPS
  if (!canMoveWithKeys()) {
    if (e.key && e.key.startsWith("Arrow")) e.preventDefault();
    const now = Date.now();
    if (now - lastBlockedToastTime > 2500) {
      lastBlockedToastTime = now;
      showToast(t("role_wasd_blocked_toast"));
    }
    return;
  }

  // Prevent arrow keys from scrolling the webpage
  if (e.key && e.key.startsWith("Arrow")) e.preventDefault();

  // 4. Calculate movement distance (default: 15m per press, 35m if Shift held)
  const stepMeters = e.shiftKey ? 35 : 15;
  const metersNorth = deltaLatSign * stepMeters;
  const metersEast = deltaLngSign * stepMeters;

  // Coordinate conversions:
  // 1 degree latitude ≈ 111,139 meters
  const deltaLat = metersNorth / 111139;
  // 1 degree longitude at given latitude ≈ 111,139 * cos(lat in rad)
  const latRad = userCoords[0] * Math.PI / 180;
  const metersPerLngDeg = 111139 * Math.cos(latRad);
  const deltaLng = metersEast / (metersPerLngDeg || 111139);

  // Update userCoords & directional heading
  userCoords[0] = parseFloat((userCoords[0] + deltaLat).toFixed(7));
  userCoords[1] = parseFloat((userCoords[1] + deltaLng).toFixed(7));
  if (deltaLatSign > 0) playerHeadingDeg = 0;
  else if (deltaLngSign > 0) playerHeadingDeg = 90;
  else if (deltaLatSign < 0) playerHeadingDeg = 180;
  else if (deltaLngSign < 0) playerHeadingDeg = 270;

  // 5. Update marker, core beacon & circles smoothly
  if (playerRadarMarker) {
    playerRadarMarker.setLatLng(userCoords);
  } else {
    updatePlayerRadarMarker();
  }
  if (playerCoreMarker) {
    playerCoreMarker.setLatLng(userCoords);
    const coneEl = document.querySelector('.player-heading-cone');
    if (coneEl) coneEl.style.setProperty('--player-heading', `${playerHeadingDeg}deg`);
  }
  if (playerAccuracyCircle) {
    playerAccuracyCircle.setLatLng(userCoords);
  }
  if (playerDiscoveryCircle) {
    playerDiscoveryCircle.setLatLng(userCoords);
  }

  // Update GPS display coordinate text & nearest unscanned pin
  const gpsCoordsDisplay = document.getElementById("gps-coords-display");
  if (gpsCoordsDisplay) {
    gpsCoordsDisplay.innerText = `${userCoords[0].toFixed(4)}, ${userCoords[1].toFixed(4)}`;
  }
  updateNearestUnscannedPinDisplay();

  // Pan map smoothly to follow player
  if (map) {
    map.panTo(userCoords, { animate: true, duration: 0.15 });
  }

  // Throttled radar scan re-computation
  if (!isKeyMoving) {
    isKeyMoving = true;
    requestAnimationFrame(() => {
      renderPinsOnMap();
      isKeyMoving = false;
    });
  }
}

function editSelectedPinFromModal() {
  if (!selectedPinForModal) return;
  if (!isManager()) {
    currentUserRole = "manager";
    localStorage.setItem("legacy_keepers_user_role", "manager");
    updateRoleUI();
  }
  const pinId = selectedPinForModal.id;
  closeModal();
  loadPinToForm(pinId);
}

function loadPinToForm(pinId) {
  if (!isManager()) {
    currentUserRole = "manager";
    localStorage.setItem("legacy_keepers_user_role", "manager");
    updateRoleUI();
  }

  const pin = appState.pins.find(p => p.id === pinId);
  if (!pin) return;

  editingPinId = pin.id;
  switchToInputTab("subtab-pins");

  const fillValues = () => {
    if (document.getElementById("pin-input-name")) document.getElementById("pin-input-name").value = pin.name || "";
    if (document.getElementById("pin-input-name-en")) document.getElementById("pin-input-name-en").value = pin.name_en || "";
    if (document.getElementById("pin-input-type")) document.getElementById("pin-input-type").value = pin.category || "landmark";
    if (document.getElementById("pin-input-rarity")) document.getElementById("pin-input-rarity").value = pin.rarity || "common";
    if (document.getElementById("pin-input-lat")) document.getElementById("pin-input-lat").value = (pin.lat !== undefined && pin.lat !== null) ? pin.lat : "";
    if (document.getElementById("pin-input-lng")) document.getElementById("pin-input-lng").value = (pin.lng !== undefined && pin.lng !== null) ? pin.lng : "";
    if (document.getElementById("pin-input-discovery-radius")) document.getElementById("pin-input-discovery-radius").value = pin.discovery_radius || 2000;
    if (document.getElementById("pin-input-interaction-radius")) document.getElementById("pin-input-interaction-radius").value = pin.interaction_radius || 100;
    if (document.getElementById("pin-input-image")) document.getElementById("pin-input-image").value = pin.image_url || "";
    if (document.getElementById("pin-input-desc")) document.getElementById("pin-input-desc").value = pin.desc || "";
    if (document.getElementById("pin-input-desc-en")) document.getElementById("pin-input-desc-en").value = pin.desc_en || "";
    if (document.getElementById("pin-input-media")) document.getElementById("pin-input-media").value = pin.media_url || "";

    const previewBox = document.getElementById("pin-image-preview-box");
    const previewThumb = document.getElementById("pin-image-preview-thumb");
    if (previewBox && previewThumb) {
      if (pin.image_url) {
        previewThumb.src = pin.image_url;
        previewBox.style.display = "flex";
      } else {
        previewBox.style.display = "none";
      }
    }

    const submitBtn = document.querySelector("#form-new-pin button[type='submit']");
    if (submitBtn) {
      submitBtn.innerText = `💾 ${currentLang === 'en' ? 'Update Landmark Pin' : 'Cập Nhật Địa Danh Di Sản'}`;
    }
  };

  // Populate immediately so values are ready synchronously
  fillValues();

  setTimeout(() => {
    fillValues();
    const portal = document.getElementById("tab-input-portal");
    if (portal) {
      portal.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`✏️ ${currentLang === 'en' ? `Editing: "${pin.name_en || pin.name}"` : `Đang chỉnh sửa: "${pin.name}"`}`);
  }, 100);
}

function initLeafletMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement) {
    console.error("Map element #map not found!");
    return;
  }

  // Ensure map container has dimensions before init
  // maxZoom: 20 so zooming in NEVER blanks out!
  map = L.map('map', {
    zoomControl: true,
    minZoom: 4,
    maxZoom: 20
  }).setView(userCoords, 14);

  // Clean Minimalist Radar Theme (Esri World Light Gray Base)
  // maxNativeZoom: 16 ensures Leaflet smoothly upscales tiles up to level 20 without blank tiles!
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri &mdash; The Legacy Keepers Clean Radar',
    minZoom: 4,
    maxNativeZoom: 16,
    maxZoom: 20
  }).addTo(map);

  // Dynamic zoom class handling and concentric ripples re-scale
  const updateZoomClass = () => {
    if (!map) return;
    const currentZoom = map.getZoom();
    const mapContainer = map.getContainer();
    if (mapContainer) {
      if (currentZoom < 13) {
        mapContainer.classList.add('map-zoom-low');
        mapContainer.classList.remove('map-zoom-high');
      } else {
        mapContainer.classList.remove('map-zoom-low');
        mapContainer.classList.add('map-zoom-high');
      }
    }
  };
  map.on('zoomend', () => {
    updateZoomClass();
    updatePlayerRadarMarker(); // Đồng bộ kích thước vòng quét Radar & vòng tương tác theo mức zoom
    renderPinsOnMap(); // Cập nhật lại bán kính pixel của các vòng tròn đồng tâm khi zoom thay đổi
  });
  updateZoomClass();

  // Force map to compute exact container size
  setTimeout(() => {
    map.invalidateSize();
  }, 250);

  // Create Player Marker with 10m Sweep Animation
  updatePlayerRadarMarker();

  // Allow clicking on map to set coordinates in Input Form (Only for Manager)
  map.on("click", (e) => {
    if (!isManager()) return;
    const lat = e.latlng.lat.toFixed(7);
    const lng = e.latlng.lng.toFixed(7);
    const latEl = document.getElementById("pin-input-lat");
    const lngEl = document.getElementById("pin-input-lng");
    if (latEl && lngEl) {
      latEl.value = lat;
      lngEl.value = lng;
      showToast(`📍 [Manager] ${currentLang === 'en' ? `Set coordinates from map: ${lat}, ${lng}` : `Đã lấy tọa độ từ bản đồ: ${lat}, ${lng}`}`);
    }
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

// Standards Rarity Distances matching thực tế đi bộ & khám phá đô thị:
// Discovery Radius (tầm phủ sóng để Pin xuất hiện trên radar) & Interaction Radius (tầm check-in)
const RARITY_SPECS = {
  common: {
    discoveryRadius: 600,      // 600m - Khoảng cách đi bộ 1-2 dãy phố
    interactionRadius: 50,     // 50m - Đứng trước cổng / vỉa hè
    color: '#CEA884',
    fillColor: '#E8DED0',
    pulseColor: '#CEA884'
  },
  uncommon: {
    discoveryRadius: 900,      // 900m - Khoảng cách 2-3 ngã tư
    interactionRadius: 70,     // 70m - Vỉa hè / khuôn viên di tích
    color: '#5B92A8',
    fillColor: '#C1D1D7',
    pulseColor: '#5B92A8'
  },
  rare: {
    discoveryRadius: 1200,     // 1.2 km - Phủ sóng liên phường
    interactionRadius: 80,     // 80m
    color: '#9B59B6',
    fillColor: '#E8DAEF',
    pulseColor: '#8E44AD'
  },
  epic: {
    discoveryRadius: 1500,     // 1.5 km - Phủ sóng trung tâm đô thị
    interactionRadius: 100,    // 100m
    color: '#D81B60',
    fillColor: '#F8BBD0',
    pulseColor: '#E91E63'
  },
  legendary: {
    discoveryRadius: 1800,     // 1.8 km - Tầm phủ rộng kết nối các địa bàn
    interactionRadius: 120,    // 120m - Phù hợp khuôn viên di tích lớn (Dinh Độc Lập)
    color: '#FBD071',
    fillColor: '#FDDB9B',
    pulseColor: '#FFA800'
  },
  event: {
    discoveryRadius: 2500,     // 2.5 km - Sự kiện lan tỏa
    interactionRadius: 150,    // 150m
    color: '#E74C3C',
    fillColor: '#F5B7B1',
    pulseColor: '#E74C3C'
  }
};

const DEFAULT_PLAYER_DISCOVERY_RADIUS = 600;   // 600m: Mặc định vòng quét xoay phát hiện di tích
const DEFAULT_PLAYER_INTERACTION_RADIUS = 60;  // 60m: Mặc định vòng cố định bên trong (phạm vi check-in)

const RADAR_TUNING_STORAGE_KEY = "legacy_keepers_radar_tuning_v1";
let radarTuning = {
  discoveryRadius: DEFAULT_PLAYER_DISCOVERY_RADIUS,
  interactionRadius: DEFAULT_PLAYER_INTERACTION_RADIUS,
  useCustomOverride: false
};

function loadRadarTuning() {
  try {
    const raw = localStorage.getItem(RADAR_TUNING_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.discoveryRadius === 'number' && typeof parsed.interactionRadius === 'number') {
        radarTuning.discoveryRadius = Math.min(3000, Math.max(100, parsed.discoveryRadius));
        radarTuning.interactionRadius = Math.min(300, Math.max(20, parsed.interactionRadius));
        radarTuning.useCustomOverride = !!parsed.useCustomOverride;
      }
    }
  } catch (e) {}
}

function saveRadarTuning() {
  try {
    localStorage.setItem(RADAR_TUNING_STORAGE_KEY, JSON.stringify(radarTuning));
  } catch (e) {}
}

function formatMetersLabel(m) {
  return m >= 1000 ? `${(m / 1000).toFixed(m % 1000 === 0 ? 0 : 1)} km` : `${m} m`;
}

function getEffectiveDiscoveryRadius(pin) {
  // Bán kính phát hiện của radar luôn được đồng bộ tuyệt đối với vòng tròn radar hiển thị trên bản đồ (radarTuning.discoveryRadius)
  // Đảm bảo không bao giờ có pin nào nằm ngoài vòng radar mà lại hiện ra trên bản đồ khi người chơi chưa di chuyển tới gần!
  const radarCircleRadius = radarTuning.discoveryRadius || DEFAULT_PLAYER_DISCOVERY_RADIUS;
  if (radarTuning.useCustomOverride) {
    return radarCircleRadius;
  }
  if (pin && typeof pin.discovery_radius === "number" && pin.discovery_radius < radarCircleRadius) {
    return pin.discovery_radius;
  }
  return radarCircleRadius;
}

function getEffectiveInteractionRadius(pin) {
  if (radarTuning.useCustomOverride) {
    return radarTuning.interactionRadius;
  }
  const spec = RARITY_SPECS[pin?.rarity] || RARITY_SPECS.common;
  return pin?.interaction_radius || spec.interactionRadius || DEFAULT_PLAYER_INTERACTION_RADIUS;
}

function syncRadarTunerUI() {
  const discSlider = document.getElementById("slider-radar-discovery");
  const discVal = document.getElementById("radar-discovery-val");
  const interSlider = document.getElementById("slider-radar-interaction");
  const interVal = document.getElementById("radar-interaction-val");
  const liveCountEl = document.getElementById("radar-tuner-live-count");

  if (discSlider) discSlider.value = radarTuning.discoveryRadius;
  if (discVal) discVal.innerText = formatMetersLabel(radarTuning.discoveryRadius);
  if (interSlider) interSlider.value = radarTuning.interactionRadius;
  if (interVal) interVal.innerText = formatMetersLabel(radarTuning.interactionRadius);

  if (liveCountEl) {
    const pins = appState.pins || [];
    const checkedIds = Array.isArray(appState.profile?.checked_in_pins) ? appState.profile.checked_in_pins : [];
    const playerVisibleCount = pins.filter(pin => {
      if (checkedIds.includes(pin.id)) return true;
      const d = getDistanceMeters(userCoords[0], userCoords[1], pin.lat, pin.lng);
      return d <= getEffectiveDiscoveryRadius(pin);
    }).length;

    liveCountEl.innerText = currentLang === 'en'
      ? `Player view at current location: ${playerVisibleCount} / ${pins.length} pins visible`
      : `Góc nhìn người chơi tại vị trí hiện tại: thấy ${playerVisibleCount} / ${pins.length} pin`;
  }
}

function onRadarSliderChange(type, rawVal) {
  if (!isManager()) {
    showToast(t('role_denied_toast'));
    return;
  }
  const val = parseInt(rawVal, 10);
  if (isNaN(val)) return;

  if (type === 'discovery') {
    radarTuning.discoveryRadius = Math.min(3000, Math.max(100, val));
    if (radarTuning.interactionRadius > radarTuning.discoveryRadius) {
      radarTuning.interactionRadius = Math.max(20, Math.min(300, radarTuning.discoveryRadius));
    }
    // Quét lại danh sách pin đã phát hiện theo bán kính mới
    if (appState.profile) {
      appState.profile.discovered_pins = [...(appState.profile.checked_in_pins || [])];
      saveState();
    }
  } else if (type === 'interaction') {
    radarTuning.interactionRadius = Math.min(300, Math.max(20, val));
  }

  radarTuning.useCustomOverride = true;
  saveRadarTuning();
  syncRadarTunerUI();
  updatePlayerRadarMarker();
  renderPinsOnMap();
}

function setRadarPreset(type, val) {
  onRadarSliderChange(type, val);
}

function resetRadarTuning() {
  if (!isManager()) {
    showToast(t('role_denied_toast'));
    return;
  }
  radarTuning = {
    discoveryRadius: DEFAULT_PLAYER_DISCOVERY_RADIUS,
    interactionRadius: DEFAULT_PLAYER_INTERACTION_RADIUS,
    useCustomOverride: false
  };
  saveRadarTuning();
  if (appState.profile) {
    appState.profile.discovered_pins = [...(appState.profile.checked_in_pins || [])];
    saveState();
  }
  syncRadarTunerUI();
  updatePlayerRadarMarker();
  renderPinsOnMap();
  showToast(currentLang === 'en'
    ? '↺ Radar distances reset to default (600m / 60m)'
    : '↺ Đã đặt lại khoảng cách Radar về mặc định (600m / 60m)');
}

loadRadarTuning();

/**
 * Tạo 36 vạch chia độ la bàn đồng cổ (SVG ticks) siêu sắc nét cho mặt Radar
 */
function buildRadarCompassTicksSVG() {
  let ticks = '';
  for (let i = 0; i < 36; i++) {
    const angle = i * 10;
    const isCardinal = angle % 90 === 0;
    const isOctant = angle % 45 === 0 && !isCardinal;
    const y2 = isCardinal ? 16 : (isOctant ? 12 : 9);
    const strokeW = isCardinal ? 2 : (isOctant ? 1.4 : 0.9);
    const opacity = isCardinal ? 0.78 : (isOctant ? 0.52 : 0.3);
    ticks += `<line x1="200" y1="4" x2="200" y2="${y2}" stroke="#B8822E" stroke-width="${strokeW}" stroke-opacity="${opacity}" transform="rotate(${angle} 200 200)" />`;
  }
  return ticks;
}
const RADAR_COMPASS_TICKS_SVG = buildRadarCompassTicksSVG();

/**
 * Tính hướng (8 hướng chính) từ tọa độ người chơi tới địa danh
 */
function getCompassDirection(lat1, lng1, lat2, lng2) {
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const rLat1 = lat1 * Math.PI / 180;
  const rLat2 = lat2 * Math.PI / 180;
  const y = Math.sin(dLng) * Math.cos(rLat2);
  const x = Math.cos(rLat1) * Math.sin(rLat2) - Math.sin(rLat1) * Math.cos(rLat2) * Math.cos(dLng);
  const bearing = ((Math.atan2(y, x) * 180 / Math.PI) + 360) % 360;
  const dirsVi = ['Bắc', 'Đông Bắc', 'Đông', 'Đông Nam', 'Nam', 'Tây Nam', 'Tây', 'Tây Bắc'];
  const dirsEn = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
  const idx = Math.round(bearing / 45) % 8;
  return currentLang === 'en' ? dirsEn[idx] : dirsVi[idx];
}

/**
 * Cập nhật hiển thị khoảng cách & hướng tới Pin gần nhất chưa check-in trên thanh đáy bản đồ
 */
function updateNearestUnscannedPinDisplay() {
  const displayEl = document.getElementById("nearest-unscanned-pin-display");
  if (!displayEl) return;

  const pins = appState.pins || [];
  if (pins.length === 0) {
    displayEl.innerText = currentLang === 'en' ? 'No landmarks' : 'Chưa có địa danh';
    return;
  }

  const checkedInIds = Array.isArray(appState.profile?.checked_in_pins) ? appState.profile.checked_in_pins : [];
  const uncheckedPins = pins.filter(p => !checkedInIds.includes(p.id));

  if (uncheckedPins.length === 0) {
    displayEl.innerText = currentLang === 'en' ? '✓ All places checked in!' : '✓ Đã check-in hết tất cả!';
    return;
  }

  let nearest = null;
  let minDist = Infinity;
  uncheckedPins.forEach(pin => {
    const d = getDistanceMeters(userCoords[0], userCoords[1], pin.lat, pin.lng);
    if (d < minDist) {
      minDist = d;
      nearest = pin;
    }
  });

  if (!nearest) return;

  const distLabel = minDist >= 1000 ? `${(minDist / 1000).toFixed(1)} km` : `${minDist} m`;
  const dirLabel = getCompassDirection(userCoords[0], userCoords[1], nearest.lat, nearest.lng);

  displayEl.innerText = currentLang === 'en'
    ? `${distLabel} • ${dirLabel}`
    : `${distLabel} • Hướng ${dirLabel}`;
}

/**
 * Cập nhật vị trí người chơi với SVG Heritage Radar mượt mà, chuẩn tỷ lệ địa lý:
 * - Vòng ngoài xoay 360° + 2 lớp sóng sonar: Quét phát hiện pin (chỉnh tay 100m - 3000m)
 * - Vòng cố định bên trong màu ngọc lục bảo: Phạm vi đi vào để check-in (chỉnh tay 20m - 300m)
 */
function updatePlayerRadarMarker() {
  if (!map) return;
  if (playerRadarMarker) {
    map.removeLayer(playerRadarMarker);
    playerRadarMarker = null;
  }
  if (playerCoreMarker) {
    map.removeLayer(playerCoreMarker);
    playerCoreMarker = null;
  }
  if (playerAccuracyCircle) {
    map.removeLayer(playerAccuracyCircle);
    playerAccuracyCircle = null;
  }
  if (playerDiscoveryCircle) {
    map.removeLayer(playerDiscoveryCircle);
    playerDiscoveryCircle = null;
  }

  const discoveryMeters = radarTuning.discoveryRadius;
  const reachMeters = radarTuning.interactionRadius;

  const discoveryPx = getPixelRadius(userCoords[0], userCoords[1], discoveryMeters);
  const reachPx = getPixelRadius(userCoords[0], userCoords[1], reachMeters);

  // Giữ kích thước SVG mượt 60fps; nếu zoom cực sát (>1100px) thì vẽ thêm viền địa lý Leaflet chuẩn xác
  const rawDiameter = discoveryPx * 2;
  const isClampedLarge = rawDiameter > 1100;
  const sweepDiameter = Math.min(Math.max(rawDiameter, 96), 1100);
  const reachDiameter = Math.min(Math.max(reachPx * 2, 22), Math.max(24, sweepDiameter - 12));
  const halfSweep = Math.round(sweepDiameter / 2);

  if (isClampedLarge) {
    playerDiscoveryCircle = L.circle(userCoords, {
      radius: discoveryMeters,
      color: '#C89138',
      weight: 1.5,
      dashArray: '6, 6',
      fillOpacity: 0,
      interactive: false
    }).addTo(map);
  }

  const radarIcon = L.divIcon({
    className: 'player-radar-leaflet-icon',
    html: `
      <div class="player-radar-container" style="--radar-diameter: ${sweepDiameter}px; --reach-diameter: ${reachDiameter}px;">
        <!-- 2 lớp sóng Sonar lan tỏa mềm mại (Pokémon GO / MH Now style) -->
        <div class="radar-sonar-wave"></div>
        <div class="radar-sonar-wave wave-delay"></div>

        <!-- Mặt Radar La Bàn SVG Sắc Nét + Tia Quét Xoay 360° -->
        <svg class="player-radar-svg" viewBox="0 0 400 400" aria-hidden="true">
          <defs>
            <radialGradient id="radarBgGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#FBD071" stop-opacity="0.10" />
              <stop offset="68%" stop-color="#E8B24B" stop-opacity="0.04" />
              <stop offset="100%" stop-color="#C89138" stop-opacity="0.09" />
            </radialGradient>
            <linearGradient id="radarSweepFill" x1="200" y1="200" x2="355" y2="95" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#E5A83B" stop-opacity="0.34" />
              <stop offset="55%" stop-color="#F5CA6D" stop-opacity="0.14" />
              <stop offset="100%" stop-color="#FBD071" stop-opacity="0.0" />
            </linearGradient>
            <linearGradient id="radarRayGrad" x1="200" y1="200" x2="200" y2="4" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#FBD071" stop-opacity="0.2" />
              <stop offset="70%" stop-color="#D99B30" stop-opacity="0.85" />
              <stop offset="100%" stop-color="#FFF2CC" stop-opacity="1" />
            </linearGradient>
          </defs>

          <!-- Nền ánh vàng siêu mỏng giúp đọc rõ tên đường bên dưới -->
          <circle cx="200" cy="200" r="196" fill="url(#radarBgGlow)" />

          <!-- Vòng viền ngoài sắc nét + vòng chia 50% tinh tế -->
          <circle class="radar-outer-rim" cx="200" cy="200" r="196" fill="none" stroke="#C89138" stroke-width="1.6" stroke-opacity="0.72" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="#B8822E" stroke-width="0.9" stroke-opacity="0.22" stroke-dasharray="3 5" />

          <!-- 36 vạch chia độ la bàn đồng cổ -->
          <g>${RADAR_COMPASS_TICKS_SVG}</g>

          <!-- Chùm tia quét xoay 360° mượt mà -->
          <g class="radar-svg-beam-group">
            <path d="M200,200 L200,4 A196,196 0 0,1 384,132 Z" fill="url(#radarSweepFill)" />
            <line x1="200" y1="200" x2="200" y2="4" stroke="url(#radarRayGrad)" stroke-width="2.2" stroke-linecap="round" />
            <circle cx="200" cy="5" r="3.2" fill="#FFF3CF" stroke="#D99B30" stroke-width="1.2" />
          </g>
        </svg>

        <!-- Vòng cố định bên trong: Phạm vi đi vô để Check-in -->
        <div class="radar-fixed-reach-halo"></div>
      </div>
    `,
    iconSize: [sweepDiameter, sweepDiameter],
    iconAnchor: [halfSweep, halfSweep]
  });

  // interactive: false để vòng radar KHÔNG bao giờ chắn thao tác bấm vào các Pin bên trong!
  // Đặt lớp radar dưới chân Pin (zIndexOffset: 100)
  playerRadarMarker = L.marker(userCoords, {
    icon: radarIcon,
    interactive: false,
    zIndexOffset: 100
  }).addTo(map);

  // Lớp dấu định vị người chơi riêng (zIndexOffset: 650) luôn nổi sắc nét phía trên các vòng tròn & Pin gần!
  const coreBeaconIcon = L.divIcon({
    className: 'player-radar-leaflet-icon',
    html: `
      <div class="player-navigator-beacon">
        <div class="player-heading-cone" style="--player-heading: ${playerHeadingDeg}deg;"></div>
        <div class="player-beacon-halo"></div>
        <div class="player-core-dot"></div>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22]
  });

  playerCoreMarker = L.marker(userCoords, {
    icon: coreBeaconIcon,
    interactive: false,
    zIndexOffset: 650
  }).addTo(map);

  const gpsCoordsDisplay = document.getElementById("gps-coords-display");
  if (gpsCoordsDisplay) {
    gpsCoordsDisplay.innerText = `${userCoords[0].toFixed(4)}, ${userCoords[1].toFixed(4)}`;
  }

  syncRadarTunerUI();
  updateNearestUnscannedPinDisplay();
}

let activePinCircles = [];

/**
 * Tính chính xác bán kính pixel của một khoảng cách mét trên bản đồ tại vĩ độ & mức zoom hiện tại
 */
function getPixelRadius(lat, lng, radiusMeters) {
  if (!map) return 40;
  try {
    const deltaLat = radiusMeters / 111139;
    const pCenter = map.latLngToLayerPoint([lat, lng]);
    const pEdge = map.latLngToLayerPoint([lat + deltaLat, lng]);
    const px = Math.round(Math.abs(pCenter.y - pEdge.y));
    return Math.max(px, 16);
  } catch (e) {
    return 40;
  }
}

/**
 * Kiểm tra quy tắc hiển thị Pin trên bản đồ theo vai trò:
 * - Manager: Thấy tất cả pin trên bản đồ (toàn quốc, mọi khoảng cách để quản trị)
 * - Người chơi (Demo User & Real User):
 *   + Pin đã check-in: Luôn luôn hiển thị
 *   + Pin đã từng được phát hiện (từng đi qua hoặc từng ở gần): Vẫn tiếp tục hiển thị
 *   + Pin trong tầm quét (discovery_radius): Tự động phát hiện, lưu lại và hiển thị
 *   + Pin ở xa (ngoài discovery_radius) chưa từng phát hiện: Hoàn toàn ẩn khỏi bản đồ
 */
function isPinVisibleForRole(pin, distToPin, isCheckedIn) {
  // 1. Quản lý: Thấy tất cả pin toàn quốc
  if (isManager()) {
    return true;
  }

  // 2. Pin đã check-in: Luôn luôn hiển thị
  if (isCheckedIn) {
    return true;
  }

  // Đảm bảo mảng discovered_pins tồn tại trong profile
  if (!appState.profile) appState.profile = {};
  if (!Array.isArray(appState.profile.discovered_pins)) {
    appState.profile.discovered_pins = [];
  }

  // 3. Pin đã từng được phát hiện trước đó (người chơi từng đi qua hoặc từng ở gần):
  // Giữ lại hiển thị trên bản đồ để người chơi nhớ vị trí, dù đã đi xa
  if (appState.profile.discovered_pins.includes(pin.id)) {
    return true;
  }

  // 4. Nếu chưa từng phát hiện: Kiểm tra khoảng cách hiện tại có nằm trong bán kính phát hiện (discovery_radius) không
  const discoveryRadius = getEffectiveDiscoveryRadius(pin);

  if (distToPin <= discoveryRadius) {
    // Vừa phát hiện pin mới trên radar! Ghi nhận vào danh sách đã phát hiện
    appState.profile.discovered_pins.push(pin.id);
    return true;
  }

  // 5. Pin ở xa ngoài bán kính quét và chưa từng phát hiện: Ẩn hoàn toàn trên bản đồ
  return false;
}

/**
 * Hiển thị các Pin với vòng tròn địa lý chuẩn tỷ lệ mét (L.circle) và Huy hiệu Di sản (Heritage Seal)
 * Các đường tròn đồng tâm tỏa ra từ tâm con dấu đến đúng viền phạm vi check-in!
 */
function renderPinsOnMap(filter = "all") {
  if (!map) return;
  // Clear existing markers and geographical radius circles
  activePinMarkers.forEach(m => map.removeLayer(m));
  activePinMarkers = [];
  activePinCircles.forEach(c => map.removeLayer(c));
  activePinCircles = [];

  const prevDiscoveredCount = (appState.profile?.discovered_pins || []).length;
  const filtered = filter === "all" ? appState.pins : appState.pins.filter(p => {
    if (filter === "living_history" || filter === "living_witness") return p.hasLivingHistory || p.category === "living_history" || p.category === "living_witness";
    if (filter === "story" || filter === "memory") return p.category === "story" || p.category === "memory";
    return p.category === filter;
  });
  let visibleCount = 0;

  filtered.forEach(pin => {
    const spec = RARITY_SPECS[pin.rarity] || RARITY_SPECS.common;
    const interactionRadius = getEffectiveInteractionRadius(pin);

    // Khoảng cách thực tế từ người chơi đến Pin
    const distToPin = getDistanceMeters(userCoords[0], userCoords[1], pin.lat, pin.lng);
    const isCheckedIn = Array.isArray(appState.profile?.checked_in_pins) && appState.profile.checked_in_pins.includes(pin.id);

    // Lọc theo vai trò & khoảng cách
    if (!isPinVisibleForRole(pin, distToPin, isCheckedIn)) {
      return;
    }
    visibleCount++;

    // Xác định người chơi có đang trong phạm vi tương tác/check-in không
    const isWithinCheckinReach = distToPin <= interactionRadius;

    // Tính chính xác bán kính pixel của phạm vi check-in ở mức zoom hiện tại
    const checkinPx = getPixelRadius(pin.lat, pin.lng, interactionRadius);

    // 1. VÒNG RANH GIỚI CHECK-IN (INTERACTION RADIUS) - Xanh lá nổi bật khi đi vào phạm vi Pin / đã check-in
    const interactionCircle = L.circle([pin.lat, pin.lng], {
      radius: interactionRadius,
      color: isCheckedIn ? '#2E7D32' : (isWithinCheckinReach ? '#27AE60' : spec.color),
      weight: isCheckedIn ? 2 : (isWithinCheckinReach ? 2.5 : 1.8),
      dashArray: (isCheckedIn || isWithinCheckinReach) ? 'none' : '4, 4',
      fillColor: isCheckedIn ? '#C8E6C9' : (isWithinCheckinReach ? '#A5D6A7' : spec.fillColor),
      fillOpacity: isCheckedIn ? 0.22 : (isWithinCheckinReach ? 0.34 : 0.12),
      className: `geo-pin-checkin-circle ${isCheckedIn ? 'pin-already-checked-circle' : (isWithinCheckinReach ? 'in-range-pulse' : '')}`,
      interactive: true
    }).addTo(map);
    interactionCircle.on("click", () => openLocationModal(pin));
    activePinCircles.push(interactionCircle);

    // 2. MARKER PIN: CÁC ĐƯỜNG TRÒN ĐỒNG TÂM TỎA RA ĐẾN ĐÚNG VIỀN PHẠM VI CHECK-IN
    const rarityClass = `pin-rarity-${pin.rarity || 'common'}`;
    const pulseClass = isCheckedIn ? 'already-explored' : (isWithinCheckinReach ? 'checkin-ready' : 'within-radar');
    const pinName = currentLang === 'en' ? (pin.name_en || pin.name) : pin.name;
    const pulseColor = isCheckedIn ? '#2E7D32' : (isWithinCheckinReach ? '#27AE60' : (spec.pulseColor || spec.color));

    // Phóng to kích thước Pin cân đối theo mức zoom (vừa mắt, không quá nhỏ cũng không quá to)
    const curZoom = map ? map.getZoom() : 14;
    let pinSize = 38;
    let captionSize = '0.74rem';
    if (curZoom <= 13) { pinSize = 34; captionSize = '0.72rem'; }
    else if (curZoom === 14) { pinSize = 38; captionSize = '0.74rem'; }
    else if (curZoom === 15) { pinSize = 42; captionSize = '0.76rem'; }
    else if (curZoom === 16) { pinSize = 46; captionSize = '0.78rem'; }
    else if (curZoom === 17) { pinSize = 50; captionSize = '0.81rem'; }
    else if (curZoom === 18) { pinSize = 54; captionSize = '0.84rem'; }
    else if (curZoom >= 19) { pinSize = 58; captionSize = '0.86rem'; }
    const pinHalf = Math.round(pinSize / 2);

    const heritageIcon = L.divIcon({
      className: 'heritage-pin-leaflet-icon',
      html: `
        <div class="heritage-pin-container ${rarityClass} ${pulseClass} ${isCheckedIn ? 'is-checked-in' : ''}" style="--checkin-px: ${checkinPx}px; --pulse-color: ${pulseColor}; --pin-size: ${pinSize}px; --pin-caption-size: ${captionSize};">
          <!-- 3 VÒNG TRÒN ĐỒNG TÂM TỎA RA TỪ TÂM ĐẾN ĐÚNG VIỀN PHẠM VI CHECK-IN -->
          <div class="concentric-wave wave-1"></div>
          <div class="concentric-wave wave-2"></div>
          <div class="concentric-wave wave-3"></div>

          <!-- Con dấu Pin ở trung tâm -->
          <div class="heritage-pin-seal" title="${pinName}">
            <span class="heritage-pin-emoji">${pin.icon || '🏛️'}</span>
            ${isCheckedIn ? `<span class="pin-check-stamp" title="${currentLang === 'en' ? 'Checked in' : 'Đã check-in'}">✓</span>` : ''}
          </div>
          <div class="heritage-pin-caption">${isCheckedIn ? '✓ ' : ''}${pinName}</div>
        </div>
      `,
      iconSize: [pinSize, pinSize],
      iconAnchor: [pinHalf, pinHalf]
    });

    const m = L.marker([pin.lat, pin.lng], { icon: heritageIcon, zIndexOffset: isCheckedIn ? 150 : 250 }).addTo(map);
    const distLabel = distToPin >= 1000 ? `${(distToPin / 1000).toFixed(1)} km` : `${distToPin} m`;
    const checkedStatusHtml = isCheckedIn
      ? `<span style="display:inline-block; margin-left:4px; padding:1px 6px; border-radius:10px; background:#E8F5E9; color:#2E7D32; font-size:0.72rem; font-weight:700;">✓ ${currentLang === 'en' ? 'Checked In' : 'Đã check-in'}</span>`
      : '';
    m.bindTooltip(`<b>${pin.icon || '📍'} ${pinName}</b>${checkedStatusHtml}<br><span style="font-size:0.75rem; color:var(--text-muted);">${currentLang === 'en' ? 'Distance: ' : 'Cách bạn: '}${distLabel}</span>`, {
      direction: 'top',
      offset: [0, -20]
    });
    m.on("click", () => openLocationModal(pin));
    activePinMarkers.push(m);
  });

  // Tự động lưu trạng thái nếu có pin mới vừa được phát hiện
  if ((appState.profile?.discovered_pins || []).length !== prevDiscoveredCount) {
    saveState();
  }

  // Cập nhật số đếm pin hiển thị theo vai trò
  const countAll = document.getElementById("count-all");
  if (countAll) {
    countAll.innerText = isManager() ? appState.pins.length : visibleCount;
  }

  // Cập nhật hiển thị Pin gần nhất chưa quét & bộ đếm live trong bảng chỉnh Radar
  updateNearestUnscannedPinDisplay();
  syncRadarTunerUI(visibleCount);

  // Cập nhật badge trạng thái vai trò & pin trên thanh điều khiển map
  const mapRoleStatus = document.getElementById("map-role-status-text");
  if (mapRoleStatus) {
    if (isManager()) {
      mapRoleStatus.innerText = `👑 Manager: Thấy tất cả ${appState.pins.length} pin`;
    } else if (isDemoUser()) {
      mapRoleStatus.innerText = `🎮 Dùng Thử: Thấy ${visibleCount}/${appState.pins.length} pin radar (ở xa ẩn)`;
    } else {
      mapRoleStatus.innerText = `📍 User GPS: Khám phá thực địa (${visibleCount} pin gần/đã mở)`;
    }
  }
}

// ==========================================================================
// LOCATION POPUP MODAL & CHECK-IN
// ==========================================================================
function openLocationModal(pin) {
  selectedPinForModal = pin;
  const dist = getDistanceMeters(userCoords[0], userCoords[1], pin.lat, pin.lng);
  const distText = dist >= 1000 ? `${(dist / 1000).toFixed(1)} km` : `${dist} ${t('modal_checkin_radius_unit')}`;

  // Dynamic Header Style based on Rarity
  const heroHeader = document.getElementById("modal-hero-header");
  heroHeader.className = "modal-header-hero";
  if (pin.rarity === "legendary") heroHeader.classList.add("hero-legendary");
    else if (pin.rarity === "epic") heroHeader.classList.add("hero-epic");
    else if (pin.rarity === "rare") heroHeader.classList.add("hero-rare");
    else if (pin.rarity === "uncommon") heroHeader.classList.add("hero-uncommon");
    else if (pin.rarity === "event") heroHeader.classList.add("hero-event");

  // Category Tag Text & Icon
  const categoryNames = {
    landmark: t('modal_cat_landmark'),
    battlefield: t('modal_cat_battlefield'),
    living_history: t('modal_cat_living'),
    story: t('modal_cat_story'),
    culture: t('modal_cat_culture')
  };
  document.getElementById("modal-category-tag").innerText = categoryNames[pin.category] || (currentLang === 'en' ? "🏛️ HISTORICAL SITE" : "📍 DI TÍCH LỊCH SỬ");

  const displayName = currentLang === 'en' ? (pin.name_en || pin.name) : pin.name;
  const displayDesc = currentLang === 'en' ? (pin.desc_en || pin.desc) : pin.desc;

  document.getElementById("modal-title").innerText = `${pin.icon || '📍'} ${displayName}`;
  document.getElementById("modal-desc").innerText = displayDesc;
  document.getElementById("modal-distance").innerText = `${t('modal_dist_prefix')}${distText}`;
  document.getElementById("modal-checkin-radius").innerText = `${getEffectiveInteractionRadius(pin)} ${t('modal_checkin_radius_unit')}`;
  
  // Rarity Tag Styling
  const rarityMap = {
      common: { label: t('modal_rarity_common'), bg: "var(--neutral-200)", color: "var(--text-primary)" },
      uncommon: { label: t('modal_rarity_uncommon'), bg: "#A8D1E2", color: "#152B34" },
      rare: { label: t('modal_rarity_rare') || "Hiếm (Rare)", bg: "#9B59B6", color: "#FFF" },
      epic: { label: t('modal_rarity_epic') || "Sử thi (Epic)", bg: "#D81B60", color: "#FFF" },
      legendary: { label: t('modal_rarity_legendary'), bg: "var(--accent-gold)", color: "var(--primary-dark)" },
      event: { label: t('modal_rarity_event'), bg: "#E74C3C", color: "#FFF" }
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
      if (mediaTitle) mediaTitle.innerText = t('modal_media_video_title');
      if (mediaDesc) mediaDesc.innerText = t('modal_media_video_desc');
      if (mediaContainer) {
        mediaContainer.innerHTML = `
          <video controls style="width:100%; max-height:220px; border-radius:6px; background:#000; box-shadow:0 2px 8px rgba(0,0,0,0.2);">
            <source src="${mUrl}">
            ${currentLang === 'en' ? 'Your browser does not support video playback.' : 'Trình duyệt không hỗ trợ xem video trực tiếp.'}
          </video>
        `;
      }
    } else if (mLower.endsWith(".mp3") || mLower.endsWith(".wav") || mLower.endsWith(".ogg") || mLower.endsWith(".m4a")) {
      if (mediaTitle) mediaTitle.innerText = t('modal_media_audio_title');
      if (mediaDesc) mediaDesc.innerText = t('modal_media_audio_desc');
      if (mediaContainer) {
        mediaContainer.innerHTML = `
          <audio controls style="width:100%; margin-top:6px;">
            <source src="${mUrl}">
            ${currentLang === 'en' ? 'Your browser does not support audio playback.' : 'Trình duyệt không hỗ trợ nghe audio.'}
          </audio>
        `;
      }
    } else if (mLower.includes("youtube.com") || mLower.includes("youtu.be")) {
      if (mediaTitle) mediaTitle.innerText = t('modal_media_yt_title');
      if (mediaDesc) mediaDesc.innerText = t('modal_media_yt_desc');
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
        mediaContainer.innerHTML = `<a href="${mUrl}" target="_blank" class="btn-secondary" style="display:block; text-align:center; padding:8px;">${t('modal_media_btn_ext')}</a>`;
      }
    } else {
      if (mediaContainer) {
        mediaContainer.innerHTML = `<a href="${mUrl}" target="_blank" class="btn-secondary" style="display:block; text-align:center; padding:8px;">${t('modal_media_btn_attach')}</a>`;
      }
    }
  } else if (pin.hasLivingHistory) {
    livingBox.style.display = "block";
    if (mediaTitle) mediaTitle.innerText = t('modal_media_living_title');
    if (mediaDesc) mediaDesc.innerText = t('modal_media_living_desc');
    if (mediaContainer) {
      mediaContainer.innerHTML = `<button class="btn-secondary" style="width:100%; padding:8px; font-size:0.85rem;" onclick="simulatePlayAudio()">${t('modal_media_btn_audio')}</button>`;
    }
  } else {
    livingBox.style.display = "none";
  }

  // Check if already checked in
  const isAlreadyCheckedIn = Array.isArray(appState.profile?.checked_in_pins) && appState.profile.checked_in_pins.includes(pin.id);
  const checkedBanner = document.getElementById("modal-checked-in-banner");
  const checkedTimeEl = document.getElementById("modal-checked-time");
  const btn = document.getElementById("btn-modal-checkin");
  const label = document.getElementById("btn-checkin-label");
  const iconEl = document.getElementById("btn-checkin-icon");
  const canCheckIn = dist <= getEffectiveInteractionRadius(pin);

  if (isAlreadyCheckedIn) {
    if (checkedBanner) {
      checkedBanner.style.display = "flex";
      const historyInfo = appState.profile.check_in_history?.[pin.id];
      if (checkedTimeEl) {
        checkedTimeEl.innerText = historyInfo
          ? `${currentLang === 'en' ? 'Check-in time: ' : 'Thời gian check-in: '}${historyInfo.formattedTime || historyInfo.timestamp}`
          : (currentLang === 'en' ? 'Exploration milestone recorded' : 'Đã ghi nhận mốc khám phá');
      }
    }
    btn.className = "btn-checkin-action already-checked";
    btn.setAttribute("aria-disabled", "true");
    if (iconEl) iconEl.innerText = "✓";
    label.innerText = t('modal_btn_checkin_done');
  } else {
    if (checkedBanner) checkedBanner.style.display = "none";
    btn.removeAttribute("aria-disabled");

    if (canCheckIn) {
      btn.className = "btn-checkin-action ready";
      btn.removeAttribute("aria-disabled");
      if (iconEl) iconEl.innerText = "🚩";
      label.innerText = t('modal_btn_checkin_ready');
    } else {
      btn.className = "btn-checkin-action distance-out";
      btn.setAttribute("aria-disabled", "true");
      if (iconEl) iconEl.innerText = "📍";
      label.innerText = `${t('modal_btn_checkin_dist')}${distText})`;
    }
  }

  // Role visibility on location modal
  const modalAdminEl = document.getElementById("modal-admin-actions");
  const modalUserHintEl = document.getElementById("modal-user-readonly-hint");
  if (modalAdminEl) modalAdminEl.style.display = isManager() ? "flex" : "none";
  if (modalUserHintEl) {
    modalUserHintEl.style.display = isManager() ? "none" : "block";
    const userHintTxt = modalUserHintEl.querySelector("span:last-child") || modalUserHintEl;
    if (userHintTxt) {
      userHintTxt.innerText = isDemoUser() ? t("role_demo_readonly_hint") : t("role_user_readonly_hint");
    }
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

  // 1. Chống check-in nhiều lần trên cùng 1 địa danh
  if (!appState.profile.checked_in_pins) appState.profile.checked_in_pins = [];
  if (appState.profile.checked_in_pins.includes(pin.id)) {
    showToast(t('modal_toast_already_checked_in'));
    return;
  }

  // 2. Chống hack khoảng cách (phải nằm trong bán kính interaction_radius + 5m đệm sai số GPS)
  const dist = getDistanceMeters(userCoords[0], userCoords[1], pin.lat, pin.lng);
  const maxReach = getEffectiveInteractionRadius(pin) + 5;
  if (dist > maxReach) {
    showToast(t('modal_toast_out_of_range'));
    return;
  }

  // 3. Ghi nhận check-in vào profile và lịch sử chi tiết
  appState.profile.checked_in_pins.push(pin.id);
  if (!Array.isArray(appState.profile.discovered_pins)) {
    appState.profile.discovered_pins = [];
  }
  if (!appState.profile.discovered_pins.includes(pin.id)) {
    appState.profile.discovered_pins.push(pin.id);
  }
  if (!appState.profile.check_in_history) appState.profile.check_in_history = {};
  const now = new Date();
  appState.profile.check_in_history[pin.id] = {
    timestamp: now.toISOString(),
    formattedTime: now.toLocaleString(currentLang === 'en' ? 'en-US' : 'vi-VN')
  };

  // Add EXP
  appState.profile.exp += 100;
  if (appState.profile.exp >= appState.profile.maxExp) {
    appState.profile.level += 1;
    appState.profile.exp -= appState.profile.maxExp;
    appState.profile.maxExp += 250;
    showToast(`🌟 CHÚC MỪNG: Bạn đã thăng cấp Nhà Thám Hiểm Lên Cấp ${appState.profile.level}!`);
  }

  // Unlock linked story
  let unlockedStoryName = "";
  appState.stories.forEach(st => {
    if (st.required_pin_id === pin.id && st.is_locked) {
      st.is_locked = false;
      unlockedStoryName = currentLang === 'en' ? (st.name_en || st.name) : st.name;
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
  const timeStr = now.toLocaleDateString(currentLang === 'en' ? "en-US" : "vi-VN");
  const pName = currentLang === 'en' ? (pin.name_en || pin.name) : pin.name;
  if (!appState.profile.logs) appState.profile.logs = [];
  appState.profile.logs.unshift(currentLang === 'en' ? `${timeStr}: Checked-in at '${pName}' (+100 EXP)` : `${timeStr}: Check-in tại '${pName}' (+100 EXP)`);
  if (unlockedStoryName) {
    appState.profile.logs.unshift(currentLang === 'en' ? `${timeStr}: Unlocked historic tale '${unlockedStoryName}'!` : `${timeStr}: Mở khóa giai thoại '${unlockedStoryName}'!`);
  }

  // Evaluate and unlock badges based on rule engine
  const newlyUnlockedBadges = evaluateAndUnlockBadges(pin);
  let unlockedBadgeName = "";
  if (newlyUnlockedBadges && newlyUnlockedBadges.length > 0) {
    unlockedBadgeName = newlyUnlockedBadges.map(b => currentLang === 'en' ? (b.name_en || b.name) : b.name).join(", ");
  }

  saveState();
  saveToServerDataJSON();
  refreshAllViews();

  // Cập nhật lại ngay trạng thái modal thành "Đã Check-in"
  openLocationModal(pin);

  // KÍCH HOẠT ANIMATION CHÚC MỪNG MỞ KHÓA HOÀNH TRÁNG (CELEBRATION BURST)
  triggerUnlockCelebration(pin, unlockedStoryName, unlockedBadgeName);
}

function triggerUnlockCelebration(pin, storyName, badgeName) {
  const pName = currentLang === 'en' ? (pin.name_en || pin.name) : pin.name;
  document.getElementById("celebration-pin-name").innerText = `${pin.icon || '📍'} ${pName}`;
  
  const storyRow = document.getElementById("celebration-story-row");
  if (storyName) {
    storyRow.style.display = "flex";
    document.getElementById("celebration-story-text").innerText = currentLang === 'en'
      ? `Unlocked Tale: "${storyName}"!`
      : `Mở khóa giai thoại: "${storyName}"!`;
  } else {
    storyRow.style.display = "none";
  }

  const badgeRow = document.getElementById("celebration-badge-row");
  if (badgeName) {
    badgeRow.style.display = "flex";
    document.getElementById("celebration-badge-text").innerText = currentLang === 'en'
      ? `Earned Heritage Badge: "${badgeName}"!`
      : `Nhận Huy hiệu Di sản: "${badgeName}"!`;
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
  if (!canMoveWithKeys()) {
    showToast(t("role_wasd_blocked_toast"));
    return;
  }
  if (!appState.pins || appState.pins.length === 0) return;
  const target = selectedPinForModal || appState.pins[0];
  userCoords = [target.lat + 0.00015, target.lng + 0.00015];
  updatePlayerRadarMarker();
  renderPinsOnMap();
  map.setView(userCoords, 16);
  showToast(currentLang === 'en'
    ? `🚶 Moved close to: ${target.name} (~15m). Click Pin to check in!`
    : `🚶 Bạn đã di chuyển đến gần: ${target.name} (Cách ~15m). Bấm vào Pin để check-in!`);
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
        renderPinsOnMap();
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
    const allLabel = currentLang === 'en' ? 'All' : 'Tất cả';
    let chipsHtml = `<span class="filter-chip ${currentFigureFilter === 'all' ? 'active' : ''}" onclick="filterFiguresByDynasty('all', this)">${allLabel} (${appState.figures.length})</span>`;
    dynasties.forEach(dyn => {
      const count = appState.figures.filter(f => f.dynasty === dyn).length;
      const sampleFig = appState.figures.find(f => f.dynasty === dyn);
      const dynDisplay = currentLang === 'en' ? ((sampleFig && sampleFig.dynasty_en) || dyn) : dyn;
      chipsHtml += `<span class="filter-chip ${currentFigureFilter === dyn ? 'active' : ''}" onclick="filterFiguresByDynasty('${dyn}', this)">${dynDisplay} (${count})</span>`;
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
      (f.name_en && f.name_en.toLowerCase().includes(currentFigureSearch)) ||
      (f.dynasty && f.dynasty.toLowerCase().includes(currentFigureSearch)) ||
      (f.dynasty_en && f.dynasty_en.toLowerCase().includes(currentFigureSearch)) ||
      (f.role && f.role.toLowerCase().includes(currentFigureSearch)) ||
      (f.role_en && f.role_en.toLowerCase().includes(currentFigureSearch))
    );
  }

  // 3. Render Master Sidebar List
  if (filtered.length === 0) {
    listContainer.innerHTML = `<div style="padding:24px 12px; text-align:center; color:var(--text-muted); font-size:0.88rem;">${currentLang === 'en' ? 'No historical figures found.' : 'Không tìm thấy danh nhân phù hợp.'}</div>`;
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

      const figName = currentLang === 'en' ? (fig.name_en || fig.name) : fig.name;
      const figDynasty = currentLang === 'en' ? (fig.dynasty_en || fig.dynasty || 'Ancient') : (fig.dynasty || 'Cổ đại');

      listHtml += `
        <div class="figure-nav-item ${isSelected ? 'active' : ''}" onclick="selectFigure('${fig.id}')">
          <div class="figure-nav-avatar">${avatarContent}</div>
          <div class="figure-nav-info">
            <div class="figure-nav-name">${figName}</div>
            <div class="figure-nav-meta">${figDynasty} ${fig.years ? `(${fig.years})` : ''}</div>
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
          <h3>${currentLang === 'en' ? 'No Historical Figures Yet' : 'Chưa có Danh nhân nào'}</h3>
          <p style="margin-top:6px; font-size:0.9rem;">${currentLang === 'en' ? 'Click "+ Add New Hero" to begin!' : 'Hãy bấm nút "+ Thêm Danh nhân mới" để bắt đầu!'}</p>
        </div>
      `;
      return;
    }

    // Keep selectedFigureId in sync
    selectedFigureId = fig.id;

    const figName = currentLang === 'en' ? (fig.name_en || fig.name) : fig.name;
    const figDynasty = currentLang === 'en' ? (fig.dynasty_en || fig.dynasty || 'Vietnamese History') : (fig.dynasty || 'Lịch sử Việt Nam');
    const figRole = currentLang === 'en' ? (fig.role_en || fig.role) : fig.role;
    const figQuote = currentLang === 'en' ? (fig.quote_en || fig.quote) : fig.quote;
    const figBio = currentLang === 'en' ? (fig.bio_en || fig.bio || 'No biography available yet.') : (fig.bio || 'Chưa có thông tin tiểu sử.');

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
      avatarMarkup = `<img src="${fig.image_url}" alt="${figName}">`;
    }

    // Quote markup
    let quoteMarkup = "";
    if (figQuote && figQuote.trim().length > 0) {
      quoteMarkup = `
        <div class="figure-quote-box">
          <div class="figure-quote-text">"${figQuote.trim()}"</div>
        </div>
      `;
    }

    // Linked Pins Markup
    let linkedPinsMarkup = "";
    if (linkedPins.length > 0) {
      linkedPinsMarkup = `
        <div class="figure-section">
          <div class="figure-section-title">
            <span>📍 ${currentLang === 'en' ? 'Associated Landmarks & Battlegrounds' : 'Địa Danh & Chiến Trường Gắn Liền'} (${linkedPins.length})</span>
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
              const pName = currentLang === 'en' ? (pin.name_en || pin.name) : pin.name;
              return `
                <div class="figure-pin-card" onclick="viewPinOnMap('${pin.id}')" title="${currentLang === 'en' ? 'Click to open map and check in' : 'Bấm để mở bản đồ và check-in'}">
                  <span style="font-size:1.5rem;">${pin.icon || '📍'}</span>
                  <div>
                    <div style="font-weight:700; font-size:0.92rem; color:var(--primary-dark);">${pName}</div>
                    <div style="font-size:0.78rem; color:var(--text-muted);">${distText ? (currentLang === 'en' ? `Distance ~${distText} • ` : `Cách bạn ~${distText} • `) : ''}${currentLang === 'en' ? 'Click to view on Radar' : 'Bấm để xem trên Radar'}</div>
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
            <span>📖 ${currentLang === 'en' ? 'Historic Tales & Lore Collection' : 'Kho Tàng Giai Thoại & Cốt Truyện'} (${figureStories.length})</span>
          </div>
          <div class="figure-stories-container">
            ${figureStories.map(st => {
              const reqPin = (appState.pins || []).find(p => p && p.id === st.required_pin_id);
              const pinName = reqPin ? (currentLang === 'en' ? (reqPin.name_en || reqPin.name) : reqPin.name) : (currentLang === 'en' ? "Designated Landmark" : "Địa danh chỉ dẫn");
              const hasCover = st.background_image && st.background_image.trim().length > 0;
              const stName = currentLang === 'en' ? (st.name_en || st.name) : st.name;
              const stContent = currentLang === 'en' ? (st.content_en || st.content) : st.content;

              if (st.is_locked) {
                return `
                  <div class="story-card-rich locked">
                    ${hasCover ? `
                      <div class="story-card-cover locked" style="background-image: url('${st.background_image.trim()}');">
                        <span class="story-card-cover-badge locked">🔒 ${currentLang === 'en' ? 'Check-in required to unlock' : 'Cần Check-in để mở khóa'}</span>
                      </div>
                    ` : ''}
                    <div class="story-card-header">
                      <div class="story-card-title">🔒 ${stName}</div>
                      ${!hasCover ? `<span class="story-card-badge locked">${currentLang === 'en' ? 'Locked' : 'Đang khóa'}</span>` : ''}
                    </div>
                    <div class="story-card-body">
                      <p style="color:var(--text-muted); font-size:0.85rem; font-style:italic;">
                        ${currentLang === 'en' ? 'This historic narrative is currently sealed in history.' : 'Nội dung giai thoại đang được niêm phong trong dòng lịch sử.'}
                      </p>
                      <div style="margin-top:6px; color:#d35400; font-size:0.85rem; font-weight:600;">
                        ${currentLang === 'en' ? `🧭 Unlock guide: Travel and check in at [${pinName}]!` : `🧭 Chỉ dẫn mở khóa: Hãy đến và check-in thực tế tại [${pinName}]!`}
                      </div>
                    </div>
                    <div class="story-card-actions">
                      ${reqPin ? `<button class="btn-secondary" style="font-size:0.8rem; padding:4px 10px;" onclick="viewPinOnMap('${reqPin.id}')">📍 ${currentLang === 'en' ? `View Pin '${pinName}'` : `Xem Ghim '${pinName}'`}</button>` : ''}
                    </div>
                  </div>
                `;
              } else {
                const preview = stContent ? (stContent.substring(0, 160) + '...') : '';
                return `
                  <div class="story-card-rich unlocked">
                    ${hasCover ? `
                      <div class="story-card-cover" style="background-image: url('${st.background_image.trim()}');">
                        <span class="story-card-cover-badge unlocked">✓ ${currentLang === 'en' ? 'Unlocked' : 'Đã mở khóa'}</span>
                      </div>
                    ` : ''}
                    <div class="story-card-header">
                      <div class="story-card-title">🔓 ${stName}</div>
                      ${!hasCover ? `<span class="story-card-badge unlocked">✓ ${currentLang === 'en' ? 'Unlocked' : 'Đã mở khóa'}</span>` : ''}
                    </div>
                    <div class="story-card-body">
                      <p>${preview}</p>
                    </div>
                    <div class="story-card-actions">
                      <button class="btn-primary" style="font-size:0.82rem; padding:6px 14px;" onclick="openStoryModal('${st.id}')">📖 ${currentLang === 'en' ? 'Read Full Narrative' : 'Đọc Toàn Văn Giai Thoại'}</button>
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
            <span>📖 ${currentLang === 'en' ? 'Historic Tales & Lore Collection (0)' : 'Kho Tàng Giai Thoại & Cốt Truyện (0)'}</span>
          </div>
          <p style="font-size:0.88rem; color:var(--text-muted); font-style:italic;">${currentLang === 'en' ? 'No tales linked to this hero yet.' : 'Chưa có giai thoại nào liên kết với danh nhân này.'}</p>
        </div>
      `;
    }

    // Hero Header markup (Supports atmospheric background cover or clean card)
    const hasHeroBg = fig.background_image && fig.background_image.trim().length > 0;
    const heroHeaderMarkup = hasHeroBg ? `
      <div class="figure-hero-backdrop" style="background-image: url('${fig.background_image.trim()}');">
        <div class="figure-hero-backdrop-content">
          <div class="figure-detail-avatar-box">
            ${avatarMarkup}
          </div>
          <div class="figure-detail-hero-info">
            <h2 class="figure-detail-title">${figName}</h2>
            <div class="figure-detail-pills">
              <span class="figure-detail-pill pill-dynasty">🏛️ ${figDynasty}</span>
              ${fig.years ? `<span class="figure-detail-pill pill-dynasty">⏳ ${currentLang === 'en' ? 'Era:' : 'Niên đại:'} ${fig.years}</span>` : ''}
              ${figRole ? `<span class="figure-detail-pill pill-role">🎖️ ${figRole}</span>` : ''}
            </div>
            ${quoteMarkup}
          </div>
        </div>
      </div>
    ` : `
      <div class="figure-detail-hero" style="position:relative;">
        <div class="figure-detail-avatar-box">
          ${avatarMarkup}
        </div>
        <div class="figure-detail-hero-info">
          <h2 class="figure-detail-title">${figName}</h2>
          <div class="figure-detail-pills">
            <span class="figure-detail-pill pill-dynasty">🏛️ ${figDynasty}</span>
            ${fig.years ? `<span class="figure-detail-pill pill-dynasty">⏳ ${currentLang === 'en' ? 'Era:' : 'Niên đại:'} ${fig.years}</span>` : ''}
            ${figRole ? `<span class="figure-detail-pill pill-role">🎖️ ${figRole}</span>` : ''}
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
          <span>📜 ${currentLang === 'en' ? 'Heroic Life & Legacy' : 'Cuộc Đời & Sự Nghiệp Hào Kiệt'}</span>
        </div>
        <div class="figure-bio-text">
          ${figBio}
        </div>
      </div>

      <!-- Section 2: Địa danh gắn liền -->
      ${linkedPinsMarkup}

      <!-- Section 3: Giai thoại mở khóa -->
      ${storiesMarkup}

      <!-- Footer -->
      <div style="margin-top:20px; padding-top:16px; border-top:1px dashed var(--neutral-300); display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; color:var(--text-muted);">${currentLang === 'en' ? 'Hero ID:' : 'Mã danh nhân:'} ${fig.id}</span>
      </div>
    `;
  } catch (err) {
    console.error("Lỗi khi render chi tiết danh nhân:", err);
    detailContainer.innerHTML = `
      <div style="padding:24px; color:#c53030; background:#fff5f5; border:1px solid #feb2b2; border-radius:8px;">
        <h4>⚠️ ${currentLang === 'en' ? 'Error loading hero dossier' : 'Đã xảy ra lỗi khi tải hồ sơ danh nhân'}</h4>
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

  // On mobile, scroll the active avatar bubble into view smoothly
  setTimeout(() => {
    const activeItem = document.querySelector(".figure-nav-item.active");
    if (activeItem && typeof activeItem.scrollIntoView === 'function') {
      activeItem.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, 40);
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
        const figName = fig ? (currentLang === 'en' ? (fig.name_en || fig.name) : fig.name) : figId;
        return {
          id: figId,
          type: 'figure',
          name: figName,
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
        const pinName = pin ? (currentLang === 'en' ? (pin.name_en || pin.name) : pin.name) : pinId;
        return {
          id: pinId,
          type: 'pin',
          name: pinName,
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
    desc: (currentLang === 'en' && cond.desc_en) ? cond.desc_en : (cond.desc || ''),
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

let selectedBadgeIdForModal = null;
let selectedStoryIdForModal = null;

function openBadgeDetailsModal(badgeId) {
  selectedBadgeIdForModal = badgeId;
  const badge = (appState.badges || []).find(b => b.id === badgeId);
  if (!badge) return;

  const modal = document.getElementById("badge-details-modal");
  if (!modal) return;

  const isUnlocked = !!badge.is_unlocked;
  const prog = getBadgeProgress(badge);
  const tier = badge.tier || 'bronze';

  const bName = currentLang === 'en' ? (badge.name_en || badge.name) : badge.name;
  const bCat = currentLang === 'en' ? (badge.category_en || badge.category || 'History Heritage') : (badge.category || 'Di sản lịch sử');

  // Hero header theme
  const hero = document.getElementById("badge-modal-hero");
  if (hero) {
    hero.className = `badge-modal-hero tier-${tier}`;
  }
  const modalIconEl = document.getElementById("badge-modal-icon");
  if (modalIconEl) {
    if (badge.image_url) {
      modalIconEl.innerHTML = `<img src="${badge.image_url}" alt="${bName}" style="width:68px; height:68px; object-fit:contain; filter:drop-shadow(0 4px 10px rgba(0,0,0,0.3));">`;
    } else {
      modalIconEl.innerText = badge.icon || '🎖️';
    }
  }
  document.getElementById("badge-modal-title").innerText = bName;
  document.getElementById("badge-modal-tier-tag").innerText = `${tier.toUpperCase()} TIER`;
  document.getElementById("badge-modal-tier-tag").className = `badge-tag badge-${tier}`;
  document.getElementById("badge-modal-category").innerText = bCat;

  // Status banner
  const statusBanner = document.getElementById("badge-modal-status-banner");
  const statusText = document.getElementById("badge-modal-status-text");
  const statusProg = document.getElementById("badge-modal-status-progress");
  if (isUnlocked) {
    statusBanner.className = "badge-modal-status-banner unlocked";
    statusText.innerText = `${t('badge_unlocked_status')} (${badge.unlocked_date || (currentLang === 'en' ? 'Recently' : 'Gần đây')})`;
    statusProg.innerText = currentLang === 'en' ? 'Completed 100%' : 'Hoàn thành 100%';
  } else {
    statusBanner.className = "badge-modal-status-banner locked";
    statusText.innerText = `${t('badge_locked_status')} (${prog.percent}%)`;
    statusProg.innerText = currentLang === 'en' 
      ? `${prog.current}/${prog.max} conditions met`
      : `Đạt ${prog.current}/${prog.max} điều kiện`;
  }

  // Lore text
  const loreText = (currentLang === 'en' && badge.lore_en) ? badge.lore_en : (badge.lore || badge.criteria || (currentLang === 'en' ? 'Honors the keeper of national heritage.' : 'Vinh danh người gìn giữ di sản dân tộc.'));
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
    btnMap.innerHTML = t('badge_btn_map');
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
    btnFig.innerHTML = t('badge_btn_figure');
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
  selectedBadgeIdForModal = null;
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

    const bName = currentLang === 'en' ? (b.name_en || b.name) : b.name;
    const bCat = currentLang === 'en' ? (b.category_en || b.category || 'History Heritage') : (b.category || 'Di sản lịch sử');
    const bCriteria = currentLang === 'en' ? (b.criteria_en || b.criteria || 'No criteria set') : (b.criteria || 'Chưa thiết lập yêu cầu');

    const card = document.createElement("div");
    card.className = `card badge-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    card.onclick = () => openBadgeDetailsModal(b.id);
    card.title = t('badge_click_hint');

    const badgeIconHtml = b.image_url 
      ? `<img src="${b.image_url}" alt="${bName}" class="badge-icon-img">`
      : `<span class="badge-emoji-fallback">${b.icon || '🎖️'}</span>`;

    card.innerHTML = `
      <div class="badge-icon-box">${badgeIconHtml}</div>
      <span class="badge-tag ${tierClass}">${(b.tier || 'bronze').toUpperCase()} TIER</span>
      <h3 class="badge-card-title">${bName}</h3>
      <p class="badge-card-category">${bCat}</p>

      <div class="badge-req-box">
        <div class="badge-req-header">
          <span>${t('badge_req_title')}</span>
          <span style="font-size:0.75rem; font-weight:700; color:${isUnlocked ? '#27ae60' : 'var(--primary-dark)'};">
            ${isUnlocked ? (currentLang === 'en' ? 'COMPLETED' : 'HOÀN THÀNH') : `${prog.percent}%`}
          </span>
        </div>
        <div class="badge-req-desc">${bCriteria}</div>
        <div class="badge-progress-wrap">
          <div class="badge-progress-bar" style="width: ${prog.percent}%;"></div>
        </div>
        <div class="badge-progress-text">
          <span>${t('badge_live_progress')}</span>
          <span><b>${prog.current}</b> / <b>${prog.max}</b> ${prog.unit}</span>
        </div>
      </div>

      ${isUnlocked 
        ? `<div class="badge-status-pill unlocked">${t('badge_unlocked_status')} (${b.unlocked_date || (currentLang === 'en' ? 'Recently' : 'Gần đây')})</div>` 
        : `<div class="badge-status-pill locked">${t('badge_locked_status')} (${prog.percent}%)</div>`}

      <div style="font-size:0.75rem; color:var(--accent-camel); margin-top:8px; display:flex; align-items:center; gap:4px; font-weight:600;">
        🔍 ${t('badge_click_hint')}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderProfileStats() {
  const p = appState.profile || {};
  const nameEl = document.getElementById("profile-display-name");
  if (nameEl) {
    const rawName = (p.name || "").trim();
    const isDefaultName = !rawName || rawName === "Người Giữ Gìn Di Sản #001" || rawName === "Heritage Keeper #001" || rawName === "Heritage Explorer #001";
    nameEl.innerText = isDefaultName
      ? (currentLang === 'en' ? "Heritage Keeper #001" : "Người Giữ Gìn Di Sản #001")
      : rawName;
  }

  const levelTitle = currentLang === 'en' ? 'HERITAGE KNIGHT' : 'KỴ SĨ DI SẢN';
  const levelPrefix = currentLang === 'en' ? 'LEVEL' : 'CẤP';
  const levelVal = (p.level !== undefined && p.level !== null) ? p.level : 0;
  const levelBadge = document.getElementById("profile-level-badge");
  if (levelBadge) levelBadge.innerText = `${levelPrefix} ${levelVal} • ${levelTitle}`;

  const expVal = p.exp || 0;
  const maxExpVal = p.maxExp || 100;
  const expText = document.getElementById("profile-exp-text");
  if (expText) expText.innerText = `${expVal} / ${maxExpVal} EXP`;
  
  const pct = maxExpVal > 0 ? Math.min(100, Math.round((expVal / maxExpVal) * 100)) : 0;
  const expBar = document.getElementById("profile-exp-bar");
  if (expBar) expBar.style.width = `${pct}%`;

  const totalStoriesCount = (appState.stories || []).length;
  const unlockedStories = (appState.stories || []).filter(s => !s.is_locked).length;
  const remainingStoriesCount = Math.max(0, totalStoriesCount - unlockedStories);
  const storiesPct = totalStoriesCount > 0 ? Math.min(100, Math.round((unlockedStories / totalStoriesCount) * 100)) : 0;

  const totalBadgesCount = (appState.badges || []).length;
  const unlockedBadges = (appState.badges || []).filter(b => b.is_unlocked).length;
  const remainingBadgesCount = Math.max(0, totalBadgesCount - unlockedBadges);
  const badgesPct = totalBadgesCount > 0 ? Math.min(100, Math.round((unlockedBadges / totalBadgesCount) * 100)) : 0;

  const totalPinsCount = (appState.pins || []).length;
  const checkedInCount = (p.checked_in_pins && p.checked_in_pins.length) || 0;
  const remainingPinsCount = Math.max(0, totalPinsCount - checkedInCount);
  const pinsPct = totalPinsCount > 0 ? Math.min(100, Math.round((checkedInCount / totalPinsCount) * 100)) : 0;

  const statPins = document.getElementById("stat-pins-scanned");
  if (statPins) statPins.innerText = checkedInCount;

  const statPinsTotal = document.getElementById("stat-pins-total");
  if (statPinsTotal) statPinsTotal.innerText = `/ ${totalPinsCount}`;

  const statPinsBar = document.getElementById("stat-pins-progress-bar");
  if (statPinsBar) statPinsBar.style.width = `${pinsPct}%`;

  const statPinsPct = document.getElementById("stat-pins-pct");
  if (statPinsPct) statPinsPct.innerText = `${pinsPct}%`;

  const statPinsRem = document.getElementById("stat-pins-remaining");
  if (statPinsRem) {
    if (totalPinsCount === 0) {
      statPinsRem.innerText = currentLang === 'en' ? 'No sites' : 'Chưa có mốc';
    } else if (remainingPinsCount === 0) {
      statPinsRem.innerText = currentLang === 'en' ? '✓ All explored!' : '✓ Đã hoàn thành!';
    } else {
      statPinsRem.innerText = currentLang === 'en'
        ? `${remainingPinsCount} left`
        : `Còn ${remainingPinsCount} nơi`;
    }
  }

  const statStories = document.getElementById("stat-stories-unlocked");
  if (statStories) statStories.innerText = unlockedStories;

  const statStoriesTotal = document.getElementById("stat-stories-total");
  if (statStoriesTotal) statStoriesTotal.innerText = `/ ${totalStoriesCount}`;

  const statStoriesBar = document.getElementById("stat-stories-progress-bar");
  if (statStoriesBar) statStoriesBar.style.width = `${storiesPct}%`;

  const statStoriesPct = document.getElementById("stat-stories-pct");
  if (statStoriesPct) statStoriesPct.innerText = `${storiesPct}%`;

  const statStoriesRem = document.getElementById("stat-stories-remaining");
  if (statStoriesRem) {
    if (totalStoriesCount === 0) {
      statStoriesRem.innerText = currentLang === 'en' ? 'No tales' : 'Chưa có truyện';
    } else if (remainingStoriesCount === 0) {
      statStoriesRem.innerText = currentLang === 'en' ? '✓ All unlocked!' : '✓ Đã hoàn thành!';
    } else {
      statStoriesRem.innerText = currentLang === 'en'
        ? `${remainingStoriesCount} left`
        : `Còn ${remainingStoriesCount} truyện`;
    }
  }

  const statBadges = document.getElementById("stat-badges-owned");
  if (statBadges) statBadges.innerText = unlockedBadges;

  const statBadgesTotal = document.getElementById("stat-badges-total");
  if (statBadgesTotal) statBadgesTotal.innerText = `/ ${totalBadgesCount}`;

  const statBadgesBar = document.getElementById("stat-badges-progress-bar");
  if (statBadgesBar) statBadgesBar.style.width = `${badgesPct}%`;

  const statBadgesPct = document.getElementById("stat-badges-pct");
  if (statBadgesPct) statBadgesPct.innerText = `${badgesPct}%`;

  const statBadgesRem = document.getElementById("stat-badges-remaining");
  if (statBadgesRem) {
    if (totalBadgesCount === 0) {
      statBadgesRem.innerText = currentLang === 'en' ? 'No badges' : 'Chưa có huy hiệu';
    } else if (remainingBadgesCount === 0) {
      statBadgesRem.innerText = currentLang === 'en' ? '✓ All collected!' : '✓ Đã hoàn thành!';
    } else {
      statBadgesRem.innerText = currentLang === 'en'
        ? `${remainingBadgesCount} left`
        : `Còn ${remainingBadgesCount} huy hiệu`;
    }
  }

  const kmVal = (p.km_traveled !== undefined && p.km_traveled !== null) ? p.km_traveled : 0;
  const statKm = document.getElementById("stat-km-traveled");
  if (statKm) statKm.innerText = kmVal === 0 ? "0" : kmVal.toFixed(1);

  const logList = document.getElementById("activity-log-list");
  if (logList) {
    if (!p.logs || p.logs.length === 0) {
      logList.innerHTML = `<li style="padding:14px 0; color:var(--text-muted); font-size:0.88rem; text-align:center; list-style:none;">${currentLang === 'en' ? 'No expedition activities recorded yet. Start exploring the map!' : 'Chưa có hoạt động thám hiểm nào. Hãy bắt đầu khám phá bản đồ!'}</li>`;
    } else {
      logList.innerHTML = p.logs.map(item => `
        <li style="padding:6px 0; border-bottom:1px dashed var(--neutral-200);">${item}</li>
      `).join("");
    }
  }
}

// ==========================================================================
// PROFILE STAT CARDS INTERACTION (MODAL DETAILS)
// ==========================================================================
let currentProfileStatType = null;

function getPinCategoryIcon(cat) {
  switch (cat) {
    case 'battlefield': return '⚔️';
    case 'living_history': return '🎙️';
    case 'story': return '📖';
    case 'culture': return '🎨';
    case 'landmark':
    default:
      return '🏛️';
  }
}

function getPinCategoryLabel(cat) {
  switch (cat) {
    case 'battlefield': return currentLang === 'en' ? 'Battlefield' : 'Trận đánh';
    case 'living_history': return currentLang === 'en' ? 'Living Witness' : 'Nhân chứng sống';
    case 'story': return currentLang === 'en' ? 'Memory Site' : 'Mảnh ký ức';
    case 'culture': return currentLang === 'en' ? 'Traditional Culture' : 'Văn hóa & Làng nghề';
    case 'landmark':
    default:
      return currentLang === 'en' ? 'Landmark / Monument' : 'Địa danh di tích';
  }
}

function getBadgeTierLabel(tier) {
  switch (tier) {
    case 'gold': return currentLang === 'en' ? '🥇 Gold' : '🥇 Vàng';
    case 'silver': return currentLang === 'en' ? '🥈 Silver' : '🥈 Bạc';
    case 'diamond': return currentLang === 'en' ? '💎 Platinum' : '💎 Bạch kim';
    case 'bronze':
    default:
      return currentLang === 'en' ? '🥉 Bronze' : '🥉 Đồng';
  }
}

function openProfileStatModal(statType) {
  currentProfileStatType = statType;
  const modal = document.getElementById("profile-stat-modal");
  const tagEl = document.getElementById("profile-stat-modal-tag");
  const titleEl = document.getElementById("profile-stat-modal-title");
  const descEl = document.getElementById("profile-stat-modal-desc");
  const listEl = document.getElementById("profile-stat-modal-list");

  if (!modal || !listEl) return;

  if (statType === 'pins') {
    // 1. Địa danh đã check-in
    const checkedPinIds = (appState.profile && appState.profile.checked_in_pins) || [];
    const totalPins = (appState.pins || []).length;
    const visitedPins = (appState.pins || []).filter(p => checkedPinIds.includes(p.id) || p.isVisited);
    const remainingPins = Math.max(0, totalPins - visitedPins.length);
    const exploredPct = totalPins > 0 ? Math.min(100, Math.round((visitedPins.length / totalPins) * 100)) : 0;

    if (tagEl) tagEl.innerText = currentLang === 'en' ? '🏛️ CHECKED-IN LOCATIONS' : '🏛️ ĐỊA DANH ĐÃ CHECK-IN';
    if (titleEl) titleEl.innerText = `${t('stat_modal_pins_title')} (${visitedPins.length}/${totalPins})`;
    if (descEl) descEl.innerText = t('stat_modal_pins_desc');

    const progressBannerHtml = `
      <div class="profile-modal-progress-banner">
        <div class="profile-modal-progress-header">
          <span>${currentLang === 'en'
            ? `Exploration Progress: <b>${visitedPins.length} / ${totalPins}</b> places (<b>${exploredPct}%</b>)`
            : `Tiến độ khám phá: <b>${visitedPins.length} / ${totalPins}</b> địa điểm (<b>${exploredPct}%</b>)`}</span>
          <span style="color:var(--accent-camel);">${remainingPins === 0
            ? (currentLang === 'en' ? '✓ All completed!' : '✓ Đã hoàn thành tất cả!')
            : (currentLang === 'en' ? `${remainingPins} places remaining` : `Còn ${remainingPins} địa điểm nữa`)}</span>
        </div>
        <div class="profile-modal-progress-track">
          <div class="profile-modal-progress-fill" style="width:${exploredPct}%;"></div>
        </div>
      </div>
    `;

    if (visitedPins.length === 0) {
      listEl.innerHTML = progressBannerHtml + `
        <div style="text-align:center; padding:28px 16px;">
          <div style="font-size:2.8rem; margin-bottom:10px;">🗺️</div>
          <strong style="color:var(--primary-dark); font-size:1.05rem;">${t('stat_modal_empty_pins')}</strong>
          <p style="color:var(--text-muted); font-size:0.85rem; margin-top:8px;">
            ${currentLang === 'en' ? 'Move around the map and get close to heritage pins to check-in and unlock history!' : 'Hãy bật Radar và di chuyển tới gần các mốc di tích để check-in và mở khóa lịch sử!'}
          </p>
          <button class="btn-primary" style="margin-top:14px;" onclick="closeProfileStatModal(); switchTab('tab-map');">
            🧭 ${t('nav_map')}
          </button>
        </div>
      `;
    } else {
      listEl.innerHTML = progressBannerHtml + visitedPins.map(pin => {
        const pinName = currentLang === 'en' ? (pin.name_en || pin.name) : pin.name;
        const pinDesc = currentLang === 'en' ? (pin.desc_en || pin.desc) : pin.desc;
        const catIcon = getPinCategoryIcon(pin.category);
        const catLabel = getPinCategoryLabel(pin.category);
        const rarityLabel = currentLang === 'en' ? (pin.rarity || 'Common') : (pin.rarity === 'Legendary' ? 'Huyền thoại' : (pin.rarity === 'Rare' ? 'Quý hiếm' : 'Phổ thông'));
        
        return `
          <div class="profile-stat-item-card">
            <div class="stat-item-badge-col">
              <div class="stat-item-avatar">
                ${pin.image ? `<img src="${pin.image}" alt="${pinName}" onerror="this.outerHTML='${catIcon}'">` : catIcon}
              </div>
            </div>
            <div class="stat-item-info-col">
              <div class="stat-item-title-row">
                <strong class="stat-item-name">${pinName}</strong>
                <span class="badge-tag" style="background:rgba(39, 174, 96, 0.15); color:#27ae60; border-color:#27ae60; font-size:0.75rem;">${t('stat_tag_checked_in')}</span>
              </div>
              <div class="stat-item-meta">
                <span>${catIcon} ${catLabel}</span> • <span>⭐ ${rarityLabel}</span>
                ${pin.address ? `• <span>📍 ${pin.address}</span>` : `• <span>📍 [${pin.lat.toFixed(4)}, ${pin.lng.toFixed(4)}]</span>`}
              </div>
              <p class="stat-item-desc">${pinDesc || ''}</p>
            </div>
            <div class="stat-item-action-col">
              <button class="btn-primary" style="padding:6px 14px; font-size:0.8rem; white-space:nowrap;" onclick="viewPinFromProfile('${pin.id}')">
                ${t('stat_btn_view_radar')}
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

  } else if (statType === 'stories') {
    // 2. Giai thoại đã mở khóa
    const totalStories = (appState.stories || []).length;
    const unlockedStories = (appState.stories || []).filter(s => !s.is_locked);
    const remainingStories = Math.max(0, totalStories - unlockedStories.length);
    const storiesPct = totalStories > 0 ? Math.min(100, Math.round((unlockedStories.length / totalStories) * 100)) : 0;

    if (tagEl) tagEl.innerText = currentLang === 'en' ? '📖 UNLOCKED STORIES' : '📖 GIAI THOẠI ĐÃ MỞ KHÓA';
    if (titleEl) titleEl.innerText = `${t('stat_modal_stories_title')} (${unlockedStories.length}/${totalStories})`;
    if (descEl) descEl.innerText = t('stat_modal_stories_desc');

    const storiesProgressBannerHtml = `
      <div class="profile-modal-progress-banner">
        <div class="profile-modal-progress-header">
          <span>${currentLang === 'en'
            ? `Unlock Progress: <b>${unlockedStories.length} / ${totalStories}</b> tales (<b>${storiesPct}%</b>)`
            : `Tiến độ mở khóa: <b>${unlockedStories.length} / ${totalStories}</b> giai thoại (<b>${storiesPct}%</b>)`}</span>
          <span style="color:var(--accent-camel);">${remainingStories === 0
            ? (currentLang === 'en' ? '✓ All unlocked!' : '✓ Đã mở khóa tất cả!')
            : (currentLang === 'en' ? `${remainingStories} tales remaining` : `Còn ${remainingStories} giai thoại nữa`)}</span>
        </div>
        <div class="profile-modal-progress-track">
          <div class="profile-modal-progress-fill" style="width:${storiesPct}%;"></div>
        </div>
      </div>
    `;

    if (unlockedStories.length === 0) {
      listEl.innerHTML = storiesProgressBannerHtml + `
        <div style="text-align:center; padding:28px 16px;">
          <div style="font-size:2.8rem; margin-bottom:10px;">📜</div>
          <strong style="color:var(--primary-dark); font-size:1.05rem;">${t('stat_modal_empty_stories')}</strong>
          <p style="color:var(--text-muted); font-size:0.85rem; margin-top:8px;">
            ${currentLang === 'en' ? 'Each checked-in landmark unlocks heroic narratives and secret chronicles.' : 'Mỗi địa danh ghé thăm sẽ mở khóa những câu chuyện hào hùng về các bậc danh nhân hào kiệt.'}
          </p>
          <button class="btn-primary" style="margin-top:14px;" onclick="closeProfileStatModal(); switchTab('tab-map');">
            🧭 ${t('nav_map')}
          </button>
        </div>
      `;
    } else {
      listEl.innerHTML = storiesProgressBannerHtml + unlockedStories.map(story => {
        const sTitle = currentLang === 'en' ? (story.title_en || story.title) : story.title;
        const sContent = currentLang === 'en' ? (story.content_en || story.content) : story.content;
        const sExcerpt = sContent ? (sContent.slice(0, 110) + '...') : '';
        const fig = (appState.figures || []).find(f => f.id === story.figure_id);
        const figName = fig ? (currentLang === 'en' ? (fig.name_en || fig.name) : fig.name) : (currentLang === 'en' ? 'Historical Figure' : 'Danh nhân Lịch sử');
        const figAvatar = fig ? (fig.avatar || '⚔️') : '📖';
        const pin = (appState.pins || []).find(p => p.id === story.pin_id);
        const pinName = pin ? (currentLang === 'en' ? (pin.name_en || pin.name) : pin.name) : '';

        return `
          <div class="profile-stat-item-card">
            <div class="stat-item-badge-col">
              <div class="stat-item-avatar">${figAvatar}</div>
            </div>
            <div class="stat-item-info-col">
              <div class="stat-item-title-row">
                <strong class="stat-item-name">${sTitle}</strong>
                <span class="badge-tag" style="background:rgba(243, 156, 18, 0.15); color:#d35400; border-color:#e67e22; font-size:0.75rem;">${t('stat_tag_unlocked')}</span>
              </div>
              <div class="stat-item-meta">
                <span>⚔️ ${figName}</span>
                ${pinName ? `• <span>🏛️ ${pinName}</span>` : ''}
              </div>
              <p class="stat-item-desc">${sExcerpt}</p>
            </div>
            <div class="stat-item-action-col">
              <button class="btn-primary" style="padding:6px 14px; font-size:0.8rem; white-space:nowrap;" onclick="readStoryFromProfile('${story.id}')">
                ${t('stat_btn_read_story')}
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

  } else if (statType === 'badges') {
    // 3. Huy hiệu sở hữu
    const totalBadges = (appState.badges || []).length;
    const unlockedBadges = (appState.badges || []).filter(b => b.is_unlocked);
    const remainingBadges = Math.max(0, totalBadges - unlockedBadges.length);
    const badgesPct = totalBadges > 0 ? Math.min(100, Math.round((unlockedBadges.length / totalBadges) * 100)) : 0;

    if (tagEl) tagEl.innerText = currentLang === 'en' ? '🏅 EARNED BADGES' : '🏅 HUY HIỆU SỞ HỮU';
    if (titleEl) titleEl.innerText = `${t('stat_modal_badges_title')} (${unlockedBadges.length}/${totalBadges})`;
    if (descEl) descEl.innerText = t('stat_modal_badges_desc');

    const badgesProgressBannerHtml = `
      <div class="profile-modal-progress-banner">
        <div class="profile-modal-progress-header">
          <span>${currentLang === 'en'
            ? `Collection Progress: <b>${unlockedBadges.length} / ${totalBadges}</b> badges (<b>${badgesPct}%</b>)`
            : `Tiến độ sưu tầm: <b>${unlockedBadges.length} / ${totalBadges}</b> huy hiệu (<b>${badgesPct}%</b>)`}</span>
          <span style="color:var(--accent-camel);">${remainingBadges === 0
            ? (currentLang === 'en' ? '✓ All collected!' : '✓ Đã sở hữu tất cả!')
            : (currentLang === 'en' ? `${remainingBadges} badges remaining` : `Còn ${remainingBadges} huy hiệu nữa`)}</span>
        </div>
        <div class="profile-modal-progress-track">
          <div class="profile-modal-progress-fill" style="width:${badgesPct}%;"></div>
        </div>
      </div>
    `;

    if (unlockedBadges.length === 0) {
      listEl.innerHTML = badgesProgressBannerHtml + `
        <div style="text-align:center; padding:28px 16px;">
          <div style="font-size:2.8rem; margin-bottom:10px;">🏅</div>
          <strong style="color:var(--primary-dark); font-size:1.05rem;">${t('stat_modal_empty_badges')}</strong>
          <p style="color:var(--text-muted); font-size:0.85rem; margin-top:8px;">
            ${currentLang === 'en' ? 'Visit landmarks and decode historical figures to collect medals!' : 'Ghé thăm các địa danh và khám phá danh nhân để nhận các huân chương di sản ánh kim!'}
          </p>
          <button class="btn-primary" style="margin-top:14px;" onclick="closeProfileStatModal(); switchTab('tab-badges');">
            🏅 ${t('nav_badges')}
          </button>
        </div>
      `;
    } else {
      listEl.innerHTML = badgesProgressBannerHtml + unlockedBadges.map(b => {
        const bName = currentLang === 'en' ? (b.name_en || b.name) : b.name;
        const bLore = currentLang === 'en' ? (b.lore_en || b.lore || b.desc_en || b.desc) : (b.lore || b.desc);
        const bTier = getBadgeTierLabel(b.tier);
        const bCategory = currentLang === 'en' ? (b.category_en || b.category) : b.category;

        return `
          <div class="profile-stat-item-card">
            <div class="stat-item-badge-col">
              <div class="stat-item-avatar" style="font-size:2rem; background:rgba(253, 219, 155, 0.25);">${b.icon || '🏅'}</div>
            </div>
            <div class="stat-item-info-col">
              <div class="stat-item-title-row">
                <strong class="stat-item-name">${bName}</strong>
                <span class="badge-tag" style="background:rgba(212, 175, 55, 0.2); color:#8a6d1c; border-color:var(--accent-gold); font-size:0.75rem;">${bTier}</span>
              </div>
              <div class="stat-item-meta">
                <span>📁 ${bCategory || 'Di sản'}</span>
                ${b.unlocked_date ? `• <span>📅 ${b.unlocked_date}</span>` : ''}
              </div>
              <p class="stat-item-desc">${bLore || ''}</p>
            </div>
            <div class="stat-item-action-col">
              <button class="btn-primary" style="padding:6px 14px; font-size:0.8rem; white-space:nowrap;" onclick="viewBadgeFromProfile('${b.id}')">
                ${t('stat_btn_view_badge')}
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

  } else if (statType === 'km') {
    // 4. Km đã thám hiểm & Hành trình
    const p = appState.profile || {};
    const km = (p.km_traveled !== undefined && p.km_traveled !== null) ? p.km_traveled : 0;
    const checkedCount = (p.checked_in_pins && p.checked_in_pins.length) || 0;
    const storyCount = (appState.stories || []).filter(s => !s.is_locked).length;
    const badgeCount = (appState.badges || []).filter(b => b.is_unlocked).length;
    const levelTitle = currentLang === 'en' ? 'HERITAGE KNIGHT' : 'KỴ SĨ DI SẢN';
    const nextMilestoneKm = 20;
    const remainingKm = Math.max(0, (nextMilestoneKm - km)).toFixed(1);
    const progressPct = Math.min(100, Math.round((km / nextMilestoneKm) * 100));

    if (tagEl) tagEl.innerText = currentLang === 'en' ? '🚶 EXPEDITION SUMMARY' : '🚶 HÀNH TRÌNH ĐIỀN DÃ';
    if (titleEl) titleEl.innerText = `${km} KM • ${t('stat_modal_km_title')}`;
    if (descEl) descEl.innerText = t('stat_modal_km_desc');

    listEl.innerHTML = `
      <div style="background: linear-gradient(135deg, rgba(84, 51, 27, 0.06) 0%, rgba(253, 219, 155, 0.2) 100%); border: 1.5px solid var(--accent-gold); border-radius: var(--radius-md); padding: 18px; text-align: center; margin-bottom: 6px;">
        <div style="font-size: 2.4rem; font-weight: 800; color: var(--primary-dark); line-height: 1;">
          ${km} <span style="font-size: 1.2rem; font-weight: 600; color: var(--text-secondary);">KM</span>
        </div>
        <div style="margin-top: 6px; font-weight: 700; color: var(--primary); font-size: 0.95rem;">
          ${currentLang === 'en' ? `Level ${p.level} • ${levelTitle}` : `Cấp ${p.level} • ${levelTitle}`}
        </div>
        <div style="margin-top: 14px; background: #fff; border: 1px solid var(--neutral-300); border-radius: 8px; padding: 12px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600; margin-bottom: 6px; color: var(--text-secondary);">
            <span>${currentLang === 'en' ? 'Next Milestone: Senior Expedition Master (20 km)' : 'Mục tiêu danh hiệu: Bậc Thầy Viễn Chinh (20 km)'}</span>
            <span>${progressPct}%</span>
          </div>
          <div style="height: 10px; background: var(--neutral-200); border-radius: 5px; overflow: hidden;">
            <div style="height: 100%; width: ${progressPct}%; background: linear-gradient(90deg, var(--accent-camel), var(--accent-yellow));"></div>
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px; text-align: left;">
            ${currentLang === 'en' ? `Need ${remainingKm} more km of field patrol to unlock next milestone.` : `Còn ${remainingKm} km tuần tra nữa để mở khóa danh hiệu kế tiếp.`}
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 6px;">
        <div style="background: var(--bg-card); border: 1px solid var(--neutral-200); border-radius: var(--radius-sm); padding: 12px; text-align: center;">
          <div style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark);">${checkedCount}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">🏛️ ${currentLang === 'en' ? 'Locations' : 'Địa danh'}</div>
        </div>
        <div style="background: var(--bg-card); border: 1px solid var(--neutral-200); border-radius: var(--radius-sm); padding: 12px; text-align: center;">
          <div style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark);">${storyCount}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">📖 ${currentLang === 'en' ? 'Stories' : 'Giai thoại'}</div>
        </div>
        <div style="background: var(--bg-card); border: 1px solid var(--neutral-200); border-radius: var(--radius-sm); padding: 12px; text-align: center;">
          <div style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark);">${badgeCount}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">🏅 ${currentLang === 'en' ? 'Badges' : 'Huy hiệu'}</div>
        </div>
      </div>

      <div style="margin-top: 12px; display: flex; justify-content: center;">
        <button class="btn-primary" style="padding: 10px 22px; font-size: 0.9rem;" onclick="closeProfileStatModal(); switchTab('tab-map');">
          🚶 ${currentLang === 'en' ? 'Patrol on Radar Map Now' : 'Tuần Tra Bản Đồ Radar Ngay'}
        </button>
      </div>
    `;
  }

  modal.classList.add("active");
}

function closeProfileStatModal() {
  const modal = document.getElementById("profile-stat-modal");
  if (modal) {
    modal.classList.remove("active");
  }
  currentProfileStatType = null;
}

function viewPinFromProfile(pinId) {
  closeProfileStatModal();
  const pin = (appState.pins || []).find(p => p.id === pinId);
  if (!pin) return;
  switchTab("tab-map");
  if (map) {
    setTimeout(() => {
      map.invalidateSize();
      map.flyTo([pin.lat, pin.lng], 16, { duration: 1.2 });
      setTimeout(() => {
        openLocationModal(pin);
      }, 700);
    }, 200);
  }
}

function readStoryFromProfile(storyId) {
  closeProfileStatModal();
  openStoryModal(storyId);
}

function viewBadgeFromProfile(badgeId) {
  closeProfileStatModal();
  openBadgeDetailsModal(badgeId);
}

function populateDropdownSelectors() {
  const figSelect = document.getElementById("story-input-figure");
  const pinSelect = document.getElementById("story-input-pin");
  const figPinSelect = document.getElementById("fig-input-pins");
  const figStoryPinSelect = document.getElementById("fig-story-pin");
  const badgePinSelect = document.getElementById("badge-input-target-pin");

  if (figSelect) {
    figSelect.innerHTML = appState.figures.map(f => {
      const fName = currentLang === 'en' ? (f.name_en || f.name) : f.name;
      return `<option value="${f.id}">${fName}</option>`;
    }).join("");
  }
  if (pinSelect) {
    pinSelect.innerHTML = appState.pins.map(p => {
      const pName = currentLang === 'en' ? (p.name_en || p.name) : p.name;
      return `<option value="${p.id}">${p.icon || '📍'} ${pName}</option>`;
    }).join("");
  }
  if (figPinSelect) {
    figPinSelect.innerHTML = `<option value="">${t('cms_fig_pins_opt')}</option>` + 
      appState.pins.map(p => {
        const pName = currentLang === 'en' ? (p.name_en || p.name) : p.name;
        return `<option value="${p.id}">${p.icon || '📍'} ${pName}</option>`;
      }).join("");
  }
  if (figStoryPinSelect) {
    figStoryPinSelect.innerHTML = appState.pins.map(p => {
      const pName = currentLang === 'en' ? (p.name_en || p.name) : p.name;
      return `<option value="${p.id}">${p.icon || '📍'} ${pName}</option>`;
    }).join("");
  }
  if (badgePinSelect) {
    const curVal = badgePinSelect.value;
    badgePinSelect.innerHTML = appState.pins.map(p => {
      const pName = currentLang === 'en' ? (p.name_en || p.name) : p.name;
      return `<option value="${p.id}">${p.icon || '📍'} ${pName}</option>`;
    }).join("");
    if (curVal && appState.pins.some(p => p.id === curVal)) {
      badgePinSelect.value = curVal;
    }
  }
}

// Story modal reader
function openStoryModal(storyId) {
  selectedStoryIdForModal = storyId;
  const story = appState.stories.find(s => s.id === storyId);
  if (!story) return;
  const fig = appState.figures.find(f => f.id === story.figure_id);

  const sTitle = currentLang === 'en' ? (story.name_en || story.name) : story.name;
  const sContent = currentLang === 'en' ? (story.content_en || story.content) : story.content;
  const fName = fig ? (currentLang === 'en' ? (fig.name_en || fig.name) : fig.name) : (currentLang === 'en' ? 'History' : 'Lịch sử');
  const metaPrefix = currentLang === 'en' ? 'Hero / Figure:' : 'Danh nhân:';

  document.getElementById("story-modal-title").innerText = `📜 ${sTitle}`;
  document.getElementById("story-modal-meta").innerText = `${metaPrefix} ${fName}`;
  document.getElementById("story-modal-content").innerText = sContent;

  const coverEl = document.getElementById("story-modal-cover");
  if (coverEl) {
    if (story.background_image && story.background_image.trim().length > 0) {
      coverEl.style.backgroundImage = `url('${story.background_image.trim()}')`;
      coverEl.style.display = "flex";
      const capEl = document.getElementById("story-modal-cover-caption");
      if (capEl) capEl.innerText = currentLang === 'en' ? `Illustration: ${sTitle}` : `Tranh minh họa: ${sTitle}`;
    } else {
      coverEl.style.display = "none";
    }
  }

  document.getElementById("story-modal").classList.add("active");
}

function closeStoryModal() {
  selectedStoryIdForModal = null;
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
  if (!isManager()) {
    showToast(t('role_denied_toast'));
    openRoleModal();
    return;
  }
  const name = document.getElementById("pin-input-name").value.trim();
  const name_en = document.getElementById("pin-input-name-en") ? document.getElementById("pin-input-name-en").value.trim() : "";
  const category = document.getElementById("pin-input-type").value;
  const rarity = document.getElementById("pin-input-rarity").value;
  const inputLat = parseFloat(document.getElementById("pin-input-lat").value);
  const inputLng = parseFloat(document.getElementById("pin-input-lng").value);
  const discovery = parseInt(document.getElementById("pin-input-discovery-radius").value) || 2000;
  const interaction = parseInt(document.getElementById("pin-input-interaction-radius").value) || 100;
  const image_url = document.getElementById("pin-input-image").value.trim();
  const desc = document.getElementById("pin-input-desc").value.trim();
  const desc_en = document.getElementById("pin-input-desc-en") ? document.getElementById("pin-input-desc-en").value.trim() : "";
  const media = document.getElementById("pin-input-media").value.trim();

  const iconMap = {
    landmark: "🏛️",
    battlefield: "⚔️",
    living_history: "🎙️",
    story: "📖",
    culture: "🎨"
  };

  let finalLat = inputLat;
  let finalLng = inputLng;

  if (editingPinId) {
    const targetIndex = appState.pins.findIndex(p => p.id === editingPinId);
    if (targetIndex !== -1) {
      const oldPin = appState.pins[targetIndex];
      finalLat = !isNaN(inputLat) ? inputLat : (oldPin.lat || 21.0285);
      finalLng = !isNaN(inputLng) ? inputLng : (oldPin.lng || 105.8542);
      appState.pins[targetIndex] = {
        ...oldPin,
        name,
        name_en: name_en || name,
        category,
        rarity,
        lat: finalLat,
        lng: finalLng,
        discovery_radius: discovery,
        interaction_radius: interaction,
        image_url: image_url,
        desc,
        desc_en: desc_en || desc,
        media_url: media,
        icon: iconMap[category] || oldPin.icon || "📍",
        hasLivingHistory: category === "living_history" || media.length > 0
      };
      showToast(currentLang === 'en' ? `✓ Successfully updated landmark pin: "${name_en || name}"!` : `✓ Đã cập nhật Ghim: "${name}" thành công!`);
    } else {
      finalLat = !isNaN(inputLat) ? inputLat : 21.0285;
      finalLng = !isNaN(inputLng) ? inputLng : 105.8542;
      const newPin = {
        id: editingPinId,
        name,
        name_en: name_en || name,
        category,
        rarity,
        lat: finalLat,
        lng: finalLng,
        discovery_radius: discovery,
        interaction_radius: interaction,
        image_url: image_url,
        desc,
        desc_en: desc_en || desc,
        media_url: media,
        icon: iconMap[category] || "📍",
        hasLivingHistory: category === "living_history" || media.length > 0
      };
      appState.pins.push(newPin);
      showToast(currentLang === 'en' ? `✓ Successfully added landmark pin: "${name_en || name}"!` : `✓ Đã thêm Ghim mới: "${name}" thành công!`);
    }
    editingPinId = null;
  } else {
    if (isNaN(inputLat) || isNaN(inputLng)) {
      showToast(currentLang === 'en' ? "⚠️ Please enter valid coordinates (Latitude & Longitude)!" : "⚠️ Vui lòng nhập đúng tọa độ Vĩ độ và Kinh độ!");
      return;
    }
    finalLat = inputLat;
    finalLng = inputLng;
    const newPin = {
      id: `pin-${Date.now()}`,
      name,
      name_en: name_en || name,
      category,
      rarity,
      lat: finalLat,
      lng: finalLng,
      discovery_radius: discovery,
      interaction_radius: interaction,
      image_url: image_url,
      desc,
      desc_en: desc_en || desc,
      media_url: media,
      icon: iconMap[category] || "📍",
      hasLivingHistory: category === "living_history" || media.length > 0
    };

    appState.pins.push(newPin);
    showToast(currentLang === 'en' ? `✓ Successfully added new landmark pin: "${name_en || name}"!` : `✓ Đã thêm Ghim mới: "${name}" thành công!`);
  }

  saveState();
  saveToServerDataJSON();
  refreshAllViews();

  e.target.reset();

  const submitBtn = document.querySelector("#form-new-pin button[type='submit']");
  if (submitBtn) {
    submitBtn.innerText = `💾 ${currentLang === 'en' ? 'Save Radar Pin & Sync' : 'Lưu Ghim Bản Đồ & Đồng Bộ'}`;
  }

  const previewBox = document.getElementById("pin-image-preview-box");
  if (previewBox) previewBox.style.display = "none";

  // Switch to Map to view immediately
  const mapTabBtn = document.querySelector('[data-tab="tab-map"]');
  if (mapTabBtn) mapTabBtn.click();
  if (window.map && typeof map.setView === 'function' && !isNaN(finalLat) && !isNaN(finalLng)) {
    map.setView([finalLat, finalLng], 14);
  }
}

// ==========================================================================
// DYNAMIC MULTI-STORY ROWS IN ADD FIGURE FORM (UNLIMITED STORIES)
// ==========================================================================
function addFigureStoryRow(title = "", pinId = "", content = "", bgImage = "", title_en = "", content_en = "") {
  const container = document.getElementById("fig-stories-list-container");
  if (!container) return;

  const rowId = `fig-story-row-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
  const currentCount = container.children.length + 1;

  const pinOptions = appState.pins.map(p => {
    const pName = currentLang === 'en' ? (p.name_en || p.name) : p.name;
    return `<option value="${p.id}" ${p.id === pinId ? 'selected' : ''}>${p.icon || '📍'} ${pName}</option>`;
  }).join("");

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
      <div class="form-group">
        <label class="fig-story-lbl-title-vi">${t('cms_fig_story_title_vi_lbl')} <span class="req">*</span></label>
        <input type="text" class="form-input fig-story-input-title" placeholder="${t('cms_fig_story_title_ph')}" value="${title}">
      </div>
      <div class="form-group">
        <label class="fig-story-lbl-title-en">${t('cms_fig_story_title_en_lbl')}</label>
        <input type="text" class="form-input fig-story-input-title-en" placeholder="${t('cms_fig_story_title_en_ph')}" value="${title_en}">
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
      <div class="form-group">
        <label class="fig-story-lbl-content-vi">${t('cms_fig_story_content_vi_lbl')}</label>
        <textarea class="form-textarea fig-story-input-content" rows="3" placeholder="${t('cms_fig_story_content_ph')}">${content}</textarea>
      </div>
      <div class="form-group">
        <label class="fig-story-lbl-content-en">${t('cms_fig_story_content_en_lbl')}</label>
        <textarea class="form-textarea fig-story-input-content-en" rows="3" placeholder="${t('cms_fig_story_content_en_ph')}">${content_en}</textarea>
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

  const fName = currentLang === 'en' ? (fig.name_en || fig.name) : fig.name;
  document.getElementById("quick-story-figure-id").value = fig.id;
  document.getElementById("quick-story-figure-name").innerText = `${fig.avatar || '⚔️'} ${fName}`;
  document.getElementById("quick-story-title").value = "";
  if (document.getElementById("quick-story-title-en")) document.getElementById("quick-story-title-en").value = "";
  document.getElementById("quick-story-content").value = "";
  if (document.getElementById("quick-story-content-en")) document.getElementById("quick-story-content-en").value = "";
  
  const quickBg = document.getElementById("quick-story-bg");
  if (quickBg) quickBg.value = "";
  const quickPreview = document.getElementById("quick-story-bg-preview-box");
  if (quickPreview) quickPreview.style.display = "none";

  const pinSelect = document.getElementById("quick-story-pin");
  if (pinSelect) {
    pinSelect.innerHTML = appState.pins.map(p => {
      const pName = currentLang === 'en' ? (p.name_en || p.name) : p.name;
      return `<option value="${p.id}">${p.icon || '📍'} ${pName}</option>`;
    }).join("");
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
  const title_en = document.getElementById("quick-story-title-en") ? document.getElementById("quick-story-title-en").value.trim() : "";
  const pinId = document.getElementById("quick-story-pin").value;
  const content = document.getElementById("quick-story-content").value.trim();
  const content_en = document.getElementById("quick-story-content-en") ? document.getElementById("quick-story-content-en").value.trim() : "";
  const bgImage = document.getElementById("quick-story-bg") ? document.getElementById("quick-story-bg").value.trim() : "";
  const keepOpen = document.getElementById("quick-story-keep-open").checked;

  const fig = appState.figures.find(f => f.id === figureId);
  if (!fig || !title) return;

  const newStory = {
    id: `story-${Date.now()}`,
    name: title,
    name_en: title_en || title,
    figure_id: figureId,
    required_pin_id: pinId,
    is_locked: true,
    content: content || `Giai thoại oai hùng về ${fig.name}.`,
    content_en: content_en || (content ? content : `Epic historical tale of ${fig.name_en || fig.name}.`),
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

  const figName = currentLang === 'en' ? (fig.name_en || fig.name) : fig.name;
  const storyName = currentLang === 'en' ? (newStory.name_en || title) : title;
  showToast(currentLang === 'en' 
    ? `✓ Added Tale: "${storyName}" for ${figName}!` 
    : `✓ Đã thêm Giai thoại: "${title}" cho ${fig.name}!`);

  if (keepOpen) {
    document.getElementById("quick-story-title").value = "";
    if (document.getElementById("quick-story-title-en")) document.getElementById("quick-story-title-en").value = "";
    document.getElementById("quick-story-content").value = "";
    if (document.getElementById("quick-story-content-en")) document.getElementById("quick-story-content-en").value = "";
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
  if (!isManager()) {
    showToast(t('role_denied_toast'));
    openRoleModal();
    return;
  }
  const name = document.getElementById("fig-input-name").value.trim();
  const name_en = document.getElementById("fig-input-name-en") ? document.getElementById("fig-input-name-en").value.trim() : "";
  const role = document.getElementById("fig-input-role").value.trim();
  const role_en = document.getElementById("fig-input-role-en") ? document.getElementById("fig-input-role-en").value.trim() : "";
  const dynasty = document.getElementById("fig-input-dynasty").value.trim();
  const dynasty_en = document.getElementById("fig-input-dynasty-en") ? document.getElementById("fig-input-dynasty-en").value.trim() : "";
  const years = document.getElementById("fig-input-years").value.trim();
  const avatar = document.getElementById("fig-input-avatar").value;
  const image_url = document.getElementById("fig-input-image").value.trim();
  const background_image = document.getElementById("fig-input-bg") ? document.getElementById("fig-input-bg").value.trim() : "";
  const quote = document.getElementById("fig-input-quote").value.trim();
  const quote_en = document.getElementById("fig-input-quote-en") ? document.getElementById("fig-input-quote-en").value.trim() : "";
  const pin_id = document.getElementById("fig-input-pins").value;
  const bio = document.getElementById("fig-input-bio").value.trim();
  const bio_en = document.getElementById("fig-input-bio-en") ? document.getElementById("fig-input-bio-en").value.trim() : "";

  const newFigId = `fig-${Date.now()}`;
  const newFig = {
    id: newFigId,
    name,
    name_en: name_en || name,
    role,
    role_en: role_en || role,
    dynasty,
    dynasty_en: dynasty_en || dynasty,
    years,
    avatar,
    image_url,
    background_image,
    quote,
    quote_en: quote_en || quote,
    related_pins: pin_id ? [pin_id] : [],
    bio,
    bio_en: bio_en || bio
  };

  appState.figures.push(newFig);

  // Extract ALL stories from the dynamic multi-story rows!
  const storyRows = document.querySelectorAll("#fig-stories-list-container .fig-story-row");
  let addedStoriesCount = 0;
  storyRows.forEach((row, idx) => {
    const title = row.querySelector(".fig-story-input-title")?.value.trim();
    const title_en = row.querySelector(".fig-story-input-title-en")?.value.trim() || "";
    const pin = row.querySelector(".fig-story-input-pin")?.value;
    const content = row.querySelector(".fig-story-input-content")?.value.trim();
    const content_en = row.querySelector(".fig-story-input-content-en")?.value.trim() || "";
    const bg = row.querySelector(".fig-story-input-bg")?.value.trim() || "";

    if (title && title.length > 0) {
      const newStory = {
        id: `story-${Date.now()}-${idx}`,
        name: title,
        name_en: title_en || title,
        figure_id: newFigId,
        required_pin_id: pin || pin_id || (appState.pins[0]?.id || ""),
        is_locked: true,
        content: content || `Giai thoại oai hùng về ${name}.`,
        content_en: content_en || (content ? content : `Epic historical tale of ${name_en || name}.`),
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

  showToast(currentLang === 'en' 
    ? `✓ Created Hero "${newFig.name_en || name}" with ${addedStoriesCount} historical tales!` 
    : `✓ Đã tạo Danh nhân "${name}" cùng ${addedStoriesCount} giai thoại lịch sử!`);
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
  const name_en = document.getElementById("story-input-name-en") ? document.getElementById("story-input-name-en").value.trim() : "";
  const figure_id = document.getElementById("story-input-figure").value;
  const required_pin_id = document.getElementById("story-input-pin").value;
  const background_image = document.getElementById("story-input-bg") ? document.getElementById("story-input-bg").value.trim() : "";
  const content = document.getElementById("story-input-content").value.trim();
  const content_en = document.getElementById("story-input-content-en") ? document.getElementById("story-input-content-en").value.trim() : "";
  const keepOpen = document.getElementById("story-checkbox-continue")?.checked;

  const newStory = {
    id: `story-${Date.now()}`,
    name,
    name_en: name_en || name,
    figure_id,
    required_pin_id,
    is_locked: true,
    content,
    content_en: content_en || content,
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

  const displayName = currentLang === 'en' ? (newStory.name_en || name) : name;
  if (keepOpen) {
    document.getElementById("story-input-name").value = "";
    if (document.getElementById("story-input-name-en")) document.getElementById("story-input-name-en").value = "";
    document.getElementById("story-input-content").value = "";
    if (document.getElementById("story-input-content-en")) document.getElementById("story-input-content-en").value = "";
    if (document.getElementById("story-input-bg")) document.getElementById("story-input-bg").value = "";
    const bgBox = document.getElementById("story-bg-preview-box");
    if (bgBox) bgBox.style.display = "none";
    document.getElementById("story-input-name").focus();
    showToast(currentLang === 'en' 
      ? `✓ Added Tale: "${displayName}"! You can add another tale now.` 
      : `✓ Đã thêm Giai thoại: "${name}"! Bạn có thể nhập tiếp giai thoại khác ngay.`);
  } else {
    showToast(currentLang === 'en' 
      ? `✓ Created locked Tale: "${displayName}"!` 
      : `✓ Đã tạo Giai thoại khóa: "${name}"!`);
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
  const criteriaInputEn = document.getElementById("badge-input-criteria-en");
  if (!container) return;

  const rows = container.querySelectorAll(".badge-cond-row");
  const descsVi = [];
  const descsEn = [];

  rows.forEach(r => {
    const type = r.querySelector(".badge-cond-type-select").value;
    if (type === 'specific_figures') {
      const checkedBoxes = Array.from(r.querySelectorAll(".cond-fig-checkbox:checked"));
      const minCount = parseInt(r.querySelector(".cond-fig-min-count").value) || checkedBoxes.length || 1;
      if (checkedBoxes.length > 0) {
        const namesVi = checkedBoxes.map(cb => {
          const fig = (appState.figures || []).find(f => f.id === cb.value);
          return fig ? fig.name : cb.value;
        });
        const namesEn = checkedBoxes.map(cb => {
          const fig = (appState.figures || []).find(f => f.id === cb.value);
          return fig ? (fig.name_en || fig.name) : cb.value;
        });
        descsVi.push(`Khám phá ${minCount} Danh nhân: ${namesVi.join(", ")}`);
        descsEn.push(`Discover ${minCount} Heroes: ${namesEn.join(", ")}`);
      } else {
        descsVi.push(`Mở khóa các Danh nhân lịch sử được chọn`);
        descsEn.push(`Unlock selected historical figures`);
      }
    } else if (type === 'figures_count') {
      const num = parseInt(r.querySelector(".cond-figures-count-input").value) || 2;
      descsVi.push(`Khám phá và mở khóa ${num} Danh nhân lịch sử hào kiệt`);
      descsEn.push(`Discover and unlock ${num} heroic figures`);
    } else if (type === 'specific_pins') {
      const checkedBoxes = Array.from(r.querySelectorAll(".cond-pin-checkbox:checked"));
      const minCount = parseInt(r.querySelector(".cond-pin-min-count").value) || checkedBoxes.length || 1;
      if (checkedBoxes.length > 0) {
        const namesVi = checkedBoxes.map(cb => {
          const pin = (appState.pins || []).find(p => p.id === cb.value);
          return pin ? pin.name : cb.value;
        });
        const namesEn = checkedBoxes.map(cb => {
          const pin = (appState.pins || []).find(p => p.id === cb.value);
          return pin ? (pin.name_en || pin.name) : cb.value;
        });
        descsVi.push(`Check-in tại ${minCount} Địa danh: ${namesVi.join(", ")}`);
        descsEn.push(`Check in at ${minCount} Landmarks: ${namesEn.join(", ")}`);
      } else {
        descsVi.push(`Check-in tại các Địa danh di tích được chọn`);
        descsEn.push(`Check in at selected heritage landmarks`);
      }
    } else if (type === 'pins_count') {
      const num = parseInt(r.querySelector(".cond-pins-count-input").value) || 3;
      descsVi.push(`Check-in tại ${num} Địa danh / Di tích bất kỳ`);
      descsEn.push(`Check in at ${num} Landmarks / Sites`);
    } else if (type === 'people_count') {
      const num = parseInt(r.querySelector(".cond-people-count-input").value) || 1;
      descsVi.push(`Gặp gỡ và giao lưu với ${num} Nhân chứng sống / Ký ức`);
      descsEn.push(`Meet and interview ${num} Living Witnesses`);
    } else if (type === 'stories_count') {
      const num = parseInt(r.querySelector(".cond-stories-count-input").value) || 2;
      descsVi.push(`Mở khóa trọn vẹn ${num} Giai thoại lịch sử`);
      descsEn.push(`Unlock ${num} Historical Tales`);
    } else if (type === 'custom') {
      const val = r.querySelector(".cond-custom-desc-input").value.trim();
      if (val) {
        descsVi.push(val);
        descsEn.push(val);
      }
    }
  });

  if (criteriaInput && descsVi.length > 0) {
    criteriaInput.value = descsVi.join(" • ");
  }
  if (criteriaInputEn && descsEn.length > 0) {
    criteriaInputEn.value = descsEn.join(" • ");
  }
}

function handleCreateBadge(e) {
  e.preventDefault();
  if (!isManager()) {
    showToast(t('role_denied_toast'));
    openRoleModal();
    return;
  }
  const name = document.getElementById("badge-input-name").value.trim();
  const name_en = document.getElementById("badge-input-name-en") ? document.getElementById("badge-input-name-en").value.trim() : "";
  const tier = document.getElementById("badge-input-tier").value;
  const icon = document.getElementById("badge-input-icon").value;
  const category = document.getElementById("badge-input-cat").value.trim() || "Di sản";
  const category_en = document.getElementById("badge-input-cat-en") ? document.getElementById("badge-input-cat-en").value.trim() : "";
  const lore = document.getElementById("badge-input-lore") ? document.getElementById("badge-input-lore").value.trim() : "";
  const lore_en = document.getElementById("badge-input-lore-en") ? document.getElementById("badge-input-lore-en").value.trim() : "";
  const criteriaInput = document.getElementById("badge-input-criteria");
  const criteria = criteriaInput ? criteriaInput.value.trim() : "";
  const criteriaInputEn = document.getElementById("badge-input-criteria-en");
  const criteria_en = criteriaInputEn ? criteriaInputEn.value.trim() : "";
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
      desc: "",
      desc_en: ""
    };

    if (type === 'specific_figures') {
      const checkedBoxes = Array.from(r.querySelectorAll(".cond-fig-checkbox:checked"));
      condObj.target_figures = checkedBoxes.map(cb => cb.value);
      condObj.min_count = parseInt(r.querySelector(".cond-fig-min-count").value) || condObj.target_figures.length || 1;
      const namesVi = checkedBoxes.map(cb => {
        const fig = (appState.figures || []).find(f => f.id === cb.value);
        return fig ? fig.name : cb.value;
      });
      const namesEn = checkedBoxes.map(cb => {
        const fig = (appState.figures || []).find(f => f.id === cb.value);
        return fig ? (fig.name_en || fig.name) : cb.value;
      });
      condObj.desc = `Khám phá ${condObj.min_count} Danh nhân: ${namesVi.join(", ")}`;
      condObj.desc_en = `Discover ${condObj.min_count} Heroes: ${namesEn.join(", ")}`;
    } else if (type === 'figures_count') {
      condObj.target_num = parseInt(r.querySelector(".cond-figures-count-input").value) || 2;
      condObj.desc = `Khám phá và mở khóa ${condObj.target_num} Danh nhân lịch sử hào kiệt`;
      condObj.desc_en = `Discover and unlock ${condObj.target_num} heroic figures`;
    } else if (type === 'specific_pins') {
      const checkedBoxes = Array.from(r.querySelectorAll(".cond-pin-checkbox:checked"));
      condObj.target_pins = checkedBoxes.map(cb => cb.value);
      condObj.min_count = parseInt(r.querySelector(".cond-pin-min-count").value) || condObj.target_pins.length || 1;
      const namesVi = checkedBoxes.map(cb => {
        const pin = (appState.pins || []).find(p => p.id === cb.value);
        return pin ? pin.name : cb.value;
      });
      const namesEn = checkedBoxes.map(cb => {
        const pin = (appState.pins || []).find(p => p.id === cb.value);
        return pin ? (pin.name_en || pin.name) : cb.value;
      });
      condObj.desc = `Check-in tại ${condObj.min_count} Địa danh: ${namesVi.join(", ")}`;
      condObj.desc_en = `Check in at ${condObj.min_count} Landmarks: ${namesEn.join(", ")}`;
    } else if (type === 'pins_count') {
      condObj.target_num = parseInt(r.querySelector(".cond-pins-count-input").value) || 3;
      condObj.desc = `Check-in tại ${condObj.target_num} Địa danh / Di tích bất kỳ`;
      condObj.desc_en = `Check in at ${condObj.target_num} Landmarks / Sites`;
    } else if (type === 'people_count') {
      condObj.target_num = parseInt(r.querySelector(".cond-people-count-input").value) || 1;
      condObj.desc = `Gặp gỡ và giao lưu với ${condObj.target_num} Nhân chứng sống / Ký ức`;
      condObj.desc_en = `Meet and interview ${condObj.target_num} Living Witnesses`;
    } else if (type === 'stories_count') {
      condObj.target_num = parseInt(r.querySelector(".cond-stories-count-input").value) || 2;
      condObj.desc = `Mở khóa trọn vẹn ${condObj.target_num} Giai thoại lịch sử`;
      condObj.desc_en = `Unlock ${condObj.target_num} Historical Tales`;
    } else if (type === 'custom') {
      condObj.desc = r.querySelector(".cond-custom-desc-input").value.trim() || 'Mục tiêu tự do';
      condObj.desc_en = condObj.desc;
    }

    conditions.push(condObj);
  });

  const finalCriteria = criteria || conditions.map(c => c.desc).join(" • ") || "Yêu cầu mở khóa di sản";
  const finalCriteriaEn = criteria_en || conditions.map(c => c.desc_en || c.desc).join(" • ") || "Heritage unlock requirement";

  const newBadge = {
    id: `badge-${Date.now()}`,
    name,
    name_en: name_en || name,
    tier,
    icon,
    category,
    category_en: category_en || category,
    lore: lore || `Vinh danh người chơi đạt thành tựu di sản "${name}".`,
    lore_en: lore_en || `Honors explorers who have achieved the heritage milestone "${name_en || name}".`,
    criteria: finalCriteria,
    criteria_en: finalCriteriaEn,
    conditions: conditions.length > 0 ? conditions : [
      { id: `c-default`, type: "custom", desc: finalCriteria, desc_en: finalCriteriaEn }
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

  const badgeDisplayName = currentLang === 'en' ? (newBadge.name_en || name) : name;
  showToast(currentLang === 'en' ? `✓ Added new Badge: "${badgeDisplayName}"!` : `✓ Đã thêm Huy hiệu mới: "${name}"!`);
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
  if (!isManager()) {
    showToast(t('role_denied_toast'));
    openRoleModal();
    return;
  }
  if (!selectedPinForModal) return;
  const pin = selectedPinForModal;
  const pName = currentLang === 'en' ? (pin.name_en || pin.name) : pin.name;
  const confirmMsg = currentLang === 'en'
    ? `Are you sure you want to delete landmark pin "${pName}" from the map?`
    : `Bạn có chắc chắn muốn xóa Ghim "${pin.name}" khỏi bản đồ không?`;
  if (!confirm(confirmMsg)) return;

  appState.pins = appState.pins.filter(p => p.id !== pin.id);
  if (editingPinId === pin.id) {
    editingPinId = null;
    const pinForm = document.getElementById("form-new-pin");
    if (pinForm) pinForm.reset();
  }
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  closeModal();
  showToast(currentLang === 'en' ? `🗑️ Successfully deleted landmark pin "${pName}"!` : `🗑️ Đã xóa Ghim "${pin.name}" thành công!`);
}

// 2. Delete single items by ID
function deletePinById(id) {
  if (!isManager()) {
    showToast(t('role_denied_toast'));
    openRoleModal();
    return;
  }
  const pin = appState.pins.find(p => p.id === id);
  if (!pin) return;
  const pName = currentLang === 'en' ? (pin.name_en || pin.name) : pin.name;
  const confirmMsg = currentLang === 'en'
    ? `Confirm deletion of landmark pin: "${pName}"?`
    : `Xác nhận xóa Ghim: "${pin.name}"?`;
  if (!confirm(confirmMsg)) return;

  appState.pins = appState.pins.filter(p => p.id !== id);
  if (editingPinId === id) {
    editingPinId = null;
    const pinForm = document.getElementById("form-new-pin");
    if (pinForm) pinForm.reset();
  }
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  showToast(currentLang === 'en' ? `🗑️ Successfully deleted landmark pin "${pName}"!` : `🗑️ Đã xóa Ghim "${pin.name}"!`);
}

function deleteFigureById(id) {
  if (!isManager()) {
    showToast(t('role_denied_toast'));
    openRoleModal();
    return;
  }
  const fig = appState.figures.find(f => f.id === id);
  if (!fig) return;
  const fName = currentLang === 'en' ? (fig.name_en || fig.name) : fig.name;
  const confirmMsg = currentLang === 'en' ? `Confirm deletion of Hero: "${fName}"?` : `Xác nhận xóa Danh nhân: "${fig.name}"?`;
  if (!confirm(confirmMsg)) return;

  appState.figures = appState.figures.filter(f => f.id !== id);
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  showToast(currentLang === 'en' ? `🗑️ Successfully deleted Hero "${fName}"!` : `🗑️ Đã xóa Danh nhân "${fig.name}"!`);
}

function deleteStoryById(id) {
  if (!isManager()) {
    showToast(t('role_denied_toast'));
    openRoleModal();
    return;
  }
  const st = appState.stories.find(s => s.id === id);
  if (!st) return;
  const sTitle = currentLang === 'en' ? (st.name_en || st.name) : st.name;
  const confirmMsg = currentLang === 'en' ? `Confirm deletion of Tale: "${sTitle}"?` : `Xác nhận xóa Giai thoại: "${st.name}"?`;
  if (!confirm(confirmMsg)) return;

  appState.stories = appState.stories.filter(s => s.id !== id);
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  showToast(currentLang === 'en' ? `🗑️ Successfully deleted Tale "${sTitle}"!` : `🗑️ Đã xóa Giai thoại "${st.name}"!`);
}

function deleteBadgeById(id) {
  if (!isManager()) {
    showToast(t('role_denied_toast'));
    openRoleModal();
    return;
  }
  const bg = appState.badges.find(b => b.id === id);
  if (!bg) return;
  const bName = currentLang === 'en' ? (bg.name_en || bg.name) : bg.name;
  const confirmMsg = currentLang === 'en' ? `Confirm deletion of Badge: "${bName}"?` : `Xác nhận xóa Huy hiệu: "${bg.name}"?`;
  if (!confirm(confirmMsg)) return;

  appState.badges = appState.badges.filter(b => b.id !== id);
  saveState();
  saveToServerDataJSON();
  refreshAllViews();
  showToast(currentLang === 'en' ? `🗑️ Successfully deleted Badge "${bName}"!` : `🗑️ Đã xóa Huy hiệu "${bg.name}"!`);
}

// 3. Reset all data to clean initial state (wipe out test items)
function resetToInitialData() {
  if (!isManager()) {
    showToast(t('role_denied_toast'));
    openRoleModal();
    return;
  }
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
        const displayName = currentLang === 'en' ? (pin.name_en || pin.name) : pin.name;
        const subName = (currentLang === 'en' && pin.name) ? pin.name : (pin.name_en || '');
        html += `
          <tr>
            <td>
              <b>${pin.icon || '📍'} ${displayName}</b>
              ${subName && subName !== displayName ? `<div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${subName}</div>` : ''}
            </td>
            <td><span style="font-size:0.8rem; background:var(--neutral-100); padding:3px 8px; border-radius:4px;">${pin.category}</span></td>
            <td><span style="font-size:0.8rem; font-weight:600;">${pin.rarity}</span></td>
            <td style="font-family:monospace; font-size:0.8rem;">${Number(pin.lat).toFixed(4)}, ${Number(pin.lng).toFixed(4)}</td>
            <td style="font-size:0.8rem;">${t('manage_radius_scan')} ${pin.discovery_radius}m / ${t('manage_radius_reach')} ${pin.interaction_radius}m</td>
            <td style="text-align:right;">
              ${isManager()
                ? `<button type="button" class="btn-edit-row" onclick="loadPinToForm('${pin.id}')">✏️ ${t('role_btn_edit_pin')}</button><button type="button" class="btn-delete-row" onclick="deletePinById('${pin.id}')">${t('manage_tbl_delete')}</button>`
                : `<span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">${t('role_readonly_status')}</span>`
              }
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
        const figName = currentLang === 'en' ? (fig.name_en || fig.name) : fig.name;
        const figSub = (currentLang === 'en' && fig.name) ? fig.name : (fig.name_en || '');
        const roleName = currentLang === 'en' ? (fig.role_en || fig.role || '—') : (fig.role || '—');
        const dynastyName = currentLang === 'en' ? (fig.dynasty_en || fig.dynasty || '—') : (fig.dynasty || '—');
        html += `
          <tr>
            <td>
              <b>${fig.avatar || '⚔️'} ${figName}</b>
              ${figSub && figSub !== figName ? `<div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${figSub}</div>` : ''}
            </td>
            <td>${roleName}</td>
            <td>${dynastyName}</td>
            <td style="text-align:right;">
              ${isManager()
                ? `<button class="btn-delete-row" onclick="deleteFigureById('${fig.id}')">${t('manage_tbl_delete')}</button>`
                : `<span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">${t('role_readonly_status')}</span>`
              }
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
        const stTitle = currentLang === 'en' ? (st.name_en || st.name) : st.name;
        const stSub = (currentLang === 'en' && st.name) ? st.name : (st.name_en || '');
        const figName = fig ? (currentLang === 'en' ? (fig.name_en || fig.name) : fig.name) : '—';
        const pinName = pin ? (currentLang === 'en' ? (pin.name_en || pin.name) : pin.name) : '—';
        html += `
          <tr>
            <td>
              <b>${stTitle}</b>
              ${stSub && stSub !== stTitle ? `<div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${stSub}</div>` : ''}
            </td>
            <td>${figName}</td>
            <td>${pinName}</td>
            <td><span style="font-size:0.8rem; color:${st.is_locked ? '#e67e22' : '#27ae60'};">${st.is_locked ? t('manage_tbl_locked') : t('manage_tbl_unlocked')}</span></td>
            <td style="text-align:right;">
              ${isManager()
                ? `<button class="btn-delete-row" onclick="deleteStoryById('${st.id}')">${t('manage_tbl_delete')}</button>`
                : `<span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">${t('role_readonly_status')}</span>`
              }
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

        const bName = currentLang === 'en' ? (bg.name_en || bg.name) : bg.name;
        const bSub = (currentLang === 'en' && bg.name) ? bg.name : (bg.name_en || '');
        const bCat = currentLang === 'en' ? (bg.category_en || bg.category || 'Heritage') : (bg.category || 'Di sản');
        const bCriteria = currentLang === 'en' ? (bg.criteria_en || bg.criteria || '') : (bg.criteria || '');

        html += `
          <tr>
            <td>
              <div style="display:flex; align-items:center; gap:8px; cursor:pointer;" onclick="openBadgeDetailsModal('${bg.id}')" title="${clickTitle}">
                <span style="font-size:1.4rem;">${bg.icon || '🏅'}</span>
                <div>
                  <b style="color:var(--primary);">${bName}</b>
                  ${bSub && bSub !== bName ? `<div style="font-size:0.72rem; color:var(--text-muted); font-weight:normal;">${bSub}</div>` : ''}
                  <div style="font-size:0.75rem; color:var(--text-muted);">${bCat}</div>
                </div>
              </div>
            </td>
            <td><span class="badge-tag badge-${bg.tier || 'bronze'}" style="font-size:0.72rem; padding:3px 8px;">${(bg.tier || 'bronze').toUpperCase()}</span></td>
            <td style="font-size:0.82rem; max-width:280px;">
              <div>${bCriteria}</div>
              <div style="font-size:0.75rem; color:var(--accent-camel); font-weight:600; margin-top:3px;">
                ${progressLabel}
              </div>
            </td>
            <td>
              ${isManager()
                ? `<button class="btn-secondary" style="font-size:0.76rem; padding:4px 10px; cursor:pointer;" onclick="toggleBadgeUnlock('${bg.id}')" title="${toggleTitle}">${toggleLabel}</button>`
                : `<span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">${bg.is_unlocked ? '✓ ' + (currentLang==='en'?'Owned':'Đã nhận') : '🔒 ' + (currentLang==='en'?'Locked':'Chưa nhận')}</span>`
              }
            </td>
            <td style="text-align:right;">
              ${isManager()
                ? `<button class="btn-delete-row" onclick="deleteBadgeById('${bg.id}')">${t('manage_tbl_delete')}</button>`
                : `<span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">${t('role_readonly_status')}</span>`
              }
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

// ==========================================================================
// PROJECT CHECKPOINTS & BACKUP SNAPSHOTS SYSTEM
// ==========================================================================
const LOCAL_SNAPSHOTS_KEY = "legacy_keepers_local_snapshots";

function escapeHTML(str) {
  if (!str) return '';
  return String(str).replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

function getLocalSnapshots() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_SNAPSHOTS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveLocalSnapshots(list) {
  try {
    localStorage.setItem(LOCAL_SNAPSHOTS_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn("Storage quota exceeded or unavailable:", e);
  }
}

function formatSnapshotDateTime(dateInput) {
  const d = dateInput ? new Date(dateInput) : new Date();
  if (isNaN(d.getTime())) return String(dateInput || '');
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} — ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

async function renderSnapshotsList() {
  const container = document.getElementById("snapshots-table-wrap");
  const countBadge = document.getElementById("snapshot-count-badge");
  if (!container) return;

  container.innerHTML = `<div style="padding:24px; text-align:center; color:var(--text-muted);"><div class="spinner" style="margin:0 auto 10px; width:28px; height:28px; border:3px solid var(--neutral-300); border-top-color:var(--primary); border-radius:50%; animation:spin 1s linear infinite;"></div>Đang tải danh sách bản save...</div>`;

  let serverList = [];
  try {
    const res = await fetch("/api/list_snapshots");
    if (res.ok) {
      serverList = await res.json();
    }
  } catch (e) {
    // offline fallback
  }

  const localList = getLocalSnapshots();

  // Merge server and local snapshots by id or timestamp
  const mapSnap = new Map();
  serverList.forEach(s => mapSnap.set(s.id || s.timestamp, { ...s, source: 'server' }));
  localList.forEach(s => {
    const key = s.id || s.timestamp;
    if (!mapSnap.has(key)) {
      mapSnap.set(key, { ...s, source: 'local' });
    }
  });

  const combinedList = Array.from(mapSnap.values()).sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));

  if (countBadge) countBadge.innerText = combinedList.length;

  if (combinedList.length === 0) {
    container.innerHTML = `
      <div style="padding:36px 16px; text-align:center; color:var(--text-muted); background:#fff; border:1px dashed var(--neutral-300); border-radius:8px;">
        <div style="font-size:2.2rem; margin-bottom:8px;">💾</div>
        <p style="font-weight:600; font-size:1rem; color:var(--primary-dark); margin-bottom:4px;">${t('snap_empty')}</p>
        <span style="font-size:0.84rem;">Hãy nhập ghi chú và bấm <b>Tạo Điểm Phục Hồi Mới</b> để tạo bản checkpoint an toàn!</span>
      </div>
    `;
    return;
  }

  let html = `
    <table class="cms-table" style="width:100%; border-collapse:collapse; background:#fff; border-radius:8px; overflow:hidden; box-shadow:var(--shadow-xs); border:1px solid var(--neutral-200);">
      <thead>
        <tr style="background:var(--neutral-100); text-align:left; font-size:0.85rem; color:var(--primary-dark); border-bottom:1.5px solid var(--neutral-300);">
          <th style="padding:12px 14px; width:180px;">${t('snap_tbl_time')}</th>
          <th style="padding:12px 14px;">${t('snap_tbl_name')}</th>
          <th style="padding:12px 14px; width:240px;">${t('snap_tbl_data')}</th>
          <th style="padding:12px 14px; width:190px; text-align:center;">${t('snap_tbl_action')}</th>
        </tr>
      </thead>
      <tbody>
  `;

  combinedList.forEach(snap => {
    const formattedDate = formatSnapshotDateTime(snap.timestamp) || snap.humanTime || snap.timestamp;
    const snapId = snap.id || snap.folderName || snap.folder_name || '';
    const counts = snap.counts || (snap.dataSummary ? {
      pins: snap.dataSummary.pinsCount || 0,
      figures: snap.dataSummary.figuresCount || 0,
      stories: snap.dataSummary.storiesCount || 0,
      badges: snap.dataSummary.badgesCount || 0
    } : {
      pins: snap.data?.pins?.length || (snapId ? '✓' : 0),
      figures: snap.data?.figures?.length || (snapId ? '✓' : 0),
      stories: snap.data?.stories?.length || (snapId ? '✓' : 0),
      badges: snap.data?.badges?.length || (snapId ? '✓' : 0)
    });

    html += `
      <tr style="border-bottom:1px solid var(--neutral-200); font-size:0.86rem;">
        <td style="padding:12px 14px; color:var(--text-muted); font-size:0.82rem; font-family:monospace;">
          <b style="color:var(--primary-dark);">🕒 ${formattedDate}</b>
          <div style="margin-top:3px;"><span style="font-size:0.7rem; padding:2px 6px; border-radius:4px; font-weight:600; background:${snap.source === 'server' ? '#E8F5E9' : '#FFF9C4'}; color:${snap.source === 'server' ? '#2E7D32' : '#F57F17'};">${snap.source === 'server' ? '📁 Ổ Đĩa (_backups)' : '🌐 Bộ Nhớ Web'}</span></div>
        </td>
        <td style="padding:12px 14px;">
          <strong style="color:var(--primary-dark); font-size:0.94rem;">${escapeHTML(snap.note || 'Bản Snapshot')}</strong>
          <div style="font-size:0.76rem; color:var(--text-muted); margin-top:3px; font-family:monospace;">Mã: ${escapeHTML(snapId)}</div>
        </td>
        <td style="padding:12px 14px;">
          <div style="display:flex; gap:6px; flex-wrap:wrap; font-size:0.75rem;">
            <span style="background:#f4eee7; padding:3px 6px; border-radius:4px; font-weight:500;">📍 ${counts.pins} Pin</span>
            <span style="background:#f4eee7; padding:3px 6px; border-radius:4px; font-weight:500;">👑 ${counts.figures} Nhân vật</span>
            <span style="background:#f4eee7; padding:3px 6px; border-radius:4px; font-weight:500;">📖 ${counts.stories} Truyện</span>
            <span style="background:#f4eee7; padding:3px 6px; border-radius:4px; font-weight:500;">🏅 ${counts.badges} Huy hiệu</span>
          </div>
        </td>
        <td style="padding:12px 14px; text-align:center;">
          <div style="display:flex; gap:6px; justify-content:center;">
            <button type="button" class="btn-primary" style="padding:5px 10px; font-size:0.8rem; background:#388E3C; border-color:#2E7D32;" onclick="restoreAppSnapshot('${snapId}')" title="${t('snap_btn_restore')}">
              ${t('snap_btn_restore')}
            </button>
            <button type="button" class="btn-secondary" style="padding:5px 8px; font-size:0.8rem;" onclick="downloadSnapshotJSON('${snapId}')" title="${t('snap_btn_download')}">
              📥
            </button>
            <button type="button" class="btn-secondary" style="padding:5px 8px; font-size:0.8rem; color:#d32f2f;" onclick="deleteAppSnapshot('${snapId}')" title="Xóa bản save">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}

async function createAppSnapshot(customNote = "") {
  const noteInput = document.getElementById("snapshot-note-input");
  const now = new Date();
  const stampLabel = formatSnapshotDateTime(now);
  const rawNote = customNote || (noteInput ? noteInput.value.trim() : "") || "Bản checkpoint";
  const note = rawNote.includes(stampLabel.slice(0, 5)) ? rawNote : `${rawNote} [${stampLabel}]`;

  const snapshotId = `snapshot_${Date.now()}`;
  const snapshotData = {
    id: snapshotId,
    timestamp: now.toISOString(),
    humanTime: stampLabel,
    note: note,
    counts: {
      pins: appState.pins.length,
      figures: appState.figures.length,
      stories: appState.stories.length,
      badges: appState.badges.length
    },
    data: {
      pins: JSON.parse(JSON.stringify(appState.pins)),
      figures: JSON.parse(JSON.stringify(appState.figures)),
      stories: JSON.parse(JSON.stringify(appState.stories)),
      badges: JSON.parse(JSON.stringify(appState.badges)),
      userProfile: typeof userProfile !== 'undefined' ? JSON.parse(JSON.stringify(userProfile)) : null
    }
  };

  // 1. Save to localStorage
  const localList = getLocalSnapshots();
  localList.unshift(snapshotData);
  if (localList.length > 25) localList.pop(); // Keep top 25
  saveLocalSnapshots(localList);

  // 2. Send to backend server to create disk snapshot in _backups/
  try {
    await fetch("/api/create_snapshot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note: note, id: snapshotId })
    });
  } catch (e) {
    console.warn("Server save error:", e);
  }

  if (noteInput) noteInput.value = "";
  showToast(t('snap_toast_created'));
  renderSnapshotsList();
}

function triggerQuickSave() {
  const stampLabel = formatSnapshotDateTime(new Date());
  const defaultNote = `Lưu nhanh [${stampLabel}]`;
  createAppSnapshot(defaultNote);
}

async function restoreAppSnapshot(snapshotId) {
  if (!confirm(t('snap_confirm_restore'))) return;

  // Find snapshot in local or server
  let snap = getLocalSnapshots().find(s => s.id === snapshotId);

  if (!snap) {
    try {
      const res = await fetch("/api/list_snapshots");
      if (res.ok) {
        const list = await res.json();
        snap = list.find(s => s.id === snapshotId);
      }
    } catch (e) {}
  }

  if (snap && snap.data) {
    if (snap.data.pins) appState.pins = JSON.parse(JSON.stringify(snap.data.pins));
    if (snap.data.figures) appState.figures = JSON.parse(JSON.stringify(snap.data.figures));
    if (snap.data.stories) appState.stories = JSON.parse(JSON.stringify(snap.data.stories));
    if (snap.data.badges) appState.badges = JSON.parse(JSON.stringify(snap.data.badges));
    if (snap.data.userProfile && typeof userProfile !== 'undefined') {
      userProfile = JSON.parse(JSON.stringify(snap.data.userProfile));
      localStorage.setItem("legacy_keepers_profile", JSON.stringify(userProfile));
    }

    saveState();
    if (typeof saveToServerDataJSON === 'function') {
      saveToServerDataJSON();
    }
  }

  // Also call backend to restore data.json from backup folder if server available
  try {
    await fetch("/api/restore_snapshot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: snapshotId, folder_name: snap?.folder_name || "" })
    });
  } catch (e) {}

  refreshAllViews();
  renderSnapshotsList();
  showToast(t('snap_toast_restored'));
}

function downloadSnapshotJSON(snapshotId) {
  const snap = getLocalSnapshots().find(s => s.id === snapshotId);
  const dataToDownload = snap?.data || {
    pins: appState.pins,
    figures: appState.figures,
    stories: appState.stories,
    badges: appState.badges,
    userProfile: typeof userProfile !== 'undefined' ? userProfile : null
  };

  const jsonStr = JSON.stringify(dataToDownload, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `legacy_keepers_${snapshotId || 'checkpoint'}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function deleteAppSnapshot(snapshotId) {
  if (!confirm(t('snap_confirm_delete'))) return;
  const list = getLocalSnapshots().filter(s => s.id !== snapshotId);
  saveLocalSnapshots(list);
  renderSnapshotsList();
  showToast("Đã xóa bản save khỏi bộ nhớ web!");
}
