import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import member from './member'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    auth,
    member
  }
})

export const injectStore = (key, module) => store.registerModule(key, module)

export default store
