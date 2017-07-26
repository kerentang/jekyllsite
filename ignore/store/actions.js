export default {
  typetoinput ({commit}, value) {
    let intvalue
    if (value !== '.') {
      intvalue = parseFloat(value)
    } else {
      intvalue = value
    }
    commit('TYPE_NUM', intvalue)
  },
  operator ({commit}, opt) {
    commit('TYPE_OPERATOR', opt)
  },
  async calculate (context) {
    // await context.dispatch('operator', context.state.operator)
    await context.dispatch('typetoinput', context.state.calculNum)
    context.commit('CALCULATE_ANS')
  }
}