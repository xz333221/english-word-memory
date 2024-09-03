const path = require('path');

module.exports = {
  webpack: {
    publicPath: './',
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置别名
    },
  },
};
