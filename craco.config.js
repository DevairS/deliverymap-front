const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '~/api': path.resolve(__dirname, 'src/api'),
      '~/components': path.resolve(__dirname, 'src/components'),
      '~/hooks': path.resolve(__dirname, 'src/hooks'),
      '~/app': path.resolve(__dirname, 'src/app'),
      '~/pages': path.resolve(__dirname, 'src/pages'),
      '~/stores': path.resolve(__dirname, 'src/stores'),
      '~/theme': path.resolve(__dirname, 'src/theme'),
      '~/utils': path.resolve(__dirname, 'src/utils'),
      '~/services': path.resolve(__dirname, 'src/services'),
    },
  },
};
