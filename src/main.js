import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SplitLine from "./components/SplitLine/SplitLine";
import '../src/assets/css/base.css'

import VueMarkdownEditor from '@kangc/v-md-editor';//编辑器
import '@kangc/v-md-editor/lib/style/base-editor.css';//编辑器css
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';//编辑器vuepress主题
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';//编辑器开启tip插件
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';//编辑器表情插件
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';//编辑器任务列表
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';//编辑器代码行号
import "prismjs/components/prism-java"//添加的语法高亮
import "prismjs/components/prism-json"
import "prismjs/components/prism-c"

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
  router,//$router
  store,//$store
  render: h => h(App)
}).$mount('#app');
