import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from '../components/Hello'

import CounterRoute from './counter'
import AsyncCounterRoute from './async-counter'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Hello },
    CounterRoute,
    AsyncCounterRoute
  ]
})

export default router
