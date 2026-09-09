import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow network access for mobile testing
  allowedDevOrigins: ['192.168.1.11', 'localhost', '0.0.0.0'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
