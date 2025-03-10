/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  async rewrites() {
    return [];
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3009']
    }
  }
}

module.exports = nextConfig
