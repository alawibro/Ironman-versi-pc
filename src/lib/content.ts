// Semua teks situs ada di sini. Ganti isi file ini untuk mengubah konten.

export const BRAND = "M.Baihaqi.Alawi";
export const TAGLINE = "11 TKJ 2.";

// Frame hero: public/frames/frame_0001.jpg ... frame_0169.jpg (diambil dari video)
export const FRAME_COUNT = 169;
export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

// Teks yang muncul saat scroll. show/hide adalah rentang progres 0–1.
export const BEATS = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — BUKAAN",
    quote: "Saya Adalah Baihaqi Alawi.",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — JEROANE",
    quote: "Ini Project Gabut Karna Lagi Libur.",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Tutupane",
    quote: "Enjoy Dengan Framenya.",
  },
];

export const FEATURES = [
  { title: "Anime Apa Yang Kamu Suka?", body: "MAOU Gakuin." },
  { title: "Badokan Apa Yang Kamu Suka", body: "Ayam." },
  { title: "Kamu Akan Lawan?", body: "iya." },
  { title: "lawan Siapa", body: "Lawan Pr." },
];

export const FAQ = [
  {
    q: "Apakah Kamu Pede Lawan PR?",
    a: "SIAP,Menang Kalah Berani Maju.",
  },
  {
    q: "Kalau Kalah?",
    a: "Ga bisa Ikut Ujian.",
  },
  {
    q: "Karena apa?",
    a: "Pink Pink laknat (pink yang di maksud kartu siap ujian).",
  },
];
