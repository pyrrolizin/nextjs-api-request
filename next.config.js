/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    githuburl: 'https://github.com/pyrrolizin/',
    githubrepourl: 'https://github.com/pyrrolizin/nextjs-api-request',
    minutescache: 5,
  },
}

module.exports = nextConfig
