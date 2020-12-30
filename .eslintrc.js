/* eslint-disable jsdoc/require-file-overview */
module.exports = {
  extends: ['./src/eslint.js'],
  ignorePatterns: [
    '**/node_modules/**',
    '**/publish',
    '**/publish/**/*.js',
    '**/watch',
    '**/watch/**/*.js',
  ],
}
