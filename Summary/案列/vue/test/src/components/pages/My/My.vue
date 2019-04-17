<template>
    <div class='home'>
     <Mys></Mys>
      <Footer/>
     
    </div>

</template>
<script>
import Header from "../../commons/Header";
import Footer from "../../commons/Footer";

import Mys from "./Mys.vue"
export default{
   name:"my",
	 components:{
		Mys,Footer
	 },
   data(){
    return{

    }
   }
  
}   

</script>
