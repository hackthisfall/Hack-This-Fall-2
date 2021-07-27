export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Hack This Fall 2.0 | Innovate For Good",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content:
          "Hack This Fall 2.0 is a 48 Hours Virtual Hackathon happening on 22nd-24th October 2021. This is a beginner-friendly hackathon & our motto is Innovate For Good."
      },
      {
        property: "apple-mobile-web-app-title",
        content: "Hack This Fall 2.0 | Innovate For Good"
      },
      {
        property: "og:url",
        content: "https://hackthisfall.tech"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:title",
        content: "Hack This Fall 2.0 | Innovate For Good"
      },
      {
        property: "og:description",
        content:
          "Hack This Fall 2.0 is a 48 Hours Virtual Hackathon happening on 22nd-24th October 2021. This is a beginner-friendly hackathon & our motto is Innovate For Good."
      },
      {
        property: "og:image",
        content: "https://hackthisfall.tech/og-image.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "@hackthisfall"
      },
      {
        name: "twitter:title",
        content: "Hack This Fall 2.0 | Innovate For Good"
      },
      {
        name: "twitter:image",
        content: "https://hackthisfall.tech/og-image.png"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/styles/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-webfontloader"],
  webfontloader: {
    google: {
      families: ["Poppins:400,600,700,800"]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  styleResources: {
    scss: ["./assets/styles/setup/_mixins.scss"]
  },

  server: {
    port: 8000 // default: 3000
  }
};
