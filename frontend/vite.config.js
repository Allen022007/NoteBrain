import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // CHANGE THIS to your actual Backend Port
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

