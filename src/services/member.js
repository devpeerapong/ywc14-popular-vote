import axios from 'axios'

const hostname = 'http://localhost:8080/member'

export function fetch ({ type, facebook }) {
  // console.log('fbbb', facebook)
  return axios.get(`${hostname}/${type}?id=${facebook}`)
}

export function vote ({ type, voter, facebook }) {
  return axios.post(`${hostname}/vote/${type}`, { voter_fb: voter, facebook })
}
