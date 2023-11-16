import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteGhPages from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react() ],
     base:"/gaming-app/"
 
  
 
})


//  ViteGhPages({ // Configurations spécifiques à ViteGhPages, par exemple :
//build: {
  // Dossier de sortie pour le build  outDir: 'dist',
 // outDir: 'dist',
//}
  //}),


//]