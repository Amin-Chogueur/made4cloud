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
      {
        protocol: "https",
        hostname: "www.sgd-pharma.com",
        pathname: "/themes/sgdpharma/medias/images/**",
      },
      {
        protocol: "https",
        hostname: "www.salesforce.com",
        pathname: "/content/dam/web/global/svg-icons/**",
      },
      {
        protocol: "https",
        hostname: "vectorified.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vectorseek.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.walkersands.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.salesforceben.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "tse1.mm.bing.net",
        pathname: "/**", // Allows images from any path under this domain
      },
    ],
  },
};

export default nextConfig;
