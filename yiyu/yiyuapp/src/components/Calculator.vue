<template>
  <el-row class='content' :span='12' :offset='6'>
    <el-row type="flex" justify="center">
      <h3>全国中学生第一套普通计算器</h3>
    </el-row>
    <el-row type="flex" justify="center">
      <el-input type=text v-bind:value="calculNum" readonly>
        <template slot="prepend">Result = </template>
      </el-input>
    </el-row>
    <el-row type="flex" justify="center">
      <span></span>
    </el-row>
    <el-row type="flex" justify="center">
        <input-num :value='num' v-for="num in nums" :key='num' v-on:getNum='typeExp'>
        </input-num>
    </el-row>
    <el-row type="flex" justify="center">
        <input-single-operator 
          :value='singleOpe' 
          v-for="singleOpe in singleOpes" 
          :key='singleOpe' 
          v-on:getSingleOpe='typeSingleOpe'>
        </input-single-operator>
    </el-row>
    <el-row type="flex" justify="center">
        <input-bi-operator :value='biOpe' v-for="biOpe in biOpes" :key='biOpe' v-on:getBiOpe='typeBiOpe'>
        </input-bi-operator>
        <button v-on:click='calculateResult'>=</button>
    </el-row>
  </el-row>
</template>
<script>

export default {
  name: 'Calculator',
  components: {
    'input-num': {
      props: ['value'],
      template: '<button v-on:click="getNum(value)">{{value}}</button>',
      methods: {
        getNum: function (value) {
          this.$emit('getNum', value)
        }
      }
    },
    'input-single-operator': {
      props: ['value'],
      template: '<button v-on:click="getSingleOpe(value)">{{value}}</button>',
      methods: {
        getSingleOpe: function (value) {
          this.$emit('getSingleOpe', value)
        }
      }
    },
    'input-bi-operator': {
      props: ['value'],
      template: '<button v-on:click="getBiOpe(value)">{{value}}</button>',
      methods: {
        getBiOpe: function (value) {
          this.$emit('getBiOpe', value)
        }
      }
    }
  },
  data () {
    return {
      calculNum: 0,
      lastBiope: null, // 保存上一个操作符
      exp: '', // 连接输入的数字和小数点，通过calculNum = parseFloat(exp) 转化成number
      flag: false, // 输入表达式的过程中用来判断中断输入时的依据：是否按下了=号，是否操作了单目运算
      s1: [], // 保存逆波兰表达式的栈
      s2: [], // 临时保存双目运算符的栈
      s3: [], // 遍历s1计算的值保存到s3中，以及最终的计算结果s3[0]
      siOperator: null, // 保存当前输入的单目运算符
      biOperator: null, // 保存当前输入的双目运算符
      signOpe: ['(', ['+', '-'], ['*', '/'], ')'], // 操作符的优先顺序，从小到大
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'],
      singleOpes: ['+/-', '%', 'x^2', 'x^3', 'ln', 'log10', 'AC'],
      biOpes: ['(', ')', '+', '-', '*', '/']
    }
  },
  watch: {
    exp: function (newexp) {
      // 判断正常结构的exp如2.34等的正则
      let reg = /^\d+(?:\.[1,9])?$/g
      if (reg.test(newexp)) {
        this.calculNum = parseFloat(newexp)
      } else if (newexp === '') {
        // 没有输入数字或者清空输入时exp = ''则 calculNum = 0
        this.calculNum = 0
      } else {
        this.calculNum = newexp
      }
    }
  },
  methods: {
    typeExp (data) {
      // 判断是否中断了当前输入
      this.checkFlag()
      if (this.exp.indexOf('.') > -1 && data === '.') {
        this.exp = this.exp
      } else if (this.exp === '' && data === '.') {
        // exp不能以.开头
        this.exp = ''
        this.$message('请先输入数字！')
      } else {
        this.exp += data
      }
    },
    typeSingleOpe (data) {
      this.siOperator = data
      this.calSingleOpe(this.siOperator)
      // 单目计算时直接处理的是this.calculNum，此时this.exp！== this.calculNum，要强制相等，注意：exp是字符串
      this.exp = '' + this.calculNum
      this.flag = true
    },
    // 单目计算this.calculNum
    calSingleOpe (ope) {
      switch (ope) {
        case '+/-':
          this.calculNum = this.calculNum * -1
          break;
        case '%':
          this.calculNum = this.calculNum / 100
          break;
        case 'x^2':
          this.calculNum = Math.pow(this.calculNum, 2)
          break;
        case 'x^3':
          this.calculNum = Math.pow(this.calculNum, 3)
          break;
        case 'ln':
          this.calculNum = Math.log(this.calculNum)
          break;
        case 'log10':
          this.calculNum = Math.log(this.calculNum) / Math.log(10)
          break;
        case 'AC':
          this.exp = ''
          this.calculNum = 0
          this.s1 = []
          this.s2 = []
          this.s3 = []
          break;
      }
    },
    typeBiOpe (data) {
      this.flag = false
      this.lastBiope = this.biOperator
      this.biOperator = data
      console.log('this.lastBiope: ' + this.lastBiope + ', this.biOperator: ' + this.biOperator)
      // 双目运算符 ) 后面不是等号就是双目运算符，为了不push两次，先进行判断
      if (this.lastBiope !== ')') {
        // 双目运算符（ 前面也是双目运算符，为了不push两次，先进行判断
        if (data !== '(') {
          this.s1.push(this.calculNum)
        }
      }
      console.log(this.s1)
      this.pushBiopeToS2(data)
      this.exp = ''
    },
    pushBiopeToS2 (curOpe) {
      // 操作符是（直接push进s2
      if (curOpe === '(') {
        this.s2.push(curOpe)
      } else if (curOpe === ')') {
        // 操作符是）且s2不为[],将s2中的操作符pop然后push到s1，直到遇到（
        while (this.s2[this.s2.length - 1] !== '(' && this.s2.length !== 0) {
          this.s1.push(this.s2.pop())
        }
        // pop出（ ，不push到s1
        this.s2.pop()
      } else {
        // 其他双目操作符：+-*／出栈s2入栈s1
        this.checkBiOpe(curOpe)
      }
    },
    checkBiOpe (curOpe) {
      if (this.s2.length === 0) {
        this.s2.push(curOpe)
      } else {
        let s2TopOpe = this.s2[this.s2.length - 1]
        if (this.checkBiOpeIndex(curOpe, s2TopOpe)) {
          this.s2.push(curOpe)
        } else {
          while (!this.checkBiOpeIndex(curOpe, s2TopOpe) && this.s2.length !== 0) {
            this.s1.push(this.s2.pop())
          }
          this.s2.push(curOpe)
        }
      }
    },
    // 从左到右遍历s1中的数字push到s3
    calculateS3 () {
      for (let item of this.s1) {
        if (/\d+/.test(item)) {
          this.s3.push(item)
        } else {
          this.popS3(item)
        }
      }
    },
    // 计算逆波兰表达式：+-*／部分的计算
    popS3 (biope) {
      let right = parseFloat(this.s3.pop())
      let left = parseFloat(this.s3.pop())
      let temp
      switch (biope) {
        case '+':
          temp = left + right
          break;
        case '-':
          temp = left - right
          break;
        case '*':
          temp = left * right
          break;
        case '/':
          temp = left / right
          break;
      }
      this.s3.push(temp)
    },
    // 计算最终的结果
    calculateResult () {
      this.flag = true
      // 按下=时将this.calculNum存入s1,除了），因为 ）是双目运算符，有可能是一个表达式的结尾
      if (this.biOperator !== ')') {
        this.s1.push(this.calculNum)
      }
      while (this.s2.length !== 0) {
        this.s1.push(this.s2.pop())
      }
      console.log('calcul s1: ' + this.s1)
      this.calculateS3()
      this.exp = '' + this.s3[0]
      this.s1 = []
      this.s3 = []
    },
    checkFlag () {
      if (this.flag === true) {
        this.exp = ''
        this.flag = !this.flag
      }
    },
    checkBiOpeIndex (curOpe, s2Ope) {
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
  border: 1px solid #e78b53;
  border-radius: 5px;
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
