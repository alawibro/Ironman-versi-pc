import type { NextConfig } from "next";

// Saat dibangun di GitHub Actions, situs dipasang di /Ironman-versi-pc (nama repo).
// Saat dijalankan lokal, path-nya kosong supaya tetap di localhost:3000.
const basePath = process.env.GITHUB_ACTIONS ? "/Ironman-versi-pc" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
