/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.EnvironmentPlugin({MapboxAccessToken: ''}));
    return config;
  }
};

export default nextConfig;
