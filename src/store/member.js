import { fetch } from '../services/member'

export const FETCH = 'type.FETCH'
export const FETCH_REQUEST = 'type.FETCH_REQUEST'
export const FETCH_SUCCESS = 'type.FETCH_SUCCESS'
export const FETCH_FAIL = 'type.FETCH_FAIL'

const state = {
  loading: false,
  members: []
}

const actions = {
  [FETCH]: fetchAction
}

function fetchAction ({ commit, state }, type) {
  commit(FETCH_REQUEST)
  return fetch(type).then(response => {
    commit(FETCH_SUCCESS, response.data)
  }, () => {
    commit(FETCH_FAIL)
  })
}

const mutations = {
  [FETCH_REQUEST]: fetchRequestMutation,
  [FETCH_SUCCESS]: fetchSuccessMutation,
  [FETCH_FAIL]: fetchFailMutation
}

function fetchRequestMutation (state) {
  state.loading = true
}

function fetchSuccessMutation (state, members) {
  state.members = members
  state.loading = false
}

function fetchFailMutation (state) {
  state.loading = false
}

export default {
  state,
  actions,
  mutations
}
