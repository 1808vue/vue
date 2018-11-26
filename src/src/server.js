// 1.连接服务器
const express=require('express');
const app=express();
// 2.引入路由模块
const bodyParser=require('body-parser')
const adminRouter=require('./src/router/admin.js')
const path=require('path')
const userRouter=require("./src/router/user.js")
// 3.连接数据库及(相关第三方插件引入)
const db=require('./src/mongo/mongoose.js')
const goodsRouter=require('./src/router/goods.js')
const uploadRouter=require('./src/router/upload.js')
// 通过bodyparser 解析post请求中的 x-www-formurlendcolde
app.use(bodyParser.urlencoded({ extended: false }))
// 2.(1)使用路由
app.use('/admin',adminRouter)
app.use('/goods',goodsRouter)
app.use('/upload',uploadRouter)
app.use("/Users",userRouter)
// /静态资源目录的使用
app.use(express.static(path.join(__dirname,'./public')))
app.use(express.static(path.join(__dirname,'./admin')))
// 1.(1)监听服务器端口号
app.listen(3000,()=>{
    console.log('server start in port'+3000);
})
       
