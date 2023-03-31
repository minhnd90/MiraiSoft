// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://content.nuxtjs.org
    '@nuxt/content',
    '@nuxtjs/eslint-module',
    // https://sidebase.io/nuxt-auth/configuration/nuxt-config
    '@sidebase/nuxt-auth',
  ],
  middleware: ['auth'],

  content: {
    documentDriven: true,
  },

  eslint: {
    /* module options */
  },

  auth: {
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: true,
  },
});
