const globals = require("globals");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");
const rules = require("./rules/eslint");
const importPlugin = require("eslint-plugin-import");

module.exports = [
  {
    ignores: ["dist/", "node_modules/", ".eslintrc.js"],
  },
  {
    files: ["**/*.js"],
    ...js.configs.recommended,
    plugins: {
        import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
      import: importPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
        ...typescriptEslint.configs.recommended.rules,
        ...rules
    }
  },
];