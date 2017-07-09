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
        <button @click="operator('divide')">/</button>
        <button @click="operator('mulpitly')">*</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button :value='7' @click="typetoinput">7</button>
        <button :value='8' @click="typetoinput">8</button>
        <button :value='9' @click="typetoinput">9</button>
        <button @click="operator('minus')">-</button>
        <button @click="operator('plus')">+</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button :value='4' @click="typetoinput">4</button>
        <button :value='5' @click="typetoinput">5</button>
        <button :value='6' @click="typetoinput">6</button>
        <button @click="operator('ltbkt')">(</button>
        <button @click="operator('rtbkt')">)</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button :value='1' @click="typetoinput">1</button>
        <button :value='2' @click="typetoinput">2</button>
        <button :value='3' @click="typetoinput">3</button>
        <button @click="operator('power2')">x^2</button>
        <button @click="operator('cube')">x^3</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button :value='0' @click="typetoinput">0</button>
        <button @click="operator('ln')">ln</button>
        <button @click="operator('log10')">log10</button>
        <button @click="operator('.')">.</button>
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
    typetoinput (e) {
      console.log(e.target.value)
      return this.$store.dispatch('typetoinput', e.target.value)
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
