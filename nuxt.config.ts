// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-09',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})

module.exports = {
  components: [
    {
      path: '@/components/',
      pathPrefix: false
    }
  ],
}