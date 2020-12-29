/* eslint-disable jsdoc/require-file-overview */
module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    './rules/cypress/index.js',
    './rules/import/index.js',
    './rules/jest/index.js',
    './rules/jsdoc/index.js',
    './rules/react/index.js',
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
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
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
