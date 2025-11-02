/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes (required for Product Hunt integration)
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Redirect www to non-www for SEO consistency
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.auratxt.com',
          },
        ],
        destination: 'https://auratxt.com/:path*',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
}

module.exports = nextConfig
