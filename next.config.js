/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/joy-amazon-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/joy-amazon-website/' : ''
};

module.exports = nextConfig;