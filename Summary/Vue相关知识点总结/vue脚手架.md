#### 踩坑专用

https://www.cnblogs.com/goloving/p/8901960.html

#### 脚手架搭建流程

https://segmentfault.com/a/1190000011275993

Nodejs安装步骤

https://jingyan.baidu.com/article/48b37f8dd141b41a646488bc.html

#### 使用预处理语言less

npm install  less less-loader --save-dev

```HTML
<style lang="less" scoped>
//lang 声明编译语言  
//scoped 声明css样式的作用范围只限于该页面中的元素。
</style>
```

```HTML
新建less文件
//相关的混合操作
.w(@px){
    width: unit(@px/37.5,rem);
}
.padding(@top,@right,@bottom,@left){
    padding-top:unit(@top/37.5,rem);
    padding-bottom:unit(@bottom/37.5,rem);
    padding-left:unit(@left/37.5,rem);
    padding-right:unit(@right/37.5,rem);
}
局部引入
style下面  如
@import url("../../../styls/main.less");引入
然后可以使用.w(375);.padding(1,1,1,1);
全局引入
main.js   import "./styls/reset.less"
```





#### ansome字体图标使用

进入官网   直接下载

解压完把css文件夹和fonts文件夹放进项目static文件夹下面

在index.html引入   

<link rel="stylesheet" type="text/css" href="./static/css/font-awesome.css" />



#### 跨域问题解决之服务器代理

找到项目的config文件夹里面的index.js

找到module.exports	dev	proxyTable：{}里面设置

```HTML
'/api':{ //小暗号
 target:'https://m.maizuo.com/',//目标服务器
 changeOrigin:true,//是否允许代理
 pathRewrite:{'^/api':''}// 匹配请求接口
}


请求使用
this.$axios.get("/api/json/reply/QueryCategoryListReq",{})
.then((res)=>{
	console.log(res);
})
```

##### vue之post请求

```HTML
var params = new URLSearchParams();
params.append('us',this.val);
params.append('ps',this.pas);
this.$axios.post("my/Users/reg",params)
.then((res)=>{
	console.log(res);
})
```





#### 打包相关

通过npm run build 打包生成dist文件夹，里面包含css、js。其中在css、js文件夹的map文件在部署时都要将其删除

###### 页面出不来

找到项目的config文件夹里面的index.js

找到build：{} 里面有个assetsPublicPath

```
代码assetsPublicPath: '/',
改为assetsPublicPath: './',
```

###### 背景图片出不来

找到build文件夹下面的utils.js

```
if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
    
    
    改为
    
    
 if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath:"../../"     //增加的代码
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
```





###### 打包  （开发、生产环境？） api统一管理

在src文件夹里新建api文件夹 里面新建api.js

内容

```
let baseURL = "/api";//直接npm run dev 运行项目用这个
//let baseURL = "http://192.168.0.43:8080";//打包时用这个	http://192.168.0.43:8080为开启后端服务我网址

export default function DISTRIBUTE(){
    return{
        "login":`${baseURL}/sys/auth/login`,  //登录
        "register":`${baseURL}/sys/auth/register` //注册
    }
}


//后端接口为http://192.168.0.43:8080/sys/auth/register
//这样写的好处   当IP发生变化时，只需改变一个  后端接口改变时，不要翻看代码
```

使用 

​		main.js引入

```
import API from './api/api.js'
Vue.prototype.API=API
```

​		要与后端交互发起请求

```
var params = new URLSearchParams();
params.append('us',this.val);
params.append('ps',this.pas);
this.$axios.post(this.API().login,params)
.then((res)=>{
	console.log(res);
})
//this.API().login相当于http://192.168.0.43:8080/sys/auth/login
```

