/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "."],
  // otherwise, eslint-config-next will throw error in packages without app/pages directory
  settings: { next: { rootDir: "../../apps/client" } },
};
