/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@nw'])

const nextConfig = withTM({
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com'],
    loader: 'akamai',
    path: '/',
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
})

module.exports = nextConfig
