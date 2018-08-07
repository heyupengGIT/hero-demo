import Vue from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';


// 导入router.js
import router from './routes/router.js';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
