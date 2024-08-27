import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My.portfolio.io/',  // تأكد من أن هذا هو اسم المستودع على GitHub
})
