<template>
  <div class='my'>
  <!-- @onblur="yz" -->
    <input type="text" id="login" placeholder="用户名"  v-model="val" @blur="yz()"/><br />
    <span id="yhm">{{yhm}}</span><br />
    <input type="password"  id="pas" placeholder="密码" v-model="pas" @blur="mmyz"/><br />
    <span id="pass">{{pass}}</span><br />
    <button @click="tiaozhuan" id="denglu">登录</button><br />
    <span @click="zhuce">没有账号吗？立即去注册</span>
  </div>

</template>
<script>
export default{
  name:'Home',
  components:{},
    data(){
      return {
        val:"",
        pas:"",
        yhm:"",
        pass:"",
        jieko:[]

    }
  },
    methods:{
      yz(){
         if(!/^[a-z][\w\-]{5,19}$/i.test(this.val)){ 
                this.yhm="用户名不符合条件"
                return
        }else if(/^[a-z][\w\-]{5,19}$/i.test(this.val)){
                this.yhm=""
        } 
      },
      mmyz(){
            this.pass=""
            if(!/^[a-z][\w\-]{5,19}$/i.test(this.pas)){ 
                this.pass="密码不符合条件"
                return
        }else if(/^[a-z][\w\-]{5,19}$/i.test(this.pas)){
                this.pass=""
        }
      },
      tiaozhuan(){
        var params = new URLSearchParams();
            params.append('us',this.val);
            params.append('ps',this.pas);
        // getData(){   
        this.$axios.post("my/Users/login",params)
       .then((res)=>{
        var storage=window.localStorage//声明storage对象。
        storage.setItem("us",this.val)
         this.$router.push("/home");
      })
        // }
        
      },
      zhuce(){
        this.$router.push("/my/reg");
      }
    },
    
};

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.my{
  margin-top:37px;
  input{
    .w(300);
    .h(50);
    margin-left:40px;
    margin-bottom:5px;
    border:2px solid blue;
  }
}
 #denglu{margin-left: 50px;.w(100);.h(30);}
span{.fs(16);margin-left: 50px;color:pink;}
#pass{color:red;}
  #yhm{color:red;}
</style>