/** @type {import('next').NextConfig} */
// ^ comment for typescript
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true -> it's changed to default option after v13.
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
