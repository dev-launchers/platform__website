const withImages = require("next-images");

module.exports = withImages({
  async redirects() {
    return [
      {
        source: "/meet",
        destination: "/hangout",
        permanent: true,
      },
    ];
  },
  images: {
    /*
  next-images plugin is conflicting with Next.js 11 static import feature.
  see the discussion here:
  https://github.com/twopluszero/next-images/issues/73
  */
    domains: ["images.prismic.io"],
    disableStaticImages: true,
  },
  webpack5: true,
  reactStrictMode: true, // It helps you avoid legacy code, and deprecated APIs.
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    // we have too many errors if you run npm run lint ,but after bug fixes we could enforce this.
    ignoreDuringBuilds: true,
  },
});
