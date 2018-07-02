import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Http from './utils/http'
import ElementUI from 'element-ui';
import "./assets/css/element-variables.scss";
import "./assets/icon/iconfont.css";

Vue.config.productionTip = false;
Vue.prototype.$http = Http;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, store,
  render: h => h(App)
});
