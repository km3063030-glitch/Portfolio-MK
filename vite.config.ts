import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      'lucide-react': path.resolve(__dirname, './src/components/icons/index.tsx'),
    },
  },
  server: {
    port: 3000,
    open: false,
    host: true,
  },
});
