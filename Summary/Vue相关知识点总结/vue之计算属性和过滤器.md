# vue_mz

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build编译打包

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

index.html  spa 单页应用 只有这这一个页面 入口页
static 放文件资源 图片 js文件 css 文件。。。  放在这里的文件引入要用根路径/static.....
dist 正常没有 是编译打包之后的目录
config 配置文件 可以修改端口号 主机 。。。
build  编译 配置文件
src  源码文件
assets  存放图片 这里图片会被变成base64 这里一般放图标等小图
xxx.vue 组件文件    模板 js  css
app.vue  也叫作根组件


1. 创建并抛出组件 一个xx.vue文件
2. 注册组件 在哪使用在哪注册  引入要注册的组件 import from
3. 使用组件

--------------------
1，分析项目
卖座网分析

按页面 
首页  头 侧边栏 banner  电影列表
影片  头 侧边栏 tab选项   列表
影院  头 侧边栏  列表
我的  头 侧边栏  登录、个人信息
卖座卡 头 侧边栏  tab    form
2.根据项目选择框架 搭建文件结构
3.基本配置
 移动的webapp
 设备适配  ：
 百分比  父类要有尺寸
 vw/vh   兼容性
 em/rem  算数不好算
 选择一个开发尺寸  iphone 375*667  逻辑尺寸   750*1334  2倍图
 1rem=withd/10
 配置less  npm install less  less-loader --save-dev
 http://www.bootcss.com/p/lesscss/
 variable  嵌套   mixin



 vue全家桶
 vue-cli
 axios   在vue发起ajax 请求 第三方插件  vue-resuorse
 vue-router
 vuex


 axios 使用
 1.下载
 2.引入  import Axios from  ‘axios’
 3.  Axios。get(url,data)
 4. 跨域  vue中可以同代理的方式实现跨域
      config->index.js文件进行配置

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

   计算属性 对单元素处理
   computed也是 配置项之一通过变量名来使用数据
   computed{
      '变量名'(){
       处理数据
      return  数据
      }
    }
    过滤器
    声明方式
    vue实例.filter('过滤器的名字',funciton(要过滤的数据){
           return  过滤完的数据
    })
    使用方式
    {{test|过滤器的名字}}



 侦听器

当需要在数据变化时执行异步或开销较大的操作时，Vue 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化 

```

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

   ####  路由跳转参数
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

     13种方法 地址栏参数可见  2 参数不可见
