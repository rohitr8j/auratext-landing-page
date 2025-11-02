/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes (required for Product Hunt integration)
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
