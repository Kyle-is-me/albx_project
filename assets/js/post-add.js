
$(() => {

   // 实现文件的上传
   //一选择完图片就上传
   $('#feature').on('change', function () {
      let myfile = document.querySelector('#feature').files[0];
      //创建formdata对象
      var formDate = new FormData();
      formDate.append('img', myfile);
      // formDate.append('name','jack')
      // 发送ajax请求
      $.ajax({
         type: 'post',
         url: '/uploadFile',
         data: formDate,
         contentType: false,//让ajax不要对数据进行编码
         processData: false,//让ajax不要对数据进行处理
         success: function (res) {
            // console.log(res)          
            if (res.code === 200) {
               // 生成预览-修改img的src属性,让浏览器解析，发起二次请求
               $('.imgshow').attr('src', '/uploads/' + res.files).show();
               // 修改隐藏域的value属性
               $('#imgPath').val(res.files);
            } else {
               $('.alert-danger > span').text(res.msg).fadeIn(500).delay(3000).fadeOut(500);
            }
         }
      })

   })


   //分类的动态加载
   $.ajax({
      type: 'get',
      url: '/getAllCate',
      success: function (res) {
         // console.log(res)
         if (res.code === 200) {
            let str = `<option value="all">所有分类</option>`;
            for (let i = 0; i < res.data.length; i++) {
               str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $("#category").html(str);
         }
      }
   })


   //添加富文本框
   // 我们使用的是CKEditor
   //初始化
   // 它会创建一个富文本框对象
   CKEDITOR.replace('content');


   //实现文章的添加
   $('.btnsave').on('click', function () {
      // 把富文本框的数据同步到文本域
      CKEDITOR.instances.content.updateElement()
      // 收集数据
      // let data = $('form').serialize()
      // console.log(data)
      //因为编辑和添加公用一个页面，通过id来判断是添加还是编辑
      if(id){
         opt('/editPostById')
      }else{
         opt('/addPost');
      }

   })

   function opt(url) {
      // 发送ajax请求
      $.ajax({
         type: 'post',
         url: url,
         data: $('form').serialize(),
         success: function (res) {
            // console.log(res)
            if (res.code === 200) {
               // 跳转页面
               location.href = '/admin/posts'
            } else {
               alert(res.msg)
            }
         }
      })
   }



   // 通过id获取文章数据
   let id = Kits.getParam().id
   // console.log(id)
   // 通过id判断是添加文章还是编辑文章
   if (id) {
      $.ajax({
         type: 'get',
         url: '/getPostById?id=' + id,
         success: function (res) {
            // console.log(res)
            if (res.code === 200) {
               // 设置默认数据
               $('#title').val(res.data.title)
               $('#content').val(res.data.content)
               $('#slug').val(res.data.slug)
               $('.thumbnail').attr('src', '/uploads/' + res.data.feature).show()
               $('#category').val(res.data.category_id)
               $('#status').val(res.data.status)
               // 设置图片隐藏域
               $('[name="feature"]').val(res.data.feature)
               // 设置id隐藏域
               $('[name="id"]').val(res.data.id)
               // 设置日期
               $('#created').val(res.data.created)
            }
         }
      })
   }



})