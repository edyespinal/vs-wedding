/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/save-the-date',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
