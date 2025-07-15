/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/joy-company-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/joy-company-website/' : ''
};

module.exports = nextConfig;