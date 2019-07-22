//路由配置页面
/*
*1:将你需要用到的组件添加进来
*2:将路由添加到 routers 数组对象中，参考'/test'格式'
 */
import test from '../components/test'
import index from '../components/index'
const routers = [
    { path:'/test' , component: test},
    //默认路由，当没有对应的路由时，跳转到此页面
    { path:'*' , component: index}
];
export default routers;