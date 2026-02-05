import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Определяем base path в зависимости от окружения
// Для локального запуска используем '/', для GitHub Pages - '/Work/1st_site/version_2/'
// VITE_BASE_PATH устанавливается только при деплое
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base: base,
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
