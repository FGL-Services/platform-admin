/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/platform-admin",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
