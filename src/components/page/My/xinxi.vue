<template>
    <div class='my'>
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <span class="message">{{state}}</span><br />
        <button @click="tuichu" class="tuichu" >退出</button>
    </div>
</template>
<script>
export default{
    name:'Home',
    components:{},
    data(){
        return {
          state:""
        }
    },
    computed:{  
    },
    methods:{
      tuichu(){
      window.localStorage.clear();
      this.$router.push("/my/login")

    }
  },
     created(){
    var storage=window.localStorage //获取storage对象。
    var title=storage.getItem("us")
    if(title==null){
    this.$router.push("/my/login")
    }
    else if(title!=null){
      this.state=title;
    }
  }
}   

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.my{
 margin-top:57px; 
}
.message{color:red;}
.tuichu{.w(120);background-color:pink;.h(40);margin-top: 200px;}
</style>