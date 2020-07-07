import Vue from 'vue';
import Router from 'vue-router';

import posts from '../views/blog/index.vue';
import post from '../views/blog/IndividualPosts.vue';

Vue.use(Router);

const router = new Router({
  base: process.env.VUE_APP_BASE_URL,
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    { name: 'posts', path: '/', component: posts },
    { name: 'post', path: '/post/:index?', component: post },
  ],
});

export default router;
