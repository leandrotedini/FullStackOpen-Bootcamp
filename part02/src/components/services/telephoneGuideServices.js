import axios from "axios";
const baseUrl = 'http://localhost:3001/persons' 

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (noteObject) => {
  const request = axios.post(baseUrl, noteObject)
  return request.then(response => response.data)
}

const deletePerson = (personId) => {
  const request = axios.delete(`${baseUrl}/${personId}`)
  return request.then(response => response.data)
}

const update = (personId, noteObject) => {
  const request = axios.put(`${baseUrl}/${personId}`, noteObject)
  return request.then(response => response.data)
}

export default { getAll, create, deletePerson, update}
  