
console.log("ENVxxxxx: ", process.env.DATABASE_URL, process.env.API_SECRET, process.env.BACKENDLOGINAUTH);
const backend = process.env.BACKENDLOGINAUTH
export default {
  mode: "universal",
  target: 'server',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css",
      },

      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Barlow:400,700|Poppins:300,400&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css",
      },
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://fonts.googleapis.com/css?family=Playfair+Display&display=swap"
      // },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    // {
    //   rel: "stylesheet",
    //   href: "~/src/public/build/tailwind.css",
    // },
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/src/plugins/vue-carousel", ssr: false },
    { src: "~/src/plugins/vue-editor.js", ssr: false },
    { src: "~/src/plugins/input-tag.js", ssr: false },
    { src: "~/src/plugins/dateFilter.js" },
    { src: "~/src/plugins/Toaster.js", ssr: false },
    { src: "~/src/plugins/axios.js" },
    { src: "~/src/plugins/vue-uploader.js" },
    { src: "~/src/plugins/vue-inject.js" },
    { src: "~/src/plugins/vue-removePhoto.js" },
    { src: "~/src/plugins/vue-deleteItem.js" },
    { src: "~/src/plugins/vue-successModal.js" },
    { src: "~/src/plugins/vue-createForm.js" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*

   ** Nuxt.js modules
   */
  // modules: ["@nuxtjs/axios"],

  //  Axios settings
    // generate: {subFolders: true}, router: {base: '/'}
  // 'axios': {
  //   // See https://axios.nuxtjs.org/options.html
  //   'debug': process.env.NODE_ENV === 'development',
  //   'https': process.env.NODE_ENV !== 'development',
  //   'proxyHeadersIgnore': ['accept', 'accept-encoding', 'host'],
  //   'progress': true,
  //   'proxy': false,
  //   'retry': true,
  // },


  /*

   ** Build configuration
   */
  build: {
    extend ( config, { isDev, isClient, isServer } ) {
      if ( isServer ) {
        config.externals = {
          '@firebase/app': 'commonjs @firebase/app',
          '@firebase/firestore': 'commonjs @firebase/firestore',
          //etc...
        }
      }
    }
},
  // build: {
  //   /*
  //    ** You can extend webpack config here
  //    */
  //   extend(config, ctx) {},
  // },
  env: {
  baseUrl: process.env.BASE_URL || `"${process.env.DATABASE_URL}"`,
   backend ,
    API_KEY: process.env.API_SECRET,
  },
};

// module.exports = {
// [...]
//   build: {
//     extractCSS: true,
//     [...]
//   }
// [...]
// }
