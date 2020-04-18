import Vue from '/web_modules/vue/dist/vue.esm.browser.js'
import httpVueLoader from '/web_modules/http-vue-loader/src/httpVueLoader.js'

Vue.use(httpVueLoader)

new Vue({
  el: "#vueApp",
  components: {},
  template: '<div class="vue-main"></div>',
});

