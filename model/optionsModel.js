//这是一个专门处理options表数据操作的数据模块

const conn = require('../ulits/myconn')

// 获取所有导航菜单数据
exports.getMenu = (callback) => {
   let sql = `SELECT  \`value\` from \`options\` where \`key\` = 'nav_menus'`;
   conn.query(sql, (err, results) => {
      if (err) {
         callback(err)
      } else {
         let arr = JSON.parse(results[0].value)
         callback(null, arr)
      }
   })
}


// 添加导航菜单
exports.addMenu = (obj, callback) => {
   // 1.先获取数据
   let sql = `SELECT  \`value\` from \`options\` where \`key\` = 'nav_menus'`;
   // [{"icon":"fa fa-glass","text":"奇趣事","title":"奇趣事","link":"/category/funny"},{"icon":"fa fa-phone","text":"潮科技","title":"潮科技","link":"/category/tech"},{"icon":"fa fa-fire","text":"会生活","title":"会生活","link":"/category/living"},{"icon":"fa fa-gift","text":"美奇迹","title":"美奇迹","link":"/category/travel"},{"text":"","title":"","href":"","icon":"fa fa-glass"},{"text":"asdf a","title":"adsf ","href":"adf ","icon":"fa fa-glass"}]
   conn.query(sql, (err, results) => {
      if (err) {
         callback(err)
      } else {
         // 2.查看获取到的数据，是json格式，先转换成数组
         let arr = JSON.parse(results[0].value)

         // 3.将obj添加到arr中
         arr.push(obj)
         // 4.将数组转回json格式
         let jsonStr = JSON.stringify(arr)
         // 5.更新到数据库
         let sql = `UPDATE \`options\` set \`value\`= ? where \`key\` = 'nav_menus'`;
         conn.query(sql, jsonStr, (err1, results1) => {
            if (err1) {
               callback(err1)
            } else {
               callback(null)
            }
         })
      }
   })
}


//获取settings数据
exports.getSettings = (callback) => {
   let sql = `SELECT value FROM \`options\` where id < 9`;
   conn.query(sql, (err, results) => {
      if (err) {
         callback(err)
      } else {
         callback(null, results)
      }
   })
}

//更新setting数据
exports.updateSettings = (obj, callback) => {
   // 改变多行的同一个字段，sql语句不能混在一起写，需要写多条语句
   // 我们可以使用循环来动态生成多条sql语句
   var count = 0
   for (let key in obj) {
      let sql = `UPDATE \`options\` set \`value\`= ? where \`key\` = ? `
      conn.query(sql, [obj[key], key], (err, results) => {
         if (err) {
            callback(err)
            return
         } else {
            count++
            if (count == 6) {
               callback(null)
            }
         }
      })
   }
}