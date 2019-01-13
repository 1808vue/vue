<template>
    <div>
      <div class="tab" v-for="(item,index) in shuju1" @click="chi(index)" :key="index">
        {{item.asd1}}
      </div>
      <div class="xoo" v-for="(item,index) in shuju1" v-show="hao==index?true:''">
        <div class="aoo" v-for="(item1,index1) in item.asd" :key="index1">
          {{item1}}
        </div>
      </div>
    </div>
        
</template>
 
<script>
 
export default {
  components: {  },
  data() {
    return {
      shuju1:[{asd:['xiao','xiao1','xiao21'],asd1:'da'},{asd:['xiao','xiao1','xiao22'],asd1:'da'},{asd:['xiao','xiao1','xiao23'],asd1:'da'},{asd:['xiao','xiao1','xiao24'],asd1:'da'}],
      hao:0
    }
  },
  computed: {},
 
  created() {
    console.log(this.shuju1);
  },
 
  mounted() {},
 
  methods: {
    chi(index){
      console.log(index);
      this.hao=index;
    }
  }
}
</script>