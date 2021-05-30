import Vue from 'vue'
import App from './App.vue'
import MediPoll from 'medi-poll'
import 'medi-poll/dist/medi-poll.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(MediPoll)

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
