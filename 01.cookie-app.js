
const express = require('express');
const app = express();
const queryString = require('querystring')
app.listen(8080, () => {
   console.log('http://127.0.0.1:8080')
})


app.get('/', (req, res) => {
   // 判断是否有登录状态
   // 2获取之前可能存储的登录状态
   var mycookie = req.headers.cookie
   // console.log(mycookie);
   var obj = queryString.parse(mycookie)
   if (obj.isLogin && obj.isLogin === 'true') {
      res.end('welcome back')
   } else {
      // 1：存储cookie数据:通过响应头设置
      res.writeHead(200, {
         'Content-Type': 'text/html;charset=utf-8',
         'Set-Cookie': 'isLogin=true'
      })
      res.end('first come');
   }

})