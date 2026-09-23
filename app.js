// =====================================================
// EXCLUSIVE SHOP — app.js v3 (BLINDADO)
// =====================================================

// =====================================================
// CONFIGURAÇÃO ÚNICA E EXCLUSIVA
// =====================================================
// ESTA É A ÚNICA CONFIGURAÇÃO QUE O BOT USA
// QUALQUER OUTRO SCRIPT QUE TENTE ALTERAR É IGNORADO

const CONFIG = {
  telegram : "Snipperseller",
  zangi    : "6970835383",
  zangiUrl : "https://services.zangi.com/dl/conversation/6970835383",
};

// BLOQUEIA ALTERAÇÕES EXTERNAS
Object.freeze(CONFIG);

// SOBRESCREVE QUALQUER CONFIG EXISTENTE NO WINDOW
window.CONFIG = CONFIG;

// SE EXISTIR DMCONFIG, SOBRESCREVE TAMBÉM
if (window.DMCONFIG) {
  window.DMCONFIG.telegram = CONFIG.telegram;
}

// URLS FIXAS
const TG_URL    = `https://t.me/${CONFIG.telegram}`;
const ZANGI_URL = CONFIG.zangiUrl;

// CONGELA AS URLS PARA NINGUÉM ALTERAR
Object.freeze(TG_URL);
Object.freeze(ZANGI_URL);

console.log('🔒 CONFIGURAÇÃO BLOQUEADA:');
console.log(`   👤 Telegram: @${CONFIG.telegram}`);
console.log(`   🔗 URL: ${TG_URL}`);
console.log(`   ⚡ Zangi: ${ZANGI_URL}`);

// =====================================================
// FUNÇÕES TELEGRAM - USAM SEMPRE O CONFIG ACIMA
// =====================================================

// Função principal - NUNCA usa outro Telegram
function tgOpen(msg) {
  const url = `${TG_URL}?text=${encodeURIComponent(msg)}`;
  console.log('📤 Abrindo Telegram:', url);
  window.open(url, "_blank");
}

// Mensagem personalizada com o título do produto
function openTelegramProduct(title) {
  tgOpen(
    `Hello, I want to purchase this folder:\n\n` +
    `📂 Folder: "${title}"\n\n` +
    `Please guide me through the payment process.`
  );
}

function sendCustomFolder() {
  const val = document.getElementById("custom-folder-text").value.trim();
  if (!val) { alert("Please describe the folder and your price offer."); return; }
  tgOpen(
    `Hello, I would like to negotiate a custom folder.\n\n` +
    `📂 Request Details:\n${val}\n\n` +
    `Please let me know if this is possible.`
  );
}

function sendVipRequest() {
  const val = document.getElementById("vip-group-text").value.trim();
  if (!val) { alert("Please enter the VIP group name."); return; }
  tgOpen(
    `Hello, I am interested in joining a VIP group.\n\n` +
    `💎 VIP Group Name: ${val}\n\n` +
    `Please send me the payment details.`
  );
}

// =====================================================
// EXPORTA FUNÇÕES PARA O GLOBAL (COM BLOQUEIO)
// =====================================================

// Sobrescreve qualquer função existente
window.tgOpen = tgOpen;
window.openTelegramProduct = openTelegramProduct;
window.sendCustomFolder = sendCustomFolder;
window.sendVipRequest = sendVipRequest;

// Bloqueia para ninguém alterar
Object.freeze(window.tgOpen);
Object.freeze(window.openTelegramProduct);
Object.freeze(window.sendCustomFolder);
Object.freeze(window.sendVipRequest);

