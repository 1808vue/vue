```
https://zhidao.baidu.com/question/2267407116974973028.html

、js中设置按钮可点击与不可点击，默认是可点击的

(1)设置按钮不可点击
document.getElementById("bt1").disabled=ture;

(2)设置按钮可点击

document.getElementById("bt1").disabled=false;

2、jq中设置按钮可点击与不可点击，默认是可点击的

(1)设置按钮不可点击

$("#bt1").attr("disabled",ture);

(1)设置按钮可点击

$("#bt1").attr("disabled",false);

3、标签中设置按钮不可点击

在标签中添加属性disabled="true"。
```

div标签的不可点击事件

("#SS").css("pointer-events": "none")