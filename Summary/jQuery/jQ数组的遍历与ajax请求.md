

一:ajax请求默认是get请求，

可以省略type

地址栏传参方式:   

url:"/aq/appendBuyService?orderid="+g_orderData.orderid+"&psgname="+g_orderData.psgname,

 

```
$.ajax({
            type : "POST",
            async:false,//同步调用
            cache:false,
            data:{"oid":oid},
            url : "/wechat/aq/QueryTimeSuitTicket?TOKEN="+pageToken,
            success:function (data) {
                allSecond = data.timeremaining;
            }
        });
        
    在JQuery中，若是POST请求，且参数是数组或者对象时，此时进行JSON转化  
    data: JSON.stringify(num),//转成JSON字符串。
```





二:遍历数组的方法        $.each(data,function(item,index){   })

 

```
$.each(AQArray,function (index,item) {
if(item.indexOf("AQ")>-1){
AQfltNo=item;
}
                                                                });
```

