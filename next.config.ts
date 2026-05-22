import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages (no Node server required)
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

export default nextConfig;
