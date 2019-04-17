<template>
    <div class='home'>
      <HomeList/>
        <Footer/>
    </div>

</template>
<script>
import Header from "../../commons/Header";
import HomeList from "./HomeList";
import Footer from "../../commons/Footer";

export default{
   name:"home",
   data(){
    return{
      activeName: 'first',
         user:"用户管理",
         peizhi:"配置管理",
    }
   },
   components:{
    Header,HomeList,Footer
  },
  methods:{
        handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}   

</script>
