import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
      { find: '@api', replacement: path.resolve(__dirname, 'src/api') },
    ],
  },
});
