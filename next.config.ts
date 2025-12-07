// next.config.ts
import type { NextConfig } from 'next';

const csp = [
  "default-src 'self';",
  "img-src 'self' data: https:;",
  "script-src 'self' 'unsafe-inline';",
  "style-src 'self' 'unsafe-inline';",
  "font-src 'self' data:;",
  "connect-src 'self';",
  "frame-ancestors 'none';",
].join(' ');

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Strict-Transport-Security', value: 'max-age=15552000; includeSubDomains' },
        ],
      },
    ];
  },
};

export default nextConfig;
