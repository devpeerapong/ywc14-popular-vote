<template>
  <div>
    <h1>Async Counter</h1>
    <div class="container">
      <div class="counter">
        <h1>Vuex</h1>
        <h2>{{ counter }}</h2>
        <h2>In Roman: {{ roman }}</h2>
        <button @click="add" type="button" name="button" class="button">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    counter () {
      return this.$store.state.asyncCounter.count
    },
    ...mapGetters({
      roman: 'asyncRomanCounter'
    })
  },
  methods: {
    ...mapActions({
      add: 'asyncCounter.ADD'
    })
  }
}
</script>

<style scope>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-end;

  margin: 0 0 2rem 0;
}

.counter {
  flex: 1 1 300px;
  width: 300px;
}

.button {
  border: 0;
  height: 60px;
  width: 120px;

  color: white;
  text-align: center;

  font-size: 1.5rem;
  background: #47B784;

  cursor: pointer;
}
</style>
