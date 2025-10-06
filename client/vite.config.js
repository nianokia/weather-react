import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: process.env.DOMAIN,
          changeOrigin: true,
          secure: false,
        }
      }
    }
  };
});