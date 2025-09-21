import globals from "globals"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"
import js from "@eslint/js"
import rules from "./rules/eslint.js"
import importPlugin from "eslint-plugin-import"

export default [
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
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
        ...typescriptEslint.configs.recommended.rules,
        ...rules
    }
  },
]
