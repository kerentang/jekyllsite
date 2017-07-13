<template>
  <el-row class='content' :span='12' :offset='6'>
    <el-row type="flex" justify="center">
      <h3>全国中学生第一套普通计算器</h3>
    </el-row>
    <el-row type="flex" justify="center">
      <el-input type=text :value="calculNum" readonly>
        <template slot="prepend">Result = </template>
      </el-input>
    </el-row>
    <el-row type="flex" justify="center">
      <span></span>
    </el-row>
    <el-row type="flex" justify="center">
        <button @click="operator('clear')">AC</button>
        <button @click="operator('toggleminus')">+/-</button>
        <button @click="operator('percentage')">%</button>
        <button @click="calculate('divide')">/</button>
        <button @click="calculate('mulpitly')">*</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button @click="typetoinput('7')">7</button>
        <button @click="typetoinput('8')">8</button>
        <button @click="typetoinput('9')">9</button>
        <button @click="calculate('minus')">-</button>
        <button @click="calculate('plus')">+</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button @click="typetoinput('4')">4</button>
        <button @click="typetoinput('5')">5</button>
        <button @click="typetoinput('6')">6</button>
        <button @click="operator('ltbkt')">(</button>
        <button @click="operator('rtbkt')">)</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button @click="typetoinput('1')">1</button>
        <button @click="typetoinput('2')">2</button>
        <button @click="typetoinput('3')">3</button>
        <button @click="operator('power2')">x^2</button>
        <button @click="operator('cube')">x^3</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button @click="typetoinput('0')">0</button>
        <button @click="operator('ln')">ln</button>
        <button @click="operator('log10')">log10</button>
        <button @click="typetoinput('.')">.</button>
        <button @click="calculate('equalto')">=</button>
    </el-row>
  </el-row>
</template>
<script>

export default {
  name: 'Calculator',
  // data () {
  //   return {
  //     calculNum: 20
  //   }
  // },
  computed: {
    calculNum () {
      return this.$store.state.calculNum
    }
  },
  methods: {
    typetoinput (opt) {
      console.log(opt)
      return this.$store.dispatch('typetoinput', opt)
    },
    operator (opt) {
      console.log(opt)
      return this.$store.dispatch('operator', opt)
    },
    calculate (opt) {
      this.$store.dispatch('operator', opt)
      console.log(opt)
      return this.$store.dispatch('calculate', opt)
    }
  }
}
</script>
<style scoped>
.content{
  background-color: #e78b53;
  padding: 10px;
  height: auto;
  overflow: auto;
  box-sizing:border-box;
  border: 1px solid #222;
  border-radius: 10px;
}
.el-input{
  background-color: #fff;
  box-sizing: border-box;
  outline: none;
  border: none;
}
.el-row{
  margin: 5px;
  min-height: 40px;
  padding:5px;
}
button{
  width: 20%;
  margin:5px;
  background-color: #bebcba;
  border:1px solid #222;
  border-radius: 5px;
  box-sizing:border-box;
  height:40px;
  line-height:40px;
}
</style>
