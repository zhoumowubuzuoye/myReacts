/*
 * @Author: yugeStrive
 * @Date: 2020-07-12 10:22:30
 * @LastEditTime: 2020-07-16 15:22:01
 * @Description: views路由数据项
 */

// import ReactPage from './reactPage/index'
import Login from './login/index'
import HomeCure from './homecure'

const routeList = [
    // {
    //     path: '/',
    //     redirect:'/login',
    //     // component: ReactPage,
    //     exact: true
    // },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/homecure',
        component: HomeCure
    }
]

export default routeList