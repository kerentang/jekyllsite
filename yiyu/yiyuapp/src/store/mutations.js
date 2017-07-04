export default {
  TYPE_NUM (state, btnvalue) {
    state.exp = state.exp + btnvalue.value
    state.exp === '' ? state.calculNum = parseFloat(state.exp) : 0
  },
  TYPE_OPERATOR (state, btnvalue) {
    state.total = state.calculNum
    state.operator = btnvalue.operator
    state.exp = ''
  },
  CALCULATE_ANS (state) {
    state.calculNum = state.ans
  }
}
