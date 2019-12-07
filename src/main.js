import Vue from 'vue'
import App from './App.vue'
import VueMomment from 'vue-moment'
import moment from 'moment-timezone'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Content from './components/Content.vue'
import store from './store'


/* uses */
Vue.config.productionTip = false
Vue.use(VueMomment, { moment })
Vue.use(VueResource)
Vue.use(VueRouter)
/* ==== */

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'Home', component: Content },
    { path: '/posts/:index', name: 'post', component: () => import('./components/Post.vue') }
  ]
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
