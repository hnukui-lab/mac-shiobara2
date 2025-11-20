import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Define env vars safely for client-side usage
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
})

