```
HTML部分
  <input type="checkbox" name="choose" class="right checkbox" :checked='obj.checked'  @click="choose(obj)">
  
  JS部分
   // 勾选的服务
    choose (obj) {
      obj.checked = !obj.checked
    },
    query(){
       let details = this.mes.filter(o => {
        if (o.checked) {
          total += o.saleprice*1
        }
        return o.checked
      })  
    }
    注意:filter方法返回的是满足条件的数组
    
```

