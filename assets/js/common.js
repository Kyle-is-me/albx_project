
var Kits = {}

//获取url参数
Kits.getParam = function(){
   // 去除？
   let param = location.search.substr(1)
   // 去除键值对直接的&
   let arr = param.split('&');
   // 遍历数组，去除键值对中的=
   let obj = {};
   arr.forEach(e=>{
      let temp = e.split('=');
      obj[temp[0]]=temp[1]
   })
   return obj;
}