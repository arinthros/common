#!/bin/bash
/**
 * @module build
 */

const { execSync } = require('child_process')
const { writePackageJson } = require('./write-package-json')

execSync(
  `babel --root-mode upward ${process.cwd()}/src --out-dir ${process.cwd()}/publish --source-maps --extensions .js --delete-dir-on-start --no-comments --copy-files`,
  { stdio: 'inherit' },
)

writePackageJson({
  paths: {
    base: process.cwd(),
    publish: `${process.cwd()}/publish`,
  },
})
