
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
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


// 设置默认模板
app.set('view engine','ejs')
// 配置ejs模板的默认目录
app.set('views',__dirname + '/views');

app.use(router);