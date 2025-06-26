import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.themealdb.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                pathname: '/**',
            },
        ],
    },
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};

export default nextConfig;
