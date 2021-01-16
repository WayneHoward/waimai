import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入rem适配
import Utils from './assets/js/utils.js'
//引入样式重置文件
import './assets/css/common.css'
//icon图标
import './assets/iconfont/iconfont.css'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  mounted () {
    Utils.setRem();
    window.onresize = Utils.setRem;
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
