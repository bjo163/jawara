/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output standalone untuk Docker optimization
  output: 'standalone',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // Optimisasi untuk production
  swcMinify: true,
  poweredByHeader: false,
  
  // Compress static files
  compress: true,
};

export default nextConfig;
