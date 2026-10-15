import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true
  },

  // 🟢 Fix: Disable optimization to bypass the broken /_next/image route
  images: {
    unoptimized: true
  },

  cacheComponents: true,
  partialPrefetching: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css"
      }
    }
  },

  allowedDevOrigins: ["192.168.0.103"]
};

export default nextConfig;
