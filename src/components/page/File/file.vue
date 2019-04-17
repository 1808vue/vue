<template>
    <div class='file'>
          <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          <p style="color:red;">{{aa}}</p>
    </div>
</template>
<script>
export default{
    name:'Home',
    components:{},
    data(){
        return {
        dialogImageUrl: '',
        dialogVisible: false,
        aa:'qw'
        }
    },

    methods:{
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  },
     created(){
   
}
} 

</script>
<style lang="less" scoped>

</style>