// =====================================================
// PRODUCTS
// =====================================================
const products = [

  {
    title: "MOM AND SON",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/1.mp4",
    desc: "MOM AND SON GET FUCKED BEST STUFF 30GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 2 OF 37
    // =====================================================
    views: 1747,
  },
  {
    title: "AMELIA BLONDE",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/2.mp4",
    desc: "50GB REAL GIRL , SEX AND CP.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 3 OF 37
    // =====================================================
    views: 830,
  },
  {
    title: "ALL TEENS 1TB",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/3.mp4",
    desc: "MOORE THAN 120.000 FILES OF TEENS RARE.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 4 OF 37
    // =====================================================
    views: 277,
  },
  {
    title: "RAPE TEEN",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/4.mp4",
    desc: "RARE RAPE TEEN / 20GB NEW STUFF .",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 5 OF 37
    // =====================================================
    views: 396,
  },
  {
    title: "OMEGLE FULL",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/5.mp4",
    desc: "MORE THAN 120GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 6 OF 37
    // =====================================================
    views: 1141,
  },
  {
    title: "HIGH SCHOOL TEEN",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/IMG_0969.mp4",
    desc: "HIGH SCHOOL MORE THAN 35GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 7 OF 37
    // =====================================================
    views: 1132,
  },
  {
    title: "ALL CONTENT 30TB",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/7.mp4",
    desc: "",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 8 OF 37
    // =====================================================
    views: 1501,
  },
  {
    title: "LIZZY AND BRO",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/8.mp4",
    desc: "MORE THAN 45GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 9 OF 37
    // =====================================================
    views: 891,
  },
  {
    title: "CP 1",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/9.mp4",
    desc: "BEST CP MORE THAN 25GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 10 OF 37
    // =====================================================
    views: 617,
  },
  {
    title: "CP 3",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/10.mp4",
    desc: "MORE THAN 30GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 11 OF 37
    // =====================================================
    views: 1471,
  },
  {
    title: "PREMIUM VIP 8-17🔥",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/11.mp4",
    desc: "MORE THAN 1590 VIDEOS.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 12 OF 37
    // =====================================================
    views: 1078,
  },
  {
    title: "DESIRE GARCIA",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/12.mp4",
    desc: "MORE THAN 30GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 13 OF 37
    // =====================================================
    views: 1905,
  },
  {
    title: "INAVAK AND BRO",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/13.mp4",
    desc: "MORE THAN 45GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 14 OF 37
    // =====================================================
    views: 1667,
  },
  {
    title: "ALL CP 2TB",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/14.mp4",
    desc: "ALL 40 CP FOLDERS RARE AND ALL VIP GROUP.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 15 OF 37
    // =====================================================
    views: 930,
  },
  {
    title: "AYUMI TEEN",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/15.mp4",
    desc: "POSI LEAKS BEST TEEN MORE THAN 20GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 16 OF 37
    // =====================================================
    views: 266,
  },
  {
    title: "AVA SHIT",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/16.mp4",
    desc: "SNAPGOD SHIT MORE THAN 30GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 17 OF 37
    // =====================================================
    views: 676,
  },
  {
    title: "13-17 TEEN",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/17.mp4",
    desc: "MORE THAN 5900 VIDEOS.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 18 OF 37
    // =====================================================
    views: 503,
  },
  {
    title: "DARKZEID",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/18.mp4",
    desc: "FRESH LEAKS FROM 2026 – 35GB OF EXCLUSIVE CONTENT.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 19 OF 37
    // =====================================================
    views: 1655,
  },
  {
    title: "IZZY ZOO",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/19.mp4",
    desc: "MEGA PACK IZZY AND DOG – 80GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 20 OF 37
    // =====================================================
    views: 966,
  },
  {
    title: "SNAPGOD FULL",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/20.mp4",
    desc: "ULTRA HD SNAPGOD COLLECTION – 530GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 21 OF 37
    // =====================================================
    views: 565,
  },
  {
    title: "EMMI SELLERS",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/21.mp4",
    desc: "BEST TEENS – 25GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 22 OF 37
    // =====================================================
    views: 784,
  },
  {
    title: "TEENS CP",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/22.mp4",
    desc: "REAL CP LEAKS – 40GB OF INTIMATE CONTENT.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 23 OF 37
    // =====================================================
    views: 709,
  },
  {
    title: "NEW STUFF PYT",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/23.mp4",
    desc: "TOP 114 FOLDERS OF TEENS – 300GB.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 24 OF 37
    // =====================================================
    views: 1408,
  },
  {
    title: "CP FATHER DAUGHTER",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/24.mp4",
    desc: "GOLD EDITION – 60GB OF RARE CP CONTENT.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 25 OF 37
    // =====================================================
    views: 672,
  },
  {
    title: "SNAPCHAT LEAKS",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/25.mp4",
    desc: "SNAPCHAT LEAKS – 200GB OF EXCLUSIVE SNAPS.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 26 OF 37
    // =====================================================
    views: 607,
  },
  {
    title: "BABY ASHLEY",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/26.mp4",
    desc: "TIKTOK STARS LEAKS – 55GB OF HOT CONTENT.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 27 OF 37
    // =====================================================
    views: 1409,
  },
  {
    title: "AXIOUS PANDA",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/27.mp4",
    desc: "500GB MEGA PACK – ALL TEENS, CP, VIP, AND MORE.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 28 OF 37
    // =====================================================
    views: 911,
  },
  {
    title: "BLOWJOB",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/29.mp4",
    desc: "BUNDLE - BLOWJOB MEGA COLLECTION.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 29 OF 37
    // =====================================================
    views: 300,
  },
  {
    title: "ANIMAL AND YOUNG GIRLS",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/30.mp4",
    desc: "BUNDLE - ANIMAL AND YOUNG GIRLS ULTIMATE PACK.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 30 OF 37
    // =====================================================
    views: 1918,
  },
  {
    title: "GERMAN TEENS",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/31.mp4",
    desc: "BUNDLE - GERMAN TEENS EXCLUSIVE VAULT.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 31 OF 37
    // =====================================================
    views: 1873,
  },
  {
    title: "ELLE GOODMAN",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/32.mp4",
    desc: "BUNDLE - ELLE GOODMAN COMPLETE FOLDER.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 32 OF 37
    // =====================================================
    views: 1714,
  },
  {
    title: "SKI WHITE TEENS",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/33.mp4",
    desc: "BUNDLE - SKI WHITE TEENS FULL COLLECTION.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 33 OF 37
    // =====================================================
    views: 949,
  },
  {
    title: "SKI LATINA PYT",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/34.mp4",
    desc: "BUNDLE - SKI LATINA PYT INTENSE PACK.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 34 OF 37
    // =====================================================
    views: 1053,
  },
  {
    title: "SKI BLACK PYT",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/35.mp4",
    desc: "BUNDLE - SKI BLACK PYT RARE FILES.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 35 OF 37
    // =====================================================
    views: 694,
  },
  {
    title: "GAY CP YOUNG",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/38.mp4",
    desc: "BUNDLE - GAY CP YOUNG EXCLUSIVE FILES.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 36 OF 37
    // =====================================================
    views: 255,
  },
  {
    title: "BROTHER AND SIS",
    video: "https://newstuff.jujalllamguuto.workers.dev/assets/videos/39.mp4",
    desc: "BUNDLE - BROTHER AND SIS BEST FOLDERS.",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    // =====================================================
    // PRODUCT 37 OF 37
    // =====================================================
    views: 291,
  },
];

