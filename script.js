// 1. KAMUS TEKS HALAMAN UTAMA (ID & EN)
const translations = {
  id: {
    nav_about: "Tentang",
    nav_cases: "Studi Kasus",
    nav_writing: "Tulisan",
    nav_contact: "Kontak",
    hero_badge: "Supply Chain Management & Sustainable Agribusiness",
    hero_title: "Membangun Rantai Pasok Pertanian yang Inklusif, Efisien, dan Berkelanjutan.",
    hero_desc: "Peneliti dan praktisi rantai nilai agribisnis dengan fokus pada model bisnis inklusif, korporatisasi petani, ekonomi sirkular, dan optimalisasi distribusi pangan B2B.",
    hero_btn_cases: "Lihat Studi Kasus",
    hero_btn_linkedin: "Profil LinkedIn ↗",
    about_label: "Tentang Saya",
    about_title: "Menjembatani Riset Rantai Nilai dan Praktik Agribisnis di Lapangan.",
    about_bio: "Saya mendalami bagaimana rantai pasok pangan dan pertanian dapat dirancang lebih adil, tangguh, dan minim susut. Melalui kombinasi riset empiris, analisis kelembagaan petani, dan perancangan distribusi B2B, website ini menjadi ruang untuk mendokumentasikan studi kasus sekaligus berbagi catatan pemikiran seputar dinamika rantai pasok dan agribisnis berkelanjutan.",
    pillar1_title: "Supply Chain & B2B Distribution",
    pillar1_desc: "Analisis efisiensi logistik hulu-hilir, agregasi pasokan komoditas pangan, serta pengurangan susut pascapanen (food loss) melalui integrasi pasar B2B.",
    pillar2_title: "Inclusive Business & Farmer Corporatization",
    pillar2_desc: "Penguatan kelembagaan koperasi dan korporatisasi petani untuk meningkatkan daya tawar, standar kualitas, dan kepastian serapan pasar modern.",
    pillar3_title: "Sustainable & Circular Agribusiness",
    pillar3_desc: "Penerapan prinsip ekonomi sirkular, pertanian regeneratif, dan tata kelola rantai nilai yang selaras dengan keberlanjutan lingkungan.",
    cases_label: "Portofolio & Riset",
    cases_title: "Studi Kasus Terpilih",
    case1_tag: "Riset Tesis & Value Chain",
    case1_title: "Model Bisnis Inklusif & Korporatisasi Petani: Koperasi Citra Kinaraya & PT TMT",
    case1_summary: "Analisis struktur kelembagaan hibrida antara koperasi dan perseroan terbatas dalam mengintegrasikan petani padi ke rantai pasok PT Food Station Tjipinang Jaya.",
    case2_tag: "B2B Supply Chain Design",
    case2_title: "Model Agregasi & Distribusi Surplus Hortikultura Koridor Magelang–Jawa Tengah",
    case2_summary: "Perancangan skema penyerapan surplus komoditas cabai, tomat, dan kentang dari tingkat pengepul ke pasar B2B regional guna menekan susut panen dan fluktuasi harga.",
    read_case: "Baca Ringkasan →",
    writing_label: "Pemikiran & Esai",
    writing_title: "Tulisan Terbaru",
    filter_all: "Semua",
    footer_title: "Mari Terhubung & Berdiskusi",
    footer_desc: "Terbuka untuk diskusi seputar Supply Chain Management, riset rantai nilai pertanian, kolaborasi proyek, maupun pertukaran gagasan.",
    footer_note: "Dibangun secara mandiri dengan HTML, CSS & JavaScript."
  },
  en: {
    nav_about: "About",
    nav_cases: "Case Studies",
    nav_writing: "Writing",
    nav_contact: "Contact",
    hero_badge: "Supply Chain Management & Sustainable Agribusiness",
    hero_title: "Building Inclusive, Efficient, and Sustainable Agricultural Supply Chains.",
    hero_desc: "Agribusiness value chain researcher and practitioner focusing on inclusive business models, farmer corporatization, circular economy, and B2B food distribution optimization.",
    hero_btn_cases: "View Case Studies",
    hero_btn_linkedin: "LinkedIn Profile ↗",
    about_label: "About Me",
    about_title: "Bridging Value Chain Research and On-the-Ground Agribusiness Practice.",
    about_bio: "I explore how food and agricultural supply chains can be designed to be fairer, more resilient, and lower in post-harvest loss. Combining empirical research, farmer institutional analysis, and B2B distribution design, this website serves as a hub to document case studies and share essays on supply chain dynamics and sustainable agribusiness.",
    pillar1_title: "Supply Chain & B2B Distribution",
    pillar1_desc: "End-to-end logistics efficiency analysis, food commodity supply aggregation, and post-harvest food loss reduction through B2B market integration.",
    pillar2_title: "Inclusive Business & Farmer Corporatization",
    pillar2_desc: "Strengthening cooperative institutions and farmer corporatization to improve bargaining power, quality standards, and modern market off-take certainty.",
    pillar3_title: "Sustainable & Circular Agribusiness",
    pillar3_desc: "Applying circular economy principles, regenerative agriculture, and value chain governance aligned with environmental sustainability.",
    cases_label: "Portfolio & Research",
    cases_title: "Selected Case Studies",
    case1_tag: "Thesis Research & Value Chain",
    case1_title: "Inclusive Business Model & Farmer Corporatization: Koperasi Citra Kinaraya & PT TMT",
    case1_summary: "Analyzing the hybrid institutional governance between a farmer cooperative and a corporate entity integrating smallholder rice farmers into PT Food Station Tjipinang Jaya's supply chain.",
    case2_tag: "B2B Supply Chain Design",
    case2_title: "Horticultural Surplus Aggregation & B2B Distribution Model: Magelang–Central Java Corridor",
    case2_summary: "Designing a B2B off-take aggregation model to absorb surplus chili, tomatoes, and potatoes from local collectors into regional markets, reducing post-harvest loss.",
    read_case: "Read Summary →",
    writing_label: "Thoughts & Essays",
    writing_title: "Recent Writing",
    filter_all: "All",
    footer_title: "Let's Connect & Discuss",
    footer_desc: "Open to discussions on Supply Chain Management, agricultural value chain research, project collaborations, and exchanging ideas.",
    footer_note: "Independently built with HTML, CSS & JavaScript."
  }
};

