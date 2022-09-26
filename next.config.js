/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      bufferutil: require.resolve('bufferutil'),
      net: require.resolve('net'),
      request: require.resolve('request'),
      tls: require.resolve('tls'),
      'utf-8-validate': require.resolve('utf-8-validate'),
    };

    return config;
  },
}

module.exports = nextConfig
