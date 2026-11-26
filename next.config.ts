import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      // Raw image uploads flow through the uploadImage server action before
      // sharp compresses them, so the limit must fit a full-size source photo.
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
