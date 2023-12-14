import { createRouter, createWebHistory } from 'vue-router'
// import { app, pages } from '@/config'
// import HomePage from '@/pages/HomePage.vue'
import ProductList from '@/components/Product.vue'
import CartPage from  '@/pages/Cart.vue'

// const AboutPage = () => import(/* webpackChunkName: "p-about" */ '@/pages/AboutPage.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "product",
      component: ProductList
    } ,
    {
      path: '/cart',
      name: "cart",
      component: CartPage
    }
    
  ]
})

export default router
