/** @type {import('next').NextConfig} */

require('dotenv').config();



const nextConfig = {
    headers: () => [{
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
}

module.exports = nextConfig
