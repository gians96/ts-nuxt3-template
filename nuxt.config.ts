// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/sass/app.scss"
  ],
  build: {
    transpile: ["vuetify"]
  },
  vite: {
    define: {
      "process.env.DEBUG": true
    }
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in" // default
    }
  },
  // runtimeConfig: {
  //   public: {
  //     baseURL: "https://rickandmortyapi.com/api/"
  //   }
  // }
});
