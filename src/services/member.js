import axios from 'axios'

const hostname = {
  development: 'http://localhost:8080/member',
  production: 'https://ywc14.ywc.in.th/backend/member'
}[process.env.NODE_ENV]

export function fetch ({ type, facebook }) {
  // console.log('fbbb', facebook)
  return axios.get(`${hostname}/${type}?id=${facebook}`)
}

export function vote ({ type, voter, facebook }) {
  return axios.post(`${hostname}/vote/${type}`, { voter_fb: voter, facebook })
}
