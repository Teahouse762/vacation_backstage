import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      redirect:"/dl"
    },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[{
      path:"xs",
      name:"xs",
      component: () => import('../views/dh/xs.vue')
    },{
      path:"js",
      name:"js",
      component: () => import('../views/dh/js.vue')
    },{
      path:"zj",
      name:"jiaoshi",
      component: () => import('../views/dh/jiaoshi.vue')
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },{
    path:'/dl',
    name:'dl',
    component: () => import('../views/dl.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
