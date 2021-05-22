import axios from 'axios'
const LOCAL_HOST = 'http://localhost:5000'
export const fetchProblems = () => {
  return axios.get(`${LOCAL_HOST}/api/fe-problems.json`)
}

export const fetchSimilars = () => {
  return axios.get(`${LOCAL_HOST}/api/fe-similars.json`)
}
