import { defineConfig } from 'tsup';
import sassPlugin from 'esbuild-plugin-sass';

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  format: ['esm', 'cjs'],
  outDir: 'dist',
  clean: true,
  esbuildPlugins: [sassPlugin()],
  loader: {
    '.png': 'file'
  },
  external: ['react', 'react-dom']
});
