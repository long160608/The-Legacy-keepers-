/**
 * ==========================================================================
 * THE LEGACY KEEPERS - CLIENT ENGINE
 * Handles: State management, Leaflet Radar map, 10m Sweep Animation,
 * Concentric Circular Pin Ripples, Input Portal forms, Check-in mechanisms,
 * and LocalStorage persistence.
 * ==========================================================================
 */

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
      criteria: "Check-in thành công tại Di tích Bạch Đằng và mở khóa kế sách cắm cọc.",
      is_unlocked: true,
      unlocked_date: "05/11/2026"
    },
    {
      id: "badge-thanglong",
      name: "Hào Khí Thăng Long",
      tier: "gold",
      icon: "🏛️",
      category: "Người chinh phục lịch sử",
      criteria: "Ghé thăm Hoàng thành Thăng Long và khám phá hội nghị Diên Hồng.",
      is_unlocked: false
    },
    {
      id: "badge-bacho",
      name: "Dấu Chân Bác Hồ",
      tier: "silver",
      icon: "🐾",
      category: "Khám phá Việt Nam",
      criteria: "Check-in Bến Nhà Rồng và lắng nghe tư liệu hành trình cứu nước 1911.",
      is_unlocked: false
    },
    {
      id: "badge-saigon",
      name: "Trái Tim Sài Gòn",
      tier: "bronze",
      icon: "🎙️",
      category: "Khám phá Việt Nam",
      criteria: "Check-in tại Căn hầm bí mật Biệt động Sài Gòn và nghe lời kể nhân chứng.",
      is_unlocked: false
    }
  ],

  profile: {
    name: "Người Giữ Gìn Di Sản #001",
    username: "@heritage_seeker",
    level: 2,
    exp: 250,
    maxExp: 500,
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
        appState.badges = data.badges || [];
        if (data.profile) {
          appState.profile = { ...appState.profile, ...data.profile };
        }
        saveState();
        refreshAllViews();
        if (showToastMsg) {
          showToast("✅ Đã nạp thành công toàn bộ dữ liệu từ file data.json!");
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

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initNavigation();
  initInputSubTabs();
  initLeafletMap();
  refreshAllViews();
  initFigureStoryRows();

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

  // Unlock linked story
  let unlockedStoryName = "";
  appState.stories.forEach(st => {
    if (st.required_pin_id === pin.id && st.is_locked) {
      st.is_locked = false;
      unlockedStoryName = st.name;
    }
  });

  // Unlock linked badge
  let unlockedBadgeName = "";
  appState.badges.forEach(bg => {
    if (!bg.is_unlocked && bg.criteria && bg.criteria.toLowerCase().includes(pin.name.toLowerCase().substring(0, 10))) {
      bg.is_unlocked = true;
      bg.unlocked_date = new Date().toLocaleDateString("vi-VN");
      unlockedBadgeName = bg.name;
    }
  });

  // Log action
  const timeStr = new Date().toLocaleDateString("vi-VN");
  appState.profile.logs.unshift(`${timeStr}: Check-in tại '${pin.name}' (+100 EXP)`);
  if (unlockedStoryName) {
    appState.profile.logs.unshift(`${timeStr}: Mở khóa giai thoại '${unlockedStoryName}'!`);
  }
  if (unlockedBadgeName) {
    appState.profile.logs.unshift(`${timeStr}: Nhận huy hiệu mới '${unlockedBadgeName}'!`);
  }

  saveState();
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

function renderBadgesGrid() {
  const container = document.getElementById("badges-grid");
  if (!container) return;
  container.innerHTML = "";

  appState.badges.forEach(b => {
    const isUnlocked = b.is_unlocked;
    const tierClass = `badge-${b.tier || 'bronze'}`;

    const card = document.createElement("div");
    card.className = `card badge-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <div class="badge-icon-box">${b.icon || '🎖️'}</div>
      <span class="badge-tag ${tierClass}">${b.tier ? b.tier.toUpperCase() + ' TIER' : 'BRONZE'}</span>
      <h3 style="font-size:1.15rem; margin-bottom:4px;">${b.name}</h3>
      <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:8px;">${b.category || 'Di sản'}</p>
      <p style="font-size:0.86rem; color:var(--text-secondary);">${b.criteria || ''}</p>
      <div style="margin-top:12px; font-size:0.8rem; font-weight:600; color:${isUnlocked ? '#27ae60' : 'var(--text-muted)'};">
        ${isUnlocked ? `✓ Đã sở hữu (${b.unlocked_date || 'Gần đây'})` : '🔒 Chưa mở khóa'}
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

  const unlockedStories = appState.stories.filter(s => !s.is_locked).length;
  const unlockedBadges = appState.badges.filter(b => b.is_unlocked).length;

  document.getElementById("stat-pins-scanned").innerText = appState.profile.logs.filter(l => l.includes("Check-in")).length;
  document.getElementById("stat-stories-unlocked").innerText = unlockedStories;
  document.getElementById("stat-badges-owned").innerText = unlockedBadges;

  const logList = document.getElementById("activity-log-list");
  logList.innerHTML = p.logs.map(item => `
    <li style="padding:6px 0; border-bottom:1px dashed var(--neutral-200);">${item}</li>
  `).join("");
}

function populateDropdownSelectors() {
  const figSelect = document.getElementById("story-input-figure");
  const pinSelect = document.getElementById("story-input-pin");
  const figPinSelect = document.getElementById("fig-input-pins");
  const figStoryPinSelect = document.getElementById("fig-story-pin");

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
        📖 Giai thoại #${currentCount}
      </strong>
      <button type="button" class="btn-secondary" style="color:#e53e3e; border-color:#feb2b2; padding:3px 10px; font-size:0.75rem; cursor:pointer;" onclick="removeFigureStoryRow('${rowId}')">
        ✕ Bỏ giai thoại này
      </button>
    </div>
    <div class="form-grid">
      <div class="form-group form-grid-full">
        <label>Tiêu đề Giai thoại / Sự kiện hào hùng <span class="req">*</span></label>
        <input type="text" class="form-input fig-story-input-title" placeholder="Ví dụ: Kế sách cắm cọc sông Bạch Đằng, Lời thề Sát Thát..." value="${title}">
      </div>
      <div class="form-group">
        <label>Địa danh (Ghim) yêu cầu Check-in để mở khóa</label>
        <select class="form-select fig-story-input-pin">
          ${pinOptions}
        </select>
        <span class="form-hint">Người chơi cần di chuyển đến mốc này trên Radar để mở khóa đọc câu chuyện.</span>
      </div>
      <div class="form-group">
        <label>Ảnh Nền / Tranh minh họa Giai thoại (Tùy chọn)</label>
        <div style="display:flex; gap:8px;">
          <input type="text" class="form-input fig-story-input-bg" placeholder="Dán link ảnh online (https://...) hoặc file minh họa..." value="${bgImage}" style="flex:1;">
          <label class="btn-secondary" style="cursor:pointer; white-space:nowrap; margin-bottom:0; font-size:0.8rem; padding:8px 12px;" title="Chọn file ảnh từ máy">
            📁 Chọn ảnh
            <input type="file" accept="image/*" onchange="handleRowStoryBgPicker(event, '${rowId}')" style="display:none;">
          </label>
        </div>
        <div id="${rowId}-bg-preview" style="margin-top:6px; display:${bgImage ? 'flex' : 'none'}; align-items:center; gap:8px; background:var(--neutral-100); padding:4px 8px; border-radius:4px;">
          <img src="${bgImage || ''}" style="height:36px; width:60px; object-fit:cover; border-radius:3px;">
          <span style="font-size:0.75rem; color:#27ae60;">✓ Có ảnh minh họa</span>
        </div>
      </div>
      <div class="form-group form-grid-full">
        <label>Nội dung chi tiết câu chuyện lịch sử</label>
        <textarea class="form-textarea fig-story-input-content" rows="3" placeholder="Bối cảnh lịch sử, diễn biến sự kiện, kế sách quân sự...">${content}</textarea>
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
    if (label) label.innerText = `📖 Giai thoại #${idx + 1}`;
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

function handleCreateBadge(e) {
  e.preventDefault();
  const name = document.getElementById("badge-input-name").value.trim();
  const tier = document.getElementById("badge-input-tier").value;
  const icon = document.getElementById("badge-input-icon").value;
  const category = document.getElementById("badge-input-cat").value.trim() || "Di sản";
  const criteria = document.getElementById("badge-input-criteria").value.trim();

  const newBadge = {
    id: `badge-${Date.now()}`,
    name,
    tier,
    icon,
    category,
    criteria,
    is_unlocked: false
  };

  appState.badges.push(newBadge);
  saveState();
  saveToServerDataJSON();
  refreshAllViews();

  showToast(`✓ Đã thêm Huy hiệu mới: "${name}"!`);
  e.target.reset();
  document.querySelector('[data-tab="tab-badges"]').click();
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
      pinWrap.innerHTML = "<p style='color:var(--text-muted); font-size:0.9rem; padding:12px;'>Chưa có Ghim nào.</p>";
    } else {
      let html = `
        <table class="manage-table">
          <thead>
            <tr>
              <th>Icon & Tên</th>
              <th>Loại</th>
              <th>Độ hiếm</th>
              <th>Tọa độ</th>
              <th>Bán kính</th>
              <th style="text-align:right;">Thao tác</th>
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
            <td style="font-size:0.8rem;">Quét ${pin.discovery_radius}m / Đến ${pin.interaction_radius}m</td>
            <td style="text-align:right;">
              <button class="btn-delete-row" onclick="deletePinById('${pin.id}')">🗑️ Xóa</button>
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
      figWrap.innerHTML = "<p style='color:var(--text-muted); font-size:0.9rem; padding:12px;'>Chưa có Danh nhân nào.</p>";
    } else {
      let html = `
        <table class="manage-table">
          <thead>
            <tr>
              <th>Avatar & Danh xưng</th>
              <th>Tước vị / Vai trò</th>
              <th>Thời đại</th>
              <th style="text-align:right;">Thao tác</th>
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
              <button class="btn-delete-row" onclick="deleteFigureById('${fig.id}')">🗑️ Xóa</button>
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
      storyWrap.innerHTML = "<p style='color:var(--text-muted); font-size:0.9rem; padding:12px;'>Chưa có Giai thoại nào.</p>";
    } else {
      let html = `
        <table class="manage-table">
          <thead>
            <tr>
              <th>Tên giai thoại</th>
              <th>Danh nhân</th>
              <th>Địa danh yêu cầu</th>
              <th>Trạng thái</th>
              <th style="text-align:right;">Thao tác</th>
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
            <td><span style="font-size:0.8rem; color:${st.is_locked ? '#e67e22' : '#27ae60'};">${st.is_locked ? '🔒 Đang khóa' : '🔓 Đã mở'}</span></td>
            <td style="text-align:right;">
              <button class="btn-delete-row" onclick="deleteStoryById('${st.id}')">🗑️ Xóa</button>
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
      badgeWrap.innerHTML = "<p style='color:var(--text-muted); font-size:0.9rem; padding:12px;'>Chưa có Huy hiệu nào.</p>";
    } else {
      let html = `
        <table class="manage-table">
          <thead>
            <tr>
              <th>Icon & Tên</th>
              <th>Cấp độ</th>
              <th>Tiêu chí đạt</th>
              <th>Trạng thái</th>
              <th style="text-align:right;">Thao tác</th>
            </tr>
          </thead>
          <tbody>
      `;
      appState.badges.forEach(bg => {
        html += `
          <tr>
            <td><b>${bg.icon || '🏅'} ${bg.name}</b></td>
            <td><span style="text-transform:uppercase; font-size:0.75rem; font-weight:700;">${bg.tier}</span></td>
            <td style="font-size:0.82rem; max-width:260px;">${bg.criteria}</td>
            <td><span style="font-size:0.8rem; color:${bg.is_unlocked ? '#27ae60' : 'var(--text-muted)'};">${bg.is_unlocked ? '✓ Đã nhận' : 'Chưa nhận'}</span></td>
            <td style="text-align:right;">
              <button class="btn-delete-row" onclick="deleteBadgeById('${bg.id}')">🗑️ Xóa</button>
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
