import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/solan-agency",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
