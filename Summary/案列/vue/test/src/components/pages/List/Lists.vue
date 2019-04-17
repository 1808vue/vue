<template>
	<div class="toggle">
    <ul>
    		<li v-for="(item,index) in tabs":class="{activeS:index==num}"@click="tab(index)">{{item}}</li>
    </ul>
		<p v-for="(item,index) in contents" v-show="index==num">{{item}}</p>
	</div>
</template>
<script>

export default{
   name:"lists",
	data(){
		return{
		tabs:["标题一","标题二",],
		contents:["内容一","内容二",],
		num:0
		}
	},
	methods:{
		tab(index){

		this.num=index;
		}
		},
	created(){
	
	}	
   } 
</script>
  <style type="text/css">
				ul li{
					float:left;margin-right:35px;width:50%;;
				}
.activeS{border-bottom:2px solid #3091F2;color:#2BAEE9;background:orange;border-radius:10px;}
 </style>