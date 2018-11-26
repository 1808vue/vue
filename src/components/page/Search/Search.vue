<template>
    <div class="Search">
        <div class="touchweb_tab"> 
           <ul> 
            <li class="paixu" 
            v-for="(item,index) in searchList" 
            :key="index" 
            :class='selInit==item.path?"select_menu":""'
            @click="zhuan(item.path)"
            >
            {{item.name}}
            <span v-show="item.path!=4">|</span></li> 
           </ul>
        </div>
        <div class="listt"
        infinite-scroll-disabled='loading'
        infinite-scroll-distance="50">
            <div class="product_item" v-for="(item,index) in shuJU" :key="index" @click="tiaozhuan(item.GoodsId)">
                <a>
                    <div class="img_box">
                        <img :src="item.PicUrl">
                        
                    </div>
                    <div class="text_info">
                        <div class="p_name">{{item.Title}}<em style="color: #f60"></em></div>
                        <div class="p_price"><em>¥{{item.VipPrice}}</em> </div>
                        <div class="p_comment start0">
                            

                            <i class="fa fa-star" v-for="(item1,index1) in item.CommentStar" aria-hidden="true"></i>
                            <i class="fa fa-star-o" v-for="(item2,index2) in (5-item.CommentStar)" aria-hidden="true"></i>
                            ({{item.CommentVolume}}人评论)
                        </div>
                    </div>
                </a>
            </div>
        </div>
        

    </div>
</template>
<script type="text/javascript">
import  Vue from 'vue';
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
export default{
    name:"Search",
	data(){
        return {
            datas:"Search",
            searchList:[{name:'综合排序',path:'1'},{name:'销售',path:'2'},{name:'价格',path:'3'},{name:'筛选',path:'4'}],
            selInit:1,
            shuJU:[],
            loading:false,
        }
    },
    components: {
    },
    methods:{
        zhuan(val){
            this.selInit=val;
        },
        tiaozhuan(id){
            // console.log(id);
            this.$router.push({path:`/details/${id}`});
        }
    },

    //img.boodoll.cn/pdt/img/y0/53535bf3d6de8abb_160x160.jpg
    //img.boodoll.cn/pdt/img/y0/53535bf3d6de8abb_{type}.jpg"
    // params:{cateId: 449,pi: 1,pz: 0}
    created(){
      let toast=Toast({
          message: '数据加载ing',
          iconClass: "fa fa-cog fa-spin",
          duration: -1
        });
      this.loading=true
        let id=this.$route.params.id
        // console.log(id);
        let Shu = [];
        this.$axios.post("/test/Product/GoodsSearchPageList?cateId="+id,{})
        .then((res)=>{
            let jianNan = res.data.products;
            for(let i=0;i<jianNan.length;i++){
                Shu.push(jianNan[i].ProductId);
            }
            // console.log(Shu);
            this.$axios.get('/api/json/reply/UnifyGoodsListReq?HasPromInfo=true&HasSaleInfo=true&SourceTypeSysNo=2&DisplayLabel=["8"]&ClientIp=61.144.97.195&UserId=0&GoodsID='+Shu,{})
            .then((res)=>{
                // console.log(res);
                let urll=[];
                let shuJu = res.data.UnifyGoodsList;
                for(let i=0;i<shuJu.length;i++){
                    // console.log(shuJu[i].CommentVolume);
                    if(shuJu[i].PicUrl.indexOf("{type}") !=-1){
                        let rrr = shuJu[i].PicUrl.replace("{type}","160x160");
                        urll.push(rrr);
                        shuJu[i].PicUrl = rrr;
                    }else if(shuJu[i].PicUrl.indexOf("{0}") !=-1){
                        let rrr = shuJu[i].PicUrl.replace("{0}","normal");
                        urll.push(rrr);
                        shuJu[i].PicUrl = rrr;
                    }

                }
                this.shuJU=shuJu;
                // console.log(shuJu);
                toast.close();
                Toast({
                  message: '已经到底了',
                  // iconClass: "fa fa-cog fa-spin",
                  position:'bottom',
                  duration: 1000
                });
                return false;
            })
            .catch((err)=>{
                console.log(err)
                toast.close();
            })
        })
        
        .catch((err)=>{
         console.log(err)
        })
    }
};
</script>
<style lang="less" scoped>
@import url("../../../styls/main.less");
 .Search{
    padding-top:37px;
    .fs(12);
    .touchweb_tab {
        .w(375);
        .h(45);
        .lh(45);
        border-bottom: 0.5px solid #f60;
        background-color: #fff;
        color: #82737A;
    }
    .touchweb_tab ul li {
        width: 25%;
        .h(44);
        text-align: center;
        float: left;
    }
    .touchweb_tab ul li span {
        float: right;
    }
    .select_menu {
        border-bottom: 3px solid #f60;
    }
    .listt{
        padding-bottom: 50px;
    }
    .product_item {
        margin-top: 3px;
        .w(375);
        .h(105);
        background-color: #fff;
        border-bottom: .05rem solid #d2d2d2;
    }
    .product_item .img_box {
        float: left;
        .h(105);
        overflow: hidden;
        img {
            display: block;
            .h(82);
            .w(82);
            margin: 10px 15px 0 15px;
           
        }
    }
    .product_item .text_info {
        float: left;
        height: 100%;
        .w(255);

    }
    .product_item .text_info .p_name {
        // margin: .6rem 0rem .2rem 0rem;
        margin-bottom: 5px;
        .h(35);
        .lh(35);
        overflow: hidden;
        color: #82737A;
    }
    .product_item .text_info .p_comment {
        .fs(12);
        margin-top: .3rem;
        color: #82737A;
    }

 }   
</style>