##### 一、path

###### 1，路由配置

```
   {
     path: '/describe/:id',
     name: 'describe',
     component: Describe
   }
```

###### 2，使用方法

```
//   直接调用$router.push 实现携带参数的跳转
 this.$router.push({
//  这个id是一个变量,随便是什么值都可以
    path: 	`/describe/${id}`,
 })
```

######  3，获取方法（在describe页面）

```
this.$route.params.id
```

##### 二、name

######  1，路由配置

```
   {
     path: '/describe',
     name: 'describe',
     component: Describe
   }
```

（这个地方默认配置就可以了，不用做任何的处理）

###### 2，使用方法

```
       this.$router.push({
          name: 'describe',
          params: {
            id: id
          }
        })
```

父组件中：通过路由属性中的name来确定匹配的路由，通过params来传递参数。

######  3，获取方法（在describe页面）

```
this.$route.params.id
```

也用params获取就可以了；

##### 三、query

###### 1，路由配置

```
   {
     path: '/describe',
     name: 'describe',
     component: Describe
   }
```

（默认配置）

###### 2，使用方法

```
    this.$router.push({
          path: '/describe',
          query: {
            id: id
          }
        })
```

（params换成了query）

 3，获取方法（在describe页面）

```
this.$route.query.id
```

四:返回上一个页面

```
 this.$router.go(-1);//返回上一个页面
```

##### props传值方法

###### 父组件

```
<template>
  <div>
    <input v-model="message">
    <!--将childmessage与message通过v-bind指令绑定!-->
    <child :childmessage="message"></child>
  </div>
</template>
<script>
  import child from "./components/child.vue"
  export default{
    //构建child组件
    components:{
      child
    },
    data(){
      return {
        //初始化message
        message:''
      }
    }
  }
</script>
```

###### 子组件

```
<template>
  <div>
    <p>childmessage is:{{childmessage}}</p>
  </div>
</template>
<script>
  export default{
    //将childmessage传递给child
    props:['childmessage']
  }
</script>
```

prop是单向绑定的，不应该在子组件内部改变prop。不过这里的props传过来的值会随之父组件的值的改变而改变，是动态改变的。