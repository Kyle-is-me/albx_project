
$(() => {
   function init() {
      //获取setting数据
      $.ajax({
         type: 'get',
         url: '/getSettings',
         success: function (res) {
            // console.log(res)
            if (res.code === 200) {
               $('form').html(template('setTemplate', res))
            }
         }
      })
   }
   init();

   // 更新网络设置
   $('form').on('click','.btnsave',function(){
      // console.log($('form').serialize())
      $.ajax({
         type:'post',
         url:'/updateSettings',
         data:$('form').serialize(),
         dataType:'json',
         success:function(res){
            // console.log(res)
            if(res.code ===200 ){
               alert(res.msg)
               init()
            }else{
               alert(res.msg)
            }
         }
      })
   })



})