import config from '../config'
import TokenService from '../Services/token-service'

const BabyApiService = {
  getBabies() {
    return fetch(`${config.API_ENDPOINT}/babies`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBaby(id) {
    return fetch(`${config.API_ENDPOINT}/babies/${id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getByParentId() {
    return fetch(`${config.API_ENDPOINT}/babies/parent/id`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
    )
  },
  async postBaby(baby) {
    const Response = await fetch(`${config.API_ENDPOINT}/babies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(baby)
    })
    const json = await Response.json();
    return (Response, json)
  },
  updateBaby(baby) {
    return fetch(`${config.API_ENDPOINT}/babies/${baby.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(baby)
    })
  },
  deletBaby(id) {
    return fetch(`${config.API_ENDPOINT}/babies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
  },
  postImageFile(file) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'Content-Type: .png, .jpg, .jpeg .gif',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: file
    }
    // Remove 'Content-Type' header to allow browser to add
    // along with the correct 'boundary'
    delete options.headers['Content-Type'];

    return fetch(`${config.API_ENDPOINT}/upload`, options)
  }
}

export default BabyApiService