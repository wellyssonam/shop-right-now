import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App.vue';
import { i18n } from './plugins/i18n/i18n.js';
import './registerServiceWorker';
import router from './router';
import store from './store';


Vue.use(BootstrapVue);

Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
