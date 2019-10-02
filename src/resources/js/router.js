//路由配置页面
/*
*1:将你需要用到的组件添加进来
*2:将路由添加到 routers 数组对象中，参考'/test'格式'
 */
import notFound from '../../view/others/404';
import signin from '../../view/others/login';
import layout1 from '../../layout/layout';
import table1 from '../../view/table/table1';
import table2 from '../../view/table/table2';
import table3 from '../../view/table/table3';
import form1 from '../../view/form/form1';
import form2 from '../../view/form/form2';
import form3 from '../../view/form/form3';
import carousel1 from '../../view/carousel/carousel1';
import carousel2 from '../../view/carousel/carousel2';
import carousel3 from '../../view/carousel/carousel3';
import util1 from '../../view/util/util1';

const routers = [
    //默认路由，当没有对应的路由时，跳转到此页面
    {path: '*', component: notFound},
    //404页面
    {path: '/login', component: signin},

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
    },

    {
        path: '/util', component: layout1,
        children: [
            {
                path: '',
                component: util1
            }, {
                path: 'util1',
                component: util1
            }
        ]
    }
];
export default routers;