import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'

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
  actions
})

export default store
