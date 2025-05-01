import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    // optional fallback for react-router
    fs: {
      strict: false
    }
  }
});
