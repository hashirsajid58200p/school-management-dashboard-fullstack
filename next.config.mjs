/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    outputFileTracingIncludes: {
      "/*": ["./prisma/template.db"],
      "/api/*": ["./prisma/template.db"],
    },
  },
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "i.pravatar.cc" },
      { hostname: "res.cloudinary.com" }
    ],
  },
};

export default nextConfig;
