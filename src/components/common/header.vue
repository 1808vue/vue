<template>
  <div id="header">
    <div class="contain">
         <div class="logo" @click="tiaozhuan1">
        {{datas}}
        </div>
    <div class="shuru">
     <i class="fa fa-search" aria-hidden="true"></i>
      <input type="text" class="susuo"  value="搜索"/>      
    </div>
    </div>



    <div class="nav_menu">
   <ul>
    <li class="menu1" @click="tiaozhuan(navlist[0].path)">
      <i class="fa fa-home fa-2x"  aria-hidden="true" ></i> 
        {{navlist[0].name}}
     </li>
     <li class="menu1" @click="tiaozhuan(navlist[1].path)">
        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
        {{navlist[1].name}}
     </li>
     <li class="menu1" @click="tiaozhuan(navlist[2].path)">
        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
        {{navlist[2].name}}
     </li>
     <li class="menu1" @click="tiaozhuan(navlist[3].path)">
        <i class="fa fa-user-md fa-2x" aria-hidden="true"></i>
        {{navlist[3].name}}
     </li>
   </ul>
  </div>


  <backTop></backTop>
   
  </div>
  
</template>
<script>
import backTop from "../page/Home/backTop.vue"
export default {

  name: 'Header',
  components:{backTop},
  data(){
    return {
        datas:"母婴之家",
        navlist:[{name:'首页',path:'/home'},{name:'分类',path:'/classify'},{name:'购物车',path:'/car'},{name:'我的',path:'/my'}],
        list:'/home'
    }
  },
  methods:{
    tiaozhuan(path){
        this.$router.push(path);
      },
      tiaozhuan1(){
        this.$router.push("/home");
      }
  },
  // created(){
  //   this.$router.push(this.list);
  // }
  
};
</script>

<style lang="less" scoped>
@import url("../../styls/main.less");
.header{

}
.contain{
  z-index: 999;
  .w(375);
  position: fixed;
  top:0;
  left:0;
   display:flex;
   color:@color-nav;
    background-color:@bg-header;
    .h(37);
    .lh(37);
   .logo{
   .fs(14);
   padding-left: 6px;
   padding-right: 12px;
   }
   .shuru{
    .fs(20);
     color:#fff;
   .w(246);
   .h(37);
    .susuo{
   background-color:#ff8c3c;
    border:1px solid #ff8c3c
    }
    
   }


}
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
      .fa{
        display: inline-block;

      }
    }

  }
}

</style>
