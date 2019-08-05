
const express = require('express');
const session = require('express-session');


const app = express();
app.listen(9000,()=>{
   console.log('server is running at http://127.0.0.1:9000');
})


// 注册中间件
app.use(session(
   {
      //加盐
      secret:'keyboard cat',
      resave:false,
      saveUninitialized:false
   }
))


app.get('/',(req,res)=>{
   //使用方式都通过req.session
   // req.session是一个对象
   // console.log(req.session)
   
   if(req.session.isLogin && req.session.isLogin === 'true'){
      res.end('welcome back1111')
   }else{
      req.session.isLogin = 'true';
      // req.session.currentUser = {name:123,gender:'男'};
      res.end('first come')
   }


   res.end('ok')
})