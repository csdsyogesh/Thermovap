import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 🌟 RESTORE THE TAILWIND V4 PLUGIN
import path from 'path'

export default defineConfig(async ({ command }) => {
  // 🌟 FIX: Inject both React and the Tailwind v4 compilation engines into the base plugin array
  const plugins = [react(), tailwindcss()]

  if (command === 'build') {
    const vitePrerender = (await import('vite-plugin-prerender')).default
    
    plugins.push(
      vitePrerender({
        staticDir: path.join(__dirname, 'dist'),
       routes: [
  // Core & Content Pages
  '/',
  '/blog',

  // 🌟 Core Services Deep Dives (Added)
  '/services/evaporation-systems',
  '/services/zld-solutions',
  '/services/spray-dryers',
  '/services/fluid-bed-dryers',
  '/services/atfd-systems',
  '/services/spin-flash-dryers',
  '/services/multi-stage-dryers',
  '/services/technical-auditing',
  '/services/process-equipment',

  // 🌟 Expertise & Technical Consulting Subpages (Added)
  '/expertise/design-optimization',
  '/expertise/technical-audits',
  '/expertise/process-calculations',
  '/expertise/troubleshooting',

  // Industrial Projects / Equipment Pages
  '/thermproject/falling',
  '/thermproject/forced',
  '/thermproject/rise',
  '/thermproject/ssc',
  '/thermproject/atfd',
  '/thermproject/zld',
  '/thermproject/fluid',
  '/thermproject/spray',
  '/thermproject/multi',
  '/thermproject/spin',
  '/thermproject/paddle',
  '/thermproject/screw',

  // Industry Verticals
  '/thermindust/food-dairy',
  '/thermindust/herbal-catechu',
  '/thermindust/chemical-process',
  '/thermindust/textiles-dyeing',
  '/thermindust/pharma-biotech',
  '/thermindust/pulp-paper',
  '/thermindust/water-treatment',
  '/thermindust/agro-distilleries'
],
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true,
        },
      })
    )
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})