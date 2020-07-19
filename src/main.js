import moment from 'moment-timezone';
import Vue from 'vue';
import VueMomment from 'vue-moment';

import App from './App.vue';
import vuetify from './components/plugins/vuetify';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueMomment, { moment });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
