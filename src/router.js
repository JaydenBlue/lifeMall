import Vue from 'vue'
import Router from 'vue-router'
import Clause from './views/clause.vue'



Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(["@/views/layout.vue"], resolve),
      children: [
        {
          path: "/",
          redirect: 'shop'
        },
        {
          path: 'shop',
          name: 'shop',
          component: resolve => require(["@/views/home.vue"], resolve),
          meta: {
            icon: '',
            keepAlive: false,
            title: ''
          }
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: resolve => require(["@/views/coupon.vue"], resolve),
          meta: {
            icon: '',
            keepAlive: false,
            title: ''
          }
        },
        {
          path: 'shop/item',
          name: 'shop/item',
          component: resolve => require(["@/views/item.vue"], resolve),
          meta: {
            icon: '',
            keepAlive: false,
            title: ''
          }
        },
        {
          path: 'classification',
          name: 'classification',
          component: resolve => require(["@/views/classification.vue"], resolve),
          meta: {
            icon: '',
            keepAlive: false,
            title: ''
          }
        },
        {
          path: 'personal',
          name: 'personal',
          component: resolve => require(["@/views/personal.vue"], resolve),
          meta: {
            icon: '',
            keepAlive: false,
            title: ''
          },
          children: [
            {
              path: "/",
              redirect: 'personalCenter'
            },
            {
              path: 'personalCenter',
              name: 'personalCenter',
              component: resolve => require(["@/views/personalCenter.vue"], resolve),
              meta: {
                icon: '',
                keepAlive: false,
                title: '个人信息'
              }
            },
            {
              path: 'address',
              name: 'address',
              component: resolve => require(["@/views/address.vue"], resolve),
              meta: {
                icon: '',
                keepAlive: false,
                title: '地址管理'
              }
            },
            {
              path: 'order',
              name: 'order',
              component: resolve => require(["@/views/order.vue"], resolve),
              meta: {
                icon: '',
                keepAlive: false,
                title: '订单管理'
              }
            },
            {
              path: 'wallet',
              name: 'wallet',
              component: resolve => require(["@/views/wallet.vue"], resolve),
              meta: {
                icon: '',
                keepAlive: false,
                title: '我的钱包'
              }
            },
            {
              path: 'myCoupon',
              name: 'myCoupon',
              component: resolve => require(["@/views/myCoupon.vue"], resolve),
              meta: {
                icon: '',
                keepAlive: false,
                title: '我的优惠券'
              }
            },
          ]
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