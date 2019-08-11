
// 这是处理所有关于文章数据的数据模块

const conn = require('../ulits/myconn');

exports.getAllPosts = (obj, callback) => {
   // 1.创建sql语句
   var sql = `SELECT posts.*,users.nickname,categories.\`name\`
   FROM posts
   JOIN users on posts.user_id = users.id
   JOIN categories on posts.category_id = categories.id
   where 1=1 `

   if (obj.cate && obj.cate != 'all') {
      sql += ` and category_id = '${obj.cate}' `
   }
   if (obj.status && obj.status != 'all') {
      sql += ` and posts.status = '${obj.status}'`
   }

   sql += ` ORDER BY id DESC
           LIMIT ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`;
   // 2.执行sql语句，返回数据
   conn.query(sql, (err, result) => {
      if (err) {
         callback(err);
      } else {
         // 获取数据总量
         let sql = `SELECT count(*) as cnt
          from posts 
          JOIN users on posts.user_id = users.id
          JOIN categories on posts.category_id = categories.id
          where 1=1 `

         if (obj.cate && obj.cate != 'all') {
            sql += ` and category_id = '${obj.cate}' `
         }
         if (obj.status && obj.status != 'all') {
            sql += ` and posts.status = '${obj.status}'`
         }

         conn.query(sql, (err2, res2) => {
            if (err2) {
               callback(err2)
            } else {
               //  没有错误，不仅要返回之前的查询记录，还要返回当前的查询的总记录数
               callback(null, { data: result, total: res2[0].cnt })
            }
            //  console.log(res2)
         })
      }
   })
}

exports.addPost = (obj,callback)=>{
   let sql = `insert into posts set ?`;
   conn.query(sql,obj,(err,results)=>{
      if(err){
         callback(err)
      }else{
         callback(null)
      }
   })
}

//根据id获取文章的方法
exports.getPostById=(id,callback)=>{
   let sql = 'select * from posts where id = ?';
   conn.query(sql,id,(err,results)=>{
      if(err){
         callback(err)
      }else{
         callback(null,results[0])
      }
   })
}

// 根据id编辑文章
exports.editPostById=(obj,callback)=>{
   let sql = `update posts set ? where id=? `
   conn.query(sql,[obj,obj.id],(err,results)=>{
      if(err){
         callback(err)
      }else{
         callback(null)
      }
   })
}

// 根据id删除文章的方法
exports.deletePostById=(id,callback)=>{
   let sql = `delete from posts where id = ?`;
   conn.query(sql,id,(err,results)=>{
      if(err){
         callback(err)
      }else{
         callback(null)
      }
   })
}