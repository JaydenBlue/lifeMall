import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from '@/router/'
import store from './store/store.js'
import api from '@/api/api.js'
import 'vant/lib/index.css';
import VueCookies from 'vue-cookies'
import VueI18n from 'vue-i18n'
import { filters } from '@/utils/filter'
import vRegion from 'v-region'
Vue.use(vRegion, {})

Vue.use(VueCookies).use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueI18n)

Vue.prototype.$api = api

const i18n = new VueI18n({
  locale: '1',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    '1': require('./common/lang/tw'),   // 中文语言包
    '0': require('./common/lang/en')    // 英文语言包
  }
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

console.log(store)


new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')


