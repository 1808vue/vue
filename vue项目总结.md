##### vue一:移动端布局

rem布局:rem布局实现不同分辨率移动终端的自适应、整体缩放

```
通常在写移动端页面的时候，我们都会设置viewport，保证页面缩放没有问题，最常见的viewport的meta标签如下：

1
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

<script>
      document.documentElement.style.fontSize=document.documentElement.clientWidth/10+"px"
      console.log( document.documentElement.fontSize)
    </script>
由于rem是相对于根节点元素大小的单位，遂当设备宽度改变时，采用rem布局的大小均会跟随相同比例变化，从而实现整体缩放

```

| rem                              | em                   |
| -------------------------------- | -------------------- |
| 以根部(Html根元素)字体大小为基准 | 以当前字体大小为基准 |

1.(1)弹性盒布局

 

```
display:flex;//写在父元素上就成为了弹性盒
设置弹性盒的步骤:
(1)在父元素上写display:flex;
(2)在子元素上写 flex:份数(若其它写了宽度，剩下一个可以用flex:1代替)
注意事项:弹性盒布局默认主轴是水平方向，侧轴永远和主轴垂直。
flex-direction:column (垂直方向) 默认是水平方向，若水平摆放则此段代码无需再写

(3)设置子项目在容器主轴方向的对齐方式   justify-content:center/flex-start/flex-end/space-between(将空白区域平分在子项目之间)
(3.1)设置子项目在容器在所在行的侧轴方向的对齐方式 align-items:center/flex-start/flex-end


总结:display:flex;justify-content:space-between;align-items:center 通常结合使用。
```

### 二:相关知识点

#### 二:(1)less样式相关使用

vue中，使用某种编译语言写样式时  下载(npm install  less less-loader --save-dev)

1.(1)在html中使用其它语言编写样式时，需要用gulp去解析。

```
<style lang="less" scoped>
//lang 声明编译语言  
//scoped 声明css样式的作用范围只限于该页面中的元素。
</style>
```

1.(2)boostray中查看less的语法。

```
less常用三大语法:
1.声明变量:@
2.混合样式:相当于函数形式:
3.嵌套
案例如下所示:
1   @bg-header:#282828; 使用background: @bg-header;
2    .fs(@px){
    font-size: unit(@px/37.5,rem);
}
使用.fs(34);
3 .home{
    ul{
        li{
            
        }
    }
}
     
```

#### 二(2)vue知识

##### 1:指令的使用:

```
v-for  列表渲染
1.<ul>
  <li v-for="(item,index)in/of list":key="index">{{item}}</li>
  </ul>
v-if/show   条件渲染  v-if与v-show的区别:v-if:适用于切换少   v-show 适用于频繁切换。

v-bind: 可以让一个属性值变成变量
事件:
 //  v-on:click=“add"/@click="add"
 以上几个均是单向绑定   即:数据改变则视图改变
 v-model="变量名" 常用于form表单中 //视图改变时，数据跟着发生改变    双向绑定
```

v-for的三种情况:

| 数组     | 两个参数 | item,index    |
| -------- | -------- | ------------- |
| 对象     | 三个参数 | val,key,index |
| 数组对象 | 两个参数 | item,index    |

:key="index" 唯一关键项 ；不重复

##### 2:组件  组件就是实例的一个子类     功能:封装可复用的代码 

特点:所有vue 原型链上的属性子类都会继承

```
import Axios from "axios"
// 组件是vue实例的一个子类，所有vue原型链上的属性子类也会继承
Vue.prototype.$axios=Axios


```



| 全局组件 | 全局注册  在实例外部注册    Vue.component("注册的组件名称"，{要创建的组件}) | 所有vue实例都可以使用 |
| -------- | ------------------------------------------------------------ | --------------------- |
| 局部组件 | 局部注册  在实例内部注册  components:{"注册的组件名"：创建的组件} | 只有实例内部可使用    |

is可以将任何元素标签渲染指定的组件

