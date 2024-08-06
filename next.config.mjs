/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  headers: {
    key: "Content-Security-Policy",
    value:
      "script-src 'self' https://accounts.google.com 'unsafe-inline' 'unsafe-eval';",
  },
};

export default nextConfig;
