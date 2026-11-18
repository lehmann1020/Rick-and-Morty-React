import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages serves the app under /<repo name>/; use your repository's name.
  base: mode === 'production' ? '/Rick-and-Morty-React/' : '/',
  plugins: [react()],
}))
