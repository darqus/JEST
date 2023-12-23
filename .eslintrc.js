const rules = require('./rules/eslint')

module.exports = {
  root: true,

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
  },

  env: {
    browser: true,
    es2022: true,
    node: true,
  },

  extends: [
    'standard'
  ],

  plugins: [
    '@typescript-eslint',
  ],

  rules,
}
