<template>
  <div>
    <h1>Counter</h1>
    <div class="container">
      <div class="counter">
        <h1>{{ msg }}</h1>
        <h1>{{ greeting }}</h1>
      </div>
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
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  computed: {
    greeting () {
      return this.msg + ' world'
    },
    counter () {
      return this.$store.state.counter.count
    },
    ...mapGetters({
      roman: 'romanCounter'
    })
  },
  methods: {
    ...mapMutations({
      add: 'counter.ADD'
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
