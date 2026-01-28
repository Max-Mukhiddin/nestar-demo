import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};
module.exports = {
  sassOptions: {
    quietDeps: true,
  },
};
export default nextConfig;
