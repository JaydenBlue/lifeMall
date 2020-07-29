import Vue from 'vue'
import Router from 'vue-router'
import Clause from './views/clause.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(["@/views/layout.vue"], resolve),
      children: [
        {
          path: "/",
          redirect: '/home'
        },
        {
          path: '/home',
          name: '/home',
          component: resolve => require(["@/views/home.vue"], resolve),
          meta: {
            icon: '',
            keepAlive: false,
            title: ''
          }
        },
      ]
    },
    {
      path: '/clause',
      name: 'clause',
      component: Clause,
    }
  ]
})

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }