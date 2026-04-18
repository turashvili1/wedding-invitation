/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/wedding-invitation',
  assetPrefix: '/wedding-invitation',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
