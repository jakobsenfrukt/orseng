// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.scss"],
  modules: ["@nuxtjs/sanity"],
  app: {
    head: {
      script: [{ src: "/theme.js" }],
    },
  },
  sanity: {
    projectId: "eparymf1",
    dataset: "production",
    // process.env.NODE_ENV === 'production'
    // apiVersion: '2021-10-18'
  },
});
