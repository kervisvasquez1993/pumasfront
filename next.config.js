/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['swiperjs.com', "localhost", "https://strapi-pumas-ijwsa.ondigitalocean.app", "pumas.nyc3.digitaloceanspaces.com", "https://staging.qantamedia.com/pumas/"]
  },
}

module.exports = nextConfig