```
<table> <tr is="hehe"></tr></table>

可以在body里创建template模板标签，该标签特点
1:模板内容外层必须有根元素
2:组件数据要求必须是一个函数，在函数内部返回数据
```

```
组件的操作步骤
创建组件=>注册组件=>使用组件


组件在项目中的应用流程
创建并抛出组件    抛出:export default=>  引入要注册的组件 import 注册的组件名 from "路径"  =>注册组件   在哪使用在哪注册  



固定写法

<template>
    <div class="contain">
     </div>
</template>
<script type="text/javascript">
    import MovieList from "./movieList.vue"
    import backTop from "./backTop.vue"
    export default{
        name:"movie",
        components:{MovieList,backTop},
        data(){
            return{ navlist:[{title:"正在热映",path:'now-playing'},{title:"即将上映",path:'coming-soon'}] ,
       
        methods:{
            change(val){
                this.selInit=val
            }
        } 
        }
</script>

<style></style>
```

##### 3.vue中文件的引入方法

| import  "路径名"      | 全局引用 |
| --------------------- | -------- |
| @import url("路径名") | 局部引用 |

### ******4.组件间的通信  

在vue中，一个根实例，里面有大量的组件，组件间都可以形成父子嵌套的关系。

数据流只能从父组件流向子组件， 单向传参。

```
父组件控制子组件 原理:子组件抛出数据   props:["属性名"] 供子元素使用  
					父组件将要传递的值赋值给该属性 
					接收时通过自定义属性接收。
					
					
		
子组件控制父组件 原理:通过父组件的方法修改父组件的值
方法一:子组件通过props 传递一个回调函数给子元素=>
方法二:通过在子元素上绑定一个自定义事件，由子元素触发这个自定义事件
触发一个自定义事件   this.$emit("自定义事件名”)

```

##### 5.过渡与动画    animated.css查找

<transition>需使用动画的元素</transition>

##### 6.mint-ui    mint-ui使用手册   进行查看。

 是按需加载组件  Mint UI 采用 CSS3 处理各种动效，避免浏览器进行不必要的重绘和重排 

如:无限加载//懒加载等等   

#### 7.ansome中查找所需要的字体图标

## 结论: 使用任何第三方插件的流程

# 下载并安装=>引入=>使用

安装第三方插件的方法     npm install  插件名    --save

--save是表示生产时使用，安装在 devDependencies中        上线时取消--save  安装在dependencies中

npm 安装任何插件前提是:   创建了对应的项目对应项目中有node_modules，package.json     

npm已经安装好

### 8.swiper框架做轮播图适用于用vue框架做的项目

## 做vue项目必不可少的插件

```
做vue项目必不可少的插件

axios插件用于ajax请求

router 路由实现组件之间的切换   根据url-hash变化切换组件

mint-ui 移动端的组件库

animate.css 实现动画效果

awsome  字体图标的使用

less/sass  样式插件

```

### 9.侦听器

Vue 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化 ，常用于tab选项卡更新时切换到对应的数据显示。

### 10.过滤器   对多元素处理

让A数据变成B数据   核心:一定要返回数据。

```
 声明方式

    vue实例.filter('过滤器的名字',funciton(要过滤的数据){

           return  过滤完的数据

    })

    使用方式

    {{test|过滤器的名字}} 通过管道(|）使用

```

### 11.计算属性  对单元素处理

```
computed也是 配置项之一   通过变量名来使用数据

   computed{

      '变量名'(){

       处理数据

      return  数据

      }

    }

```

#### 12.axios的使用

 1.下载

 2.引入  import Axios from  ‘axios’

1. Axios.get(url,data)
2. 跨域  vue中可以同代理的方式实现跨域
   config->index.js文件进行配置

