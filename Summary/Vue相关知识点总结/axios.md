这里总结一下axios的请求

一、get

这个没有什么好说的

```
this.$axios.get(this.API().selectCategoryShopByDictDataId, { params:{dictDataId:this.hao,pageSize:100,categoryName:this.value} })//要传给后端的参数直接写就可以了
      .then((res) => {
        if(res.data.code==0){
					this.pageNo = 1;
          this.pages = res.data.data.pages;
          let goodsList=res.data.data.list;
          for (var i = 0; i < goodsList.length; i++) {
            goodsList[i].logoUrl = `${this.URL().myurl}${goodsList[i].logoUrl}`;
          }
          this.goodsList = goodsList;
        }

      })
      .catch((res) => {
        console.log(res)
      })
```

二、post

1、没有图片files的情况下，也就是说一般情况下 使用URLSearchParams 对象

```
//personal:{userAccount:'', nicknName:'', userPhone:'',userPassword:'',sex:' 男',birthday:'',email:'',headPortrait:''}

var params = new URLSearchParams();
				for (let attr in this.personal) {      //删除为空的项
				  if (this.personal[attr] == null||this.personal[attr]=='null'||this.personal[attr]=='') {
						delete this.personal[attr];
				  }
				}
				for (var index in this.personal){
					params.append(index,this.personal[index]);
				}
//也可以一个个的添加 params.append('userAccount',this.personal.userAccount);
//如果这个数组在添加进params前没有删除为空的项，想要在append后删除，则要
//for(var index of params.entries()) {  //删除为空的项
//	if(index[1]==''||index[1]=='null'||index[1]==null){
//		params.delete(index[0]);
//	}
//}
 this.$axios.post(this.API().updateUserInfo,params)
          .then((res) => {
            if (res.data.code == 0) {
							Toast({
							  message: '保存成功',
							  iconClass: "fa fa-check-circle",
							  position: 'center',
							  duration: 1000
							});
              this.$router.push('/my/myxinxi');
            }else{
							Toast({
							  message: res.data.message,
							  iconClass: "fa fa-times-circle",
							  position: 'center',
							  duration: 1000
							});
						}
          })
          .catch((res) => {
            console.log(res)
          })
				
```

2、有图片files的情况下，使用FormData对象

```
let params = new FormData();
//其它的跟上面相同
```

3、qs（表示没有用过）

npm install qs

```
var qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
//传数组  qs.stringify({ a: ['b', 'c', 'd'] }, { indices: false });
```