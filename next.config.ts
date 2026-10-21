import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/businesses/livestock",
        destination: "/businesses/agricultural-products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
