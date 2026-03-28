/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/MelodiousPotato.github.io',
  assetPrefix: '/MelodiousPotato.github.io/',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
