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
      <span>计算提示：{{expression}}</span>
    </el-row>
    <el-row type="flex" justify="center">
        <button @click="operator">AC</button>
        <button @click="operator">+/-</button>
        <button @click="operator">%</button>
        <button @click="operator">/</button>
        <button @click="operator">*</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button :value='7' @click="typetoinput">7</button>
        <button :value='8' @click="typetoinput">8</button>
        <button :value='9' @click="typetoinput">9</button>
        <button @click="operator">-</button>
        <button @click="operator">+</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button :value='4' @click="typetoinput">4</button>
        <button :value='5' @click="typetoinput">5</button>
        <button :value='6' @click="typetoinput">6</button>
        <button @click="operator">(</button>
        <button @click="operator">)</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button :value='1' @click="typetoinput">1</button>
        <button :value='2' @click="typetoinput">2</button>
        <button :value='3' @click="typetoinput">3</button>
        <button @click="operator">x^2</button>
        <button @click="operator">x^3</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button :value='0' @click="typetoinput">0</button>
        <button @click="operator">ln</button>
        <button @click="operator">log10</button>
        <button :value='.' @click="typetoinput" disbled='isOneDot'>.</button>
        <button @click="result">=</button>
    </el-row>
  </el-row>
</template>
<script>

export default {
  name: 'Calculator',
  data () {
    return {
      calculNum: 20
    }
  },
  computed: {
    return this.$store.ans
  },
  methods: {
    // typetoinput (val) {
    //   exp = exp + val
    //   return exp
    // },
    // operator (type) {
    //   result = exp
    //   exp = parseFloat(exp);
    //   switch (type) {
    //     case 'clear':
    //       this.calculNum = 0
    //       ans = []
    //       break;
    //     case 'togglepre':
    //       this.calculNum = this.calculNum * (-1)
    //       break;
    //     case 'percentage':
    //       this.calculNum = parseFloat(this.calculNum) / 100
    //       break;
    //     case 'divide':
    //       result = result + '/'
    //       ans.push('/')
    //       break;
    //     case 'mulpitly':
    //       result = result + '*'
    //       ans.push('*')
    //       break;
    //     case 'minus':
    //       result = result + '-'
    //       ans.push('-')
    //       break;
    //     case 'plus':
    //       result = result + '+'
    //       ans.push('+')
    //       break;
    //     case 'ltbkt':
    //       result = result + '('
    //       ans.push('(')
    //       break;
    //     case 'rtbkt':
    //       result = result + ')'
    //       ans.push(')')
    //       break;
    //     case 'power':
    //       this.calculNum = Math.pow(this.calcuNum, 3)
    //       break;
    //     case 'cube':
    //       this.calculNum = Math.pow(this.calcuNum, 3)
    //       break;
    //     case 'ln':
    //       this.calculNum = this.calculNum = Math.log(this.calculNum)
    //       break;
    //     case 'log10':
    //       this.calculNum = Math.log(this.calculNum) / Math.log(10)
    //       break;
    //     case 'result':
    //       if (exp !== null || exp !== '') { // 判断exp
    //         this.calculNum = exp
    //       } else {
    //         this.calculNum = 0
    //       }
    //       break;
    //   }
    //   ans.push(this.calculNum)
    //   exp = ''
    // }
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
