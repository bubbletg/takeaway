/*
入口JS
 */
import './flexible.js'
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import VConsole from 'vconsole'

// import './mock/mockServer' // 加载mockServer即可
import loading from './common/imgs/loading.gif'
// import './fiters' // 加载过滤器

const vConsole = new VConsole({
  // 可以在此设定要默认加载的面板
  defaultPlugins: ['system', 'network', 'element', 'storage'],
  maxLogNumber: 1000,
  onReady: function () {
  },
  onClearLog: function () {
  }
})

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

// new Vue({
//   el: '#app',
//   render: h => h(App),
//   router, // 使用上vue-router
//   store // 使用上vuex
// })

new Vue({
  vConsole,

  router,
  store,

  render: h => h(App)
}).$mount('#app')
