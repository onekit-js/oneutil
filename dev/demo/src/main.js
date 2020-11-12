/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {STRING} from '../../oneutil/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(STRING.string2arraybuffer('ABC'))
