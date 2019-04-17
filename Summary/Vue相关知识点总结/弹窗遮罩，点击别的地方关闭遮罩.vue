<template>
  <div class="qrcode">
	  <div class="bottom" @click="chu">点击出现</div>
	<div class="tanc" v-show="status">
		内容
	</div>
    <div class="zt" v-if="status" @click="xian"></div>
  </div>
</template>
<script>
export default {
  name: 'Guide',
  data() {
    return {
		status:false,
    }
  },
  created(){
  },
  methods: {
	xian(){
		this.status=false;
	},
	chu(){
		this.status=true;
	},
  },
  mounted() {
	  
  }
}

</script>
<style lang="less" scoped type="text/css">
@import url('../styles/main.less');
.tanc{
	.fs(14);
	z-index: 99;
	background:#fff;
	position: fixed;
	.bottom(100);
	.left(0);
	width:100%;
	color:#444241;
}
.zt{
	width:100%;
	height:100%;
	background: #333;
	opacity: 0.3;
	z-index: 9;
	position: absolute;
	.left(0);
	.top(0);
}
</style>
