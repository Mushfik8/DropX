import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/dashboard', destination: '/rewards', permanent: true },
      { source: '/tasks', destination: '/rewards', permanent: true },
      { source: '/referrals', destination: '/rewards', permanent: true },
      { source: '/wallet', destination: '/rewards', permanent: true },
    ];
  },
};

export default nextConfig;
