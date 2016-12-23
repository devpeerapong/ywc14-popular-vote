<template lang="html">
  <div>
    <slot></slot>
    <div class="pattern"></div>
  </div>
</template>

<script>
export default {
  name: 'core-layout'
}
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  position: relative;

  padding: .5rem;

  min-height: 100vh;

  background: linear-gradient(180deg, #4d5d9d 0, #97d8f4);
  background-size: cover;
  background-repeat: no-repeat;

  z-index: 1000;
}

.pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 0;
  background: url('/static/images/bg-pattern.png');
  background-repeat: repeat;
  background-size: 250px;
  pointer-events: none;
}
</style>
