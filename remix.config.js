/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*", "**/*.css.ts"],
  future: {
    unstable_dev: true,
    unstable_cssModules: true,
    unstable_vanillaExtract: true,
    unstable_cssSideEffectImports: true,
  },
};
