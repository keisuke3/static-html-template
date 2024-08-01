import { resolve } from 'path'
import { defineConfig } from 'vite'
import postcss from 'rollup-plugin-postcss'

export default (({ mode }) => {
  return defineConfig({
    root: 'src/pages',
    build: {
      outDir: 'dist',
      minify: false,
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/pages/index.html'),
        },
        output: {
          entryFileNames: 'assets/js/[name].js',
          chunkFileNames: 'assets/js/[name].js',
          assetFileNames: ({ name }) => {
            if (/\.(jpe?g|png|webp|avif|svg)$/.test(name ?? '')) {
              return 'assets/images/[name][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name][extname]';
            }
          }
        },
        plugins: [
          postcss({
            minimize: false,
            inject: false,
          })
        ]
      },
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    server: {
      port: 8000,
    }
  })
})