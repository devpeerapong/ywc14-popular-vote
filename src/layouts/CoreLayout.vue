<template lang="html">
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'core-layout'
}
</script>

<style scoped>
.container {
  padding: 2rem 0;
  background: #efefef;
}
</style>
