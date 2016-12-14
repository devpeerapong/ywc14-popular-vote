import { injectStore } from '../../store'
import module from './module'

export default {
  path: '/async-counter',
  component: resolve => require.ensure([], () => {
    injectStore('asyncCounter', module)
    resolve(require('./AsyncCounter.vue'))
  }, 'async-counter')
}
