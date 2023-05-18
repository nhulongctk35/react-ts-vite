import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react-refresh';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: './auto-imports.d.ts',
      dirs: ['src/components/**/*.tsx'],
      eslintrc: {
        enabled: true,
      },
      defaultExportByFilename: true,
    }),
  ],
});
