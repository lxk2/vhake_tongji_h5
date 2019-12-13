import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabbarActive: 0
  },
  mutations: {
    UP_TABBAR_ACTIVE: (state, value) => {
      state.tabbarActive = value
    }
  },
  actions: {
    upTabbarActive: ({ commit }, value) => {
      let time = setTimeout(() => {
        let arr = [
          'index',
          'calculus'
        ]
        let index = arr.indexOf(value)
        if (index !== -1) {
          commit('UP_TABBAR_ACTIVE', index)
        }
        clearTimeout(time)
      })
    }
  },
  modules: {
  }
})
