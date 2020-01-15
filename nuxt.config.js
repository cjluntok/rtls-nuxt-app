
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'RTLS Solutions | Real Time Location Service',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AiRISTA Flow is a leader in real-time location services. Quickly discover how to optimize your business performance and transform your organization.' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'},
      { src: '/js/bootstrap.min.js'},
      { src: '/js/main.js', body:true}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff0000', throttle: 0, height: '5px', duration: "3000"},
  /*
  ** Global CSS
  */
  css: [
    '@assets/styles/normalize.css',
    '@assets/styles/custom.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/fontawesome.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
