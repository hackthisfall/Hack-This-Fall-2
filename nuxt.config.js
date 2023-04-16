export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Events | Hack This Fall",
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
          "Hack This Fall is one of the most thriving hacker communities. It encourages beginner hackers to build unique projects regardless of the tech or field; the only focus is to create something meaningful and enjoy building while also solving the shared struggles of our surroundings."
      },
      {
        property: "apple-mobile-web-app-title",
        content: "Events | Hack This Fall"
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
        content: "Events | Hack This Fall"
      },
      {
        property: "og:description",
        content:
          "Hack This Fall is one of the most thriving hacker communities. It encourages beginner hackers to build unique projects regardless of the tech or field; the only focus is to create something meaningful and enjoy building while also solving the shared struggles of our surroundings."
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
        content: "Events | Hack This Fall"
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
  plugins: [
    {
      src: "~/plugins/v-waypoint.js",
      mode: "client"
    },
    {
      src: "~/plugins/v-waves.js",
      mode: "client"
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-webfontloader"],
  webfontloader: {
    google: {
      families: [
        "Poppins:400,600,700,800",
        "JetBrains Mono:300,400,500,600,700,800",
        "Inter:300,400,500"
      ]
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
