
const express = require('express');
const app = express();

app.listen(8080,()=>{
   console.log('http://127.0.0.1:8080')
})


app.get('/',(req,res)=>{
   // 判断是否有登录状态
   // 获取之前可能存储的登录状态
   
})