<template>
    <div class='my'>
     <input type="text" id="reg" placeholder="输入6-20个有效字符" v-model="val" @blur="yz"/><br />
     <span id="state">{{state}}</span><br /><span id="yhm">{{yhm}}</span>
    <input type="password"  id="pass" placeholder="密码" v-model="pas" @blur="mmyz"/><br/>
    <span id="pass">{{pass}}</span><br />
    <button @click="tiaozhuan" id="zhuce">注册</button><br />
      <span @click="denglu">已有账号吗?立即去登录</span>
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
          state:"",
          pass:"",
          yhm:""
        }
    },
    computed:{
        
    },
    methods:{
        yz(){
          var params = new URLSearchParams();
            params.append('us',this.val);
            params.append('ps',this.pas);
            this.yhm=""
            if(!/^[a-z][\w\-]{5,19}$/i.test(this.val)){ 
                this.yhm="用户名不符合条件"
                return
        }else if(/^[a-z][\w\-]{5,19}$/i.test(this.val)){
                this.yhm=""
        } 
          this.$axios.post("my/Users/yz",params)
          .then((res)=>{
            if(res.data.err==0){
            this.state=res.data.msg;
            }else if(res.data.err==-1){
              this.state="";
            }    
          })
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
          if(this.val.trim().length!=0&&this.pas.trim().length!=0){
          var params = new URLSearchParams();
            params.append('us',this.val);
            params.append('ps',this.pas);
        this.$axios.post("my/Users/reg",params)
       .then((res)=>{
        console.log(res);
        alert("注册成功")
          })
     }
          },
        denglu(){
          this.$router.push("/my/login")
        }
      },  
    created(){
      let isLogin=true
    }

}  

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
  #zhuce{margin-left: 50px;.w(100);.h(30);}
  span{.fs(16);margin-left: 50px;}
  #state{color:red;}
  #pass{color:red;}
  #yhm{color:red;}
}
</style>