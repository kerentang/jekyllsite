import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {
  calculNum: 0,
  exp: '',
  total: null,
  operator: null,
  ans: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
