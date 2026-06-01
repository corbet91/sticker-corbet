import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lstjwsxuqsqbqcnnvswg.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    API_URL_DEVELOP: process.env.API_URL_DEVELOP,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    JWT_KEY: process.env.JWT_KEY,
    DOMAIN: process.env.DOMAIN,
    DOMAIN_ADMIN: process.env.DOMAIN_ADMIN,
    MERCHANT: process.env.MERCHANT,
    SEPAY_SECRET_KEY: process.env.SEPAY_SECRET_KEY,
    SEPAY_ENV: process.env.SEPAY_ENV,
  },
};

export default nextConfig;
