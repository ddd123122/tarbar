import Vue from 'vue'
import VouRouter from 'vue-router'
import home from '../views/home/Home.vue'
import category from '../views/category/Category.vue'
import cart from '../views/cart/Cart.vue'
import profit from '../views/profit/Profit.vue'
// const home = () => import ('../views/home/Home')
// const category = () => {import ('../views/category/Category')
// const cart = () => import ('../views/cart/Cart')
// const profit = () => import ('../views/profit/Profit')

//1.安装路由
Vue.use(VouRouter)
//2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path: '/category',
    component:category
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/profit',
    component:profit
  }
]
const router=new VouRouter({
  routes,
  mode: 'history'
})
//3.导出router
export default router
