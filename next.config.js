/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.pngall.com',
          port: '',
          pathname: '/wp-content/uploads/5/Profile-Transparent.png/**',
        },
      ],
    },
  }
