import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuetify);

new Vue({
  vuetify : new Vuetify(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
