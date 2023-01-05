//import Vue from 'vue'
import { createApp } from "vue";
import mitt from 'mitt'
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