import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

const trimmedBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/|\/$/g, "") ?? "";
const basePath =
  process.env.NODE_ENV === "production" && trimmedBasePath.length > 0
    ? `/${trimmedBasePath}`
    : undefined;

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  typedRoutes: true,
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withMDX(nextConfig);
