import Vue from 'vue';
import App from './App.vue';
import 'babel-polyfill';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//路由配置文件
import Routers from './resources/js/router.js';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Routers);
Vue.config.productionTip = false;

// 路由配置
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app');
