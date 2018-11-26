<template>
    <ul class="slider">
        <li v-for="(item,index) in slider">{{slider}}</li>
    </ul>
</template>
<script type="text/javascript">
    export default{
        name:"slider",
        data(){
            return{
              slider:["妈妈专区","奶粉捕食"]  
            }
        },

    }
</script>
<style lang="less" scoped>
    
</style>
