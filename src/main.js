// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //引入路由对象
import axios from 'axios' //注册网络请求插件
import store from './vuex/Store' //引入vuex对象
// 引入轮播图插件
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.prototype.$http = axios; 
console.log(router);
Vue.config.productionTip = false

var baseApiUrl;
if(true){
  baseApiUrl = "http://localhost:3000"
}else{
  baseApiUrl = "http://192.168.43.22:3000"
}
Vue.prototype.baseApiUrl = baseApiUrl;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store, //注入store对象
  router //注册路由对象
})
