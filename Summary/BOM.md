页面之间传参

location.href="goods.html?currentId="+currentId; 

接收参数

 var currentId= decodeURI(location.search).slice(1);

去到别的页面的方法

 window.history.go(-1);    括号里的值支持正负数；