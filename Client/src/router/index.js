import Vue from 'vue'
import Router from 'vue-router'
import Gl from '@/components/admin/Gl/Gl'
import Jd from '@/components/admin/Jd/Jd'
import User from '@/components/admin/User/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Gl',
      name: 'Gl',
      component: Gl
    },{
      path: '/User',
      name: 'User',
      component: User
    },{
      path: '/Jd',
      name: 'Jd',
      component: Jd
    }
  ]
})
