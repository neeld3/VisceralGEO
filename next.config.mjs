/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
    webpack: (config, { webpack }) => {
      // Optional: Enables reading mapbox token from environment variable
      config.plugins.push(new webpack.EnvironmentPlugin({MapboxAccessToken: ''}));
      return config;
    }
  };
  
  export default nextConfig;
  
