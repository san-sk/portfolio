/** @type {import('next').NextConfig} */

// Deployed to GitHub Pages at https://san-sk.github.io/portfolio
// GitHub serves the project site at a lowercase path, so basePath must be
// lowercase to match (assets 404 otherwise).
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
