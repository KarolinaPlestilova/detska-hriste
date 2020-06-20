import Vue from 'vue';
import VueRouter from 'vue-router';

import Map from './components/Map';
import Region from './components/Region';
import App from './App';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '', component: Map },
    { path: '/region', component: Region },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});