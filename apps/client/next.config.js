/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,
  logging: { fetches: { fullUrl: true } },
  experimental: {
    ppr: true,
    taint: true,
    webpackBuildWorker: true,
  },
};
