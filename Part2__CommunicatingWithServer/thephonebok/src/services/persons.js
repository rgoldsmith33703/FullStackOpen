import axios from "axios"
const baseUrl = '/api/persons'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const create = newObject => {
  const req = axios.post(baseUrl, newObject)
  return req.then(res => res.data)
}

const remove = id => {
  axios.delete(`${baseUrl}/${id}`)
}

const update = (id, newObject) => {
  const req = axios.put(`${baseUrl}/${id}`, newObject)
  return req.then(res => res.data)
}

export default { getAll, create, remove, update }