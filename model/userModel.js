// 这是用户操作的读写的数据
 
const mysql = require('mysql');
// 创建连接
var connection = mysql.createConnection({
   host:'127.0.0.1', 
   user:'root',
   password:'root',
   database:'baixiu'   
})


exports.login = (email,callback)=>{
   //创建sql语句
   let sql = `SELECT * from users where email = '${email}'`;
   // 执行sql语句-调用sql模块
   connection.query(sql,(err,results)=>{
      if(err){
         callback(err)
      }else{
         callback(null,results[0])
         // console.log(result[0])
      }
   })
   // 返回操作结果
}
