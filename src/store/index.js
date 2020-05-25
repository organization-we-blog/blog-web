import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token")
  },
  mutations: {
    newToken:function (state,token) {
        state.token = token;
    }
  },
  actions: {
  },
  modules: {
  }
})
