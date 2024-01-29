require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "turbo",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["../*/*/tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["dist/*"],
  rules: {
    // since used with internal package, the lack of /pages or /src directory
    // triggers this rule, hence we disable it
    "@next/next/no-html-link-for-pages": "off",
  },
};
