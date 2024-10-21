import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173, // inner port for Vite
    watch: {
      usePolling: true // Enable polling for file changes inside Docker
    },
    hmr: {
      host: 'localhost',
      clientPort: 8080 // outer port for HMR
    }
  },
  
  plugins: [react()],
})
