import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//清除移动端点击延迟
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'
Vue.config.productionTip = false

fastclick.attach(document.body);
Vue.use(VueLazyLoad,{
  loading: require('common/image/default.png')
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
