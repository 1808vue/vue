// 路由文件的基本配置

import Vue from 'vue'
import VueRouter from 'vue-router';

 // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
 Vue.use(VueRouter)

import Home  from '../components/pages/Home/Home'
import Movie  from '../components/pages/Movie/Movie'
import Cinena  from '../components/pages/Cinena/Cinena'
import Mall  from '../components/pages/Mall/Mall'
import Myme  from '../components/pages/Myme/Myme'
import SalesCard  from '../components/pages/SalesCard/SalesCard'
import File  from '../components/pages/File/file'


const router = new VueRouter({
  routes:[
   { path: '/home', component: Home ,name:'home'},//首页
  { path: '/movie', component: Movie  ,name:'movie' },//电影
  { path: '/cinena', component: Cinena  ,name:'cinena' },//影院
  { path: '/mall', component: Mall  ,name:'mall' },//商城
   { path: '/file', component: File ,name:'file'},//首页
  { path: '/myme', component: Myme  ,name:'myme' },//我的
  { path: '/salesCard', component: SalesCard  ,name:'salesCard' },//卖座卡
  ]
})
 export default router