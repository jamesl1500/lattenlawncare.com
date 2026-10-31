import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Short, flyer-friendly URLs for the fall services.
  async redirects() {
    return [
      { source: "/leaf-cleanup", destination: "/services/leaf-cleanup", permanent: true },
      { source: "/leaf-and-mow", destination: "/services/leaf-and-mow", permanent: true },
    ];
  },
};

export default nextConfig;
