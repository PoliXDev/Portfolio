import { defineConfig } from 'vite';

export default defineConfig({
  // Configuración básica
  base: './', // Cambiar a ruta relativa para GitHub Pages
  root: '.', // Define la raíz del proyecto (donde está tu index.html)
  publicDir: 'public', // Define el directorio público (donde irán los archivos estáticos como imágenes, fuentes, etc.)
  build: {
    outDir: 'dist', // Carpeta donde se generarán los archivos después de la compilación
    assetsDir: 'assets', // Carpeta dentro de dist para los archivos estáticos como imágenes
  },
  server: {
    port: 3000, // Puerto del servidor de desarrollo
    open: true, // Abre el navegador automáticamente al iniciar el servidor
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";`
      },
    },
  },
});
