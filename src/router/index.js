import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Summary from "../views/Summary/Summary"
import Diary from "../views/Diary/Diary"
import MessageBoard from "../views/MessageBoard/MessageBoard";

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
    path: '/summary',
    name: 'Summary',
    component: Summary
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
  routes
});

export default router
