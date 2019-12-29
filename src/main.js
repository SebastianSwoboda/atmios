import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueRouter from "vue-router";
import router from './router/router';

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
