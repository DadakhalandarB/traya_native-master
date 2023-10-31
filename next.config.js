/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
    serverActions: true,
  },
  publicRuntimeConfig: {
    DEFAULT_API_URL: process.env.NEXT_PUBLIC_DEFAULT_API_URL,
    SECURITY_TOKEN: process.env.NEXT_PUBLIC_SECURITY_TOKEN,
    PREVIEW_URL: process.env.NEXT_PUBLIC_PREVIEW_URL,
    COOKIES_DOMAIN: process.env.NEXT_PUBLIC_COOKIES_DOMAIN,
    RAZORPAY_KEY: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
    MINI_PREVIEW_URL: process.env.NEXT_PUBLIC_MINI_PREVIEW_URL,
  },
  images: {
    domains: [
      "traya-dev-cdn.s3.ap-south-1.amazonaws.com",
      "traya-prod-cdn.s3.ap-south-1.amazonaws.com",
      "cdn.shopify.com",
      "d3twoz8hvcdm9h.cloudfront.net",
      "dvv8w2q8s3qot.cloudfront.net",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};
