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
    modal_btn_checkin_dist: "Check-in (Khoảng cách còn ",
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
    role_pass_ph: "Nhập mật khẩu Manager (mặc định: admin)",
    role_btn_verify: "Xác nhận Manager",
    role_btn_quick_demo: "⚡ Bật Nhanh (Demo 1 chạm)",
    role_err_pass: "Mật khẩu Manager không chính xác! (Gợi ý: 'admin')",
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
    modal_btn_checkin_dist: "Check-in (Distance remaining: ",
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
    role_pass_ph: "Enter Manager passcode (default: admin)",
    role_btn_verify: "Verify Manager",
    role_btn_quick_demo: "⚡ Quick Demo (1-Click)",
    role_err_pass: "Incorrect Manager passcode! (Hint: 'admin')",
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
  document.querySelectorAll('.lang-btn, .mob-lang-btn').forEach(btn => {
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
  pins: [
    {
      id: "pin-thanglong",
      name: "Hoàng thành Thăng Long",
      name_en: "Imperial Citadel of Thang Long",
      category: "landmark",
      rarity: "legendary",
      lat: 21.0345600,
      lng: 105.8407400,
      discovery_radius: 20000,
      interaction_radius: 50,
      icon: "🏛️",
      desc: "Di tích quốc gia đặc biệt, nơi phát hiệu ứng hào quang Aura Pulse toàn vùng. Trung tâm quyền lực suốt hơn 13 thế kỷ từ thời Tiền Thăng Long đến triều Lý, Trần, Lê.",
      desc_en: "A UNESCO World Heritage Site and Special National Relic, emitting an aura across the realm. The epic political power center for over 13 consecutive centuries through the Ly, Tran, and Le dynasties.",
      image_url: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80",
      hasLivingHistory: false
    },
    {
      id: "pin-bachdang",
      name: "Khu di tích Chiến thắng Bạch Đằng",
      name_en: "Bach Dang Victory Historic Site",
      category: "battlefield",
      rarity: "legendary",
      lat: 20.9168000,
      lng: 106.6667000,
      discovery_radius: 25000,
      interaction_radius: 100,
      icon: "⚔️",
      desc: "Chiến trường xưa với 3 lần đánh bại quân xâm lược phương Bắc bằng kế sách cắm cọc hiểm yếu dưới lòng sông của Ngô Quyền, Lê Hoàn và Trần Hưng Đạo.",
      desc_en: "Legendary historical battlefield where northern invaders were crushed three times using ingenious sunken wooden stake traps in the riverbed by Ngo Quyen, Le Hoan, and Tran Hung Dao.",
      image_url: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=800&q=80",
      hasLivingHistory: true
    },
    {
      id: "pin-ham-bietdong",
      name: "Căn hầm bí mật chứa vũ khí Biệt động Sài Gòn",
      name_en: "Secret Underground Weapons Depot of Saigon Commandos",
      category: "living_history",
      rarity: "uncommon",
      lat: 10.7769000,
      lng: 106.6953000,
      discovery_radius: 6000,
      interaction_radius: 80,
      icon: "🎙️",
      desc: "Nơi cất giấu gần 2 tấn súng đạn, chất nổ của lực lượng Biệt động Sài Gòn ngay giữa lòng đô thành phục vụ cuộc Tổng tiến công Tết Mậu Thân 1968.",
      desc_en: "The secret hideout storing nearly 2 tons of firearms and explosives used by the Saigon Special Action Commandos right in the heart of Saigon during the 1968 Tet Offensive.",
      image_url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      hasLivingHistory: true
    },
    {
      id: "pin-ben-nharong",
      name: "Bến Nhà Rồng - Bảo tàng Hồ Chí Minh",
      name_en: "Nha Rong Wharf - Ho Chi Minh Museum",
      category: "landmark",
      rarity: "legendary",
      lat: 10.7684000,
      lng: 106.7068000,
      discovery_radius: 20000,
      interaction_radius: 50,
      icon: "🏛️",
      desc: "Nơi người thanh niên yêu nước Nguyễn Tất Thành ra đi tìm đường cứu nước vào ngày 5/6/1911 trên con tàu Amiral Latouche-Tréville.",
      desc_en: "The historic riverfront where the patriotic young man Nguyen Tat Thanh embarked on his journey across the world aboard the Amiral Latouche-Treville on June 5, 1911 to seek national salvation.",
      image_url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
      hasLivingHistory: true
    },
    {
      id: "pin-dongda",
      name: "Công viên Văn hóa Đống Đa",
      name_en: "Dong Da Cultural Park",
      category: "battlefield",
      rarity: "uncommon",
      lat: 21.0152000,
      lng: 105.8239000,
      discovery_radius: 7000,
      interaction_radius: 80,
      icon: "⚔️",
      desc: "Địa danh ghi dấu chiến công vang dội của Hoàng đế Quang Trung đại phá 29 vạn quân Mãn Thanh mùa xuân năm Kỷ Dậu 1789.",
      desc_en: "The historic battleground marking Emperor Quang Trung's thunderous victory, completely routing 290,000 Qing imperial invaders during the Spring of 1789 (Year of the Rooster).",
      hasLivingHistory: false
    },
    {
      id: "pin-hatmon",
      name: "Đền thờ Hai Bà Trưng (Hát Môn)",
      name_en: "Hai Ba Trung Temple (Hat Mon)",
      category: "landmark",
      rarity: "legendary",
      lat: 21.1354000,
      lng: 105.5786000,
      discovery_radius: 15000,
      interaction_radius: 60,
      icon: "🏛️",
      desc: "Nơi Hai Bà Trưng tế cờ khởi nghĩa và đọc 4 lời thề cứu nước son sắt trước khi xuất quân trừng trị giặc Tô Định.",
      desc_en: "The sacred shrine where the Trung Sisters raised the rebellion flag and declared the four solemn patriotic oaths before marching off to defeat the Han colonial governor To Dinh.",
      hasLivingHistory: false
    }
  ],

  figures: [
    {
      id: "fig-tranquoctuan",
      name: "Hưng Đạo Đại Vương - Trần Quốc Tuấn",
      name_en: "Supreme Prince Tran Quoc Tuan (Tran Hung Dao)",
      role: "Quốc công Tiết chế (Tổng tư lệnh quân đội)",
      role_en: "Supreme Commander of Dai Viet Forces",
      dynasty: "Nhà Trần",
      dynasty_en: "Tran Dynasty",
      years: "1228 – 1300",
      avatar: "⚔️",
      image_url: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80",
      background_image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      quote: "Nếu bệ hạ muốn hàng, xin hãy chém đầu thần trước rồi hãy hàng!",
      quote_en: "If your Majesty wishes to surrender, please cut off my head first!",
      bio: "Anh hùng dân tộc, thiên tài quân sự kiệt xuất ba lần chỉ huy quân dân Đại Việt đánh tan quân Nguyên Mông hung hãn, tác giả của bản 'Hịch Tướng Sĩ' truyền đời non sông.",
      bio_en: "Legendary national hero and military genius who led the Dai Viet army and people to defeat the fierce Mongol Yuan invasions three times, and authored the immortal martial proclamation 'Hich Tuong Si'.",
      related_pins: ["pin-bachdang", "pin-thanglong"]
    },
    {
      id: "fig-quangtrung",
      name: "Quang Trung - Nguyễn Huệ",
      name_en: "Emperor Quang Trung (Nguyen Hue)",
      role: "Hoàng đế bách chiến bách thắng",
      role_en: "Invincible Emperor & Commander",
      dynasty: "Nhà Tây Sơn",
      dynasty_en: "Tay Son Dynasty",
      years: "1753 – 1792",
      avatar: "👑",
      image_url: "",
      background_image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      quote: "Đánh cho để dài tóc, đánh cho để đen răng, đánh cho nó chích luân bất phản, phiến giáp bất hoàn!",
      quote_en: "Fight to keep our long hair, fight to keep our black teeth, fight so that not a single enemy chariot returns, nor a piece of armor remains whole!",
      bio: "Người anh hùng áo vải cờ đào kiệt xuất, đánh tan 5 vạn quân Xiêm rạch Gầm Xoài Mút và thần tốc vượt hơn 600km quét sạch 29 vạn quân Mãn Thanh chỉ trong vài ngày Tết Kỷ Dậu 1789.",
      bio_en: "Brilliant peasant-turned-emperor who crushed 50,000 Siamese invaders at Rach Gam - Xoai Mut and executed an unprecedented 600km lightning march to route 290,000 Qing imperial troops in the Spring of 1789.",
      related_pins: ["pin-dongda"]
    },
    {
      id: "fig-haibatrung",
      name: "Hai Bà Trưng (Trưng Trắc & Trưng Nhị)",
      name_en: "The Trung Sisters (Trung Trac & Trung Nhi)",
      role: "Nữ vương phất cờ độc lập",
      role_en: "Revolutionary Queens of Independence",
      dynasty: "Nhà Trưng",
      dynasty_en: "Trung Dynasty",
      years: "Năm 40 – 43 SCN",
      avatar: "🛡️",
      image_url: "",
      background_image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      quote: "Một xin rửa sạch nước thù / Hai xin đem lại nghiệp xưa họ Hùng!",
      quote_en: "First, avenge our country's grievance; Second, restore the ancient heritage of the Hung Kings!",
      bio: "Hai nữ anh hùng dân tộc đầu tiên phất cờ khởi nghĩa, thu phục 65 thành trì, đánh đuổi thái thú Tô Định, giành lại độc lập tự chủ cho non sông sau hơn 200 năm Bắc thuộc.",
      bio_en: "The first female national heroes to raise the banner of rebellion, liberating 65 citadels and driving out the foreign governor To Dinh to reclaim national sovereignty after more than two centuries of northern domination.",
      related_pins: ["pin-hatmon"]
    }
  ],

  stories: [
    {
      id: "story-camcoc",
      name: "Kế sách cắm cọc sông Bạch Đằng",
      name_en: "The Sunken Wooden Stakes Strategy on Bach Dang River",
      figure_id: "fig-tranquoctuan",
      required_pin_id: "pin-bachdang",
      is_locked: false,
      background_image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      content: `Năm 1288, trước thế giặc Nguyên Mông hung hãn rút lui bằng đường thủy, Trần Quốc Tuấn đã lợi dụng con nước thủy triều hiểm yếu của sông Bạch Đằng.\n\nÔng cho đẵn gỗ lim, vót nhọn bịt sắt rồi cắm xuống lòng sông. Nhân lúc nước triều dâng che khuất bãi cọc, quân ta nhử thuyền giặc vào sâu. Khi nước triều rút mạnh, thuyền địch mắc cạn vào cọc nhọn vỡ toác hàng loạt, toàn bộ hạm đội giặc bị tiêu diệt vang dội non sông.`,
      content_en: `In 1288, faced with the retreating Mongol-Yuan navy, Tran Quoc Tuan masterminded an ambush along the Bach Dang River.\n\nHe had sharpened iron-capped ironwood stakes driven into the riverbed. At high tide, our light boats lured the enemy fleet past the submerged stakes. When the tide rapidly ebbed, the massive enemy warships were impaled and trapped upon the timber spikes, leading to the complete annihilation of the invading armada.`
    },
    {
      id: "story-dienhong",
      name: "Hội nghị Diên Hồng & Lời thề Sát Thát",
      name_en: "The Dien Hong Conference & The Sat That Oath",
      figure_id: "fig-tranquoctuan",
      required_pin_id: "pin-thanglong",
      is_locked: true,
      background_image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      content: `Tại thềm điện Diên Hồng, vua Trần mở tiệc hỏi ý kiến muôn dân: 'Nên hòa hay nên đánh?'. Muôn người cùng muôn miệng reo hò rung chuyển kinh thành: 'ĐÁNH!'.\n\nCác tướng sĩ đồng lòng thích hai chữ 'Sát Thát' vào cánh tay, thề quyết tử cho Tổ quốc quyết sinh.`,
      content_en: `At the steps of Dien Hong Palace, the Tran Emperor convened elders from across the kingdom asking: 'Shall we make peace or shall we fight?'. With one voice, thousands shouted 'FIGHT!', shaking the citadel.\n\nThe commanders and warriors tattooed 'Sat That' (Slay the Invaders) onto their arms, swearing to fight to the death for the homeland.`
    },
    {
      id: "story-hanhquan-thantoc",
      name: "Cuộc hành quân thần tốc mùa xuân Kỷ Dậu",
      name_en: "The Lightning March of Spring 1789",
      figure_id: "fig-quangtrung",
      required_pin_id: "pin-dongda",
      is_locked: true,
      background_image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
      content: `Từ Phú Xuân ra Thăng Long dài hơn 600km, vua Quang Trung tổ chức đội hình 3 người một cáng, 2 người khiêng 1 người ngủ luân phiên ngày đêm không nghỉ.\n\nĐoàn quân thần tốc vừa đi vừa tuyển thêm tân binh, tạo nên cuộc hành quân kỳ tích vô tiền khoáng hậu khiến tướng giặc Tôn Sĩ Nghị không kịp trở tay.`,
      content_en: `Spanning over 600 kilometers from Phu Xuan to Thang Long, Emperor Quang Trung organized troops into three-man hammock teams, with two carrying while one rested in continuous day-and-night shifts.\n\nEnlisting recruits along the march, this unprecedented tactical feat caught Qing general Sun Shiyi completely off guard.`
    },
    {
      id: "story-ngochoi-dongda",
      name: "Trận đại thắng Ngọc Hồi - Đống Đa",
      name_en: "The Great Victory of Ngoc Hoi - Dong Da",
      figure_id: "fig-quangtrung",
      required_pin_id: "pin-dongda",
      is_locked: true,
      background_image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&w=800&q=80",
      content: `Rạng sáng mùng 5 Tết Kỷ Dậu, vua Quang Trung cho quân lấy thuyền nan bọc rơm ướt khiêng đi trước che đạn lửa của giặc, áp sát đồn Ngọc Hồi phá tan tuyến phòng thủ kiên cố nhất của địch.`,
      content_en: `At dawn on the 5th day of Tet 1789, Emperor Quang Trung spearheaded an assault using wood rafts shielded with wet straw to deflect flaming enemy cannons, breaching Ngoc Hoi fortress and dismantling the enemy's most fortified defensive line.`
    },
    {
      id: "story-loithe-songhat",
      name: "Lời thề trên sông Hát",
      name_en: "The Sacred Oath on the Hat River",
      figure_id: "fig-haibatrung",
      required_pin_id: "pin-hatmon",
      is_locked: true,
      background_image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      content: `Trước giờ xuất trận tại cửa sông Hát, Trưng Trắc dõng dạc tuyên thệ 4 câu thề:\n\n'Một xin rửa sạch nước thù\nHai xin đem lại nghiệp xưa họ Hùng\nBa kẻo oan ức lòng chồng\nBốn xin vẹn vẹn sở công lênh này.'`,
      content_en: `Prior to marching into battle at the mouth of the Hat River, Trung Trac proclaimed the four historic oaths:\n\n'First, cleanse our land of the enemy's stain,\nSecond, restore the Hung clan's ancestral reign,\nThird, avenge the wrongful death of my spouse,\nFourth, fulfill this vow that we hereby espouse.'`
    }
  ],

  badges: [
    {
      id: "badge-bachdang",
      name: "Kỵ Sĩ Sông Bạch Đằng",
      name_en: "Knight of Bach Dang River",
      tier: "gold",
      icon: "🎖️",
      category: "Người chinh phục lịch sử",
      category_en: "Historical Conqueror",
      lore: "Vinh danh những bước chân tìm về dòng sông Bạch Đằng lịch sử – nơi ba lần ghi dấu chiến công hiển hách của cha ông, đánh tan quân Nam Hán và Nguyên Mông bằng kế sách cắm cọc tài tình.",
      lore_en: "Honors travelers to the historic Bach Dang River – where three naval victories crushed foreign invasions with brilliant submerged iron-tipped stake tactics.",
      criteria: "Check-in thành công tại Di tích Bạch Đằng và mở khóa kế sách cắm cọc.",
      criteria_en: "Check in at Bach Dang Historic Site and unlock the timber stakes strategy.",
      conditions: [
        {
          id: "c-bachdang-1",
          type: "specific_pins",
          target_pins: ["pin-bachdang"],
          min_count: 1,
          desc: "Check-in thực địa tại Khu di tích Bạch Đằng",
          desc_en: "On-site check-in at Bach Dang Historic Relic"
        }
      ],
      is_unlocked: true,
      unlocked_date: "05/11/2026"
    },
    {
      id: "badge-thanglong",
      name: "Hào Khí Thăng Long",
      name_en: "Spirit of Thang Long",
      tier: "gold",
      icon: "🏛️",
      category: "Người chinh phục lịch sử",
      category_en: "Historical Conqueror",
      lore: "Biểu trưng cho tinh thần bất khuất của kinh đô ngàn năm văn hiến, nơi từng vang vọng tiếng hô 'ĐÁNH!' đồng lòng muôn người như một trong Hội nghị Diên Hồng oanh liệt.",
      lore_en: "Symbolizes the indomitable spirit of Hanoi's thousand-year-old imperial citadel, where the iconic cry 'FIGHT!' united the people in the historic Dien Hong Conference.",
      criteria: "Ghé thăm Hoàng thành Thăng Long và khám phá hội nghị Diên Hồng.",
      criteria_en: "Visit the Imperial Citadel of Thang Long and discover the Dien Hong Conference.",
      conditions: [
        {
          id: "c-thanglong-1",
          type: "specific_pins",
          target_pins: ["pin-thanglong"],
          min_count: 1,
          desc: "Ghé thăm và check-in tại Hoàng thành Thăng Long",
          desc_en: "Visit and check in at the Imperial Citadel of Thang Long"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-bacho",
      name: "Dấu Chân Bác Hồ",
      name_en: "Footsteps of Uncle Ho",
      tier: "silver",
      icon: "🐾",
      category: "Khám phá Việt Nam",
      category_en: "Exploring Vietnam",
      lore: "Kỷ niệm ngày 5/6/1911 khi người thanh niên yêu nước Nguyễn Tất Thành rời Bến Nhà Rồng ra đi tìm đường cứu nước, mở ra con đường độc lập tự do cho non sông đất Việt.",
      lore_en: "Commemorates June 5, 1911, when young patriot Nguyen Tat Thanh departed Nha Rong Harbor on his legendary global quest for national independence.",
      criteria: "Check-in Bến Nhà Rồng và lắng nghe tư liệu hành trình cứu nước 1911.",
      criteria_en: "Check in at Nha Rong Wharf and listen to the 1911 salvation journey recordings.",
      conditions: [
        {
          id: "c-bacho-1",
          type: "specific_pins",
          target_pins: ["pin-ben-nharong"],
          min_count: 1,
          desc: "Check-in thực địa tại Bến Nhà Rồng",
          desc_en: "On-site check-in at Nha Rong Wharf"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-saigon",
      name: "Trái Tim Sài Gòn",
      name_en: "Heart of Saigon",
      tier: "bronze",
      icon: "🎙️",
      category: "Nhân chứng sống",
      category_en: "Living Witnesses",
      lore: "Tôn vinh lòng quả cảm phi thường của lực lượng Biệt động Sài Gòn, những người đã mưu trí đào hầm cất giấu vũ khí ngay giữa lòng địch chuẩn bị cho cuộc Tổng tiến công Tết Mậu Thân 1968.",
      lore_en: "Honors the extraordinary valor of Saigon Rangers, who covertly built weapons bunkers in the heart of the city for the historic 1968 Tet Offensive.",
      criteria: "Check-in tại Căn hầm bí mật Biệt động Sài Gòn và nghe lời kể nhân chứng.",
      criteria_en: "Check in at Saigon Commandos secret bunker and hear witness testimonies.",
      conditions: [
        {
          id: "c-saigon-1",
          type: "specific_pins",
          target_pins: ["pin-ham-bietdong"],
          min_count: 1,
          desc: "Ghé thăm Căn hầm bí mật Biệt động Sài Gòn",
          desc_en: "Visit the Saigon Commandos secret weapons bunker"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-anh-hung-hoi-ngo",
      name: "Hội Ngộ Hào Kiệt",
      name_en: "Gathering of Heroes",
      tier: "silver",
      icon: "👑",
      category: "Hào Khí Danh Nhân",
      category_en: "Heroic Spirits",
      lore: "Minh chứng cho người lữ khách đã giải mã và học hỏi tấm gương của 2 vị anh hùng dân tộc, tiếp nối khí phách quật cường của tiền nhân.",
      lore_en: "Awarded to explorers who have discovered and unlocked 2 legendary Vietnamese historical heroes.",
      criteria: "Khám phá và mở khóa 2 Danh nhân lịch sử hào kiệt bất kỳ.",
      criteria_en: "Discover and unlock any 2 legendary historical figures.",
      conditions: [
        {
          id: "c-hoi-ngo-1",
          type: "figures_count",
          target_num: 2,
          desc: "Mở khóa 2 Danh nhân lịch sử bất kỳ",
          desc_en: "Unlock any 2 historical heroes"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-su-thi-bach-nien",
      name: "Đại Nam Liệt Truyện",
      name_en: "Chronicles of Dai Nam",
      tier: "gold",
      icon: "📜",
      category: "Hào Khí Danh Nhân",
      category_en: "Heroic Spirits",
      lore: "Bản trường ca lịch sử sống động được khắc ghi khi người chơi thấu suốt trọn vẹn cả 3 vị đại anh hùng dân tộc: Hưng Đạo Đại Vương Trần Quốc Tuấn, Hoàng đế Quang Trung và Hai Bà Trưng.",
      lore_en: "An epic milestone achieved when discovering all 3 legendary national heroes: Tran Hung Dao, Emperor Quang Trung, and the Trung Sisters.",
      criteria: "Khám phá trọn vẹn 3 Danh nhân: Trần Hưng Đạo, Quang Trung và Hai Bà Trưng.",
      criteria_en: "Discover all 3 heroes: Tran Hung Dao, Emperor Quang Trung, and the Trung Sisters.",
      conditions: [
        {
          id: "c-su-thi-1",
          type: "specific_figures",
          target_figures: ["fig-tranquoctuan", "fig-quangtrung", "fig-haibatrung"],
          min_count: 3,
          desc: "Khám phá 3 Danh nhân: Trần Quốc Tuấn, Quang Trung và Hai Bà Trưng",
          desc_en: "Discover 3 Heroes: Tran Quoc Tuan, Quang Trung, and Hai Ba Trung"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-nguoi-giu-lua",
      name: "Người Giữ Lửa Lịch Sử",
      name_en: "Keeper of History's Flame",
      tier: "silver",
      icon: "🎙️",
      category: "Nhân Chứng Sống",
      category_en: "Living Witnesses",
      lore: "Ghi nhận sự kết nối thiêng liêng giữa thế hệ hôm nay với các nhân chứng lịch sử và cựu chiến binh, những người trực tiếp trải qua khói lửa để giữ gìn nền độc lập non sông.",
      lore_en: "Recognizes the sacred bond between modern youth and living history witnesses who fought through warfare to safeguard the nation.",
      criteria: "Gặp gỡ và lắng nghe chia sẻ từ 1 Nhân chứng lịch sử / Cựu chiến binh.",
      criteria_en: "Meet and interview 1 living witness / war veteran.",
      conditions: [
        {
          id: "c-giu-lua-1",
          type: "people_count",
          target_num: 1,
          desc: "Check-in điểm có tư liệu Nhân chứng sống / Cựu chiến binh",
          desc_en: "Check in at a site with Living Witness / War Veteran testimony"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-tieng-vong-thoi-gian",
      name: "Tiếng Vọng Thời Gian",
      name_en: "Echoes of Time",
      tier: "gold",
      icon: "🎖️",
      category: "Nhân Chứng Sống",
      category_en: "Living Witnesses",
      lore: "Vinh danh nhà thám hiểm đã giao lưu và lắng nghe ký ức chân thực nhất từ 2 nhân chứng lịch sử sống, đưa những ký ức vô giá vượt thời gian đến với đời sau.",
      lore_en: "Honors explorers who have engaged with 2 living history witnesses, keeping priceless wartime memories alive across generations.",
      criteria: "Giao lưu và check-in với 2 Nhân chứng sống / Người kể chuyện lịch sử.",
      criteria_en: "Check-in and listen to testimonies from 2 living history witnesses.",
      conditions: [
        {
          id: "c-tieng-vong-1",
          type: "people_count",
          target_num: 2,
          desc: "Check-in tại 2 điểm có Nhân chứng sống / Ký ức cựu chiến binh",
          desc_en: "Check in at 2 sites with Living Witnesses / Veteran memories"
        }
      ],
      is_unlocked: false
    },
    {
      id: "badge-dau-chan-di-san",
      name: "Nhà Thám Hiểm Non Sông",
      name_en: "Realm Explorer",
      tier: "bronze",
      icon: "🗺️",
      category: "Khám Phá Di Sản",
      category_en: "Heritage Explorer",
      lore: "Chiếc huân chương đồng trao tặng cho bước chân kiên trì chu du khắp 3 địa danh lịch sử, nối dài dải đất hình chữ S bằng niềm tự hào dân tộc.",
      lore_en: "Awarded to devoted explorers who have journeyed to at least 3 historical landmarks across Vietnam.",
      criteria: "Hành trình thám hiểm và check-in tại 3 Địa danh / Di tích lịch sử.",
      criteria_en: "Journey to and check in at 3 historical heritage landmarks.",
      conditions: [
        {
          id: "c-dau-chan-1",
          type: "pins_count",
          target_num: 3,
          desc: "Check-in tại 3 Địa danh / Di tích bất kỳ",
          desc_en: "Check in at any 3 historical landmarks"
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
// System Role & Permission System (Default: 'demo_user' for new visitors so pins are visible, 'manager', 'user')
let currentUserRole = localStorage.getItem("legacy_keepers_user_role") || "demo_user";
if (currentUserRole === "admin") currentUserRole = "manager";
let editingPinId = null;

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

  // Tự động kiểm tra file data.json nếu server đang chạy
  reloadFromDataJSON(false);
});

// ==========================================================================
// NAVIGATION & TABS (SYNCS DESKTOP SIDEBAR & MOBILE BOTTOM NAV)
// ==========================================================================
function switchTab(targetTab) {
  if (!targetTab) return;

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

function openRoleModal() {
  const modal = document.getElementById("role-modal");
  if (!modal) return;
  modal.classList.add("active");

  const isMgr = isManager();
  const isDemo = isDemoUser();
  const isReal = isRealUser();

  const userCard = document.getElementById("card-role-user");
  const demoCard = document.getElementById("card-role-demo");
  const managerCard = document.getElementById("card-role-manager") || document.getElementById("card-role-admin");
  const currentNameDisplay = document.getElementById("role-current-name-display");
  const passBox = document.getElementById("manager-passcode-box") || document.getElementById("admin-passcode-box");
  const passInput = document.getElementById("manager-passcode-input") || document.getElementById("admin-passcode-input");

  if (managerCard) managerCard.classList.toggle("active", isMgr);
  if (demoCard) demoCard.classList.toggle("active", isDemo);
  if (userCard) userCard.classList.toggle("active", isReal);

  // Cập nhật text trạng thái nút trên từng thẻ
  const btnMgr = document.getElementById("btn-activate-admin");
  const btnDemo = document.getElementById("btn-activate-demo");
  const btnUser = document.getElementById("btn-activate-user");
  if (btnMgr) btnMgr.innerText = isMgr ? t("role_status_active_mgr") : t("role_btn_switch_manager");
  if (btnDemo) btnDemo.innerText = isDemo ? t("role_status_active_demo") : t("role_btn_switch_demo");
  if (btnUser) btnUser.innerText = isReal ? t("role_status_active_user") : t("role_btn_switch_user");

  let curTitle = t("role_user");
  if (isMgr) curTitle = t("role_manager");
  else if (isDemo) curTitle = t("role_demo_user");

  if (currentNameDisplay) currentNameDisplay.innerText = curTitle;
  if (passBox) passBox.style.display = "none";
  if (passInput) passInput.value = "";
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

  // Update userCoords
  userCoords[0] = parseFloat((userCoords[0] + deltaLat).toFixed(7));
  userCoords[1] = parseFloat((userCoords[1] + deltaLng).toFixed(7));

  // 5. Update marker & accuracy circle smoothly
  if (playerRadarMarker) {
    playerRadarMarker.setLatLng(userCoords);
  } else {
    updatePlayerRadarMarker();
  }
  if (playerAccuracyCircle) {
    playerAccuracyCircle.setLatLng(userCoords);
  }

  // Update GPS display coordinate text
  const gpsCoordsDisplay = document.getElementById("gps-coords-display");
  if (gpsCoordsDisplay) {
    gpsCoordsDisplay.innerText = `${userCoords[0].toFixed(4)}, ${userCoords[1].toFixed(4)}`;
  }

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
    showToast(t("role_denied_toast"));
    openRoleModal();
    return;
  }
  const pinId = selectedPinForModal.id;
  closeModal();
  loadPinToForm(pinId);
}

function loadPinToForm(pinId) {
  if (!isManager()) {
    showToast(t("role_denied_toast"));
    openRoleModal();
    return;
  }

  const pin = appState.pins.find(p => p.id === pinId);
  if (!pin) return;

  editingPinId = pin.id;
  switchToInputTab("subtab-pins");

  setTimeout(() => {
    if (document.getElementById("pin-input-name")) document.getElementById("pin-input-name").value = pin.name || "";
    if (document.getElementById("pin-input-name-en")) document.getElementById("pin-input-name-en").value = pin.name_en || "";
    if (document.getElementById("pin-input-type")) document.getElementById("pin-input-type").value = pin.category || "landmark";
    if (document.getElementById("pin-input-rarity")) document.getElementById("pin-input-rarity").value = pin.rarity || "common";
    if (document.getElementById("pin-input-lat")) document.getElementById("pin-input-lat").value = pin.lat || "";
    if (document.getElementById("pin-input-lng")) document.getElementById("pin-input-lng").value = pin.lng || "";
    if (document.getElementById("pin-input-discovery-radius")) document.getElementById("pin-input-discovery-radius").value = pin.discovery_radius || 2000;
    if (document.getElementById("pin-input-interaction-radius")) document.getElementById("pin-input-interaction-radius").value = pin.interaction_radius || 100;
    if (document.getElementById("pin-input-image")) document.getElementById("pin-input-image").value = pin.image_url || "";
    if (document.getElementById("pin-input-desc")) document.getElementById("pin-input-desc").value = pin.desc || "";
    if (document.getElementById("pin-input-desc-en")) document.getElementById("pin-input-desc-en").value = pin.desc_en || "";
    if (document.getElementById("pin-input-media")) document.getElementById("pin-input-media").value = pin.media_url || "";

    const submitBtn = document.querySelector("#form-new-pin button[type='submit']");
    if (submitBtn) {
      submitBtn.innerText = `💾 ${currentLang === 'en' ? 'Update Landmark Pin' : 'Cập Nhật Địa Danh Di Sản'}`;
    }

    showToast(`✏️ ${currentLang === 'en' ? `Editing: "${pin.name_en || pin.name}"` : `Đang chỉnh sửa: "${pin.name}"`}`);
  }, 120);
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

// Standards Rarity Distances matching Thiết kế.docx
// Discovery Radius (tầm phủ sóng để Pin xuất hiện trên radar) & Interaction Radius (tầm check-in)
const RARITY_SPECS = {
  common: {
    discoveryRadius: 5000,     // 5.0 km - Phủ kín trung tâm Thăng Long & Đống Đa
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

  const gpsCoordsDisplay = document.getElementById("gps-coords-display");
  if (gpsCoordsDisplay) {
    gpsCoordsDisplay.innerText = `${userCoords[0].toFixed(4)}, ${userCoords[1].toFixed(4)}`;
  }
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
 * - Manager: Thấy tất cả pin trên bản đồ (toàn quốc, mọi khoảng cách)
 * - Demo User: Không thấy pin ở xa (chỉ thấy trong tầm radar discovery_radius, hoặc đã check-in)
 * - Real User: Không thấy pin đâu (chỉ thấy khi đã đến tận nơi trong interaction_radius hoặc đã check-in)
 */
function isPinVisibleForRole(pin, distToPin, isCheckedIn) {
  if (isManager()) {
    return true; // Manager: Thấy tất cả pin
  }
  if (isDemoUser()) {
    const spec = RARITY_SPECS[pin.rarity] || RARITY_SPECS.common;
    const discoveryRadius = pin.discovery_radius || spec.discoveryRadius || 2000;
    return isCheckedIn || distToPin <= discoveryRadius;
  }
  if (isRealUser()) {
    const spec = RARITY_SPECS[pin.rarity] || RARITY_SPECS.common;
    const interactionRadius = pin.interaction_radius || spec.interactionRadius || 100;
    return isCheckedIn || distToPin <= interactionRadius;
  }
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

  const filtered = filter === "all" ? appState.pins : appState.pins.filter(p => p.category === filter);
  let visibleCount = 0;

  filtered.forEach(pin => {
    const spec = RARITY_SPECS[pin.rarity] || RARITY_SPECS.common;
    const interactionRadius = pin.interaction_radius || spec.interactionRadius;

    // Khoảng cách thực tế từ người chơi đến Pin
    const distToPin = getDistanceMeters(userCoords[0], userCoords[1], pin.lat, pin.lng);
    const isCheckedIn = Array.isArray(appState.profile?.checked_in_pins) && appState.profile.checked_in_pins.includes(pin.id);

    // Lọc theo vai trò & khoảng cách:
    // Manager: thấy hết
    // Demo user: ở xa không thấy
    // User GPS: không thấy pin đâu trừ khi đứng ngay điểm check-in hoặc đã check-in
    if (!isPinVisibleForRole(pin, distToPin, isCheckedIn)) {
      return;
    }
    visibleCount++;

    // Tính chính xác bán kính pixel của phạm vi check-in ở mức zoom hiện tại
    const checkinPx = getPixelRadius(pin.lat, pin.lng, interactionRadius);

    // 1. VÒNG RANH GIỚI CHECK-IN (INTERACTION RADIUS) - CHUẨN TỶ LỆ MÉT THỰC TẾ
    // Dùng L.circle để vẽ đường viền ranh giới cố định của phạm vi check-in (40m - 150m)
    const interactionCircle = L.circle([pin.lat, pin.lng], {
      radius: interactionRadius,
      color: isCheckedIn ? '#2E7D32' : (isWithinCheckinReach ? '#27AE60' : spec.color),
      weight: isCheckedIn ? 2 : (isWithinCheckinReach ? 2.5 : 1.8),
      dashArray: (isCheckedIn || isWithinCheckinReach) ? 'none' : '4, 4',
      fillColor: isCheckedIn ? '#C8E6C9' : (isWithinCheckinReach ? '#A5D6A7' : spec.fillColor),
      fillOpacity: isCheckedIn ? 0.22 : (isWithinCheckinReach ? 0.35 : 0.14),
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

    const heritageIcon = L.divIcon({
      className: 'heritage-pin-leaflet-icon',
      html: `
        <div class="heritage-pin-container ${rarityClass} ${pulseClass} ${isCheckedIn ? 'is-checked-in' : ''}" style="--checkin-px: ${checkinPx}px; --pulse-color: ${pulseColor};">
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
      iconSize: [36, 36],
      iconAnchor: [18, 18]
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

  // Cập nhật số đếm pin hiển thị theo vai trò
  const countAll = document.getElementById("count-all");
  if (countAll) {
    countAll.innerText = isManager() ? appState.pins.length : visibleCount;
  }

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
  document.getElementById("modal-checkin-radius").innerText = `${pin.interaction_radius || 50} ${t('modal_checkin_radius_unit')}`;
  
  // Rarity Tag Styling
  const rarityMap = {
    common: { label: t('modal_rarity_common'), bg: "var(--neutral-200)", color: "var(--text-primary)" },
    uncommon: { label: t('modal_rarity_uncommon'), bg: "#A8D1E2", color: "#152B34" },
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
  const canCheckIn = dist <= (pin.interaction_radius || 50);

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
      if (iconEl) iconEl.innerText = "🚩";
      label.innerText = t('modal_btn_checkin_ready');
    } else {
      btn.className = "btn-checkin-action distance-out";
      if (iconEl) iconEl.innerText = "📍";
      label.innerText = currentLang === 'en'
        ? `Check-in (${distText} remaining)`
        : `${t('modal_btn_checkin_dist')}${distText})`;
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

  // 2. Chống hack khoảng cách (phải nằm trong bán kính interaction_radius)
  const dist = getDistanceMeters(userCoords[0], userCoords[1], pin.lat, pin.lng);
  if (dist > (pin.interaction_radius || 50)) {
    showToast(t('modal_toast_out_of_range'));
    return;
  }

  // 3. Ghi nhận check-in vào profile và lịch sử chi tiết
  appState.profile.checked_in_pins.push(pin.id);
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
            <button class="btn-primary" style="font-size:0.82rem; padding:5px 12px;" onclick="openQuickStoryModal('${fig.id}')">${currentLang === 'en' ? '+ Add New Tale' : '+ Thêm Giai Thoại Mới'}</button>
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
            <button class="btn-primary" style="font-size:0.82rem; padding:5px 12px;" onclick="openQuickStoryModal('${fig.id}')">${currentLang === 'en' ? '+ Add First Tale' : '+ Thêm Giai Thoại Đầu Tiên'}</button>
          </div>
          <p style="font-size:0.88rem; color:var(--text-muted); font-style:italic;">${currentLang === 'en' ? 'No tales linked to this hero yet. Click the button above to add one!' : 'Chưa có giai thoại nào liên kết với danh nhân này. Bạn có thể bấm nút trên để thêm mới!'}</p>
        </div>
      `;
    }

    // Hero Header markup (Supports atmospheric background cover or clean card)
    const hasHeroBg = fig.background_image && fig.background_image.trim().length > 0;
    const heroHeaderMarkup = hasHeroBg ? `
      <div class="figure-hero-backdrop" style="background-image: url('${fig.background_image.trim()}');">
        <div class="hero-backdrop-actions">
          <label class="btn-hero-bg-action" title="${currentLang === 'en' ? 'Choose new background cover from computer' : 'Bấm để chọn ảnh nền bối cảnh mới từ máy tính'}">
            📷 ${currentLang === 'en' ? 'Change Backdrop' : 'Đổi ảnh nền'}
            <input type="file" accept="image/*" onchange="changeFigureBackgroundDirect(event, '${fig.id}')" style="display:none;">
          </label>
          <button type="button" class="btn-hero-bg-action-remove" title="${currentLang === 'en' ? 'Remove this background' : 'Xóa ảnh nền này'}" onclick="removeFigureBackgroundDirect('${fig.id}')">
            ✕ ${currentLang === 'en' ? 'Remove' : 'Xóa nền'}
          </button>
        </div>
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
        <div class="hero-backdrop-actions" style="top:0; right:0;">
          <label class="btn-hero-bg-action" style="background:var(--bg-secondary); color:var(--primary-dark); border-color:var(--accent-gold);" title="${currentLang === 'en' ? 'Add heroic background cover for this figure' : 'Bấm để thêm ảnh nền bối cảnh hào hùng cho danh nhân này'}">
            🖼️ + ${currentLang === 'en' ? 'Add Backdrop Cover' : 'Thêm ảnh nền bối cảnh'}
            <input type="file" accept="image/*" onchange="changeFigureBackgroundDirect(event, '${fig.id}')" style="display:none;">
          </label>
        </div>
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

      <!-- Actions Footer -->
      <div style="margin-top:20px; padding-top:16px; border-top:1px dashed var(--neutral-300); display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; color:var(--text-muted);">${currentLang === 'en' ? 'Hero ID:' : 'Mã danh nhân:'} ${fig.id}</span>
        <button class="btn-secondary" style="color:#e53e3e; border-color:#feb2b2; font-size:0.82rem; padding:5px 12px; cursor:pointer;" onclick="deleteFigureById('${fig.id}')">🗑️ ${currentLang === 'en' ? 'Delete This Hero' : 'Xóa Danh Nhân Này'}</button>
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
    statusText.innerText = `✓ ${t('badge_unlocked_status')} (${badge.unlocked_date || (currentLang === 'en' ? 'Recently' : 'Gần đây')})`;
    statusProg.innerText = currentLang === 'en' ? 'Completed 100%' : 'Hoàn thành 100%';
  } else {
    statusBanner.className = "badge-modal-status-banner locked";
    statusText.innerText = `🔒 ${t('badge_locked_status')} (${prog.percent}%)`;
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
          <span>🎯 ${t('badge_req_title')}</span>
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
        ? `<div class="badge-status-pill unlocked">✓ ${t('badge_unlocked_status')} (${b.unlocked_date || (currentLang === 'en' ? 'Recently' : 'Gần đây')})</div>` 
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
  const levelTitle = currentLang === 'en' ? 'HERITAGE KNIGHT' : 'KỴ SĨ DI SẢN';
  const levelPrefix = currentLang === 'en' ? 'LEVEL' : 'CẤP';
  document.getElementById("profile-level-badge").innerText = `${levelPrefix} ${p.level} • ${levelTitle}`;
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
    const visitedPins = (appState.pins || []).filter(p => checkedPinIds.includes(p.id) || p.isVisited);

    if (tagEl) tagEl.innerText = currentLang === 'en' ? '🏛️ CHECKED-IN LOCATIONS' : '🏛️ ĐỊA DANH ĐÃ CHECK-IN';
    if (titleEl) titleEl.innerText = `${t('stat_modal_pins_title')} (${visitedPins.length})`;
    if (descEl) descEl.innerText = t('stat_modal_pins_desc');

    if (visitedPins.length === 0) {
      listEl.innerHTML = `
        <div style="text-align:center; padding:36px 16px;">
          <div style="font-size:2.8rem; margin-bottom:10px;">🗺️</div>
          <strong style="color:var(--primary-dark); font-size:1.05rem;">${t('stat_modal_empty_pins')}</strong>
          <p style="color:var(--text-muted); font-size:0.85rem; margin-top:8px;">
            ${currentLang === 'en' ? 'Patrol the map and walk near pins to check-in and unlock history!' : 'Hãy bật Radar và di chuyển tới gần các mốc di tích để check-in và mở khóa lịch sử!'}
          </p>
          <button class="btn-primary" style="margin-top:14px;" onclick="closeProfileStatModal(); switchTab('tab-map');">
            🧭 ${t('nav_map')}
          </button>
        </div>
      `;
    } else {
      listEl.innerHTML = visitedPins.map(pin => {
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
    const unlockedStories = (appState.stories || []).filter(s => !s.is_locked);

    if (tagEl) tagEl.innerText = currentLang === 'en' ? '📖 UNLOCKED STORIES' : '📖 GIAI THOẠI ĐÃ MỞ KHÓA';
    if (titleEl) titleEl.innerText = `${t('stat_modal_stories_title')} (${unlockedStories.length})`;
    if (descEl) descEl.innerText = t('stat_modal_stories_desc');

    if (unlockedStories.length === 0) {
      listEl.innerHTML = `
        <div style="text-align:center; padding:36px 16px;">
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
      listEl.innerHTML = unlockedStories.map(story => {
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
    const unlockedBadges = (appState.badges || []).filter(b => b.is_unlocked);

    if (tagEl) tagEl.innerText = currentLang === 'en' ? '🏅 EARNED BADGES' : '🏅 HUY HIỆU SỞ HỮU';
    if (titleEl) titleEl.innerText = `${t('stat_modal_badges_title')} (${unlockedBadges.length})`;
    if (descEl) descEl.innerText = t('stat_modal_badges_desc');

    if (unlockedBadges.length === 0) {
      listEl.innerHTML = `
        <div style="text-align:center; padding:36px 16px;">
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
      listEl.innerHTML = unlockedBadges.map(b => {
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
    const p = appState.profile;
    const km = p.km_traveled || 12.5;
    const checkedCount = (p.checked_in_pins && p.checked_in_pins.length) || 3;
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
  const lat = parseFloat(document.getElementById("pin-input-lat").value);
  const lng = parseFloat(document.getElementById("pin-input-lng").value);
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

  const newPin = {
    id: `pin-${Date.now()}`,
    name,
    name_en: name_en || name,
    category,
    rarity,
    lat,
    lng,
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
  saveState();
  saveToServerDataJSON();
  refreshAllViews();

  showToast(currentLang === 'en' ? `✓ Successfully added new landmark pin: "${name_en || name}"!` : `✓ Đã thêm Ghim mới: "${name}" thành công!`);
  e.target.reset();

  const previewBox = document.getElementById("pin-image-preview-box");
  if (previewBox) previewBox.style.display = "none";

  // Switch to Map to view immediately
  document.querySelector('[data-tab="tab-map"]').click();
  map.setView([lat, lng], 14);
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
    const dateObj = new Date(snap.timestamp);
    const formattedDate = !isNaN(dateObj.getTime()) ? dateObj.toLocaleString(currentLang === 'vi' ? 'vi-VN' : 'en-US') : snap.timestamp;
    const counts = snap.counts || {
      pins: snap.data?.pins?.length || (snap.folder_name ? '✓' : 0),
      figures: snap.data?.figures?.length || (snap.folder_name ? '✓' : 0),
      stories: snap.data?.stories?.length || (snap.folder_name ? '✓' : 0),
      badges: snap.data?.badges?.length || (snap.folder_name ? '✓' : 0)
    };

    html += `
      <tr style="border-bottom:1px solid var(--neutral-200); font-size:0.86rem;">
        <td style="padding:12px 14px; color:var(--text-muted); font-size:0.82rem; font-family:monospace;">
          <b>${formattedDate}</b>
          <div style="margin-top:3px;"><span style="font-size:0.7rem; padding:2px 6px; border-radius:4px; font-weight:600; background:${snap.source === 'server' ? '#E8F5E9' : '#FFF9C4'}; color:${snap.source === 'server' ? '#2E7D32' : '#F57F17'};">${snap.source === 'server' ? '📁 Ổ Đĩa (_backups)' : '🌐 Bộ Nhớ Web'}</span></div>
        </td>
        <td style="padding:12px 14px;">
          <strong style="color:var(--primary-dark); font-size:0.94rem;">${escapeHTML(snap.note || 'Bản Snapshot')}</strong>
          <div style="font-size:0.76rem; color:var(--text-muted); margin-top:3px; font-family:monospace;">Mã: ${escapeHTML(snap.id || snap.folder_name)}</div>
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
            <button type="button" class="btn-primary" style="padding:5px 10px; font-size:0.8rem; background:#388E3C; border-color:#2E7D32;" onclick="restoreAppSnapshot('${snap.id}')" title="${t('snap_btn_restore')}">
              ${t('snap_btn_restore')}
            </button>
            <button type="button" class="btn-secondary" style="padding:5px 8px; font-size:0.8rem;" onclick="downloadSnapshotJSON('${snap.id}')" title="${t('snap_btn_download')}">
              📥
            </button>
            <button type="button" class="btn-secondary" style="padding:5px 8px; font-size:0.8rem; color:#d32f2f;" onclick="deleteAppSnapshot('${snap.id}')" title="Xóa bản save">
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
  const note = customNote || (noteInput ? noteInput.value.trim() : "") || `Bản checkpoint ${new Date().toLocaleTimeString('vi-VN')}`;

  const snapshotId = `snapshot_${Date.now()}`;
  const snapshotData = {
    id: snapshotId,
    timestamp: new Date().toISOString(),
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
  const defaultNote = `Lưu nhanh trước chỉnh sửa (${new Date().toLocaleTimeString('vi-VN')})`;
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
