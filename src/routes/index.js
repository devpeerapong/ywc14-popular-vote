import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login'
import Finished from '../components/Finished'
import Boy from '../components/Boy'
import Girl from '../components/Girl'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/finished', component: Finished },
    { path: '/boy', component: Boy },
    { path: '/girl', component: Girl }
  ]
})

export default router
