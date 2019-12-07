import Vue from 'vue'
import App from './App.vue'
import VueMomment from 'vue-moment'
import moment from 'moment-timezone'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Post from './components/Post.vue'
import store from './store'


/* uses */
Vue.config.productionTip = false
Vue.use(VueMomment, { moment })
Vue.use(VueResource)
Vue.use(VueRouter)
/* ==== */

const routes = [
  { path: '/post/:id', component: Post }
]

const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
