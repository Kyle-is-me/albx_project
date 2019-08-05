//这是用户操作返回数据的控制器
const userModel = require('../model/userModel');

exports.login = (req,res)=>{
   // 接收参数
   let obj = req.body;
   // console.log(obj)
   // 业务处理——调用数据模块
   userModel.login(obj.email,(err,data)=>{
      if(err){
         //json可以直接将js对象转换成json格式字符串并返回
         res.json({code:400,msg:'服务器错误'});
      }else{
         //判断有没有查询到结果集
         if(data){
            //在判断密码是否正确
            if(data.password == obj.password){
               res.json({code:200,msg:'登录成功'})
            }else{
               res.json({code:400,msg:'密码输入错误'})
            }
         }else{
            res.json({code:400,msg:'邮箱输入错误'})
         }
      }
   })
} 