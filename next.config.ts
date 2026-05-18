import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "**",
  //     }
  //   ],
  // }


};
// next.config.js
module.exports = {
  allowedDevOrigins: ['192.168.1.210'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
export default withFlowbiteReact(nextConfig);