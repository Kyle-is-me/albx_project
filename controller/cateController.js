// 这是获取所有分类的控制器
const cateModel = require('../model/cateModel')
// 获取所有分类数据
exports.getAllCate = (req,res)=>{

   cateModel.getAllCate((err,data)=>{
      if(err){
         res.json({code:400,msg:'服务器异常'})
      }else{
         res.json({code:200,msg:'获取成功',data})
      }
   })
}
//通过Id编辑分类目录
exports.editCateById=(req,res)=>{
   let obj = req.body
   // console.log(obj)
   cateModel.editCateById(obj,(err,data)=>{
      if(err){
         res.json({code:400,msg:'failed to update'})
      }else{
         res.json({code:200,msg:'succeed to update'})
      }
   })
}

// 添加新的分类目录
exports.addNewCate=(req,res)=>{
   let obj = req.body
   obj.id = null
   // console.log(obj)
   cateModel.addNewCate(obj,(err,data)=>{
      if(err){
         // console.log(err)
         res.json({code:400,msg:'failed to add'})
      }else{
         res.json({code:200,msg:'succeed to add'})
      }
   })
}

// 通过id删除分类目录
exports.deleteCateById=(req,res)=>{
   let id = req.query.id
   cateModel.deleteCateById(id,(err,data)=>{
      if(err){
         // console.log(err)
         res.json({code:400,msg:'failed to delete'})
      }else{
         res.json({code:200,msg:'succeed to delete'})
      }
   })
}