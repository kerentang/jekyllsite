<template>
  <el-row class='content' :span='12' :offset='6'>
    <el-row type="flex" justify="center">
      <h3>全国中学生第一套普通计算器</h3>
    </el-row>
    <el-row type="flex" justify="center">
      <el-input type=text v-model="calculNum" readonly>
        <template slot="prepend">Result = </template>
      </el-input>
    </el-row>
    <el-row type="flex" justify="center">
      <span></span>
    </el-row>
    <el-row type="flex" justify="center">
        <button @click="typeoperator('clear')">AC</button>
        <button @click="typeoperator('toggleminus')">+/-</button>
        <button @click="typeoperator('percentage')">%</button>
        <button @click="typeoperator('divide')">/</button>
        <button @click="typeoperator('mulpitly')">*</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button @click="typetoinput('7')">7</button>
        <button @click="typetoinput('8')">8</button>
        <button @click="typetoinput('9')">9</button>
        <button @click="typeoperator('minus')">-</button>
        <button @click="typeoperator('plus')">+</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button @click="typetoinput('4')">4</button>
        <button @click="typetoinput('5')">5</button>
        <button @click="typetoinput('6')">6</button>
        <button @click="typeoperator('ltbkt')">(</button>
        <button @click="typeoperator('rtbkt')">)</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button @click="typetoinput('1')">1</button>
        <button @click="typetoinput('2')">2</button>
        <button @click="typetoinput('3')">3</button>
        <button @click="typeoperator('power2')">x^2</button>
        <button @click="typeoperator('cube')">x^3</button>
    </el-row>
    <el-row type="flex" justify="center">
        <button @click="typetoinput('0')">0</button>
        <button @click="typeoperator('ln')">ln</button>
        <button @click="typeoperator('log10')">log10</button>
        <button @click="typetoinput('.')">.</button>
        <button @click="calculate()">=</button>
    </el-row>
  </el-row>
</template>
<script>

export default {
  name: 'Calculator',
  data () {
    return {
      calculNum: 0,
      exp: '',
      s1: [],
      s2: [],
      s3: [],
      operator: null,
      signOpe: [['+', '-'], ['*', '/']]
    }
  },
  // computed: {
  // },
  methods: {
    calculate () {
      this.s2 = []
      this.exp = ''
      // let temp = []
      for (let i = 0; i < this.s1.length; i++) {
        if (/\d+/.test(this.s1[i])) {
          this.s3.push(parseFloat(this.s1[i]))
          console.log('这是数字' + this.s3[i])
        } else {
          switch (this.s1[i]) {
            case '+':
              this.s3.push(parseFloat(this.s3.pop()) + parseFloat(this.s3.pop()))
              break;
            case '-':
              this.s3.push(parseFloat(this.s3.pop()) - parseFloat(this.s3.pop()))
              break;
            case '*':
              this.s3.push(parseFloat(this.s3.pop()) * parseFloat(this.s3.pop()))
              break;
            case '/':
              this.s3.push(parseFloat(this.s3.pop()) / parseFloat(this.s3.pop()))
              break;
          }
          console.log('这是运算' + this.s3[i])
        }
      }
      this.s1 = []
      if (this.s3.length === 1) {
        if (isNaN(this.s3[0])) {
          this.$message('非法操作！')
          this.s3 = []
        } else {
          this.calculNum = this.s3[0]
        }
      } else {
        let total = this.s3[0] + this.s3[1]
        if (isNaN(this.s3[0])) {
          this.$message('非法操作！')
          this.s3 = []
        } else {
          this.calculNum = total
        }
      }
    },
    typetoinput (value) {
      let initvalue
      if (value !== '.') {
        initvalue = parseFloat(value)
      } else {
        initvalue = value
      }
      if (initvalue === '.' && this.exp.indexOf('.') > -1) {
        this.exp = this.exp
      } else {
        this.exp = this.exp + initvalue
      }
      this.exp !== '' ? this.calculNum = parseFloat(this.exp) : this.calculNum = this.calculNum
    },
    typeoperator (opt) {
      this.operator = opt
      switch (this.operator) {
        case 'clear':
          this.calculNum = 0
          this.exp = ''
          this.s1 = []
          this.s2 = []
          this.s3 = []
          this.operator = null
          break;
        case 'toggleminus':
          this.calculNum = (-1) * this.calculNum
          break;
        case 'percentage':
          this.calculNum = this.calculNum / 100
          break;
        case 'power2':
          this.calculNum = Math.pow(this.calculNum, 2)
          break;
        case 'cube':
          this.calculNum = Math.pow(this.calculNum, 3)
          break;
        case 'ln':
          this.calculNum = Math.log(this.calculNum)
          break;
        case 'log10':
          this.calculNum = Math.log(this.calculNum) / Math.log(10)
          break;
      }
      this.s1.push(this.calculNum)
      console.log(s1)
      this.exp = ''
      if (this.operator === '+' || this.operator === '-' || this.operator === '*' || this.operator === '/') {
        if (this.s2.length === 0) {
          this.s2.push(this.operator)
        } else {
          let curOpe = this.operator
          let s2TopOpe = this.s2[this.s2.length - 1]
          if (this.checkOperator(curOpe, s2TopOpe)) {
            this.s2.push(curOpe)
          } else {
            while (!this.checkOperator(curOpe, s2TopOpe) && this.s2.length !== 0) {
              this.s1.push(this.s2.pop())
            }
            this.s2.push(curOpe)
          }
        }
      }
    },
    checkOperator (curOpe, s2Ope) {
      let index1
      let index2
      for (let i in this.signOpe) {
        if (this.signOpe[i].indexOf(curOpe) > -1) {
          index1 = i
        } else if (this.signOpe[i].indexOf(s2Ope) > -1) {
          index2 = i
        }
      }
      if (index1 > index2) {
        return true;
      } else {
        return false;
      }
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
