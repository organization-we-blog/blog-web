import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SplitLine from "./components/SplitLine/SplitLine";
import '../src/assets/css/base.css'
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

VueMarkdownEditor.use(vuepressTheme);
VueMarkdownEditor.use(createTipPlugin());
VueMarkdownEditor.use(createEmojiPlugin());
VueMarkdownEditor.use(createTodoListPlugin());
VueMarkdownEditor.use(createLineNumbertPlugin());
Vue.use(VueMarkdownEditor);

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.component('SplitLine',SplitLine)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
