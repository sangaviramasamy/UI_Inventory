import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/components/Product.vue'
import CartPage from  '@/pages/Cart.vue'
import form from  '@/pages/Form.vue'
import update from  '@/pages/Update.vue'

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
    },
    {
      path: '/form',
      name:'form',
      component:form
    },
    {
      path: '/update/:id',
      name:'update',
      component:update
    }
    
  ]
})

export default router
