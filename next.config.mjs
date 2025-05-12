import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: true, // Set to true for a 308 permanent redirect
      },
    ];
  },
};

export default withMDX(nextConfig);