// =====================================================
// BUYERS
// =====================================================
const buyers = [
  { name: "Lucas R.",   product: "Mentoria 2025", location: "São Paulo, BR" },
  { name: "Emma T.",    product: "Mentoria VIP",  location: "London, UK" },
  { name: "Michael B.", product: "Custom Pack",   location: "New York, US" },
  { name: "Sarah J.",   product: "VIP Access",    location: "Toronto, CA" },
  { name: "Ana M.",     product: "Mentoria 2025", location: "Lisboa, PT" },
  { name: "João F.",    product: "Pack Premium",  location: "Porto, PT" },
  { name: "Carlos S.",  product: "Mentoria 2025", location: "Rio de Janeiro, BR" },
  { name: "Mia K.",     product: "VIP Folder",    location: "Berlin, DE" },
];

// =====================================================
// i18n
// =====================================================
let currentLang = "en";

const i18n = {
  en: {
    featured_label       : "FEATURED",
    featured_title       : "Featured Videos",
    more_options         : "More Options",
    custom_folder_title  : "Custom Folder Request",
    custom_folder_desc   : "Describe what you are looking for and your budget.",
    custom_folder_ph     : "Example: I need niche X, approx 5GB. Budget $20...",
    vip_title            : "Join VIP Group",
    vip_desc             : "Enter the specific VIP group name you want to join.",
    vip_ph               : "Group Name...",
    send_request         : "Send Request",
    join_now             : "Join Now",
    telegram             : "Telegram",
    zangi                : "Zangi",
    footer_tagline       : "Premium digital content. Instant delivery.",
    contact              : "Contact",
    quick_links          : "Quick Links",
    back_top             : "↑ Back to Top",
    products             : "Products",
    buy_now              : "Buy Now",
    free_folder          : "Free Folder",
    show_less            : "Show less",
    show_more            : "Show more",
    views_live           : "watching",
    playing              : "Playing",
    free_available_title : "Free Folder Available!",
    free_available_desc  : "Access the free folder now",
    free_access_btn      : "🚀 Access Free Folder",
    free_unavail_title   : "Free Folder Not Available",
    free_unavail_desc    : "This product has no free folder. Contact us for access.",
    contact_telegram     : "Telegram Support",
    contact_zangi        : "Zangi Support",
    proof_prev           : "‹",
    proof_next           : "›",
    official_notice      : "🔒 OFFICIAL & UNIQUE PAGE — YOUR PRIVACY IS FULLY PROTECTED",
  },
  pt: {
    featured_label       : "DESTACADOS",
    featured_title       : "Vídeos Destacados",
    more_options         : "Mais Opções",
    custom_folder_title  : "Pedido de Pasta Personalizada",
    custom_folder_desc   : "Descreve o que procuras e o teu orçamento.",
    custom_folder_ph     : "Exemplo: Preciso de nicho X, aprox 5GB. Orçamento $20...",
    vip_title            : "Entrar no Grupo VIP",
    vip_desc             : "Escreve o nome do grupo VIP que desejas entrar.",
    vip_ph               : "Nome do Grupo...",
    send_request         : "Enviar Pedido",
    join_now             : "Entrar Agora",
    telegram             : "Telegram",
    zangi                : "Zangi",
    footer_tagline       : "Conteúdo digital premium. Entrega imediata.",
    contact              : "Contacto",
    quick_links          : "Links Rápidos",
    back_top             : "↑ Voltar ao Topo",
    products             : "Produtos",
    buy_now              : "Comprar",
    free_folder          : "Pasta Grátis",
    show_less            : "Mostrar menos",
    show_more            : "Mostrar mais",
    views_live           : "a ver",
    playing              : "A Reproduzir",
    free_available_title : "Pasta Grátis Disponível!",
    free_available_desc  : "Acesse a pasta gratuita agora",
    free_access_btn      : "🚀 Aceder à Pasta Grátis",
    free_unavail_title   : "Pasta Gratuita Não Disponível",
    free_unavail_desc    : "Este conteúdo não possui pasta gratuita. Entre em contacto para obter acesso.",
    contact_telegram     : "Contactar no Telegram",
    contact_zangi        : "Zangi Support",
    proof_prev           : "‹",
    proof_next           : "›",
    official_notice      : "🔒 PÁGINA OFICIAL E ÚNICA — A SUA PRIVACIDADE ESTÁ TOTALMENTE PROTEGIDA",
  }
};

