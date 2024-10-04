/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    typescript: {
        // !! WARN !! //
        // ignoreBuildErrors: true, /* Dangerously allow production builds to successfully complete even if your project has type errors. */
        // !! WARN !! //
    },
};

export default nextConfig;
