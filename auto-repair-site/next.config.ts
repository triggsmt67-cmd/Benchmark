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
  async redirects() {
    return [
      {
        source: '/services/brakes-squeaking',
        destination: '/services/brake-repair',
        permanent: true,
      },
      {
        source: '/problems/squeaking-brakes',
        destination: '/services/brake-repair',
        permanent: true,
      },
      {
        source: '/problems/shaking-brakes',
        destination: '/services/brake-repair',
        permanent: true,
      },
      {
        source: '/services/car-not-blowing-cold-air',
        destination: '/services/ac-heating',
        permanent: true,
      },
      {
        source: '/services/check-engine-light-flashing',
        destination: '/services/engine-and-performance',
        permanent: true,
      },
      {
        source: '/services/check-engine-light',
        destination: '/services/engine-and-performance',
        permanent: true,
      },
      {
        source: '/services/advanced-diagnostics',
        destination: '/services/engine-and-performance',
        permanent: true,
      },
      {
        source: '/services/battery-drain',
        destination: '/services/electrical-diagnostics',
        permanent: true,
      },
      {
        source: '/services/missoula-battery-drain',
        destination: '/services/electrical-diagnostics',
        permanent: true,
      },
      {
        source: '/services/auto-repair-missoula-mt',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/undercarriage-and-suspension',
        destination: '/services/suspension-steering',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
