<template>
    <div class="Car">
        <div class="shop">
            <input type="checkbox" class="all" ref="all" @click="all($event)" :checked="Hao">
            <span class="cartName">母婴之家商城</span> 
            <div class="shan" @click="shan">
                删除
            </div>
        </div>
        <!-- 商品数据循环 -->
        <div class="shang" ref="shang">
            <div class="ping" v-for="(item,index) in jieko" :key="index">
                <!-- :checked="hao" -->
                <input type="checkbox" class="zhuo" ref="zhuo"  @click="Zhuo(index)" :checked="item.zhuangtai">
                <img :src="item.img" alt="">
                <div class="item_info ">
                    <h3 class="title">
                        <a>{{item.title}}</a>
                    </h3>
                    <div class="cart_p_num">
                        <div class="cart_input">
                            <a class="subbtn" ref="Subbtn" @click="Jian($event,index)">-</a>
                            <!--
                                data-Max：最大可卖量
                                data-XG：限购
                                data-QS：起售数量
                                -->
                            <input type="text" id="ProductNum" ref="ProductNum" :value="item.qty" data-max="3" data-xg="0" data-qs="1" data-runnum="1" @change="neiRong($event,index)">
                            <a class="addbtn" ref="Addbtn" @click="Jia($event,index)">+</a>
                            
                        </div>
                    </div>                
                </div>
                <div class="price">
                    ￥<span>{{(item.price-0)*(item.qty)}}</span>
                </div>
            </div>


            <div class="xiaoji">
                小计：￥<span ref="zong1">0.00</span>
            </div>
        </div>
        



        
   
        <div class="bottomm">
            <div class="Top">
                <input type="checkbox" class="all" ref="all" @click="all($event)" :checked="Hao">
                <span class="dibu">全选</span> 
            </div>
            <div class="Center">
                <p class="da">总计：￥<span ref="zong">0.00</span></p>
                <p class="xiao">(不含运费、综合税)</p>
            </div>
            <div class="Bottom"  @click='tiaozhuan'>去结算</div>
            
        </div>
    </div>
