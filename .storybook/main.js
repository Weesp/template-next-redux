// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
// const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
    // '@storybook/preset-scss',
    // {
    //   name: `@storybook/preset-scss`,
    //   options: {
    //     rule: {
    //       test: /(?<!\.module).s[ca]ss$/,
    //     },
    //   },
    // },
    // {
    //   name: `@storybook/preset-scss`,
    //   options: {
    //     rule: {
    //       test: /\.module\.s[ca]ss$/,
    //     },
    //     cssLoaderOptions: {
    //       modules: {
    //         localIdentName: '[name]__[local]--[hash:base64:5]',
    //       },
    //     },
    //   },
    // },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // webpackFinal: async (config, { configType }) => {
  //   config.resolve.plugins = [new TsconfigPathsPlugin()]
  //   // config.module.rules.push({
  //   //   test: /\.scss$/,
  //   //   use: ['style-loader', 'css-loader?modules&importLoaders', 'sass-loader'],
  //   //   include: path.resolve(__dirname, '../'),
  //   // })
  //   return config
  // },
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     compilerOptions: {
  //       target: 'es5',
  //       lib: ['dom', 'dom.iterable', 'esnext'],
  //       allowJs: true,
  //       skipLibCheck: true,
  //       strict: true,
  //       forceConsistentCasingInFileNames: true,
  //       noEmit: true,
  //       esModuleInterop: true,
  //       module: 'esnext',
  //       resolveJsonModule: true,
  //       isolatedModules: true,
  //       jsx: 'preserve',
  //       incremental: true,
  //       baseUrl: '.',
  //       paths: {
  //         '@/*': ['./src/*'],
  //       },
  //     },
  //   },
  // },
}
