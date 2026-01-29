/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimize for Vercel deployment
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
