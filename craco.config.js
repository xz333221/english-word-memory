const path = require('path');

module.exports = {
  devServer: {
    port: 6655,  // 设置端口号为 6655
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置别名
    },
    configure: (webpackConfig, { env, paths }) => {
      // 设置公共路径
      const publicPath = env === 'production' ? './' : './word'; // /word
      webpackConfig.output.publicPath = publicPath;

      return webpackConfig;
    },
  },
};
