import Vue from 'vue';
import VueMomment from 'vue-moment';
import moment from 'moment-timezone';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueMomment, { moment });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
