import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages static hosting
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
