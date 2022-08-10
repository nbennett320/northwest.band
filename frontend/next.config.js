/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com'],
  },
  redirects: async () => [
    {
      source: '/lyrics',
      destination: '/music',
      permanent: false,
    },
    {
      source: '/merch/item',
      destination: '/merch',
      permanent: false,
    }
  ]
}

module.exports = nextConfig
