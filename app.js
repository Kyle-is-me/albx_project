
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
// 创建服务器
const app = express();
//启动服务器
app.listen(8888,()=>{
   console.log('server is running at http://127.0.0.1:8888');
})

// 托管静态资源
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

// 配置body-parser
app.use(bodyParser.urlencoded({extended:false}));
// 后期你可能会传递json格式字符串
app.use(bodyParser.json());


// 添加session中间件
app.use(session(
   {
      //加盐
      secret:'my_albx_35',//相当于一个加密秘钥，值可以是任意字符
      resave:false,//强制session保存到session store中，不管session有没有更新
      saveUninitialized:false //强制将没有初始化的session保存到storage中
   }
))


// 导航守卫
// 添加全局中间件，所有的请求都会经过这个中间件
app.use(function(req,res,next){
   if(req.session.isLogin && req.session.isLogin === 'true' || req.url =='/admin/login' || req.url.indexOf('/admin') == -1){
      next();
   }else{
      //重定向
      res.redirect('/admin/login');
   }
})


// 设置默认模板
app.set('view engine','ejs')
// 配置ejs模板的默认目录
app.set('views',__dirname + '/views');

app.use(router);