function t(key) { return (i18n[currentLang] || i18n.en)[key] || key; }

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-placeholder-i18n]").forEach(el => {
    el.placeholder = t(el.dataset.placeholderI18n);
  });
  document.getElementById("products-container").innerHTML = "";
  renderProducts();
}

// =====================================================
// FREE FOLDER MODAL
// =====================================================
function openFreeModal(idx) {
  const p = products[idx];
  const inner = document.getElementById("free-modal-inner");
  if (p.freeLink) {
    inner.innerHTML = `
      <div class="free-available">
        <div class="modal-icon">🎁</div>
        <h3>${t("free_available_title")}</h3>
        <p>${t("free_available_desc")}</p>
        <button class="btn-access-folder" onclick="window.open('${p.freeLink}','_blank')">${t("free_access_btn")}</button>
      </div>`;
  } else {
    inner.innerHTML = `
      <div class="free-unavailable">
        <div class="modal-icon">🔒</div>
        <h3>${t("free_unavail_title")}</h3>
        <p>${t("free_unavail_desc")}</p>
        <div class="free-contact-btns">
          <button class="btn-contact-tg" onclick="openTelegramProduct('${p.title}')">💬 ${t("contact_telegram")}</button>
          <button class="btn-contact-zangi" onclick="window.open('${ZANGI_URL}','_blank')">📱 ${t("contact_zangi")}</button>
        </div>
      </div>`;
  }
  document.getElementById("free-folder-modal").classList.add("open");
}