// 2. DATA ARTIKEL & DETAIL STUDI KASUS (MUDAH DITAMBAH KAPAN SAJA)
const contentDatabase = {
  case1: {
    type: "case",
    category: "agribusiness",
    id: {
      badge: "Studi Kasus Riset",
      title: "Model Bisnis Inklusif & Korporatisasi Petani: Koperasi Citra Kinaraya & PT TMT",
      meta: "Agribusiness Value Chain • Link Methodology",
      paragraphs: [
        "Petani kecil sering kali menghadapi hambatan struktural ketika berhadapan dengan pasar modern maupun pembeli institusional berskala besar: volume pasokan yang terfragmentasi, standar kualitas yang belum seragam, serta keterbatasan akses pembiayaan modal kerja.",
        "Melalui pendekatan studi kasus pada Koperasi Citra Kinaraya dan PT TMT dalam kemitraan pasokan beras bersama PT Food Station Tjipinang Jaya, riset ini membedah bagaimana struktur kelembagaan hibrida (kombinasi entitas koperasi berbasis anggota dan perseroan terbatas yang lincah secara komersial) mampu menjembatani kesenjangan tersebut.",
        "Temuan utama menunjukkan bahwa keberhasilan model bisnis inklusif tidak hanya bergantung pada kontrak harga, melainkan pada kejelasan pembagian risiko, pendampingan teknis budidaya, serta transparansi tata kelola rantai pasok dari tingkat sawah hingga penggilingan."
      ]
    },
    en: {
      badge: "Research Case Study",
      title: "Inclusive Business Model & Farmer Corporatization: Koperasi Citra Kinaraya & PT TMT",
      meta: "Agribusiness Value Chain • Link Methodology",
      paragraphs: [
        "Smallholder farmers frequently encounter structural barriers when engaging with modern retail and large institutional buyers: fragmented supply volumes, inconsistent quality standards, and constrained working capital access.",
        "Examining Koperasi Citra Kinaraya and PT TMT within their rice supply partnership with PT Food Station Tjipinang Jaya, this study analyzes how a hybrid institutional structure—combining member-based cooperative governance with commercial corporate agility—bridges these gaps.",
        "Key findings demonstrate that sustainable inclusive business models rely not merely on price contracts, but on clear risk-sharing mechanisms, agronomic technical assistance, and transparent value chain governance from farm gate to milling."
      ]
    }
  },
  case2: {
    type: "case",
    category: "supply-chain",
    id: {
      badge: "Desain Rantai Pasok B2B",
      title: "Model Agregasi & Distribusi Surplus Hortikultura Koridor Magelang–Jawa Tengah",
      meta: "B2B Logistics • Food Loss Reduction",
      paragraphs: [
        "Di sentra produksi hortikultura seperti Magelang, pengepul lokal kerap menghadapi surplus pasokan musiman untuk komoditas mudah rusak seperti cabai, tomat, dan kentang ketika serapan pasar tradisional melambat.",
        "Proyek perancangan ini memetakan alur agregasi mikro (micro-hub) untuk menyortir surplus berkualitas layak pasar dan menyalurkannya langsung ke pembeli B2B (horeka, katering industri, dan pedagang grosir regional) di koridor Semarang dan Demak.",
        "Dengan mencocokkan siklus permintaan B2B yang lebih terprediksi terhadap fluktuasi panen di hulu, model ini dirancang untuk menekan tingkat susut pascapanen sekaligus menjaga stabilitas arus kas pengepul dan petani mitra."
      ]
    },
    en: {
      badge: "B2B Supply Chain Design",
      title: "Horticultural Surplus Aggregation & B2B Distribution Model: Magelang–Central Java Corridor",
      meta: "B2B Logistics • Food Loss Reduction",
      paragraphs: [
        "In horticultural production hubs like Magelang, local collectors frequently experience seasonal supply surpluses of perishable crops—such as chili, tomatoes, and potatoes—whenever traditional wholesale absorption slows down.",
        "This supply chain design maps a micro-hub aggregation workflow to grade market-ready surplus produce and channel it directly to regional B2B buyers (HoReCa, industrial catering, and regional wholesalers) across the Semarang and Demak corridor.",
        "By matching predictable B2B demand cycles with upstream harvest fluctuations, the model aims to minimize post-harvest food loss while stabilizing cash flows for collectors and partner farmers."
      ]
    }
  },
  art1: {
    type: "article",
    category: "agribusiness",
    id: {
      badge: "Agribusiness",
      title: "Mengapa Korporatisasi Petani Membutuhkan Tata Kelola Rantai Pasok yang Terukur",
      meta: "November 2026 • 4 menit baca",
      paragraphs: [
        "Istilah korporatisasi petani sering kali dipersempit sekadar menjadi pembentukan badan hukum baru di tingkat desa. Padahal, tanpa pembenahan tata kelola rantai pasok di dalamnya, perubahan bentuk badan usaha tidak otomatis meningkatkan daya tawar petani.",
        "Dari pengamatan di lapangan, kunci utama kelembagaan petani terletak pada tiga fungsi operasional: konsolidasi jadwal tanam-panen, standardisasi sortasi kualitas di titik kumpul, dan disiplin pencatatan arus kas.",
        "Ketika ketiga fondasi operasional ini berjalan konsisten, barulah kemitraan dengan offtaker besar maupun lembaga pembiayaan dapat tumbuh secara berkelanjutan dan saling menguntungkan."
      ]
    },
    en: {
      badge: "Agribusiness",
      title: "Why Farmer Corporatization Requires Measurable Supply Chain Governance",
      meta: "November 2026 • 4 min read",
      paragraphs: [
        "Farmer corporatization is often narrowly interpreted as merely establishing a new legal entity at the village level. Yet without upgrading internal supply chain governance, changing a legal label rarely improves farmers' bargaining power.",
        "Field observations show that effective farmer institutions rest on three operational pillars: synchronized planting-harvesting schedules, standardized quality grading at collection points, and disciplined cash-flow tracking.",
        "Once these operational foundations work consistently, partnerships with institutional off-takers and financial institutions can scale sustainably."
      ]
    }
  },
  art2: {
    type: "article",
    category: "supply-chain",
    id: {
      badge: "Supply Chain",
      title: "Memangkas Food Loss di Tingkat Hulu Melalui Integrasi Permintaan B2B",
      meta: "November 2026 • 3 menit baca",
      paragraphs: [
        "Sebagian besar susut pangan (food loss) pada komoditas hortikultura terjadi bukan karena produknya buruk, melainkan akibat ketidaksesuaian informasi antara ketersediaan panen di hulu dan kebutuhan riil di hilir.",
        "Pengepul sering kali memanen atau menampung komoditas tanpa visibilitas permintaan dua hingga tiga hari ke depan. Akibatnya, ketika pasar induk mengalami kelebihan pasokan, komoditas tertahan dan mengalami penurunan mutu drastis.",
        "Membangun saluran distribusi B2B berbasis pra-pemesanan (pre-order) sederhana di tingkat regional menjadi langkah praktis untuk mengubah rantai pasok dari yang semula bersifat dorong-pasokan (supply-push) menjadi tarik-permintaan (demand-pull)."
      ]
    },
    en: {
      badge: "Supply Chain",
      title: "Reducing Upstream Food Loss Through B2B Demand Integration",
      meta: "November 2026 • 3 min read",
      paragraphs: [
        "A significant share of horticultural food loss occurs not because produce is defective, but due to information asymmetry between upstream harvest availability and downstream buyer demand.",
        "Collectors often aggregate produce without visibility into demand two to three days ahead. When wholesale markets saturate, perishable crops sit idle and rapidly lose quality.",
        "Establishing simple pre-order B2B distribution channels at the regional level offers a practical shift from a reactive supply-push chain to a coordinated demand-pull model."
      ]
    }
  }
};

