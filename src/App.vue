<template>
  <div id="app">
    <Header></Header>
    <!-- <Banner></Banner>
     
    <Homelist></Homelist> -->
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>

import Header from "./components/common/header.vue"
import Banner from "./components/page/Home/Banner.vue"
import Homelist from "./components/page/Home/HomeList.vue"
export default {
  name: 'App',
  components: {
    Header,Banner,Homelist
  }
};
</script>

<style lang="less" scoped>
@import url("./styls/main.less");

</style>
