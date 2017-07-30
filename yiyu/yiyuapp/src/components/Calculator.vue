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
      exp: '', // 连接输入的数字和小数点，通过calculNum = parseFloat(exp) 转化成number
      flag: false, // 输入表达式的过程中用来判断中断输入时的依据：是否按下了=号，是否操作了单目运算
      s1: [], // 保存逆波兰表达式的栈
      s2: [], // 临时保存双目运算符的栈
      s3: [], // 遍历s1计算的值保存到s3中，以及最终的计算结果s3[0]
      siOperator: null, // 保存当前输入的单目运算符
      biOperator: null, // 保存当前输入的双目运算符
      signOpe: ['(', ['+', '-'], ['*', '/'], ')'], // 操作符的有限顺序，从小到大
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'],
      singleOpes: ['+/-', '%', 'x^2', 'x^3', 'ln', 'log10', 'AC'],
      biOpes: ['(', ')', '+', '-', '*', '/']
    }
  },
  watch: {
    exp: function (newexp) {
      let reg = /^\d+(?:\.[1,9])?$/g
      if (reg.test(newexp)) {
        this.calculNum = parseFloat(newexp)
      } else if (newexp === '') {
        this.calculNum = 0
      } else {
        this.calculNum = newexp
      }
    }
  },
  methods: {
    typeExp (data) {
      this.checkFlag()
      if (this.exp.indexOf('.') > -1 && data === '.') {
        this.exp = this.exp
      } else if (this.exp === '' && data === '.') {
        this.exp = ''
        this.$message('请先输入数字！')
      } else {
        this.exp += data
      }
    },
    typeSingleOpe (data) {
      this.siOperator = data
      this.calSingleOpe(this.siOperator)
      this.exp = '' + this.calculNum
      this.flag = true
    },
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
      this.biOperator = data
      if (this.biOperator !== '(') {
        this.s1.push(this.calculNum)
      }
      this.pushBiopeToS2(data)
      this.exp = ''
    },
    pushBiopeToS2 (curOpe) {
      if (curOpe === '(') {
        this.s2.push(curOpe)
      } else if (curOpe === ')') {
        while (this.s2[this.s2.length - 1] !== '(' && this.s2.length !== 0) {
          this.s1.push(this.s2.pop())
        }
        this.s2.pop()
      } else {
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
    calculateS3 () {
      for (let item of this.s1) {
        if (/\d+/.test(item)) {
          this.s3.push(item)
        } else {
          this.popS3(item)
        }
      }
    },
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
    calculateResult () {
      this.flag = true
      if (this.biOperator !== ')') {
        this.s1.push(this.calculNum)
      }
      while (this.s2.length !== 0) {
        this.s1.push(this.s2.pop())
      }
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
