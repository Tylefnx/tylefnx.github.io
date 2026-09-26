import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages user domain (tylefnx.github.io), base is '/' (or './')
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
