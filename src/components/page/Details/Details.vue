<template>
    <div class="Details">
        <div class="topp">
            <div class='banner'>
                <div class="swiper-container">
                    <div class="swiper-wrapper" >
                        <div class="swiper-slide" v-for='(item,index) in shuJU' :key='index'>
                            <img :src="item.url" alt="">
                        </div>
                        
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                    
                </div>
                
            </div>
        </div>
        <div class="jiage">
            <span>￥{{price}}</span>
            <div class="p_name">
                {{hua1}}</div>
            <div class="p_info">
                {{hua2}}
            </div>
        </div>
        <div class="warehouse">
            <span>母婴之家发货</span>
        </div>


        <div class="zhiNan">
            <div class="product_info_title">商品参数和使用指南</div>
            <div class="product_info_attr">
                <p v-for="(item,index) in ming" :key="index">
                    {{item.Key}}：{{item.Value}}</p>
            </div>
        </div>

        <div class="dibu" v-for="(item,index) in imgg" :key="index">
            <img :src="item.Pic" alt="">
        </div>




        <div class="add_cart_menu">
            <ul>
                <li>
                    <div class="Cservice">
                        <img></div>
                </li>
                <li>
                    <div class="cart_p_num">
                        <div class="cart_input">
                            <a class="subbtn" ref="Subbtn" @click="Jian" :class="ll==1?'cart_p_disable':''">-</a>
                            <!--
                                data-Max：最大可卖量
                                data-XG：限购
                                data-QS：起售数量
                                -->
                            <input type="text" id="ProductNum" ref="ProductNum" value="1" data-max="3" data-xg="0" data-qs="1" data-runnum="1">
                            <a class="addbtn" ref="Addbtn" @click="Jia">+</a>
                            
                        </div>
                    </div>
                </li>
                
                <li>
                
                    <!--
                        描述：add_cart_disable 不可点击
                        -->
                    
                    <div class="add_cart" data-position="P_addCart" data-category="C_addCart" data-malltype="1" data-ptype="1" @click='tiaozhuan'>
                        加入购物车</div>
                    
                    
            </li>
        </ul>
    </div>
        
    </div>
