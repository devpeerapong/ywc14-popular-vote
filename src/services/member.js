import axios from 'axios'

const hostname = 'http://localhost:8080/member'

export function fetch (type, facebook) {
  return axios.get(`${hostname}/${type}?id=${facebook}`)
}

export function vote (type, voterfb, facebook) {
  return axios.post(`${hostname}/vote/${type}`, { voter_fb: voterfb, facebook })
}
