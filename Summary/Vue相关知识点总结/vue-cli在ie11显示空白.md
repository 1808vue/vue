##### vue-cli项目在ie11打开一片空白，并没有报错

解决：

###### 一、由于vuex等原因 不兼容导致空白

解决方法：

1、打开命令行

npm install babel-polyfill --save-dev 

2、main.js第一行！！！第一行，也就是最顶层那里引入

import 'babel-polyfill' 

3、如果也是用了官方脚手架 vue-cli，还需要在 webpack.config.js 配置文件中做修改（我没有弄这一步都可以了，如果前面那两步都不可以的话可以试一下）

```
module.exports = {
    entry: {
    app: './src/main.js'
}
}
```

改为

```
module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/main.js"]
  }
};
```

###### 二、由于引入swiper的原因

比如我

```
<template>
	<div class="home-fang">	
 		<div class="wenzi">
 			<span @click="newsList">新闻资讯</span>
 		</div>
 		<div class='banner'>
			<div class="swiper-container">
			    <div class="swiper-wrapper" >
			        <div class="swiper-slide" v-for='(item,index) in navlist' :key='index' @click="newsDetail(item.newsId,item.title)">
			        	{{item.title}}
			        </div>
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import Swiper from 'swiper'            ////此处引入了swiper，把它注释掉的时候在ie11是可以出来的，原因应该是swiper不兼容ie11？正在寻找答案中
import Vue from  'vue'
export default {
  name: "Homexw",
  data() {
    return {
      navlist: [],
    }
  },
  methods: {

    initSwiper(){
   	   	var mySwiper = new Swiper ('.swiper-container', {
   	   		direction : 'vertical',//竖向
   	   		autoplay:true,//自动切换
		    loop: true, // 循环模式选项
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination',
		    }
		})  
    },
	 newsDetail(id,name) { 
	  this.$router.push({ path: `/homecen/news/${id}/${name}` });
	},
	newsList(){
	  this.$router.push('/homecen/newsList');
	}
  },
  created() {
    //请求数据 新闻
    this.$axios.get(this.API().findNewsForHome, { params:{topNum:4} })
    .then((res) => {
      if(res.data.code==0){
        let navlist=res.data.data;
        this.navlist=navlist;
        Vue.nextTick(()=>{
         	this.initSwiper()
         })
      }else{
        console.log(res.data.message);
      }
    })
    .catch((res) => {
      console.log(res)
    })
  }

}
</script>
```

暂时还没有解决方法，不想写代码