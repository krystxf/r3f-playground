import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    redirects: async () => [
        {
            source: "/",
            destination: "/ingenuity",
            permanent: false,
        },
    ],
};

export default nextConfig;
