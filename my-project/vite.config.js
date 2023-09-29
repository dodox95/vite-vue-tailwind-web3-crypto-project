// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      postcss: {
        plugins: {
          tailwindcss: path.resolve(__dirname, './node_modules/tailwindcss'),
          autoprefixer: path.resolve(__dirname, './node_modules/autoprefixer'),
        },
      },
    },
  },
})
