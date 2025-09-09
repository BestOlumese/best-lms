import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "best-lms-dev.t3.storage.dev",
        protocol: "https",
        port: "",
      }
    ],
  },
};

export default nextConfig;
