import { defineConfig } from 'tsup';
import sassPlugin from 'esbuild-plugin-sass';

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  format: ['cjs', 'esm'],
  outDir: 'dist',
  clean: true,
  esbuildPlugins: [sassPlugin()],
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'file'
  },
  external: ['react', 'react-dom', '*.png', '*.jpg', '*.svg'],
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : '.cjs.js'
  })
});
