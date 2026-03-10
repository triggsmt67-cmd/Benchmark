import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Tree-shake large icon and animation libraries
    optimizePackageImports: ["lucide-react", "framer-motion"],
    // Inline critical CSS above-the-fold (requires critters package)
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
