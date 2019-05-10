import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/homepage/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }]
})
