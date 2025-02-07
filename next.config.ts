const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'st4.depositphotos.com',
      },
      {
        protocol: 'https',
        hostname: 'shopequo.com',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
      {
        protocol: 'https',
        hostname: 'www.amitree.com',
      },
      {
        protocol: 'https',
        hostname: 'nacharger.com',
      },
    ],
  },
};

module.exports = nextConfig;
