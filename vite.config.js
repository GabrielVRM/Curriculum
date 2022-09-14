import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://gabrielvrm.github.io/Dev-web/',

  plugins: [react()]
})
