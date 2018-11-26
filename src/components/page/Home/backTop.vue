<template>
    
    <div class="back"  @click="goBack">
      <transition enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
        >
        <div class='contain' v-show="show">
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </div>
    </transition>
    </div>
</template>
<script type="text/javascript">
    export default{
        name:"back",
        data(){
            return {
                show:false,
                distance:300
            }
        },
        methods:{
            goBack(){
                window.scrollTo(0,0)
            }
        },
        created(){
            // 添加事件监听器，监听页面滚动的距离，当页面滚动到一定时候，对应的元素显示隐藏。
            window.addEventListener("scroll",()=>{
                let y=window.scrollY
                if(y>= this.distance){
                    if(this.show==false){
                    this.show=true

                    }
                }else{
                    if(this.show==true){
                    this.show=false

                    }
                }
            })
        }
    };

</script>
<style lang="less" scoped>
 @import url("../../../styls/main.less");
    .contain{
        position:fixed;
        right:20px;
        bottom:50px;
        .w(60);
        .h(60);
        border-radius:50%;
        background-color:#fff;
        display:flex;
        padding-left:23px;
        justify-conent:center;
        align-items:center;
      
    }
    
</style>