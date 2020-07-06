import Vue from 'vue';
import Router from 'vue-router';
import posts from '@/views/blog/index';
import post from '@/views/blog/IndividualPosts';
Vue.use(Router);

const router = new Router ({
  base: process.env.VUE_APP_BASE_URL,
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {name: 'posts', path: '/', component: posts },
    {name: 'post', path: '/post/:id?', component: post}
  ]
})

export default router;