import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import SweetModal from 'sweet-modal-vue/src/plugin.js'
// import * as VueThreejs from 'vue-threejs' // >= 0.2.0

// Vue.use(VueThreejs)

Vue.use(SweetModal)
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
