import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './My.portfolio.io/',  // ضع هنا اسم المستودع الخاص بك
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
