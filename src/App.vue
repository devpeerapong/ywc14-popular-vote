<template>
  <div id="app">
    <navbar></navbar>
    <img src="./assets/logo.png">
    <core-layout>
      <router-view></router-view>
    </core-layout>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import CoreLayout from './layouts/CoreLayout'

export default {
  name: 'app',
  components: { Navbar, CoreLayout }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
