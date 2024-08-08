// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    
    awsAmplify: {
      // catchAllStaticFallback: true,
      // imageOptimization: { "/_image", cacheControl: "public, max-age=3600, immutable" },
      // imageSettings: { ... },
    }
  },
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/'
  },
  routeRules: {
    '/**': { ssr: true }
  }
})
