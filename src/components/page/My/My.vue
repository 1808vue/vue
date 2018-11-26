<template>
    <div class='my'>
     <router-view></router-view>
    </div>
</template>
<script>
export default{
    name:'Home',
    components:{},
    data(){
        return {
          
        }
    },
    computed:{  
    },
    created(){
      this.$router.push("/my/xinxi")
    }
}   

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.my{
 margin-top:57px; 
}
</style>