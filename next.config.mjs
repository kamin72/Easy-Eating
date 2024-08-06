/** @type {import('next').NextConfig} */
const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://accounts.google.com https://*.googleapis.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://accounts.google.com https://*.googleapis.com;
  frame-src 'self' https://accounts.google.com https://*.googleapis.com;
`
  .replace(/\s+/g, " ")
  .trim();

const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: csp,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
