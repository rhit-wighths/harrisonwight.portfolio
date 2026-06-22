import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/harrisonwight.portfolio/portfolio",
  assetPrefix: "/harrisonwight.portfolio/portfolio/public",
};

export default nextConfig;
