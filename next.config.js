/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes (required for Product Hunt integration)
  compress: true, // Enable gzip compression
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
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
  async headers() {
    return [
      {
        // Cache static assets for 1 year (immutable — filenames are hashed by Next.js)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache public images for 30 days
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Cache public assets for 30 days
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Security + performance headers for all pages
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // 'same-origin-allow-popups' is required for Firebase Google Sign-In popup.
          // 'same-origin' (the platform default) blocks the auth popup from communicating
          // back to the parent window, causing auth/popup-closed-by-user errors.
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
        ],
      },
    ];
  },
}

module.exports = nextConfig
