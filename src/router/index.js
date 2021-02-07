import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:"/goods",
        name:"goods",
        component:()=>import ("views/home/goods")
      }
    ]
  },
  {
    path:"/",
    name:"login",
    component:()=>import("views/Login")
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
