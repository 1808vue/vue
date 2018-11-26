import "./styls/reset.less"
import Vue from 'vue'
import App from './App'
import Axios from "axios"
// 组件是vue实例的一个子类，所有vue原型链上的属性子类也会继承
Vue.prototype.$axios=Axios
Vue.config.productionTip = false


import  router from  './router'

// mint-ui的使用
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)



import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    name:'韩梅梅',
    shuzu:[]
  },
  mutations: {
    shuju(state,val){
      state.shuzu=val;
    }
  } 
})

// 组建是vue实例的一个子类 所有 vue原型链上的属性 子类也会继承
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},//注册组件
  template: '<App/>' // 用组件元素来替换根元素
})