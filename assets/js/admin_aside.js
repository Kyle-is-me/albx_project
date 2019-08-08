$(() => {
   // 获取路由
   let index = location.href.indexOf('?');
   // console.log(index)
   // 判断后面是否带有参数
   let routerName = '';
   if (index == -1) {//后面没有带参数
      routerName = location.href.substr(location.href.lastIndexOf('/') + 1);
      // console.log(routerName)
   } else {
      routerName = location.href.substring(location.href.lastIndexOf('/') + 1,location.href.indexOf('?'));
   }

   // 判断路由是否有posts post=add 和 categories，如果有，则展开
   if (routerName == 'posts' || routerName == 'post-add' || routerName == 'categories') {
      // 实现展开
      $('#menu-posts').addClass('in').attr('aria-expanded', true)
      $('#menu-posts').parent().find('.collapsed').removeClass('collapsed');
   }
   // 判断是否满足条件
   if(routerName == 'nav-menus' || routerName =='slides' ||routerName == 'settings'){
      // 实现展开
      $('#menu-settings').addClass('in').attr('aria-expanded',true);
      $('#menu-settings').parent().find('.collapsed').removeClass('collapsed');
   }

   $('#'+ routerName).addClass('active')

})