/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  reactStrictMode: false,
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
