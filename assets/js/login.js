$(()=>{
   $('.btnLogin').on('click',function(){
      $.ajax({
         type:'post',
         url:'/login',
         dataType:'json',
         // serialize可以获取指定表单中带有name属性的表单元素的value值
         data:$('form').serialize(),
         success:function(res){
            // console.log(res)
            if(res.code === 400){
               $('.alert-danger > span').text(res.msg).show();
               $('.alert-danger').fadeIn(500).delay(3000).fadeOut(800);
            }else{
               //登录成功，跳转页面
               location.href = '/admin'
            }
         }
      })
   })
})