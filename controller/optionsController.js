//这是一个专门负责options表的业务处理的控制器

const optionsModel = require('../model/optionsModel')

//获取所导航菜单
exports.getMenu = (req,res)=>{
   optionsModel.getMenu((err,data)=>{
      if(err){
         res.json({code:400,msg:'failed to get menu'})
      }else{
         res.json({code:200,msg:'succeed to get menu',data})
      }
   })
}

// 添加导航菜单
exports.addMenu =(req,res)=>{
   let obj = req.body
   obj.icon = 'fa fa-glass'

   optionsModel.addMenu(obj,(err)=>{
      if(err){
         res.json({code:400,msg:'failed to add menu'})
      }else{
         res.json({code:200,msg:'succeed to add menu'})
      }
   })
}

//获取settings数据
exports.getSettings = (req,res)=>{
   optionsModel.getSettings((err,data)=>{
      if(err){
         res.json({code:400,msg:'failed to get settings'})
      }else{
         res.json({code:200,msg:'succeed to get settings',data})
      }
   })
}

// 更新settings数据
exports.updateSettings = (req,res)=>{
   let obj = req.body
   // 对参数进行微调
   obj.comment_status = obj.comment_status ? 1 : 0
   obj.comment_reviewed = obj.comment_reviewed ? 1 : 0
  
   optionsModel.updateSettings(obj,(err)=>{
      if(err){
         
         res.end(JSON.stringify({code:400,msg:'failed to update settings'}))
      }else{
         res.json({code:200,msg:'succeed to update settings'})
      }
   })

}