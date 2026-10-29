// Semua teks situs ada di sini. Ganti isi file ini untuk mengubah konten.

export const BRAND = "M.Baihaqi.Alawi";
export const TAGLINE = "11 TKJ 2.";

// Menambahkan basePath (mis. /Ironman-versi-pc) ke path aset, supaya video tetap ketemu di GitHub Pages.
export const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

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
    label: "01 — Bukaane",
    quote: "Project Gabut Prei Sekolah.",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — Inti",
    quote: "Seko Sekolah Pinggir Sawah.",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Penutup",
    quote: "Walau Pinggir Sawah Saya Akan Lawan.",
  },
];

export const FEATURES = [
  { title: "Nama Kamu Siapa?", body: "M. Baihaqi Alawi." },
  { title: "Panggilanya Siapa?", body: "Alawi/Alwi." },
  { title: "Kamu Suka Anime Apa?", body: "Maou Gakuin." },
  { title: "Kamu Akan Lawan?", body: "Iya." },
];

export const FAQ = [
  {
    q: "Lawan APA?",
    a: "Lawan Pr.",
  },
  {
    q: "Kenapa Mau Lawan PR?",
    a: "Demi Kartu Siap Uji Semester.",
  },
  {
    q: "Apakah Besok Pengen Jamkos?",
    a: "Taknak Besok Pelajaran ASJ Soalnya.",
  },
];
