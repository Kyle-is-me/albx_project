// 这是获取所有分类数据的数据模块
const conn = require('../ulits/myconn');

exports.getAllCate = (callback)=>{
   // 创建sql语句
   let sql = `SELECT * from categories`;
   conn.query(sql,(err,results)=>{
      if(err){
         callback(err)
      }else{
         callback(null,results)
         // console.log(results)
      }
   })
}