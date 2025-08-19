import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'zenon0777.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zenon0777.vercel.app',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

export default nextConfig;
