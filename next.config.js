/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force use Webpack instead of Turbopack
  experimental: {
    turbo: false,
  },
  webpack: (config) => {
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anasnidir.com",
      },
    ],
  },
};

module.exports = nextConfig;