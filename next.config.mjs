/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !! //
        // ignoreBuildErrors: true, /* Dangerously allow production builds to successfully complete even if your project has type errors. */
        // !! WARN !! //
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        optimizePackageImports: [ '@mantine/hooks' ],
    },
};

export default nextConfig;
