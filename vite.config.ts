import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta de salida (por defecto ya es dist, pero lo dejamos explícito)
    assetsDir: 'assets', // Subcarpeta para imágenes y JS
  },
  base: '/', // 👈 Asegura que las rutas funcionen en el dominio principal
})
