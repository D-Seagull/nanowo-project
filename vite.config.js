import { defineConfig } from 'vite';
import path from 'path';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

// Отримуємо всі HTML-файли в src/
const inputs = glob.sync('./src/*.html').map(file => path.resolve(file));

export default defineConfig(({ command }) => ({
  base: '/nanowo-project/',
  define: {
    [command === 'serve' ? 'global' : '_global']: {},
  },
  root: 'src',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: inputs.length ? inputs : path.resolve('src/index.html'), // Якщо немає файлів, використовуємо index.html
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames: chunkInfo => {
          if (chunkInfo.name === 'commonHelpers') {
            return 'commonHelpers.js';
          }
          return '[name].js';
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name && assetInfo.name.endsWith('.html')) {
            return '[name].[ext]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: [
      'vite-plugin-html-inject',
      'vite-plugin-full-reload',
      'postcss-sort-media-queries',
    ],
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/**.html']),
    SortCss({
      sort: 'mobile-first',
    }),
  ],
}));
