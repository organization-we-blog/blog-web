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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

export default router
