//这是一个用于上传文件的控制器

// 引入formidable模块
const formidable = require('formidable');
const path = require('path')
exports.uploadFile = (req,res)=>{
   //使用formidable来实现文件的上传
   // 1.创建文件上传对象
   let form = new formidable.IncomingForm();
   // 2.配置编码
   form.encoding = 'utf-8';
   // 3.配置文件存储目录
   form.uploadDir =__dirname + '/../uploads';
   // 4.设置是否保留扩展名
   form.keepExtensions = true;
   // 5.实现文件的上传功能-调用方法
   form.parse(req,(err,fields,files)=>{
      if(err){
         res.json({code:400,msg:'fail to upload'})
      }else{
         res.json({code:200,msg:'upload successfully',files:path.basename(files.img.path)})
      }
   })
}