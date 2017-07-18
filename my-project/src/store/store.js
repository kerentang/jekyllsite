import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const state = {
  count: 20,
  waiting: false,
  anotherIncrement: 5
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
export default store;

