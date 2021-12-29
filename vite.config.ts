import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'

const pathResolve = (pathStr: string): string => {
  return resolve(__dirname, '.', pathStr)
}

export default defineConfig({
  alias: {
    '@': pathResolve('./src'),
    '/images': 'src/assets/images'
  },

  server: {
    open: false,
    https: false,
    hmr: {
      overlay: true,
    },
  },

  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'astatic/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },

    chunkSizeWarningLimit: 800,
  },

  plugins: [
    vue(),
    viteCompression({
      //生成压缩包gz
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
  }),
  ]
})