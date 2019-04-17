<template>
    <div class="nav_menu">
       <ul>
       	<li
       	v-for='(item,index) in navlist' 
       	:key='index'
       	@click='toggle(item.path,index)'
       	:class='sel==index?"you":""'
       	>{{item.name}}		
        <i :class="item.fome"></i>			
       	</li>
       	
       </ul>
     </div>
    
   
    
</template>
<script>

export default{
   name:"food",
   data(){
    return{
      datas:"母婴之家",
      navlist:[{name:'首页',path:'/home',fome:'fa fa-home fa-2x'},{name:'分类',path:'/List',fome:'fa fa-th-large fa-2x'},{name:'购物车',path:'/car',fome:'fa fa-cart-plus fa-2x'},{name:'我的',path:'/my',fome:'fa fa-user-o fa-2x'}],
      list:'/home',
		  sel:"0",

   }
	 },
  methods:{
   toggle(path,val){
		 window.sessionStorage.setItem('sel',val);
			this.sel=val
   		this.$router.push(path);
   	},
   	
   },
		
	created(){
		let sel = Number(sessionStorage.getItem('sel'));
		this.sel=sel;

	}
   }
   
  
</script>
<style lang="less" scoped>
	@import url("../../../styls/main.less");
.nav_menu{
  position:fixed;
  z-index: 999;
  background: #fff;
  bottom: 0;
  width:100%;
  left:0;
  ul{
    display:flex;
    justify-content: space-around;
    li{
      display:flex;
      flex-direction: column;
      .fs(14);
      color: #82737A;
    }
    .you{
      color: #E95535;
    }
  }
}
  
</style>