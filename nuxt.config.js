export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Logibug',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],
  ssr: false,
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [


  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  axios: {
    baseURL: 'https://logibugv5.fly.dev/api/v1'
  },

  generate: {
    fallback: true
  },

  auth: {
    strategies: {
      local: {
        redirect: {
          login: '/dashboard',
          register: '/login',
          logout: '/',
          callback: '/login',
          home: '/'
        },
        endpoints: {
          register: { url: '/users', method: 'post' },
          login: { url: '/login', method: 'post' },
          user: { url: '/profiles', method: 'get' },
          logout: false,

        },
        token: {
          property: 'access_token'
        },
        user: {
          property: false,
          autoFetch: true // default
        }
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  router: {
    middleware: ['auth']
  }
}
