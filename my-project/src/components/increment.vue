<template>
  <div>
      <button v-on:click='add'>+1</button>
      <button v-on:click='decrement'>-1</button>
  </div>
  <div>
    <input type="text" v-model='incrementValue'>
    <button v-on:click='incrementWithValue'>increment</button>
  </div>
  <div v-if="show">waiting...</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      incrementValue: 0
    }
  },
  computed:{
    show:function(){
      return this.$store.state.waiting;
    },
    countAnother:function(){
      return this.$store.getters.countAnother;
    }
  },
  methods: {
    //以下写法逻辑清晰
    add () {
      this.$store.dispatch('increment')
    },
    decrement () {
      this.$store.dispatch('decrement')
    },
    incrementWithValue () {
      try {
        this.$store.dispatch('incrementWithValue',{value:this.incrementValue,anotherValue:this.countAnother})
      } catch (error) {
        alert(error)
      }
    }
    //简化写法，适用于函数较多的应用
    // ...mapActions(['decrement']),
    // ...mapActions({
    //   add: 'increment'
    // })
  }
}
</script>
<style>
  button{
      width: 100px;
      height: 100px;
      font-size: 30px;
  }
</style>
