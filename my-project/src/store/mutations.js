export default {
  INCREMENT (state) {
    state.count++;
  },
  DECREMENT (state) {
    state.count--;
  },
  INCREMENT_WITH_VALUE (state, value) {
    state.count = state.count + value.intValue + value.anotherValue;
  },
  SHOW_WAITING_MESSAGE (state) {
    state.waiting = true;
  },
  HIDE_WAITING_MESSAGE (state) {
    state.waiting = false;
  }
}
