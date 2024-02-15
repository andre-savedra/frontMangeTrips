export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    components: {
      include: ['Button','Menubar']
    }
  },
  css: [
    'primeicons/primeicons.css',
    'primevue/resources/themes/aura-light-green/theme.css',
    '~/assets/reset.scss'
  ]
})
