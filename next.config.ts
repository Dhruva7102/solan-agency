import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The 2026 restructure folded seven pages into three. Old links —
    // bookmarks, texted URLs — land on the section that replaced them.
    return [
      { source: "/systems", destination: "/#rails", permanent: true },
      { source: "/services", destination: "/deal", permanent: true },
      { source: "/calculator", destination: "/deal#calculator", permanent: true },
      { source: "/process", destination: "/proof", permanent: true },
      { source: "/control", destination: "/#no-cage", permanent: true },
      { source: "/results", destination: "/proof", permanent: true },
    ];
  },
};

export default nextConfig;
