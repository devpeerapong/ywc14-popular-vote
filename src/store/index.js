import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true
})

export const injectStore = (key, module) => store.registerModule(key, module)

export default store
