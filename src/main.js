import Vue from 'vue'
import App from './App.vue'
import './styles/styles.scss'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
