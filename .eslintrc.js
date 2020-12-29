/* eslint-disable jsdoc/require-file-overview */
module.exports = {
  extends: ['./src/config/eslint'],
  ignorePatterns: [
    '**/node_modules/**',
    '**/publish',
    '**/publish/**/*.js',
    '**/watch',
    '**/watch/**/*.js',
  ],
}
