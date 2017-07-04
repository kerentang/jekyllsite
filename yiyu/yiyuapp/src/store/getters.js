export default {
  check_input: function (state) {
    if (state.expindexOf('.') > -1) {
      return state.exp.indexOf('.') > 0 && state.exp.indexOf('.') === state.exp.lastIndexOf('.')
    } else {
      return state.exp
    }
  }
}
