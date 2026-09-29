import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/AG-Price-Scope-Website-/',
  plugins: [react()],
})
