// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    output: {
        dir: '.output',
        serverDir: '.output/compute',
        publicDir: '.output/public'
    }
  },
  ssr: true

})
