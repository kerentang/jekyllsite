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
          console.log(value)
          this.$emit('getNum', value)
        }
      }
    },
    'input-single-operator': {
      props: ['value'],
      template: '<button v-on:click="getSingleOpe(value)">{{value}}</button>',
      methods: {
        getSingleOpe: function (value) {
          // this.sop = value
          console.log(value)
          this.$emit('getSingleOpe', value)
        }
      }
    },
    'input-bi-operator': {
      props: ['value'],
      template: '<button v-on:click="getBiOpe(value)">{{value}}</button>',
      methods: {
        getBiOpe: function (value) {
          console.log(value)
          this.$emit('getBiOpe', value)
        }
      }
    }
  },
  data () {
    return {
      calculNum: 0,
      exp: '',
      s1: [],
      s2: [],
      s3: [],
      operator: null,
      result: null,
      signOpe: [['+', '-'], ['*', '/']],
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'],
      singleOpes: ['+/-', '%', 'x^2', 'x^3', 'ln', 'log10', 'AC'],
      biOpes: ['(', ')', '+', '-', '*', '/', '=']
    }
  },
  watch: {
    exp: function (newexp) {
      let reg = /^\d+(?:\.\d)?$/g
      if (reg.test(newexp)) {
        this.calculNum = parseFloat(newexp)
        console.log('this is if ' + newexp)
      } else if (newexp === '') {
        this.calculNum = 0
        console.log('this is else if ' + newexp)
      } else {
        this.calculNum = newexp
        console.log('this is else ' + newexp)
      }
    },
    operator: function (newope) {
      if (this.singleOpes.indexOf(newope)) {
        this.calSingleOpe(newope)
        this.result = this.calculNum
        console.log('this is if ' + this.result)
        this.s1.push(this.result)
        this.result = 0
      } else {
        this.s2.push(newope)
        console.log('双目运算符：' + this.operator + '计算框里的值：' + this.calculNum + 's1的值: ' + this.s1 + 's2的值: ' + this.s2)
      }
    }
  },
  methods: {
    typeExp (data) {
      if (this.exp.indexOf('.') > -1 && data === '.') {
        this.exp = this.exp
      } else {
        this.exp += data
      }
      console.log(this.exp)
    },
    typeSingleOpe (data) {
      this.operator = data
      // this.s1.push(this.calculNum)
      // this.exp = ''
      console.log('单目运算符：' + this.operator + '计算框里的值：' + this.calculNum + 's1的值: ' + this.s1)
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
          this.s1 = []
          this.s2 = []
          this.s3 = []
          break;
      }
    },
    typeBiOpe (data) {
      this.operator = data
      // this.s1.push(this.calculNum)
      // this.s2.push(this.operator)
      // this.exp = ''
    },
    checkS2 () {},
    calculateS3 () {},
    checkOperator (curOpe, s2Ope) {
      let index1
      let index2
      for (let i in this.signOpe) {
        if (this.signOpe[i].indexOf(curOpe) > -1) {
          index1 = i
          console.log('当前操作符index1为 ' + index1)
        } else if (this.signOpe[i].indexOf(s2Ope) > -1) {
          index2 = i
          console.log('栈顶操作符index2为 ' + index2)
        }
      }
      if (index1 > index2) {
        return true;
      } else {
        return false;
      }
    },
    typeoperator (opt) {
      // this.operator = opt
      // if (this.operator === '+' || this.operator === '-' || this.operator === '*' || this.operator === '/') {
      //   if (this.s2.length === 0) {
      //     this.s2.push(this.operator)
      //     console.log('s2长度为0是push进来的 ' + this.s2)
      //   } else {
      //     let curOpe = this.operator
      //     let s2TopOpe = this.s2[this.s2.length - 1]
      //     if (this.checkOperator(curOpe, s2TopOpe)) {
      //       this.s2.push(curOpe)
      //       console.log('这是s2长度不为0且当前优先级大于栈顶操作符时的s2 ' + this.s2)
      //     } else {
      //       while (!this.checkOperator(curOpe, s2TopOpe) && this.s2.length !== 0) {
      //         this.s1.push(this.s2.pop())
      //         console.log('这是s2长度不为0且当前优先级小于栈顶操作符时的s2 ' + this.s2)
      //       }
      //       this.s2.push(curOpe)
      //       console.log('这是已经判断过优先级的s2 ' + this.s2)
      //     }
      //   }
      // } else if (this.operator === '=') {
      //   this.s2 = []
      //   this.exp = ''
      //   this.s1.push(this.calculNum)
      //   for (let i = 0; i < this.s1.length; i++) {
      //     if (/\d+/.test(parseFloat(this.s1[i]))) {
      //       this.s3.push(parseFloat(this.s1[i]))
      //       console.log('这是s1队列中的数字 ' + this.s3[i])
      //     } else {
      //       switch (this.s1[i]) {
      //         case '+':
      //           this.s3.push(parseFloat(this.s3.pop()) + parseFloat(this.s3.pop()))
      //           break;
      //         case '-':
      //           this.s3.push(parseFloat(this.s3.pop()) - parseFloat(this.s3.pop()))
      //           break;
      //         case '*':
      //           this.s3.push(parseFloat(this.s3.pop()) * parseFloat(this.s3.pop()))
      //           break;
      //         case '/':
      //           this.s3.push(parseFloat(this.s3.pop()) / parseFloat(this.s3.pop()))
      //           break;
      //       }
      //       console.log('这是双目运算后的s3: ' + this.s3)
      //       console.log('这是运算 ' + this.s3[i])
      //     }
      //   }
      //   this.s1 = []
      //   if (this.s3.length === 1) {
      //     if (isNaN(this.s3[0])) {
      //       this.$message('非法操作！')
      //       this.s3 = []
      //     } else {
      //       this.calculNum = this.s3[0]
      //     }
      //   } else {
      //     let total = this.s3[0] + this.s3[1]
      //     if (isNaN(this.s3[0])) {
      //       this.$message('非法操作！')
      //       this.s3 = []
      //     } else {
      //       this.calculNum = total
      //     }
      //   }
      //   console.log('这是最终的结果: ' + this.total)
      // } else {
      //   switch (this.operator) {
      //     case 'clear':
      //       this.calculNum = 0
      //       this.exp = ''
      //       this.s1 = []
      //       this.s2 = []
      //       this.s3 = []
      //       this.operator = null
      //       break;
      //     case 'toggleminus':
      //       this.calculNum = (-1) * this.calculNum
      //       break;
      //     case 'percentage':
      //       this.calculNum = this.calculNum / 100
      //       break;
      //     case 'power2':
      //       this.calculNum = Math.pow(this.calculNum, 2)
      //       break;
      //     case 'cube':
      //       this.calculNum = Math.pow(this.calculNum, 3)
      //       break;
      //     case 'ln':
      //       this.calculNum = Math.log(this.calculNum)
      //       break;
      //     case 'log10':
      //       this.calculNum = Math.log(this.calculNum) / Math.log(10)
      //       break;
      //   }
      //   // this.total = this.calculNum
      //   this.calculNum = this.calculNum
      //   this.s1.push(this.calculNum)
      // }
      // // this.total = this.calculNum
      // // this.s1.push(this.calculNum)
      // console.log('进行过单双目运算符判断的s1: ' + this.s1)
      // console.log('s2: ' + this.s2)
      // this.exp = ''
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
