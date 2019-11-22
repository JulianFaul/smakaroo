import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    platform: 'browser'
  },
  mutations: {
    platform(state, payload){
      state.platform = payload;
    },
  },
  actions: {
    setPlatform({commit}, payload){
      commit("platform", payload)
    }
  },
  getters:{
    getPlatform(state){
      return state.platform
    }
  },
  modules: {
  }
})
