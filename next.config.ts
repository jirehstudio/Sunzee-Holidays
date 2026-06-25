import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "preview-chat-67d273b3-c9be-4f53-992e-d433762ead63.space-z.ai",
    "*.space-z.ai",
  ],
};

export default nextConfig;
