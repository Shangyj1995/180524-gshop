import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'
import store from './store'
import CartControl from './components/CartControl/CartControl.vue'
import Split from './components/Split/Split.vue'

import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'

import 'swiper/dist/css/swiper.min.css'
import './mock/mockServer'
import './filters'


Vue.component('TopHeader',TopHeader)
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)
Vue.component(Button.name,Button)

Vue.use(VueLazyload,{
  loading
})

new Vue({
  el: '#app',
  /*components: { App },
  template: '<App/>'*/
  render: h => h(App),
  router,
  store
})