let currentLang = localStorage.getItem("preferredLang") || "id";
let currentFilter = "all";
let activeModalId = null;

// 3. FUNGSI MERENDER DAFTAR TULISAN
function renderArticles() {
  const listContainer = document.getElementById("article-list");
  if (!listContainer) return;

  listContainer.innerHTML = "";

  Object.keys(contentDatabase).forEach((key) => {
    const item = contentDatabase[key];
    if (item.type !== "article") return;
    if (currentFilter !== "all" && item.category !== currentFilter) return;

    const localized = item[currentLang];
    const articleEl = document.createElement("article");
    articleEl.className = "article-item";
    articleEl.onclick = () => openReader(key);

    articleEl.innerHTML = `
      <div>
        <div class="article-item-tag">${localized.badge}</div>
        <h3>${localized.title}</h3>
        <p>${localized.paragraphs[0].substring(0, 140)}...</p>
      </div>
      <span class="article-date">${localized.meta}</span>
    `;

    listContainer.appendChild(articleEl);
  });
}

// 4. FUNGSI FILTER KATEGORI TULISAN
function filterArticles(category, btnElement) {
  currentFilter = category;
  document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
  btnElement.classList.add("active");
  renderArticles();
}

// 5. FUNGSI JENDELA BACA (MODAL READER)
function openReader(id) {
  const item = contentDatabase[id];
  if (!item) return;

  activeModalId = id;
  const localized = item[currentLang];

  document.getElementById("modal-category").textContent = localized.badge;
  document.getElementById("modal-title").textContent = localized.title;
  document.getElementById("modal-meta").textContent = localized.meta;

  const bodyEl = document.getElementById("modal-body");
  bodyEl.innerHTML = localized.paragraphs.map((p) => `<p>${p}</p>`).join("");

  document.getElementById("reader-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeReader() {
  activeModalId = null;
  document.getElementById("reader-modal").classList.remove("open");
  document.body.style.overflow = "";
}

function closeReaderOnBackdrop(event) {
  if (event.target.id === "reader-modal") {
    closeReader();
  }
}

// 6. FUNGSI PENGUBAH BAHASA (ID / EN)
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferredLang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.getElementById("btn-id").classList.toggle("active", lang === "id");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");

  renderArticles();

  // Jika jendela baca sedang terbuka, ikut terjemahkan isinya
  if (activeModalId) {
    openReader(activeModalId);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});