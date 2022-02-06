const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-react-i18next'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal(config) {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];
    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];
    config.resolve.fallback = { fs: false, path: false };
    config.resolve.alias = {
      ...(config.resolve.alias || []),
      '@emotion/core': toPath('node_modules/@emotion/react'),
      'emotion-theming': toPath('node_modules/@emotion/react'),
    };

    return config;
  },
};
