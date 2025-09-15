const sassPlugin = require('esbuild-plugin-sass');
require('esbuild').build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outdir: 'dist',
  plugins: [sassPlugin()]
});
