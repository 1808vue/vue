<template>
    <div>
      <h3>二维码生成组件</h3>
      <!--   <vue-qr style="float:left;" :bgSrc='config.imagePath' :logoSrc="config.imagePath" :text="config.value" :size="200" :margin="0"></vue-qr> -->

        <vue-qr  :logoSrc="config.logo" :text="config.value" :size="200" :margin="0" id="qrcode"></vue-qr>
        <input type="button" @click="downloadImg" value="120379">
    </div>
        
</template>
 
<script>
import VueQr from 'vue-qr'
 
export default {
  components: { VueQr },
  data() {
    return {
        config: {
          value: 'https://www.baidu.com/',//显示的值、跳转的地址
          logo: require('../../assets/logo.png')//中间logo的地址
        }
    }
  },
  computed: {},
 
  //事件（钩子）回调函数：
  //组件创建之后，数据已经完成初始化，但是DOM还未生成
  created() {},
 
  //数据装载DOM上后，各种数据已经就位，将数据渲染到DOM上，DOM已经完成
  mounted() {},
 
  methods: {
    downloadImg(){
      var oQrcode = document.querySelector('#qrcode img')
      var url = oQrcode.src
      var a = document.createElement('a')  
      var event = new MouseEvent('click')  
     // 下载图名字
     a.download = '张三的二维码'
     //url 
     a.href = url 
      //合成函数，执行下载 
      a.dispatchEvent(event)
    }
  }
}
</script>