const sassPlugin = require('esbuild-plugin-sass');

esbuild.build({
  plugins: [sassPlugin()]
});
