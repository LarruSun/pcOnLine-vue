import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from '@/components/Home/Home'
import JingXuan from '@/components/Home/JingXuan/JingXuan'

const YouHui=()=>import('@/components/Home/YouHui/YouHui');
const HaiTao=()=>import('@/components/Home/HaiTao/HaiTao');
const FaXian=()=>import('@/components/Home/HaiTao/HaiTao');
const YuanChuang=()=>import( '@/components/Home/YuanChuang/YuanChuang');

// import YouHui from '@/components/Home/YouHui/YouHui'
// import HaiTao from '@/components/Home/HaiTao/HaiTao'
// import FaXian from '@/components/Home/FaXian/FaXian'
// import YuanChuang from '@/components/Home/YuanChuang/YuanChuang'

import Profile from '@/components/Profile/Profile'
import Category from '@/components/Category/Category'
import commonTop from '@/components/Category/commons/commonTop'
import categoryHome from '@/components/Category/CategoryHome'


//1.配置路由信息对象

const routes = [
    {   
        path: '/',
        component: Home,
        children: [
            {
                path: '',
                component: JingXuan
            }
        ]
    },
    { 
     path: '/home',
     component: Home,
     children: [
         {
             path: '',
             component: JingXuan
         },
         {
             path: 'JingXuan',  //home/JingXuan
             component: JingXuan
         },
         {
             path: 'YouHui',
             component: YouHui
         },
         {
             path: 'HaiTao',
             component: HaiTao
         },
         {
             path: 'FaXian',
             component: FaXian
         },
         {
             path: 'YuanChuang',
             component: YuanChuang
         }
     ]
    },
 
    {
         path: '/category',
         component: Category,
         children:[
             {path:'commonTop/:commonTopItem',component:commonTop,name:'commonTop'},
             {path:'home',component:categoryHome},
             {path:'',component:categoryHome}


             
         ]
    },


    { path: '/profile',component: Profile}
]

export default new VueRouter({
    routes
})