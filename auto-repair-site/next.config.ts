import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize production CSS extraction
  experimental: {
    optimizeCss: true,
  },
  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Compress responses
  compress: true,
  // Strict React mode for better hydration
  reactStrictMode: true,
  // Reduce powered-by header
  poweredByHeader: false,
};

export default nextConfig;
