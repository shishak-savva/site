import path from 'path';
import { defineConfig } from "vite";
import { readdirSync } from 'fs';

const root = path.resolve(__dirname, 'pages');

const pages = readdirSync(root).filter((page) => page.endsWith('.html') && page !== 'index.html');

export default defineConfig({
  root,
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        'main': path.resolve(root, 'index.html'),
        ...pages.reduce((acc, page) => ({
          ...acc,
          [page.replace(/\.html$/, '')]: path.resolve(root, page)
        }), {})
      }
    }
  }
});