/* eslint-disable jsdoc/require-file-overview */
const path = require('path')

module.exports = {
  extends: [
    path.join(__dirname, './rules/core/index.js'),
    'plugin:prettier/recommended',
  ],
  globals: {
    window: true,
    document: true,
    it: true,
    FileReader: true,
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['**/node_modules/**'],
  rules: {
    'no-unused-vars': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.test.js'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