```
proxyTable: {
    '/test':{ //小暗号
        target:'https://m.maizuo.com/',//目标服务器
        changeOrigin:true,//是否允许代理
        pathRewrite:{'^/test':''}// 匹配请求接口
    }
},

Axios.get('/test  /v4/api/billboard/home?__t=1542262686031',{})
https://m.maizuo.com   /v4/api/billboard/home?__t=1542262686031

 将 axios 挂到了vue的原型链 prototype  


vuecomponent是组件 他是vue的一个拓展实例   也有axios
// 引入axios  
import  Axios from 'axios'
Vue.prototype.$axios=Axios// axios 挂载到vue的实例上 这样他的拓展实例  组件也有$axios


```

## 13.vue-router

```
-------------------------------
vue-router
目的是实现组件之间的切换  ;根据url hash 变化切换组件
在页面中放置<router-view>  相当于开辟一片空间  当页面监听到hash 变化 匹配路由配置里的组件信息
    进行加载
<router-link to="变化的hash" tag  active-class>实现变化页面hash
    to: 路由的变化
    tag  将该标签解析为其他元素 默认是a
    active-class  页面激活是的使用类名
下载
注册
挂载

“页面（组件）”的切换 有2种方式
1. router-link     没有点击事件
2. 编程式导航来实现 可以添加点击事件  this.$router.push(‘要跳转的路由’) replace
a-》b-》c-》d  push()
a->b->c->d   replace
区别在于存储跳转信息 和浏览器的后退按钮相关

```

#### ******路由跳转参数

   1.动态路由
    路由配置项进行配置  
    {path:'test/:id/:us'......}
    路由会匹配相应的路径以及参数
    传递  $router.push('/test/wantyi/123')
    接受 $route.params
   2.params
     是通过name进行跳转不是path
     传递  $router.push({name:'test',params:{us:wangyi,ps:'123'}})
     接受 $route.params
   3.query
     通过path 传递参数
     传递  $router.push({path:'/test',query:{us:wangyi,ps:'123'}})
     接受 $route.query

```
 13种方法 地址栏参数可见  2 参数不可见

```



### 三:在vue中解决axios用post发起ajax请求的方法

百度搜索 npm-axios-ctrl+f->qs

在浏览器端

注意:引用第三方插件的前提是 npm install 插件名

```
方法一:
var params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

```
方法二:
在node.js中

var qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

  在node.js中

  方法三

```
var querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```
#### 14.Vue中的生命周期

成对出现:

(1)	beforeCreated(){}能获取到数据和vue实例，但是不能获取元				素，数据修改无效。

​     created(){}不能获取DOM 但可以修改数据

  (2)  beforeMount(){}挂载前，不能获取dom元素，但可以修改数据

   mounted(){}获取dom元素以及修改数据    应用:轮播图js部分的代码放在此生命周期里面。



(3) beforeUpdate(){}数据更新前调用mounted数据，数据跟新可以调用。

updated(){}

(4)beforeDestrory(){}移除事件 双向绑定，事件监听，dom元素和数据依然保留

​	destroyed(){}  在destroyed中注销，清除事件监听器。



(5)actived (){} disactivated(){}

#### 四.vuex

```
全局状态管理

声明了一堆全局变量，不论那个组件发生变化，整个项目 和该变量相关的一块变

解决问题 多组件共享状态 ：比如 传参
下载  npm install  vuex --save
配置 
​```js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    name:'韩梅梅'
  },
  mutations: {
    setName(state,name){
      state.name=name
    }
  } 
})
//state 存放所有全局状态值（全局变量） 这里的数据只能通过mutation里的方法修改
//mutations 里面有一堆方法  方法的作用是修改  state 里的值
export default store
​```
在main.js 引用 并且而注册到实例 store

使用
this.$store.state.name(变量名使用) 推荐用计算属性
修改
this.$store.commit("mutation里的方法",'传参')
```

小技巧:v-if/show 伴随父元素添加事件实现切换控制子元素的显示隐藏，同时事件中带参数实现路由跳转传参。

应用;由列表页数据跳转到详情页显示  一般通过id传参