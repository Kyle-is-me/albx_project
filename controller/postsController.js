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
// 添加文章的方法
exports.addPost = (req,res)=>{
   //获取数据
   let obj = req.body;
   // console.log(obj)
   obj.id = null
   obj.views = 0
   obj.likes = 0 
   obj.user_id = req.session.currentUser.id
   // 调用数据模块
   postModel.addPost(obj,(err)=>{
      if(err){
         console.log(err)
         res.json({code:400,msg:'failed to add'})
      }else{
         res.json({code:200,msg:'succeed to add'})
      }
   })
}

// 通过id获取文章的方法
exports.getPostById=(req,res)=>{
   let id = req.query.id
   postModel.getPostById(id,(err,data)=>{
      if(err){
         res.json({code:400,msg:'failed to get post'})
      }else{
         // 设置日期的格式
         data.created = moment(data.created).format('YYYY-MM-DDTHH:mm')
         res.json({code:200,msg:'succeed to get post',data})
      }
   })
}

// 根据id编辑文章
exports.editPostById=(req,res)=>{
   let obj = req.body
   postModel.editPostById(obj,(err)=>{
      if(err){
         console.log(err)
         res.json({code:400,msg:'failed to edit post'})
      }else{
         res.json({code:200,msg:'succeed to edit post'})
      }
   })
}

//根据id删除文章
exports.deletePostById = (req,res)=>{
   // 获取id
   let id = req.query.id
   // 调用数据模块
   postModel.deletePostById(id,(err)=>{
      if(err){
         console.log(err)
         res.json({
            code:400,
            msg:'failed to delete'
         })
      }else{
         res.json({code:200,msg:'succeed to delete'})
      }
   })
}