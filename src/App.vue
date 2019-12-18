<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/atmiosLogo.png">
    <Maintenance></Maintenance>
  </div>
</template>

<script>
import Maintenance from "@/components/Maintenance";
export default {
  name: 'app',
  components: {
    Maintenance
  }
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
