import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //服务器地址
    // webPath : 'http://2766407vi1.imdo.co/',
    webPath: 'https://gm.merrilylife.com/',
    //登录状态
    isLogin: false,
    //登录返回信息
    loginInfo: {},
    userInfo: {},
    //token
    token: '',
    //分享地址
    tgBaseUrl: "",
    //gameurl
    gameUrlList: "",
    // 是否打开登录弹窗
    isToLogin: false,
    // 是否打开注册弹窗
    isToReg: false,
  },
  getters: {
    isToLogin(state) {
      return state.isToLogin
    },
    isToReg(state) {
      return state.isToReg
    },
    loginInfo(state) {
      return state.loginInfo
    },
    userInfo(state) {
      return state.userInfo
    },
  },
  mutations: {
    isLoginChange(state, bool) {
      state.isLogin = bool
    },
    LOGININFO(state, obj) {
      state.loginInfo = obj
    },
    USERINFO(state, obj) {
      state.userInfo = obj
    },
    tokenChange(state, token) {
      api.getUserInfo({}).then(res => {
        console.log(res)
        state.userInfo = res.data.data
      })
      state.token = token
    },
    tgBaseUrlChange(state, url) {
      state.tgBaseUrl = url
    },
    gameUrlChange(state, url) {
      state.gameUrlList = url
    },
    ISTOLOGIN(state, data) {
      console.log(data)
      if (data) {
        state.isToReg = false
      }
      state.isToLogin = data
    },
    ISTOREG(state, data) {
      if (data) {
        state.isToLogin = false
      }
      state.isToReg = data
    },
  },
  actions: {
    ISTOLOGINFLAG({ commit }, data) {
      console.log(data)
      commit('ISTOLOGIN', data);
    },
    ISTOREGFLAG({ commit }, data) {
      commit('ISTOREG', data);
    },
    LOGININFOFLAG({ commit }, data) {
      commit('LOGININFO', data);
    },
    USERINFOFLAG({ commit }, data) {
      commit('USERINFO', data);
    },
  }
})
