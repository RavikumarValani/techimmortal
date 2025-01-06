const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false
}

module.exports = {
  ...nextConfig,
  webpack: (config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    }
    return config
  },
  env: {
    SERVER_HOST: "https://tech_backend.immortalgroups.com",
  },
}