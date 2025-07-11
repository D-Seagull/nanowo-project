import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';
import path from 'path';

// Отримуємо всі HTML-файли у папці src
const inputs = glob.sync('src/*.html');

export default defineConfig(({ command }) => ({
  base: './', // Відносні шляхи, щоб в продакшені було коректно
  root: 'src',
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Збираємо у папку dist на рівні з src
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: inputs.length ? inputs : 'src/index.html',
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
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
    FullReload(['src/**/*.html']),
    SortCss({
      sort: 'mobile-first',
    }),
  ],
}));
