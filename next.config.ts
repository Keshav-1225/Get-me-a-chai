import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "main.assets.gameloft.com",
      },
      {
        protocol: "https",
        hostname: "dk2dv4ezy246u.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
