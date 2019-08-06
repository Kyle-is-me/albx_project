// 这是返回页面的控制器
const queryString = require('querystring');

// 返回前台页面
exports.getIndexPage = (req, res) => {
   res.render('index')
}

exports.getDetailPage = (req, res) => {
   res.render('detail')
}

exports.getListPage = (req, res) => {
   res.render('list')
}
// 返回后台管理页面
exports.getAdminIndexPage = (req, res) => {
   //进行登录状态的验证
   // var obj = queryString.parse(req.headers.cookie);
   // if(obj.isLogin && obj.isLogin === 'true'){
   //    res.render('admin/index');
   // }else{
   //    // 重定向以响应头的方式来实现
   //    // 重定向：让url重新指向一个新的值，本质是让url或者路由有一个变化
   //    res.writeHead(302,{
   //       'Location':'/admin/login'
   //    })
   //    res.end();
   // }

   // 使用session进行登录状态的验证
   // if (req.session.isLogin && req.session.isLogin === 'true') {
   //    res.render('admin/index')
   // } else {
   //    // 重定向
   //    res.writeHead(302,{
   //       'Location': '/admin/login'
   //    })
   //    res.end();
   // }
   res.render('admin/index')

}

exports.getAdminCategoriesPage = (req, res) => {
   res.render('admin/categories')
}

exports.getAdminCommentsPage = (req, res) => {
   res.render('admin/comments')
}

exports.getAdminNavMenusPage = (req, res) => {
   res.render('admin/nav-menus')
}

exports.getAdminLoginPage = (req, res) => {
   res.render('admin/login')
}

exports.getPasswordResetPage = (req, res) => {
   res.render('admin/password-reset')
}

exports.getAdminPostAddPage = (req, res) => {
   res.render('admin/post-add')
}

exports.getAdminPostsPage = (req, res) => {
   res.render('admin/posts')
}

exports.getAdminProfilePage = (req, res) => {
   res.render('admin/profile')
}

exports.getAdminSettingsPage = (req, res) => {
   res.render('admin/settings')
}

exports.getAdminSlidePage = (req, res) => {
   res.render('admin/slides')
}

exports.getAdminUsersPage = (req, res) => {
   res.render('admin/users')
}