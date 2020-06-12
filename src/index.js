import Vue from 'vue';
import VueRouter from 'vue-router'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import App from './components/App';
import './index.html';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(VueMaterial)

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});