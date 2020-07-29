import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Clause from './views/clause.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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