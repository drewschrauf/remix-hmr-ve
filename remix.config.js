/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*", "**/*.css.ts"],
  future: {
    unstable_dev: true,
    unstable_vanillaExtract: true,
  },
};
