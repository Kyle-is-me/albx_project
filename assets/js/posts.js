$(()=>{
   $.ajax({
      type:'get',
      url:'/getAllPosts',
      //分页查询需要数据
      data:{
         pageNum:1,
         pageSize:3
      },
      success:function(result){
         // console.log(result)
         if(result.code === 200){
            let html = template('posts_template',result);
            $('tbody').html(html);
         }
      }
   })
})