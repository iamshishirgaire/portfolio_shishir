/** @type {import('next').NextConfig} */
const nextConfig = {
  //optimize build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  //add unsplash image hostname
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
      },
    ],
  },
};

export default nextConfig;
