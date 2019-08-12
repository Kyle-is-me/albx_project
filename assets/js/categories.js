
$(() => {

   function init() {
      //获取所有分类的数据
      $.ajax({
         type: 'get',
         url: '/getAllCate',
         success: function (res) {
            // console.log(res)
            if (res.code === 200) {
               $('tbody').html(template('cateTemplate', res))
            }
         }
      })
   }
   init();


   // 实现分类数据的编辑
   // 不用页面跳转，无序传ID到服务器取数据，动态生成结构时已将ID等信息使用自定义属性存储起来了，可以用data-set直接获取
   // 给编辑按钮绑定事件委托事件
   $('tbody').on('click', '.btnEdit', function () {
      let data = $(this).data()
      $('#name').val(data.name)
      $('#slug').val(data.slug)
      // 将id添加到隐藏域，方便后面收集数据用到
      $('[name="id"]').val(data.id)
      $('.btnEdit').show()
      $('.btnAdd').hide()
      $('#cateMenu').text('编辑分类目录')
   })

   // 保存编辑，更新分类信息
   $('.btnEdit').on('click', function () {
      // let data =  $('form').serialize()
      // console.log(data)
      // 收集数据
      opt('/editCateById')
   })

   function opt(url) {
      $.ajax({
         type: 'post',
         url: url,
         data: $('form').serialize(),
         dataType: 'json',
         success: function (res) {
            // console.log(res)
            if (res.code === 200) {
               init()
               $('.btnEdit').hide()
               $('.btnAdd').show()
               $('#cateMenu').text('添加新分类目录')
               $('[name="id"]').val('')
               $('#name').val('')
               $('#slug').val('')
            } else {
               $('alert-danger ').fadeIn(500).delay(3000).fadeOut(500);
               $('alert-danger > span').text(res.msg)
            }
         }
      })
   }
   // 实现分类的添加
   $('.btnAdd').on('click', function () {
      opt('/addNewCate')
   })

   //实现通过id删除分类--事件委托
   $('tbody').on('click', '.btnDel', function () {
      let id = $(this).data().id
      // 确认删除
      if (confirm('确认删除吗？')) {
         $.ajax({
            type: 'get',
            url: '/deleteCateById?id=' + id,
            success: function (res) {
               console.log(res)
               if (res.code === 200) {
                  alert(res.msg)
                  init()
               } else {
                  $('alert-danger ').fadeIn(500).delay(3000).fadeOut(500);
                  $('alert-danger > span').text(res.msg)
               }
            }
         })
      }
   })


   // 实现批量删除
   // 实现全选
   $('.allChecked').on('click', function () {
      let status = $(this).prop('checked');
      // console.log(status)
      $('tbody .chkSingle').prop('checked', status)
      if (status) {
         $('.btnDelBtc').show()
      } else {
         $('.btnDelBtc').hide()
      }
   })


   // 实现全不选--事件委托
   $('tbody').on('click', '.chkSingle', function () {
      let isCheck = $('.chkSingle:checked').length;
      let isALL = isCheck == $('.chkSingle').length;
      $('.allChecked').prop('checked', isALL)
      if (isCheck > 1) {
         $('.btnDelBtc').show()
      } else {
         $('.btnDelBtc').hide()
      }
   })

   // 实现批量删除
   $('.btnDelBtc').on('click', function () {
      // 确认删除
      if (confirm('确认删除吗？')) {
         let chks = $('tbody .chkSingle:checked')
         let ids = [];
         for (let i = 0; i < chks.length; i++) {
            ids.push(chks[i].dataset['id'])
         }
         // alert(ids)
         $.ajax({
            type: 'get',
            url: '/deleteCateInBatchs?id=' + ids.join(','),
            dataType: 'json',
            success: function (res) {
               if (res.code === 200) {
                  alert(res.msg)
                  init()
               } else {
                  $('alert-danger ').fadeIn(500).delay(3000).fadeOut(500);
                  $('alert-danger > span').text(res.msg)
               }
            }
         })
      }
   })
})

