<template>
  <nav class="nav">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/counter">Counter</router-link>
    <router-link class="link" to="/async-counter">Async Counter</router-link>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 44px;

  background: white;
}

.nav > .link {
  padding: 1.5rem;
}
</style>
