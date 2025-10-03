/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './setupTests.ts',
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['**/*.stories.*', 'node_modules', 'dist'],
    coverage: {
      reporter: ['text', 'lcov']
    }
  }
});
