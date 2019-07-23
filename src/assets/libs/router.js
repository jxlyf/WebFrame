//路由配置页面
/*
*1:将你需要用到的组件添加进来
*2:将路由添加到 routers 数组对象中，参考'/test'格式'
 */
import test from '../../views/test';
// import index from '../../views/index';
import notFound from '../../views/404';
import layout1 from '../../layout/layout1';
import table1 from '../../components/table/table1';
import table2 from '../../components/table/table2';
import table3 from '../../components/table/table3';
import form1 from '../../components/form/form1';
import form2 from '../../components/form/form2';
import form3 from '../../components/form/form3';
import carousel1 from '../../components/carousel/carousel1';
import carousel2 from '../../components/carousel/carousel2';
import carousel3 from '../../components/carousel/carousel3';

const routers = [
    {path: '/test', component: test},
    //默认路由，当没有对应的路由时，跳转到此页面
    {path: '*', component: notFound},
    //404页面
    {path: '/404', component: notFound},

    {
        path: '/table', component: layout1,
        children: [
            {
                path: '',
                component: table1
            }, {
                path: 'table',
                component: table1,
            }, {
                path: 'table2',
                component: table2,
            }, {
                path: 'table3',
                component: table3,
            }
        ]
    },

    {
        path: '/form', component: layout1,
        children: [
            {
                path: '',
                component: form1
            }, {
                path: 'form1',
                component: form1
            }, {
                path: 'form2',
                component: form2
            }, {
                path: 'form3',
                component: form3
            }
        ]
    },

    {
        path: '/carousel', component: layout1,
        children: [
            {
                path: '',
                component: carousel1
            }, {
                path: 'carousel1',
                component: carousel1
            }, {
                path: 'carousel2',
                component: carousel2
            }, {
                path: 'carousel3',
                component: carousel3
            }
        ]
    }
];
export default routers;