function closeFreeModal() {
  document.getElementById("free-folder-modal").classList.remove("open");
}

// =====================================================
// PROOF MODAL
// =====================================================
let proofImages  = [];
let proofCurrent = 0;

function openProof(idx) {
  const p = products[idx];
  if (!p || !p.proof || !p.proof.length) return;
  proofImages  = Array.isArray(p.proof) ? p.proof : [p.proof];
  proofCurrent = 0;
  document.getElementById("proof-caption").textContent = p.proofCaption || "Proof of sales";
  renderProofSlide();
  document.getElementById("proof-modal").classList.add("open");
}

function renderProofSlide() {
  const img     = document.getElementById("proof-img");
  const counter = document.getElementById("proof-counter");
  img.src = proofImages[proofCurrent];
  if (proofImages.length > 1) {
    counter.textContent = `${proofCurrent + 1} / ${proofImages.length}`;
    counter.style.display = "block";
    document.getElementById("proof-prev").style.display = "flex";
    document.getElementById("proof-next").style.display = "flex";
  } else {
    counter.style.display = "none";
    document.getElementById("proof-prev").style.display = "none";
    document.getElementById("proof-next").style.display = "none";
  }
}

function proofNav(dir) {
  proofCurrent = (proofCurrent + dir + proofImages.length) % proofImages.length;
  renderProofSlide();
}

function openProofFullscreen() {
  const src = proofImages[proofCurrent];
  document.getElementById("proof-fs-img").src = src;
  document.getElementById("proof-fullscreen").classList.add("open");
}

function closeProofFullscreen() {
  document.getElementById("proof-fullscreen").classList.remove("open");
}

function closeProof() {
  document.getElementById("proof-modal").classList.remove("open");
  closeProofFullscreen();
}

// =====================================================
// LIVE VIEWS
// =====================================================
const liveViews = {};

function initViews() {
  products.forEach((p, i) => {
    liveViews[i] = p.views || Math.floor(Math.random() * 2000 + 400);
  });
}

function tickViews() {
  products.forEach((_, i) => {
    liveViews[i] = Math.max(100, liveViews[i] + Math.floor(Math.random() * 9) - 3);
    const el = document.getElementById(`views-${i}`);
    if (el) el.textContent = `${liveViews[i].toLocaleString()} ${t("views_live")}`;
  });
}

