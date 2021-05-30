import Vue from 'vue'
import App from './App.vue'
import MediPoll from 'medi-poll'
import 'medi-poll/src/client/dist/medi-poll.css'
// import MediPoll from '../../../medistream/medi-poll/dist/medi-poll.umd.min.js'
// import '../../../medistream/medi-poll/dist/medi-poll.css'

Vue.config.productionTip = false
Vue.use(MediPoll)

new Vue({
  render: h => h(App),
}).$mount('#app')
