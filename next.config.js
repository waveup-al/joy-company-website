/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Tạm thời bỏ basePath và assetPrefix để hình ảnh hoạt động trong môi trường phát triển
  // basePath: process.env.NODE_ENV === 'production' ? '/joy-company-website' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/joy-company-website/' : ''
};

module.exports = nextConfig;