</template>
<script type="text/javascript">
export default{
    name:"Car",
    components: {
	},
	data(){
    return {
            datas:"Car",
            zhi:1,
            Input:[],
            All:[],
            // hao:false,
            Hao:true,
            jieko:[],
            jiage:[]
        }
    },
    methods:{
        // #获得点击元素的前一个元素
        // e.currentTarget.previousElementSibling.innerHTML
        // # 获得点击元素的下一个元素
        // e.currentTarget.nextElementSibling
        // # 获得点击元素的父级元素
        // e.currentTarget.parentElement
        //点击减
        Jian(event,index){
            let el = event.currentTarget.nextElementSibling;
            this.zhi = el.value;

            // this.ll = this.$refs.ProductNum.value;
            if(this.zhi>1){
                this.zhi-=1;
                el.value = this.zhi;
                this.jieko[index].qty = this.zhi;
                this.jiage[index]=(this.zhi-0)*this.jieko[index].price;
            }else{
                event.currentTarget.classList.add("cart_p_disable");
            }
            this.panduan1();
            
        },
        //点击加
        Jia(event,index){
            let el = event.currentTarget.previousElementSibling;
            this.zhi = el.value-0;
            this.zhi+=1;
            el.value = this.zhi;
            this.jieko[index].qty = this.zhi;
            this.jiage[index]=(this.zhi-0)*this.jieko[index].price;
            event.currentTarget.previousElementSibling.previousElementSibling.classList.remove("cart_p_disable");
            this.panduan1();
            // this.ll = this.$refs.ProductNum.value -0;
            // this.ll+=1;
            // this.$refs.ProductNum.value = this.ll;
        },
        //input内容改变
        neiRong(event,index){
            let el = event.currentTarget;
            if(el.value == ''||el.value <1){
                el.value = this.zhi;
            }else{
                this.jieko[index].qty = el.value;
                this.jiage[index]=(this.zhi-0)*this.jieko[index].price;
            }
            
            this.panduan1();
        },
        //全选
        all(event){
            // let el = event.currentTarget;
            // this.Input = this.$refs.zhuo;
            this.Hao =!this.Hao;
            // this.hao = el.checked;
            if(this.Hao){
                for(let i=0;i<this.jieko.length;i++){
                    this.jieko[i].zhuangtai=true;
                }
            }else{
                for(let i=0;i<this.jieko.length;i++){
                    this.jieko[i].zhuangtai=false;
                }
            }
            this.panduan1();
            

            //下面的没用
            // if(el.checked){
            //     // this.Input.setAttribute("checked",true);
            //     for(var i=0;i<this.Input.length;i++){
            //         if(!this.Input[i].hasAttribute("checked")){
            //             this.Input[i].setAttribute("checked",true);
            //         }
            //         this.panduan1();

            //     }
            // }else{
            //     for(var i=0;i<this.Input.length;i++){
            //         this.Input[i].removeAttribute("checked");
            //     this.panduan1();

            //     }
            // }
        },
        //点击input
        Zhuo(index){
            // let el = event.currentTarget;
            this.jieko[index].zhuangtai = !this.jieko[index].zhuangtai;
            this.panduan1();
            this.panduan();

            // el.setAttribute("checked",!this.hao);
            // if(el.checked){
            //     // console.log(999);
            // }
            // let timer = setTimeout(()=>{
            //     clearTimeout(timer);
            // },1000)
        },
        //删除
        shan(){
            // this.Input = this.$refs.zhuo;
            // for(let i=0;i<this.Input.length;i++){
            //     if(this.Input[i].checked){
            //         console.log(this.Input[i].parentElement);
            //         this.$refs.shang.removeChild(this.Input[i].parentElement);
            //     }
            // }
            // console.log(this.Input.length);
            let ztai = [];
            for(let i=0;i<this.jieko.length;i++){
                if(this.jieko[i].zhuangtai){
                    this.jieko.splice(i,1);
                }
            }
            this.panduan1();
            this.panduan();
        },
        //点击加判断是否所有的input都选中
        panduan(){
            // this.Input = this.$refs.zhuo;
            // let hao1 = [];
            // for(let i=0;i<this.Input.length;i++){
            //     if(this.Input[i].checked){
            //         hao1.push(this.Input[i]);
            //     }
            // }
            // let len = hao1.length;
            // this.All = this.$refs.all;
            // if(len==this.Input.length){
            //     this.Hao =true;
            // }else{
            //     this.Hao =false;
            // }
            let ztai = [];
            for(let i=0;i<this.jieko.length;i++){
                if(this.jieko[i].zhuangtai){
                    ztai.push(this.jieko[i].zhuangtai);
                }
            }
            if(this.jieko.length==ztai.length){
                this.Hao =true;
            }else{
                this.Hao =false;
            }
        },
        panduan1(){
            // this.Input = this.$refs.zhuo;
            let hao2 = 0;
            let ztai = [];
            for(let i=0;i<this.jieko.length;i++){
                if(this.jieko[i].zhuangtai){
                    hao2+=this.jiage[i];
                }
            }
            // console.log(hao2);
            this.$refs.zong.innerHTML=hao2;
            this.$refs.zong1.innerHTML=hao2;
        },
        tiaozhuan(){
            // console.log(this.jieko);
            this.$store.commit("shuju",this.jieko)
            this.$router.push({path:`/my`});
        }
    },
    mounted(){
        this.panduan1();
    },
    created(){
        this.jieko = this.$store.state.shuzu;
        for(let i=0;i<this.jieko.length;i++){
            this.jiage.push(this.jieko[i].price);
        }
        // console.log(this.jieko);
        // var storage=window.localStorage //获取storage对象。
        // var title=storage.getItem("us")
        // if(title==null){
        //     alert("请先登录账号")
        //     this.$router.push("/my/login")
        // }
    }
  
};
</script>
<style lang="less" scoped>
@import url("../../../styls/main.less");
.cart_p_disable{
    background-color: #d2d2d2 !important;
}
.shang{
    .padding(0,0,100,0);
}
.Car{
    .h(100%);
    .margin(0,0,200,0);
    .padding(37,0,0,0);
    // padding-top:37px;
    .shop {
        .padding(0,0,0,20);
        .h(55);
        .lh(55);
        .fs(16);
        background: #fff;
        border-bottom: 1px solid #f5f5f5;
        .cartName{
            .padding(0,0,0,20);
        }
         .shan{
            .w(55);
            background:#fe6700;
            text-align: center;
            .lh(54);
            color:#fff;
            float: right;
        }
 
    }
    .ping{

        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f5f5f5;
        .h(106.5);
        .padding(17.5,11.5,17.5,20);
        .fs(10);
        img{
            .w(70.31);
            .h(70.31);
        }

        .zhuo{
            .lh(106.5);
            // display: block;
        }
        .price{
            .padding(0,0,75,0);
        }
        .item_info {
            // display: flex;
            // flex-direction: column;
            // justify-content: space-between;
            float: left;
            .w(187.5);
            position: relative;
             h3 {
                // position: absolute;
                // bottom: 10px;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                color: #353535;
            }
        }
        .cart_p_num {
            .h(35);
            .w(101);
            // margin: 0px auto;
            margin-top: 10px;
            border: .05rem solid #d2d2d2;
            a {
                display: block;
                .w(25);

                .h(32);
                .lh(32);
                border: none;
                background-color: #fff;
                text-align: center;
                margin: 0px auto;
                float: left;
            }
            input {
                float: left;
                .h(33);
                .w(47);
                padding: 0px;
                border-left: .05rem solid #d2d2d2;
                border-right: .05rem solid #d2d2d2;
                background-color: #fff;
                text-align: center;
                border-radius: 0px;
            }

        }
    }
    .xiaoji{
        .h(47);
        .lh(47);
        text-align: right;
        .fs(16);
        border-bottom: 1px solid #f5f5f5;
        span{
            color: #fe6700;
        }
    }
    .bottomm{
            color: #82737A;
        .padding(0,0,0,20);
        border-top: 1px solid #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        align-items: center;
        .h(54);
        background: #fff;
        width: 100%;
        position: fixed;
        .bottom(48);
        left: 0;
        .fs(16);
        .Top{
            
            .w(70);
            display: flex;
            justify-content:space-around;
            input{
                margin-top: 5px;
            }

        }
        .Center{
            .w(138.75);
            .padding(5,15,0,15);
            .xiao{
                .fs(12);
            }
            .da{
                color:#000;
                span{
                    color:orange;
                }
            }
        }
        .Bottom{
            .w(117.2);
            background:#fe6700;
            text-align: center;
            .lh(54);
            color:#fff;
        }
    }

}
    
</style>