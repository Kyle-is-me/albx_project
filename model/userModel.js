// 这是用户操作的读写的数据
 
const conn = require('../ulits/myconn');

exports.login = (email,callback)=>{
   //创建sql语句
   let sql = `SELECT * from users where email = '${email}'`;
   // 执行sql语句-调用sql模块
   conn.query(sql,(err,results)=>{
      if(err){
         callback(err)
      }else{
         callback(null,results[0])
      }
   })
   // 返回操作结果
}
