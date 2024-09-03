const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置别名
    },
    configure: (webpackConfig, { env, paths }) => {
      // 设置公共路径
      const publicPath = env === 'production' ? './' : '/';
      webpackConfig.output.publicPath = publicPath;

      return webpackConfig;
    },
  },
};
