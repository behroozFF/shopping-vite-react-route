import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/shopping-vite-react-route"
})

/* فقط زمانی که می خوای روی گیت هاپ نمایش بدی استفاده کن */
/* base: "/shopping-vite-react-route" */

