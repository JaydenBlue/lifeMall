import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //服务器地址
    // webPath : 'http://2766407vi1.imdo.co/',
    webPath : 'https://gm.merrilylife.com/',
    //登录状态
    isLogin : false,
    //登录返回信息
    loginInfo : {},
    //token
    token : '',
    //分享地址
    tgBaseUrl : "",
    //gameurl
    gameUrlList : "",
    // 是否打开登录弹窗
    isToLogin: false,
    // 是否打开注册弹窗
    isToReg: false,
  },
  mutations: {
    isLoginChange(state,bool){
      state.isLogin = bool
    },
    loginInfoChange(state,obj){
      state.loginInfo = obj
    },
    tokenChange(state,token){
      state.token = token
    },
    tgBaseUrlChange(state,url){
      state.tgBaseUrl = url
    },
    gameUrlChange(state,url){
      state.gameUrlList = url
    }
  },
  actions: {

  }
})
