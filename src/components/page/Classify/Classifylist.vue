<template>
    <div class="Classifylist">
        <ul class="diyi">
            <li v-for="(item,index) in zhong" :key="index" :class='selInit==item.ProductCategoryId?"you":""' @click='toggle(item.ProductCategoryId)'>{{item.ProductCategoryName}}</li>
        </ul>
        <div class="luan" v-for="(item,index) in zhong" :key="index" v-if="selInit == item.ProductCategoryId">
            <div class="luan1" v-for="(item1,index1) in item.PcList" :key="index1">
                <ul>
                    <dl>
                        <dt>{{item1.ProductCategoryName}}</dt>
                        <dd class="luan2" v-for="(item2,index2) in item1.PcList" :key="index2" @click="tiaozhuan(item2.ProductCategoryId)">
                            <div>
                                <img :src='item2.VchCatePic' alt="">
                            </div>
                            <div>
                                {{item2.ProductCategoryName}}

                            </div>
                        </dd>
                    </dl>
                </ul>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import  Vue from 'vue';
import { Toast } from 'mint-ui';
export default{
    name:"Classifylist",
    components: {
	},
	data(){
        return {
            datas:"Classifylist",
            zhong:[],
            selInit:'2',
        }
    },
    methods:{
        getData(){
            
            this.$axios.get("/api/json/reply/QueryCategoryListReq",{})
            .then((res)=>{
                this.zhong = res.data.CategoryList;
                // console.log(this.zhong[0].PcList);
            })
        },
        toggle(val){
            this.selInit= val;
        },
        tiaozhuan(id){
            // console.log(id);
            this.$router.push({path:`/search/${id}`});
        }

    },
    created(){
        this.getData()
    }
};
</script>
<style lang="less" scoped>
@import url("../../../styls/main.less");
.Classifylist{
    overflow-y: scroll;

   
    .diyi{
    position: fixed;
    left:0;
    top:37px;
     float: left;
        li{
            .w(95);
            .h(59);
            .fs(14);
            .lh(59);
            text-align: center;
                background: #f3f3f3;
        }

        .you{
            background-color: #FFFFFF;
            color: #f60;
            border-left: 3px solid red;
        }

    }
    .luan{
        padding: 10px 0 60px 0;
        float: right;
        color: #82737A;
        .w(277);
        .fs(12);
        display: flex;
        flex-direction: column;
        img{
            .w(59);
            .h(59);
        }
        .luan2{
            float:left;
            display: block;
            .w(83.5);
            .h(80);
            text-align: center;
        }
        dl{
            overflow: hidden;
            padding:10px;
        }
        dt{
            display: block;
            border-left: 3px solid red;
            padding-left: 4px;
            margin-left: 4px;
        }
    }
}
    
</style>