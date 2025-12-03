/** @type {import('next').NextConfig} */
const nextConfig = {
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