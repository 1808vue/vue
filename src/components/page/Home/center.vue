<template>
    <div class="center">
        <ul>
            <li v-for="(item,index) in lists">
                <img :src="item.path" alt="" />
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    export default{
        name:"center",
        data(){
            return{
                lists:[{title:"新妈专享",path:"http://img.boodoll.cn/img/201601/20160114140200_44_iconxinrenxuzhi.png"},{title:"奶粉",path:"http://img.muyingzhijia.com/img/201512/20151213204751_1313_icon_naifen.png"},{title:"我要开店",path:"http://img.muyingzhijia.com/img/201512/20151213221313_1313_icon_yongpin.png"},{title:"纸尿裤",path:"http://img.muyingzhijia.com/img/201512/20151213204913_1313_icon_zhiniaoku.png"}],
                // datalist:[{titles:"哈梅熊",list:"http://img.muyingzhijia.com/img/201809/20180906153807_10_hmx.jpg"},{titles:"Money",list:"http://img.muyingzhijia.com/img/201811/20181111151108_6_moonyzhiniaoku.jpg"},{titles:"培乐多",list:"http://img.muyingzhijia.com/img/201807/20180704132131_10_pld.jpg"}]
            }
        }
    };
   

</script>
<style lang="less" scoped>
       @import url("../../../styls/main.less");
       ul{
        // .w(375);
        .h(86);
        padding-left: 25px;
        display:flex;
        justif-content:space-between;
        align-items:center;
        li{
        .w(93);
        .h(40);
        img{
            .w(33);
            .h(33);
            text-align: center;
        }
        p{
        .fs(12);
        color:#009ADC;
        }
       }
       }
       
    
</style>