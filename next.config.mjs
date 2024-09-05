/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clusif.fr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "desinscription.mediametrie.fr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.advenis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lookaside.fbsbx.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.cookielaw.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
