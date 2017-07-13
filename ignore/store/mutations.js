export default {
  TYPE_NUM (state, value) {
    if (value === '.' && state.exp.indexOf('.') > -1) {
      state.exp = state.exp
    } else {
      state.exp = state.exp + value
    }
    state.exp !== '' ? state.calculNum = parseFloat(state.exp) : state.calculNum = 0
  },
  TYPE_OPERATOR (state, opt) {
    // state.total = state.calculNum
    // state.ans.push(state.total)
    state.operator = opt
    state.exp = ''
    // state.ans = []
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
          state.total = state.calculNum
          state.ans.pop()
          state.ans.push(state.total)
          // state.ans.push(state.calculNum)
          break;
        case 'percentage':
          state.calculNum = state.calculNum / 100
          // state.ans.push(state.calculNum)
          state.total = state.calculNum
          state.ans.pop()
          state.ans.push(state.total)
          break;
        case 'power2':
          state.calculNum = Math.pow(state.calculNum, 2)
          // state.ans.push(state.calculNum)
          // state.ans.push(state.total)
          state.total = state.calculNum
          state.ans.pop()
          state.ans.push(state.total)
          break;
        case 'cube':
          state.calculNum = Math.pow(state.calculNum, 3)
          // state.ans.push(state.calculNum)
          // state.ans.push(state.total)
          alert(state.calculNum)
          state.total = state.calculNum
          state.ans.pop()
          state.ans.push(state.total)
          break;
        case 'ln':
          state.calculNum = Math.log(state.calculNum)
          // state.ans.push(state.calculNum)
          // state.ans.push(state.total)
          state.total = state.calculNum
          state.ans.pop()
          state.ans.push(state.total)
          break;
        case 'log10':
          state.calculNum = Math.log(state.calculNum) / Math.log(10)
          // state.total = state.calculNum
          // state.ans.push(state.calculNum)
          // state.ans.push(state.total)
          state.total = state.calculNum
          state.ans.pop()
          state.ans.push(state.total)
          break;
        case 'divide':
          state.total = state.calculNum
          state.ans.push(state.total)
          // state.calculNum = state.total / state.calculNum
          // state.total = state.calculNum
          break;
        case 'mulpitly':
          state.total = state.calculNum
          state.ans.push(state.total)
          // state.calculNum = state.total * state.calculNum
          // state.total = state.calculNum
          // state.ans.push(state.total)
          break;
        case 'minus':
          state.total = state.calculNum
          state.ans.push(state.total)
          // state.calculNum = state.total - state.calculNum
          // state.ans.push(state.total)
          // state.total = state.calculNum
          break;
        case 'plus':
          state.ans.push(state.total)
          state.total = state.calculNum
          break;
        // case 'ltbkt':
        //   bkt.push(state.calculNum)
        //   break;
        // case 'rtbkt':
        //   bkt.push(state.total)
        //   break;
      }
      // state.total = state.calculNum
      // state.ans.push(state.total)
    }
    // state.ans.pop()
    // state.ans.push(state.total)
  },
  CALCULATE_ANS (state) {
    // let bkt = []
    // state.ans.push(state.total)
    // state.total = state.calculNum
    // state.ans.push(state.total)
    // state.exp = ''
    switch (state.operator) {
      case 'divide':
        // state.total = state.calculNum
        // state.ans.push(state.total)
        state.calculNum = state.total / state.calculNum
        // state.total = state.calculNum
        state.ans.push(state.calculNum)
        break;
      case 'mulpitly':
        state.total = state.calculNum
        state.ans.push(state.total)
        state.calculNum = state.total * state.calculNum
        state.total = state.calculNum
        state.ans.push(state.total)
        break;
      case 'minus':
        state.total = state.calculNum
        state.ans.push(state.total)
        state.calculNum = state.total - state.calculNum
        state.total = state.calculNum
        state.ans.push(state.total)
        break;
      case 'plus':
        state.total = state.calculNum
        state.ans.push(state.total)
        break;
      // case 'ltbkt':
      //   bkt.push(state.calculNum)
      //   break;
      // case 'rtbkt':
      //   bkt.push(state.total)
      //   break;
    }
    if (state.operator === 'equalto') {
      state.calculNum = state.ans.reduce((x, y) => {
        return x + y
      })
      state.ans.push(state.calculNum)
    }
  }
}
