// 这是获取所有分类数据的数据模块
const conn = require('../ulits/myconn');

// 获取所有分类数据的方法
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

//通过id编辑分类数据的方法
exports.editCateById=(obj,callback)=>{
   let sql =`update categories set ? where id = ?`;
   conn.query(sql,[obj,obj.id],(err,results)=>{
      if(err){
         callback(err)
      }else{
         callback(null)
      }
   })
}

//新增分类目录的方法
exports.addNewCate=(obj,callback)=>{
   let sql = `insert into categories set ?`;
   conn.query(sql,obj,(err,results)=>{
      if(err){
         callback(err)
      }else{
         callback(null)
      }
   })
}

// 通过id删除分类
exports.deleteCateById=(id,callback)=>{
   let sql = 'delete from categories where id = ?';
   conn.query(sql,id,(err,results)=>{
      if(err){
         callback(err)
      }else{
         callback(null)
      }
   })
}

// 批量删除分类
exports.deleteCateInBatchs=(ids,callback)=>{
   let sql = `DELETE from categories where id in (${ids})`;
   conn.query(sql,(err,results)=>{
      if(err){
         callback(err)
      }else{
         callback(null)
      }
   })
}