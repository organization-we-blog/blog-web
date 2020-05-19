import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SplitLine from "./components/SplitLine/SplitLine";
import '../src/assets/css/base.css';
import requset from "./api/request";
import "./assets/js/Util"//封装的工具方法

Vue.config.productionTip = false;
Vue.prototype.$request = requset;
Vue.use(ElementUI);
Vue.component('SplitLine',SplitLine)


new Vue({
  router,//$router
  store,//$store
  render: h => h(App)
}).$mount('#app');
