import Vue from 'vue'
import App from './App.vue'
import VueMomment from 'vue-moment'
import moment from 'moment-timezone'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VuePaginate from 'vue-paginate'
import Post from './components/Post.vue'
import Posts from './components/Posts/Posts.vue'

Vue.config.productionTip = false
Vue.use(VueMomment, { moment })
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VuePaginate)

const routes = [
  { path: '/', component: Post },
  { path: '/post/:id', component: Posts }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
