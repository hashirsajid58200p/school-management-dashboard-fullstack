/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "i.pravatar.cc" },
      { hostname: "res.cloudinary.com" }
    ],
  },
};

export default nextConfig;
