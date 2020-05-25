import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由
const Home = () => import('../views/Home/Home.vue');
const Gather = () => import("../views/Gather/Gather");
const Diary = () =>import("../views/Diary/Diary");
const MessageBoard = () => import("../views/MessageBoard/MessageBoard");

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: ()=>import("../admin/Admin.vue"),
    redirect: "/admin/article_list",
    children: [
      {
        path: 'monitor',
        name: '仪表盘',
        component: ()=>import("../admin/views/Monitor/Monitor")
      },{
        path: 'article_list',
        name: '文章列表',
        component: ()=>import("../admin/views/ArticleList/ArticleList")
      },{
        path: 'new_article',
        name: '新建文章',
        component: ()=>import("../admin/views/NewArticle/NewArticle")
      },{
        path: 'article_monitor',
        name: '文章可视化面板',
        component: ()=>import("../admin/views/ArticleMonitor/ArticleMonitor")
      },{
        path: 'user_list',
        name: '用户列表',
        component: ()=>import("../admin/views/UserList/UserList")
      },{
        path: 'user_edit/:id',
        name: '编辑用户',
        component: ()=>import("../admin/views/UserList/components/EditUser"),
        props: true
      }
      ,{
        path: 'user_role',
        name: '用户角色管理',
        component: ()=>import("../admin/views/UserRole/UserRole")
      },{
        path: 'err_log/:id',
        name: '错误日志详情',
        component: ()=>import("../admin/views/ErrLogInfo/ErrLogInfo")
      },
    ]
  },
  {
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/gather',
    name: 'Gather',
    component: Gather
  }, {
    path: '/diary',
    name: 'Diary',
    component: Diary
  }, {
    path: '/messageBoard',
    name: 'MessageBoard',
    component: MessageBoard
  }, {
    path: '/TestLogin',
    name: '登录',
    component: ()=>import("../views/Login/Login")
  }, {
    path: '/TestSign',
    name: '注册',
    component: ()=>import("../views/Sign/Sign")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router
