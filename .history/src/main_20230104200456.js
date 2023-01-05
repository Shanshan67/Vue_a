//import Vue from 'vue'
import { createApp, markRaw } from "vue";
import App from './App.vue'

/* Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app') */

const app = createApp(App);


app.mount("#app");