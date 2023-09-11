import type { StorybookConfig } from '@storybook/nextjs';
// import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../Components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_STORAGE_BUCKET_URL: '/temp/storage',
    NEXT_PUBLIC_MAP_TOKEN:
      'pk.eyJ1IjoidW1lcnNhbGVlbTUwIiwiYSI6ImNsbWR3M3FsNzE3amozY2pyeGcxeGpuYmMifQ.R5Xy93wL19u7T0htQU1_1A',
  }),
  // webpackFinal: async (storybookWebpackConfig, { configType }) => {
  //   // Ensure that the 'resolve' object exists before adding the plugin
  //   if (!storybookWebpackConfig.resolve) {
  //     storybookWebpackConfig.resolve = {};
  //   }

  //   // Add the TsconfigPathsPlugin to resolve TypeScript paths
  //   storybookWebpackConfig.resolve.plugins = [new TsconfigPathsPlugin()];

  //   return storybookWebpackConfig;
  // },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
