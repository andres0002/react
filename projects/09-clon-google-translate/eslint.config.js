import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

// 📁 Patrones reutilizables
const filesJS = "**/*.{js,mjs,cjs}";
const filesTS = "**/*.{ts,mts,cts}";
const filesReact = "**/*.{jsx,tsx}";
const filesTests = [
  "**/*.test.{js,ts,jsx,tsx}",
  "**/__tests__/**/*.{js,ts,jsx,tsx}",
];

export default defineConfig([
  // ✅ JavaScript
  {
    files: [filesJS],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  // ✅ TypeScript
  {
    files: [filesTS],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs["recommended-type-checked"].rules,
    },
  },
  // ✅ React (JSX + TSX)
  {
    files: [filesReact],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: { react: pluginReact },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  // ✅ Tests
  {
    files: filesTests,
    languageOptions: {
      globals: {
        ...globals.jest, // o globals.vitest si usas Vitest
      },
    },
    rules: {
      "no-unused-expressions": "off",
    },
  },
]);
