import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import {
  apis
} from '@/axios'
import '@/lib/normalize.css'
import VueCookie from 'vue-cookie'
import vueMeta from 'vue-meta'
import './registerServiceWorker'

Vue.use(VueCookie)
Vue.use(vueMeta, {
  refreshOnceOnNavigation: true
})
Vue.prototype.$apis = apis

VueCookie.set('type', Math.random() * 10)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')