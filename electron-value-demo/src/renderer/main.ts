import Vue from 'vue';
import Electron from 'electron';
import ElectronStore from 'electron-store';

import './assets/scss/main.scss';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.prototype.$electron = Electron;
Vue.prototype.$config = new ElectronStore();

/* eslint-disable no-new */
new Vue({
  ...App,
  router,
}).$mount('#app');
