/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
    typedRoutes: true,
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
}

export default nextConfig
