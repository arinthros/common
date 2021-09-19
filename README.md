# @arinthros/common

A set of common scripts and configurations for JavaScript projects. Inspired by `kcd-scripts` and `react-scripts`.

## Config

### ESLint

**.eslintrc.js**

```js
module.exports = {
  extends: ['@arinthros/common/eslint'],
}
```

### Prettier

**.prettierrc.js**

```js
module.exports = require('@arinthros/common/prettier')

// To add your own custom rules:
module.exports = {
  ...require('@arinthros/common/prettier'),
  // Put your own rule preferences here.
}

```

## Scripts

Example usage:

```json
// package.json

"scripts" {
  "reinstall": "arinthros-common reinstall"
}
```

### Reinstall

Deletes untracked folders like `node_modules` then runs a fresh dependency install.

Supports `--yarn` or `--npm` flags, defaults to yarn.

TODO: support a list of additional paths to clear