import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ssr from 'vite-plugin-ssr/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
     'ec83ba7e57db.ngrok-free.app'
    ],
     proxy: {
    '/api': {
      target: 'http://localhost:5173',
      changeOrigin: true,
      headers: {
        "ngrok-skip-browser-warning": "true"
      }
    }
  }
  },
  
})
