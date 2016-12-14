import { injectStore } from '../../store'
import module from './module'

export default {
  path: '/counter',
  component: resolve => require.ensure([], () => {
    injectStore('counter', module)
    resolve(require('./Counter.vue'))
  }, 'counter')
}
