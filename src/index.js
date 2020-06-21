import Vue from 'vue';
import VueRouter from 'vue-router';

import Map from './components/Map';
import Region from './components/Region';
import Detail from './components/Detail';
import Projekt from './components/Projekt';
import App from './App';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '', component: Map },
    { path: '/region/:id', component: Region, name: 'region' },
    { path: '/region/:id/detail/:detailId', component: Detail, name: 'detail', props: true },
    { path: '/o-projektu', component: Projekt, name: 'projekt' },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});