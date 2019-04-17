main.js全局引入挂载

```
// 引入axios  
import  Axios from 'axios'
Vue.prototype.$axios=Axios// axios 挂载到vue的实例上 这样他的拓展实例  组件也有$axios
```

##### 一、get



```
this.$axios.get(this.API().findPageListByParent, { params:{parentId:this.goodsId,categoryName:this.value,refereeId:this.refereeId} })
          .then((res) => {
            if(res.data.code==0){
              this.status = true;
              this.goodsList=res.data.data.list;
              this.goodslist();
            }else{
              console.log(res.data.message);
            }
            this.value1=this.value;
            this.value='';
          })
          .catch((res) => {
            console.log(res)
          })
```

```
this.$axios.get(`this.API().findPageListByParent?parentId=this.goodsId&categoryName=this.value&refereeId=this.refereeId`)
          .then((res) => {
            if(res.data.code==0){
              this.status = true;
              this.goodsList=res.data.data.list;
              this.goodslist();
            }else{
              console.log(res.data.message);
            }
            this.value1=this.value;
            this.value='';
          })
          .catch((res) => {
            console.log(res)
          })
```

##### 二、post

var num={
					psgs: this.sns,
					contact: this.deliver.contact,
					ctp: this.deliver.ctp,
					cta: this.deliver.cta,
					ctr: this.deliver.ctr
				}
				
			this.$axios({
			  url: 'aq/createMiOrd',
			  method: 'post',
			  data:num,
			}).then(res => {
			  console.log(res.data)
			})


//请求体格式如下所示:
{
  "psgs": [
    "87827-11758689",
    "87827-11758688"
  ],
  "contact": "大熊",
  "ctp": "666999",
  "cta": "广州市白云区人和九元航空",
  "ctr": "快点给我邮寄知道吗"
}




###### 1、qs  

npm install qs

https://blog.csdn.net/zpf_nevergiveup/article/details/80461161

```
var qs = require('qs');{在node.js中像这样引入即可}


import qs from 'qs'
axios.post('/foo', qs.stringify({ 'bar': 123 }));
//传数组  qs.stringify({ a: ['b', 'c', 'd'] }, { indices: false });
```

###### 2、URLSearchParams()

```
var params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

###### 3、FormData()

```
//上传图片 文件
let params = new FormData();
params.append('userId',window.sessionStorage.getItem('userId'));
params.append('file',this.file);
this.$axios.post(this.API().addDistributionApplyUser,params,{headers: {'Content-Type': 'multipart/form-data'}})
```

