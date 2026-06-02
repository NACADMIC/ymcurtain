/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/**" },
    ],
  },
  env: {
    // 빌드 시 DATABASE_URL이 없으면 더미 값 사용
    DATABASE_URL: process.env.DATABASE_URL || "postgresql://user:password@localhost:5432/db?schema=public",
  },
};

module.exports = nextConfig;
