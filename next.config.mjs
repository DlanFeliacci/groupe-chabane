/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS,
      EMAIL_TO: process.env.EMAIL_TO,
    },
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
      };
      return config;
    },
  };
  
  export default nextConfig;
  