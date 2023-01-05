//import Vue from 'vue'
import {createApp} from 'vue'
import App from './App.vue'
//import VueRouter from 'vue-router'
import router from './router'

createApp(App).use(router).mount('#app')
/* Vue.config.productionTip = false


new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}) */
