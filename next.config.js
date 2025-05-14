/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GIST_URL: process.env.NEXT_PUBLIC_GIST_URL,
  },
};

module.exports = nextConfig;
