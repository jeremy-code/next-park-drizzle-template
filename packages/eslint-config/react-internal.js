require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
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
  // otherwise, eslint-config-next will throw error in packages without app/pages directory
  settings: { next: { rootDir: "../../apps/client" } },
};
