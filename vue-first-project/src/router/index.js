import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/homepage/home'
import mainpage from '@/components/mainpage/mainpage'
import child1 from '@/components/child1/child1'
import child2 from '@/components/child2/child2'
import childDetail from '@/components/childDetail/childDetail'

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
    component: home,
    redirect:'/mainpage',
    children:[
        {
            path:'/mainpage',
            name:'mainpage',
            component:mainpage
        },
        {
            path:'/child1',
            name:'child1',
            component:child1
        },
        {
            path:'/child2',
            name:'child2',
            component:child2
        },
        {
            path:'/childDetail',
            name:'childDetail',
            component:childDetail
        }
    ]
  }]
})
