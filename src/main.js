import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles/normalize.css'
import 'styles/base.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper /*  {default options with global component } */)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
