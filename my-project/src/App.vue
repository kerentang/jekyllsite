<template>
  <div id="app">
    <img src="./assets/logo.png">
    <display></display>
    <increment></increment>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
import display from "../components/display.vue";
import increment from "../component/increment.vue";
export default {
  data () {
    return{

    }
  },
  components:{
    display,
    increment
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
