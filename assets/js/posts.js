$(()=>{
   // 定义全局的页码数和页数量
   var pageNum = 1;//当前页码
   var pageSize = 3;//每页的数量

   function init(search){
      $.ajax({
         type:'get',
         url:'/getAllPosts',
         //分页查询需要数据
         data:{
            pageNum:pageNum,
            pageSize:pageSize,
            ...search
         },
         success:function(result){
            // console.log(result)
            if(result.code === 200){
               let html = template('posts_template',result.data);
               $('tbody').html(html);
               // 生成分页结构
               setPagenation(Math.ceil(result.data.total/pageSize));
            }
         }
      })
   }
   init();

   // 实现分页功能
   function setPagenation(total){
      //初始化
      $('.pagination').bootstrapPaginator({
         //配置
         bootstrapMajorVersion: 3,
         currentPage:pageNum,//当前页面，
         totalPages:total,//总页数
         onPageClicked:function(event,originaEven,type,page){
            //page就是你当前想要获取数据的页码
            // 修改全局页码
            console.log(type,page)
            pageNum = page;
            //重新调用加载数据的方法
            init();
         }
      })
   }

   // 获取所有分类数据
   $.ajax({
      type:'get',
      url:'/getAllCate',
      success:function(res){
         // console.log(res);
         if(res.code === 200){
            let str = '<option value="all">所有分类</option>';
            for(let i = 0 ; i < res.data.length; i ++ ){
               str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('.cateSelector').html(str);
         }
      }
   })


   // 实现筛选功能
   $('.btn-search').on('click',function(){
      // 收集数据
      let obj = {
         cate:$('.cateSelector').val(),
         status:$('.statusSelector').val()
      }
      // console.log(obj)
      // 发送ajax请求
      init(obj);
   
   })


 

})