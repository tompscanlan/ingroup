// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'aws-lambda',
    output: {
      dir: '.output',
      serverDir: '.output/server',
      publicDir: '.output/public'
    }
  }
})
