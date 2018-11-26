<template>
    <div class='banner'>
    <div class="swiper-container">
        <div class="swiper-wrapper" >
            <div class="swiper-slide" v-for='(item,index) in bannerlist' :key='index'>
                <img :src="item" alt="">
            </div>
        </div>
        <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div> 
        <div class="notice">
        <span class="tz">公告</span> <span class="tx">谨防诈骗的安全提醒</span>
    </div>
        </div>
    </div>
    
</div>
</template>
<script type="text/javascript">
    import Vue from "vue"
    import Swiper from "swiper"
    // import Axios from "axios"
    export default{
        name:"banner",
        data(){
            return {
                bannerlist:["http://img.muyingzhijia.com/img/201805/20180504160016_10_kitty1242.jpg","http://img.muyingzhijia.com/img/201811/20181103125250_6_merrieszhantou.jpg","http://img.muyingzhijia.com/img/201712/20171213092130_10_20170817114038_6_xiaobaixiong1000.jpg"]
            }    
        },
      // methods:{
           
      // }
       mounted(){
           var swiper = new Swiper('.swiper-container', {
                spaceBetween: 20,
                 loop: true, // 循环模式选项
              centeredSlides: true,
              autoplay: {
                delay: 1000,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
    });
      }
    }
</script>
<style  lang="less" scoped>
    @import url('../../../../node_modules/swiper/dist/css/swiper.min.css');
    @import url("../../../styls/main.less");  
    img{
    .w(375);
    .h(210);
}
.notice {
    background-color: #fff;
    display:flex;
    text-align:left;
   .tz{border:1px solid #ff8c3c;.fs(16);color:#ff8c3c;display:block;.w(50);.h(30);.lh(30);margin-right: 30px;}
   .tx{.fs(12);.w(250);.h(30);.lh(30);}
}
</style>