// =====================================================
// RENDER PRODUCTS
// =====================================================
function renderProducts() {
  const container = document.getElementById("products-container");
  if (!container) return;

  products.forEach((p, idx) => {

    const badgesHtml = (p.badges || []).map((b, i) =>
      `<span class="vid-badge ${b.cls}" style="animation-delay:${i * .1}s">${b.label}</span>`
    ).join("");

    const chipsHtml = (p.chips || []).map(c =>
      `<span class="card-chip">${c}</span>`
    ).join("");

    const proofArr = Array.isArray(p.proof) ? p.proof : (p.proof ? [p.proof] : []);
    const proofBtn = proofArr.length
      ? `<button class="proof-btn" onclick="openProof(${idx})">🏆 Proof</button>`
      : "";

    const mediaHtml = p.video ? `
      <div class="video-wrapper">
        <video class="product-video" src="${p.video}" autoplay muted loop playsinline controlslist="nodownload" poster="${p.poster || ''}"></video>
        <div class="video-overlay"></div>
        ${proofBtn}
        <div class="vid-badges">${badgesHtml}</div>
        <div class="vid-center-hud">
          <div class="vid-views">
            <span class="views-dot"></span>
            <span id="views-${idx}">${(liveViews[idx] || p.views || 0).toLocaleString()} ${t("views_live")}</span>
          </div>
          <div class="vid-playing">
            <div class="eq-bars">
              <div class="eq-bar"></div><div class="eq-bar"></div>
              <div class="eq-bar"></div><div class="eq-bar"></div>
              <div class="eq-bar"></div>
            </div>
            ${t("playing")}
          </div>
        </div>
      </div>` : p.img ? `
      <div style="position:relative;">
        <img class="product-video" src="${p.img}" alt="${p.title}" loading="lazy" style="aspect-ratio:16/9;object-fit:cover;width:100%;">
        ${proofBtn}
        <div class="vid-badges">${badgesHtml}</div>
      </div>` : "";

    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${idx * .12}s`;
    card.innerHTML = `
      ${mediaHtml}
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-desc-wrap">
          <div class="card-desc" id="desc-${idx}">${p.desc || ""}</div>
          <button class="desc-toggle" id="toggle-${idx}" onclick="toggleDesc(${idx})">${t("show_more")}</button>
        </div>
        ${chipsHtml ? `<div class="card-chips">${chipsHtml}</div>` : ""}
      </div>
      <div class="card-actions">
        <button class="btn-buy" type="button">🛒 ${t("buy_now")}</button>
        <button class="btn-free" type="button">📂 ${t("free_folder")}</button>
      </div>
    `;

    // ── BUY NOW → USA SEMPRE O openTelegramProduct DO APP ──
    card.querySelector(".btn-buy").addEventListener("click", () => {
      openTelegramProduct(p.title);
    });

    card.querySelector(".btn-free").addEventListener("click", () => openFreeModal(idx));
    container.appendChild(card);
  });
}

function toggleDesc(idx) {
  const desc = document.getElementById(`desc-${idx}`);
  const btn  = document.getElementById(`toggle-${idx}`);
  const expanded = desc.classList.toggle("expanded");
  btn.textContent = expanded ? t("show_less") : t("show_more");
}

// =====================================================
// PARTICLES
// =====================================================
function initParticles() {
  const wrap = document.getElementById("headerParticles");
  if (!wrap) return;
  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;";
  wrap.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let W, H, particles;

  function resize() { W = canvas.width = wrap.offsetWidth; H = canvas.height = wrap.offsetHeight; }

  function makeParticle() {
    return {
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*1.6+.3,
      dx: (Math.random()-.5)*.45, dy: (Math.random()-.5)*.3,
      a: Math.random()*.55+.15,
      color: Math.random()>.5 ? "66,165,245" : "211,47,47"
    };
  }

  function init() { resize(); particles = Array.from({length:80}, makeParticle); }

  function draw() {
    ctx.clearRect(0,0,W,H);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(${p.color},${p.a})`; ctx.fill();
      p.x+=p.dx; p.y+=p.dy;
      if(p.x<0||p.x>W) p.dx*=-1;
      if(p.y<0||p.y>H) p.dy*=-1;
    });
    requestAnimationFrame(draw);
  }

  init(); draw();
  window.addEventListener("resize", resize);
}

