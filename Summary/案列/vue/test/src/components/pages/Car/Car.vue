<template>
    <div class='car'>
    <p @click="tip">TIP</p>
       <Cars/>
       <Footer/>
    </div>

</template>
<script>
import Footer from "../../commons/Footer";
import { Toast } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
import Cars from "./Cars.vue"
Vue.component(Actionsheet.name, Actionsheet);
export default{
   name:"my",
	 components:{
		Cars,Footer
	 },
   data(){
    return{

    }
   },
   methods:{
    /*tip(){
    this.$message.error('错了哦，这是一条错误消息');
 }*/
    tip(){
  Toast({
  message: '提示',
  position: 'center',
  duration:500,
  className:"active"
   });
    }
   }
 

  
}   

</script>
<style>
  .active{
    width:150px;
    height:60px;
    background:skyblue;
    text-align:center;
    line-height:40px;
  }

</style>