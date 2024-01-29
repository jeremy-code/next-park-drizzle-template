/** @type {import('lint-staged').Config} */
module.exports = {
  // prevents turbo from seeing the filenames as tasks, and instead passes them as arguments
  "*.{js,jsx,ts,tsx}": "yarn lint --",
};
