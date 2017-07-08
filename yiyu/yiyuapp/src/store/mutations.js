export default {
  TYPE_NUM (state, btnvalue) {
    state.exp = state.exp + btnvalue.intvalue
    state.exp === '' ? state.calculNum = parseFloat(state.exp) : state.calculNum = 0
  },
  TYPE_OPERATOR (state, btnvalue) {
    state.total = state.calculNum
    state.operator = btnvalue.operator
    state.exp = ''
  },
  CALCULATE_ANS (state) {
    let bkt = []
    if (state.operator !== null) {
      switch (state.operator) {
        case 'clear':
          state.calculNum = 0
          state.exp = ''
          state.total = null
          state.ans = []
          break;
        case 'toggleminus':
          state.calculNum = (-1) * state.calculNum
          break;
        case 'percentage':
          state.calculNum = state.calculNum / 100
          break;
        case 'divide':
          state.calculNum = state.total / state.calculNum
          state.total = state.calculNum
          state.ans.push(state.total)
          break;
        case 'mulpitly':
          state.calculNum = state.total * state.calculNum
          state.total = state.calculNum
          state.ans.push(state.total)
          break;
        case 'minus':
          state.calculNum = (-1) * state.calculNum
          state.ans.push(state.total)
          state.total = state.calculNum
          break;
        case 'plus':
          state.ans.push(state.total)
          state.total = state.calculNum
          break;
        case 'ltbkt':
          bkt.push(state.calculNum)
          break;
        case 'rtbkt':
          bkt.push(state.total)
          break;
        case 'power2':
          state.calculNum = Math.pow(state.calcuNum, 2)
          state.total = state.calculNum
          state.ans.push(state.total)
          break;
        case 'cube':
          state.calculNum = Math.pow(state.calcuNum, 3)
          state.total = state.calculNum
          state.ans.push(state.total)
          break;
        case 'ln':
          state.calculNum = Math.log(state.calculNum)
          state.total = state.calculNum
          state.ans.push(state.total)
          break;
        case 'log10':
          state.calculNum = Math.log(state.calculNum) / Math.log(10)
          state.total = state.calculNum
          state.ans.push(state.total)
          break;
        case 'equalto':
          let bktsum = bkt.reduce((x, y) => {
            return x + y
          })
          state.push(bktsum)
          state.calculNum = state.ans.reduce((x, y) => {
            return x + y
          })
          break;
      }
    }
  }
}
