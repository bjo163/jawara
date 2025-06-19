/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: standalone output removed due to Windows symlink permission issues
  // For Docker deployment, consider using npm instead of pnpm, or run with elevated permissions
  // output: "standalone",

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
  poweredByHeader: false,

  // Compress static files
  compress: true,
};

export default nextConfig;
