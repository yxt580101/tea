// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import "font-awesome/css/font-awesome.css"
import "swiper/dist/css/swiper.css"
Vue.config.productionTip = false;
/* eslint-disable no-new */
Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
