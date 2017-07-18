<template>
  <div>
      <h3>Count is {{count}}</h3>
      <p>组件内部的计算属性{{localComputed}}</p>
      <h3>AnotherIncrement is {{countAnother}}</h3>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    localComputed () {
      return this.count + 1;
    },
    ...mapState({
      count:'count'
    }),
    countAnother:function () {
      return this.$store.getters.countAnother;
    }
  }
}
</script>
<style scoped>
  h3{
      font-size: 30px;
  }
</style>


