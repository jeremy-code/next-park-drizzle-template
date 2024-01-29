require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "turbo",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  ignorePatterns: ["dist/*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["../*/*/tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["dist/*"],
};
