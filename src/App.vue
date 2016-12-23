<template>
  <div id="app">
    <core-layout>
      <router-view></router-view>
    </core-layout>
  </div>
</template>

<script>
import CoreLayout from './layouts/CoreLayout'

export default {
  name: 'app',
  components: { CoreLayout },
  created () {
    /* eslint-disable */
    window.fbAsyncInit = () => {
      FB.init({ appId: '924745590937811', version: 'v2.7' });
    }

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))
    /* eslint-enable */
  }
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
}
</style>
