// 这是返回页面的控制器

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
   res.render('admin/index');
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