
$(() => {
   // 获取所有导航菜单
   function init() {
      $.ajax({
         type: 'get',
         url: '/getMenu',
         success: function (res) {
            console.log(res)
            if (res.code === 200) {
               $('tbody').html(template('menuTemplate', res))
            }
         }
      })
   }
   init();


   //添加导航菜单
   $('.btnAdd').on('click', function () {
      $.ajax({
         type: 'post',
         url: '/addMenu',
         data: $('form').serialize(),
         dataType: 'json',
         success: function (res) {
            // console.log(res)
            if(res.code===200){
               alert(res.msg)
               $('#text').val('')
               $('#title').val('')
               init()
            }
         }
      })
   })

})