// =====================================================
// VIEWER COUNT
// =====================================================
let viewerCount = Math.floor(Math.random()*300+120);

function updateViewerCount() {
  viewerCount = Math.max(80, Math.min(600, viewerCount + Math.floor(Math.random()*5)-2));
  const el = document.getElementById("viewerCount");
  if (el) el.textContent = `${viewerCount} live viewers`;
}

// =====================================================
// NOTIFICATIONS
// =====================================================
function showNotification() {
  const buyer = buyers[Math.floor(Math.random()*buyers.length)];
  const el = document.createElement("div");
  el.className = "notification-item";
  el.innerHTML =
    `🛒 <strong>${buyer.name}</strong> purchased <strong>${buyer.product}</strong><br>` +
    `<small>📍 ${buyer.location} &nbsp;•&nbsp; Just now</small>`;
  const wrap = document.getElementById("live-notifications");
  if (wrap) { wrap.prepend(el); setTimeout(() => el.remove(), 5000); }
}

function startNotifications() {
  setTimeout(showNotification, 2400);
  setInterval(showNotification, Math.floor(Math.random()*12000)+14000);
}

// =====================================================
// LINK INJECTION
// =====================================================
function injectLinks() {
  ["hdr-telegram-btn","footer-telegram"].forEach(id => {
    const el = document.getElementById(id); if(el) el.href = TG_URL;
  });
  ["hdr-zangi-btn","footer-zangi"].forEach(id => {
    const el = document.getElementById(id); if(el) el.href = ZANGI_URL;
  });
}

// =====================================================
// VERIFICAÇÃO FINAL - IMPEDE SOBRESCRITAS
// =====================================================
// A cada 2 segundos, verifica se o CONFIG foi alterado
setInterval(() => {
  if (window.CONFIG && window.CONFIG.telegram !== CONFIG.telegram) {
    console.warn('⚠️ ALGUÉM TENTOU ALTERAR O TELEGRAM!');
    console.warn(`   Tentaram mudar para: ${window.CONFIG.telegram}`);
    console.warn('   A RESTAURAR PARA @MEGASELLERpx...');
    
    // Restaura a configuração correta
    window.CONFIG.telegram = CONFIG.telegram;
    window.CONFIG = CONFIG;
    
    // Restaura as funções
    window.tgOpen = tgOpen;
    window.openTelegramProduct = openTelegramProduct;
    window.sendCustomFolder = sendCustomFolder;
    window.sendVipRequest = sendVipRequest;
    
    console.log('✅ CONFIGURAÇÃO RESTAURADA: @MEGASELLERpx');
  }
}, 2000);

// =====================================================
// INIT
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  console.log('🚀 Exclusive Shop iniciado!');
  console.log(`🔒 Telegram BLOQUEADO: @${CONFIG.telegram}`);
  console.log(`🔗 URL: ${TG_URL}`);
  console.log('⚠️ NENHUM OUTRO SCRIPT PODE ALTERAR ESTA CONFIGURAÇÃO!');
  
  initViews();
  injectLinks();
  renderProducts();
  initParticles();
  startNotifications();
  updateViewerCount();
  setInterval(updateViewerCount, 3500);
  setInterval(tickViews, 4000);

  ["free-folder-modal","proof-modal"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", e => {
      if (e.target === el) { closeFreeModal(); closeProof(); }
    });
  });

  const fs = document.getElementById("proof-fullscreen");
  if (fs) fs.addEventListener("click", e => { if(e.target===fs) closeProofFullscreen(); });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeFreeModal(); closeProof(); }
    if (e.key === "ArrowRight" && document.getElementById("proof-modal").classList.contains("open")) proofNav(1);
    if (e.key === "ArrowLeft"  && document.getElementById("proof-modal").classList.contains("open")) proofNav(-1);
  });
});
