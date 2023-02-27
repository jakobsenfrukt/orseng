// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.scss"],
  modules: ["@nuxtjs/sanity", "@nuxtjs/i18n"],
  app: {
    head: {
      script: [{ src: "/theme.js" }],
    },
  },
  sanity: {
    projectId: "eparymf1",
    dataset: "production",
    // apiVersion: '2021-10-18'
  },
  i18n: {
    locales: ["no", "en"],
    defaultLocale: "no",
    lazy: false,
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    customRoutes: "config",
    pages: {
      "prosjekter/index": {
        en: "/projects",
      },
      "prosjekter/[slug]": {
        en: "/projects/[slug]", // * will match the entire route path after /:nested/
      },
    },
    vueI18n: {
      legacy: false,
      locale: "no",
      fallbackLocale: "no",
      availableLocales: ["no", "en"],
      messages: {
        no: {
          orseng: "Ørseng Interiørarkitektur",
          index: "Forside",
          projects: "Prosjekter",
          contact: "Kontakt",
          toTheTop: "Til toppen",
          websiteBy: "Nettside av",
          viewMap: "Se i kart",
          socialMedia: "Sosiale medier",
          address: "Adresse",
          seeAllProjects: "Se alle prosjekter",
          customer: "Kunde",
          customers: "Kunder",
          collaborators: "Samarbeidspartnere",
          photographer: "Fotograf",
          relatedProjects: "Relaterte prosjekter",
          competencies: "Kompetanseområder",
        },
        en: {
          orseng: "Ørseng Interior Architecture",
          index: "Front page",
          projects: "Projects",
          contact: "Contact",
          toTheTop: "To the top",
          websiteBy: "Website by",
          viewMap: "View map",
          socialMedia: "Social media",
          address: "Address",
          seeAllProjects: "See all projects",
          customer: "Customer",
          customers: "Customers",
          collaborators: "Collaborators",
          photographer: "Photographer",
          relatedProjects: "Related projects",
          competencies: "Competencies",
        },
      },
    },
  },
});
