
import Vue from 'vue'
import VueRouter from 'vue-router';
 // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
 Vue.use(VueRouter)

import Home  from '../components/page/Home/Home.vue'
import footer  from '../components/common/footer.vue'
import footer1  from '../components/common/footer1.vue'
import Car  from '../components/page/Car/Car.vue'
import Classify  from '../components/page/Classify/Classify.vue'
import Search  from '../components/page/Search/Search.vue'
import Zsearch  from '../components/page/Search/Zsearch.vue'
import Details  from '../components/page/Details/Details.vue'
import My  from '../components/page/My/My'
import Login  from '../components/page/My/Login.vue'
import Reg  from '../components/page/My/Reg' 
import Xinxi  from '../components/page/My/xinxi'
const routes = [
{ path: '/', component: Home ,name:'home'},
  { path: '/home', component: Home ,name:'home'},
  { path: '/footer', component: footer ,name:'footer'},
  { path: '/footer1', component: footer1 ,name:'footer1'},
  { path: '/car', component: Car ,name:'car'},
  { path: '/classify', component: Classify ,name:'classify'},
  { path: '/search/:id', component: Search ,name:'search'},
  { path: '/zsearch/:id', component: Zsearch ,name:'zsearch'},
  { path: '/details/:id', component: Details ,name:'details'},
  { path:'/my',component:My, name:'my',children:[
            { path:'login',component:Login, name:'login'},
            { path:'reg',component:Reg, name:'reg'},
            { path:'xinxi',component:Xinxi, name:'xinxi'},
]}
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
 export default router