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

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' https://accounts.google.com https://vercel.live 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://vercel.live;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