</template>
<script type="text/javascript">
import Swiper from 'swiper'
import Vue from  'vue'
export default{
    name:"Details",
	data(){
        return {
            datas:"Details",
            shuJU:[],//
            price:1,//价格
            hua1:'',//
            hua2:'',//介绍
            ming:[],//使用指南数据
            imgg:[],//下面的图片
            ll:1//qty
        }
    },
    components:{
    },
    methods:{
        initSwiper(){
            // console.log(1111)
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                 // 如果需要分页器
                // autoplay: {
                //     disableOnInteraction: false,
                // },
                pagination: {
                    el: '.swiper-pagination',
                }
            })  
        },
        Jian(){
            this.ll = this.$refs.ProductNum.value;
            if(this.ll>1){
                this.ll-=1;
                this.$refs.ProductNum.value = this.ll;
            }
        },
        Jia(){

            this.ll = this.$refs.ProductNum.value -0;
            this.ll+=1;
            this.$refs.ProductNum.value = this.ll;
        },
        tiaozhuan(){
            //把数据存到vuex上面
            // console.log(id);
            let kao = {price:this.price,title:this.hua2,img:this.shuJU[0].url,qty:this.ll};
            // console.log(kao);
            let jieko = this.$store.state.shuzu;
            jieko.push(kao);
            this.$store.commit("shuju",jieko)
            this.$router.push({path:`/car`});
        }
    },
    created(){
        let id=this.$route.params.id;
        console.log(id);
        this.$axios.get('/api/json/reply/UnifyGoodsReq?HasPromInfo=true&SourceTypeSysNo=2&DisplayLabel=["8"]&ClientIp=61.144.97.195&UserId=0&GoodsID='+id,{})
        .then((res)=>{
            // console.log(res.data.ProductImageList);
            var hai = res.data;
            var haiUrl = hai.ProductImageList;
            this.price=hai.GoodsDetails.marketprice;
            this.hua1 = hai.GoodsDetails.title;
            this.hua2 = hai.GoodsDetails.BrandDesc;
            this.ming = hai.GoodsDetails.attrs;
            


                    //上面图片

            for(let i=0;i<haiUrl.length;i++){
                if(haiUrl[i].url.indexOf("{type}") !=-1){
                    let rrr = haiUrl[i].url.replace("{type}","380x380");
                    haiUrl[i].url = rrr;
                }else if(haiUrl[i].url.indexOf("{0}") !=-1){
                    let rrr = haiUrl[i].url.replace("{0}","big");
                    haiUrl[i].url = rrr;
                }
            }
            this.shuJU = haiUrl;




                                    //下面图片
            if(hai.GoodsSpecList){
                let hhhhhh = hai.GoodsSpecList;
                console.log(hhhhhh);
                for(let i=0;i<hhhhhh.length;i++){
                    if(hhhhhh[i].Pic.indexOf("{type}") !=-1){
                        let rrr = hhhhhh[i].Pic.replace("{type}","380x380");
                        hhhhhh[i].Pic = rrr;
                    }else if(hhhhhh[i].Pic.indexOf("{0}") !=-1){
                        let rrr = hhhhhh[i].Pic.replace("{0}","big");
                        hhhhhh[i].Pic = rrr;
                    }
                }
                this.imgg=hhhhhh;
                // console.log(this.imgg);
                // console.log(hai);
            }
            



             Vue.nextTick(()=>{
                this.initSwiper();
             })
        })
    },
    mounted(){
        // this.Jian();
        // this.Jia();
    }
};
</script>
<style lang="less" scoped>
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');
@import url("../../../styls/main.less");
.cart_p_disable{
    background-color: #d2d2d2 !important;
}
.Details{
    margin-bottom: 200px;
    background: #d2d2d2;
    padding-top:37px;
    .topp{
        .w(375);
        .h(328);
        background: #fff;
        img{
            .h(328);
            .w(328);
            margin-left: 22px;
            z-index: -1;
        }
    }
    .jiage{
        
        background: #fff;
        margin-top:10px;
        // .h(178);
        
        .fs(22);
        span{
            display: block;
            .h(54);
            .lh(54);
            margin-left: 5px;
            border-bottom: .05rem solid #d2d2d2;
        }
        .p_name {
            .fs(16);
        }
        .p_info {
            color: #82737A;
            .fs(14);
            margin:10px;
        }
    }
    .warehouse {
        width: 100%;
        .h(28);
        // margin:10px 0;
        // padding-right: 10px;
        // background-color: #d2d2d2;
        float: left;
        text-align: right;
        .fs(14);
        .lh(28);
        color: #82737A;
    }
    .product_info_title {
        // height: 1.8rem;
        .h(43);
        .lh(43);
        .fs(18);margin-top: 55px;
        border-bottom: .05rem solid #d2d2d2;
        margin-left: 12px;
    }
    .product_info_attr {
        margin-top: 12px;
        .fs(14);
        .lh(24);
        color: #82737A;
        margin-left: 12px;
    }
    .zhiNan{
        background: #fff;
    }
    .dibu{
        background: #fff;
        img{
            .w(375);
            .h(375);
        }
    }
    .add_cart_menu {
        .fs(16);
        z-index: 9999;
        position: fixed;
        width: 100%;
        .h(54);
        background-color: #fff;
        border-top: .05rem solid #d2d2d2;
        bottom: 0;
        left: 0;
        ul li {
            float: left;
        }
        ul li:nth-child(1) {
            width: 15%;
        }
        .Cservice {
            margin: 0px auto;
            .h(29);
            .w(29);
            margin-top: 12px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        ul li:nth-child(2) {
            .fs(12);
            width: 30%;
        }
        ul li:nth-child(3) {
            width: 55%;
        }
        .add_cart {
            margin: 0px auto;
            margin-top: 8px;
            .h(37.5);
            .w(190);
            border-radius: 2.4px;
            background-color: #f60;
            color: #fff;
            text-align: center;
            .lh(37.5);        }

    }
    .cart_p_num {
        .h(35);
        .w(101);
        margin: 0px auto;
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
    .cart_p_disable {
        background-color: #d2d2d2 !important;
    }

}
</style>