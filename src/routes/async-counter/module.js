import { fetch } from './service'

export const ADD = 'asyncCounter.ADD'
export const ADD_REQUEST = 'asyncCounter.ADD_REQUEST'
export const ADD_SUCCESS = 'asyncCounter.ADD_SUCCESS'
export const ADD_FAIL = 'asyncCounter.ADD_FAIL'

const state = {
  loading: false,
  count: 0
}

const actions = {
  [ADD]: addAction
}

function addAction ({ commit, state }, body) {
  commit(ADD_REQUEST)
  return fetch().then(() => {
    commit(ADD_SUCCESS)
  }, () => {
    commit(ADD_FAIL)
  })
}

const mutations = {
  [ADD_REQUEST]: addRequestMutation,
  [ADD_SUCCESS]: addSuccessMutation,
  [ADD_FAIL]: addFailMutation
}

function addRequestMutation (state) {
  state.loading = true
}

function addSuccessMutation (state) {
  state.count++
  state.loading = false
}

function addFailMutation (state) {
  state.loading = false
}

const getters = {
  asyncRomanCounter: getRomanCounter
}

function getRomanCounter (state) {
  return romanize(state.count)
}

function romanize (num) {
  if (num === 0) return 0

  let result = ''
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  for (let i = 0; i <= decimal.length; i++) {
    while (num % decimal[i] < num) {
      result += roman[i]
      num -= decimal[i]
    }
  }
  return result
}

export default {
  state,
  actions,
  mutations,
  getters
}
