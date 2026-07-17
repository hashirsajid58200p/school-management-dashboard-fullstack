import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@clerk/nextjs/server": path.resolve(__dirname, "./src/mocks/clerk-server.ts"),
      "@clerk/nextjs": path.resolve(__dirname, "./src/mocks/clerk-client.tsx"),
    };
    return config;
  }
};

export default nextConfig;
