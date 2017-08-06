<template>
  <el-row class='content'>
    <el-col :xs='24' :sm="{span:6,offset:9}">
      <img src='../assets/ducks.png'>
      <h1>探寻日常的奇迹</h1>
    <el-row>
          <el-input v-model="account" placeholder='账号' type='text'>
          </el-input>
          <el-input  v-model="password" placeholder='密码' type='password'>
          </el-input>
          <el-button type='primary' @click='loginYiYu'>不登录，直接查看计算器</el-button>
    </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  computed: {},
  methods: {
    loginYiYu () {
      let obj = {
        name: this.account,
        password: this.password
      }
      this.$http.post('/auth/user', obj)
        .then((res) => {
          if (res.data.success) {
            sessionStorage.setItem('calculator-token', res.data.token)
            this.$message({
              type: 'success',
              message: '登录成功！'
            })
            this.$router.push('/calculate')
          } else {
            this.message.error(res.data.info)
            sessionStorage.setItem('calculator-token', null)
          }
        }, (err) => {
          this.$message.error('请求错误' + err)
          sessionStorage.setItem('calculator-token', null)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row .content{
      padding: 16px;
  }
  .el-input{
    margin: 12px 0;
  }
  .el-button{
      width: 100%;
      margin-top: 12px;
  }
</style>
