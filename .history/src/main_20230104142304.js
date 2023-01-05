import Vue from 'vue'
import App from './App.vue'
//import * as VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
//Vue.use(VueRouter)
//const VueRouter = require('vue-router').default;

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus=this
  }
})
