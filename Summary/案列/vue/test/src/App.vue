<template>
  <div id="app" style="margin:0;padding:0;">
    <router-view>
         <Home></Home>
         <List></List>
				  <Car></Car>
         <My></My>
    </router-view>
  </div>
</template>

<script>
import Home from "./components/pages/Home/Home.vue"
import List from "./components/pages/List/List.vue"
import My from "./components/pages/My/My.vue"

export default {
  name: 'App',
  data(){
    return {
    name:"用心"
    }
  },
  components:{
    Home,List,My
  },

  mounted(){
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
