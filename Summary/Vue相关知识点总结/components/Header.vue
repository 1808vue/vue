<template>
  <header class="n-header">
    <span class="left-arrow" @click="goBack" style="color:rgb(38, 162, 255);">返回</span>
    <span style="font-weight: bold;">{{title}}</span>
    <span><img src="../style/image/矢量智能对象.png" alt="" class="img"></span>
  </header>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Header",
  components: {

  },
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  methods: {
    goBack (){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
  .n-header {
    width: 100%;
    height: 1.2rem;
    background:#F9DFC6;
    line-height: 1.2rem;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    .left-arrow:before {
      content: "";
      position: absolute;
      width: 0.23rem;
      height: 0.23rem;
      border: 1px solid rgb(38, 162, 255);
      border-width: .03rem 0 0 .03rem;
      -webkit-transform: rotate(315deg);
      transform: rotate(315deg);
      top: 0.45rem;
      left: 0.4rem;
      // font-size: 0.16rem;
    }
    .img {
      width: 30px;
      margin-top:13px;
    }
  }
  .n-header :nth-child(2) {
    width: 35%;
    text-align: center;
  }
</style>