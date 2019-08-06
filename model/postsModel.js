
// 这是处理所有关于文章数据的数据模块

const conn = require('../ulits/myconn');

exports.getAllPosts = (obj,callback)=>{
   // 1.创建sql语句
   var sql = `SELECT posts.*,users.nickname,categories.\`name\`
   FROM posts
   JOIN users on posts.user_id = users.id
   JOIN categories on posts.category_id = categories.id
   ORDER BY id DESC
   LIMIT ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`;
   // 2.执行sql语句，返回数据
   conn.query(sql,(err,result)=>{
      if(err){
         callback(err);
      }else{
         callback(null,result)
      }
   })
}