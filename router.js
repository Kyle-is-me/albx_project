
const express = require('express');
var router = express.Router();

// 引入页面返回控制器
const pageController = require('./controller/pageController');
// 引入返回用户操作数据的控制
const userController = require('./controller/userController');
const postsController = require('./controller/postsController');

// 配置路由
// 返回前台页面
router.get('/',pageController.getIndexPage)
      .get('/detail',pageController.getDetailPage)
      .get('/list',pageController.getListPage)     
// 返回后台管理系统页面
      .get('/admin',pageController.getAdminIndexPage)
      .get('/admin/categories',pageController.getAdminCategoriesPage)
      .get('/admin/comments',pageController.getAdminCommentsPage)
      .get('/admin/login',pageController.getAdminLoginPage)
      .get('/admin/nav-menus',pageController.getAdminNavMenusPage)
      .get('/admin/password-reset',pageController.getPasswordResetPage)
      .get('/admin/post-add',pageController.getAdminPostAddPage)
      .get('/admin/posts',pageController.getAdminPostsPage)
      .get('/admin/profile',pageController.getAdminProfilePage)
      .get('/admin/settings',pageController.getAdminSettingsPage)
      .get('/admin/slides',pageController.getAdminSlidePage)
      .get('/admin/users',pageController.getAdminUsersPage)
// 返回用户操作的数据-业务处理路由
      .post('/login',userController.login)
      .get('/getAllPosts',postsController.getAllPosts)

module.exports = router;