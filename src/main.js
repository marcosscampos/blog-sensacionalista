import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMomment from 'vue-moment'
import App from './App.vue'
import moment from 'moment-timezone'
import store from './store'

/* uses */
Vue.config.productionTip = false;
Vue.use(VueMomment, { moment });
Vue.use(VueRouter);
/* ==== */

/* routing */
const routes = [
  { path: '/', name: 'Home', component: () => import('./components/Content')},
  { path: '/integra/:id', name: 'integra', component: () => import('./views/IndividualPosts') }
];

const router = new VueRouter({
  mode: 'history',
  routes });
/* ==== */

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
