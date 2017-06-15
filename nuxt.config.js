module.exports = {
  /*
  ** Extend nuxt using nuxt modules system (Alpha)
  ** Learn more: https://github.com/nuxt/nuxt-modules
  */
  modules: [{ src: '@nuxtjs/pwa', options: { icon: { sizes: [512, 192, 380 ] } } }],
  
  /*
  ** Headers of the page
  */
  head: {
    title: "starter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Customize manifest.json
  */
  manifest: {
    name: "Nuxt.js",
    theme_color: "#3B8070"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
