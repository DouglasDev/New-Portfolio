import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
