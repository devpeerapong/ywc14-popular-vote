export const LOGIN = 'auth.LOGIN'

const state = {
  facebook: ''
}

const mutations = {
  [LOGIN]: (state, facebook) => { state.facebook = facebook }
}

export default {
  state,
  mutations
}
