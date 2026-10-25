/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep production builds from overwriting a running dev server's files.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next-production',
};

module.exports = nextConfig;

