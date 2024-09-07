import axios from 'axios'

// Set the base URL for your API
const API_BASE_URL = 'http://localhost:3000' // Change this to your actual API base URL

// Create an Axios instance with default configurations
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  // GET (Retrieve) all items
  getAll (resource: string) {
    return apiClient.get(`/${resource}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error in GET all request: ${error}`)
        throw error
      })
  },

  // GET (Retrieve) a single item by ID
  getById (resource: string, id: number) {
    return apiClient.get(`/${resource}/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error in GET by ID request: ${error}`)
        throw error
      })
  },

  // POST (Create) a new item
  create (resource: string, data: Object) {
    return apiClient.post(`/${resource}`, data)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error in POST request: ${error}`)
        throw error
      })
  },

  // PUT (Update) an existing item by ID
  update (resource: string, id: number, data: Object) {
    return apiClient.put(`/${resource}/${id}`, data)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error in PUT request: ${error}`)
        throw error
      })
  },

  // DELETE (Remove) an item by ID
  delete (resource: string, id: number) {
    return apiClient.delete(`/${resource}/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error in DELETE request: ${error}`)
        throw error
      })
  },
}
