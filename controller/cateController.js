// 这是获取所有分类的控制器
const cateModel = require('../model/cateModel')

exports.getAllCate = (req,res)=>{

   cateModel.getAllCate((err,data)=>{
      if(err){
         res.json({code:400,msg:'服务器异常'})
      }else{
         res.json({code:200,msg:'获取成功',data})
      }
   })
}