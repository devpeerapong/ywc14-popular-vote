export const ADD = 'counter.ADD'

const state = {
  count: 0
}

function addMutation (state) {
  state.count++
}

const mutations = {
  [ADD]: addMutation
}

const getters = {
  romanCounter: getRomanCounter
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
  mutations,
  getters
}
