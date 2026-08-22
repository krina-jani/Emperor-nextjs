import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow network access for mobile testing
  allowedDevOrigins: ['192.168.1.11', 'localhost', '0.0.0.0'],
};

export default nextConfig;
