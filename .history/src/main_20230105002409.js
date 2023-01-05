import { createApp } from "vue";
import App from './App.vue'
import router from './router'

const app = createApp(App);

new Vue({
  el:'#app',
  //render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  components: { App },
  template: '<App/>'
})
