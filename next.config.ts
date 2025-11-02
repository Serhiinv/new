import type { NextConfig } from "next";
import { bPath } from "@/config/basePath";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
    basePath : bPath,
};

export default nextConfig;
