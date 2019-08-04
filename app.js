
const express = require('express');
const router = require('./router')
// 创建服务器
const app = express();
//启动服务器
app.listen(8888,()=>{
   console.log('server is running at http://127.0.0.1:8888');
})

// 托管静态资源
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

// 设置默认模板
app.set('view engine','ejs')
// 配置ejs模板的默认目录
app.set('views',__dirname + '/views');

app.use(router);