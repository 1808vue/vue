<template>
	<div>
	<Lists></Lists>
	  <Footer/>
	</div>
</template>
<script>
	import Header from "../../commons/Header";
   import Footer from "../../commons/Footer";

	import Lists from './Lists.vue'
	export default {
		name: "lists",
		components: {
			Lists,Footer
		},
		data(){
			return{
				list:"列表项"
			}
		}
	
	}
</script>
