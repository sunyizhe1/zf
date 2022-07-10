import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/login',
      children: [
        { path: 'home', name: 'home', component: () => import('@/views/Home') },
        { path: 'find', name: 'find', component: () => import('@/views/Find') },
        { path: 'info', name: 'info', component: () => import('@/views/Info') },
        { path: 'my', name: 'my', component: () => import('@/views/My') }
      ]
    },
    { path: '/login', name: 'login', component: () => import('@/views/Login') },
    { path: '/publish', name: 'publish', component: () => import('@/views/Publish') },
    { path: '/search', name: 'search', component: () => import('@/views/Search') },
    { path: '/city', name: 'city', component: () => import('@/views/City') },
    { path: '/detail', name: 'detail', component: () => import('@/views/Detail') }
  ]
})

export default router
