/* eslint-disable jsdoc/require-file-overview */
module.exports = {
  plugins: [
    ['transform-export-extensions'],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-transform-object-assign'],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-proposal-function-bind'],
    ['@babel/plugin-proposal-numeric-separator'],
    [
      'module-resolver',
      {
        root: ['src', 'packages/*/src'],
      },
    ],
  ],
  presets: [
    '@babel/react',
    [
      '@babel/env',
      {
        targets: {
          browsers: 'last 2 versions',
          node: '12.16.2',
        },
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
  ],
  env: {
    build: {
      ignore: ['**/*.test.js', '__tests__', '**/__tests__'],
    },
    test: {
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
  ignore: ['node_modules'],
}
