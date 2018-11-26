<template>
    <ul class='homelist'v-infinite-scroll="loadMore"
  infinite-scroll-disabled='loading'
  infinite-scroll-distance="50"> 
        <h4>今日精选</h4>
       <li v-for='(item,index) in homelist' :key='index' @click="tiaozhuan(item.Id)">
        <img v-lazy="item.PictureUrl" alt="">
        <div class="desc" >
      <p>{{item.SubjectName}}</p>
      <h5>{{item.OriDiscount}}</h5>
      </div> 
      </div>
      </li>
    </ul>
</template>
<script type="text/javascript">
   // 实现懒加载
import { Lazyload } from 'mint-ui';
import Vue from "vue";
Vue.use(Lazyload);
//无限滚动
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
    export default{
        name:"homelist",
        data(){
            return {
                homelist:[],
                loading:false,
               current:0,
               total:3
            }
        },
        methods:{
          tiaozhuan(id){
            // console.log(id);
            this.$router.push({path:`/zsearch/${id}`});
        },
           loadMore(){
        this.getData();
      },
          getData(){
              if (this.current==this.total){        
        Toast({
          message: '已经到底了',
          // iconClass: "fa fa-cog fa-spin",
          position:'bottom',
          duration: 1000
        });
        return false;
      }
      let toast=Toast({
          message: '数据加载ing',
          iconClass: "fa fa-cog fa-spin",
          duration: -1
        });
      this.loading=true
        this.$axios.get('/api/json/reply/QueryHotProductSpecialPageListTrans'
            ,{params:{ApplyPlace:9,PageIndex:this.current+1,PageSize:6,SourceTypeSysNo:2}})
            .then((res)=>{
              this.homelist=this.homelist.concat(res.data.QueryHotProductSpecialListDtos);
              // console.log(this.homelist);
              toast.close();
            this.loading=false;
              this.current=res.config.params.PageIndex;
               this.total=res.config.params.PageSize;
               // console.log(res)
            })
            .catch((err)=>{  
             this.loading=false;
                console.log(err)

            })
        }
    },
    created(){
      // this.getData();
    }
    }
</script>
<style lang="less" scoped>
    @import url("../../../styls/main.less");  
    .homelist{
    .w(359);
    margin: 0px auto;
    h4{.fs(16);color:#CCC;text-align:center;.h(43);.lh(43);}
  li{
    img{
      .w(359);
      .h(168);
    }
   .desc{
    display:flex;
    // justify-content:space-between;
    align-items:center;
    p{
        .w(300);
        .h(37);
        .lh(37);
        .fs(12);
    }
    h5{
        .w(59);
      .fs(12);
      color:red;  
    }
    } 
  
  }
  
}
</style>