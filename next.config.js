/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa");

// const nextConfig = {
//     ///output: 'export',
// };

// module.exports = withPWA({
//     ...nextConfig,
//     pwa: {
//         dest: "public",
//         disable: process.env.NODE_ENV === "development",
//     },
// });


const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
  });
  
  module.exports = withPWA({
    reactStrictMode: true,
    output: 'export'
  });
