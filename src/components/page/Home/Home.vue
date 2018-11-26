<template>
    <div class="home">
        <Banner></Banner>
        <center></center>
        <Homelist></Homelist>
        <!-- <backTop></backTop> -->

    </div>
</template> 
<script type="text/javascript">
import Banner from "./Banner.vue"
import Homelist from "./HomeList.vue"
import backTop from "./backTop.vue"
import center from "./center.vue"
export default{
    name:"Home",
    components: {
	   Banner,Homelist,backTop,center
	}
};
</script>
<style lang="less" scoped>
.home{
	margin-top: 37px;
}
    
</style>