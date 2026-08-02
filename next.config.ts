import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-toc", { heading: "The Table" }]],
    rehypePlugins: [["rehype-katex", { strict: true, throwOnError: true }]],
  },
});

export default withMDX(nextConfig);
