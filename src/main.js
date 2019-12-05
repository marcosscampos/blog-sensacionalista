import Vue from 'vue'
import App from './App.vue'
import VueMomment from 'vue-moment'
import moment from 'moment-timezone'

Vue.config.productionTip = false
Vue.use(VueMomment, {
  moment
})

new Vue({
  render: h => h(App),
}).$mount('#app')
