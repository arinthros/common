# @arinthros/common

A set of common scripts and configurations for JavaScript projects. Inspired by `kcd-scripts` and `react-scripts`.

## Config

### ESLint

**.eslintrc.js**

```js
module.exports = {
  extends: ['./node_modules/@arinthros/common/eslint.js'],
}
```

### Prettier

**.prettierrc.js**

```js
module.exports = require('@arinthros/common/prettier')
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