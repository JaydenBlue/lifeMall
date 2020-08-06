import Vue from 'vue'
import VueRouter from 'vue-router'
import {constantRouterMap} from './router'

Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return (originalPush.call(this, location)).catch((err) => err)
// }
const router = new VueRouter({
  routes: constantRouterMap
})


// router.beforeEach((to, from, next) => {
//   console.log(to)
//   const token = storage.get("tokens") || storage.get("shop_token")
//   if (token) {
//     if (to.path === '/login') {
//       next({
//         path: '/main'
//       })
//     } else {
//       console.log(123)
//       next()
//     }
//   } else {
//     if (to.path === '/home' || to.path === '/login' || to.path === '/register') {
//       next()
//     } else {
//       next({
//         path: '/home'
//       })
//     }
//   }
// })

export default router