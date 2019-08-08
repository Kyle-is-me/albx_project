// 这是处理所有跟文章有关的业务的控制器

const postModel = require('../model/postsModel');
const moment = require('moment');
exports.getAllPosts = (req,res)=>{
   // 接收参数
   let obj = req.query
   //调用数据模块
   postModel.getAllPosts(obj,(err,data)=>{
      // console.log(data)
      if(err){
         res.json({code:400,msg:'数据查询失败'})
      }else{
         // 添加日期格式的转换
         // moment:没有传参的话，默认获取当前时间
         // format:在里面可以自定日期格式
         // for(var i = 0 ; i < data.length; i ++){
         //   data[i].created = moment(data[i].created).format('YYYY-MM-DD HH-mm-ss'); 
         // }
         res.json({code:200,msg:'数据查询成功',data})
      }
   })
}