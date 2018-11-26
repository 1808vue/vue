<template>
    <div class="Classify">
        <Classifylist></Classifylist>
    </div>
</template>
<script type="text/javascript">
import Classifylist from "./Classifylist.vue"
export default{
    name:"Classify",
    components: {
        Classifylist
	},
	data(){
    return {
        datas:"Classify",
    }
  },
};
</script>
<style lang="less" scoped>
.Classify{
    margin-top: 37px;
}
</style>