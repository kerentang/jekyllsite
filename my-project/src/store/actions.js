export default {
  increment ({commit}) {
    commit('INCREMENT');
  },
  decrement ({commit}) {
    commit('DECREMENT');
  },
  incrementWithValue ({commit}, value) {
    commit('SHOW_WAITING_MESSAGE')
    let intValue = parseInt(value)
    let anotherValue = value.anotherValue
    setTimeout(function () {
      if (isNaN(intValue)) {
        throw new Error('not a interger')
      } else {
        commit('INCREMENT_WITH_VALUE', {intValue, anotherValue})
        commit('HIDE_WAITING_MESSAGE')
      }
    }, 2000)
  }
}
