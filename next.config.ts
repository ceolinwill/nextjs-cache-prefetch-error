import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    authInterrupts: true,
    serverActions: {
      bodySizeLimit: "10mb",
    },
    staleTimes: {
      dynamic: 300,
    },
    typedEnv: true,
  },
  reactCompiler: true,
  typedRoutes: true,
};

export default nextConfig;
