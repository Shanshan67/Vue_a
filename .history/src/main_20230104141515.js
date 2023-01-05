import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

const VueRouter = require('vue-router').default;
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
  beforeCreate(){
    Vue.prototype.$bus=this
  }
})
