import config from '../config'
import TokenService from '../Services/token-service'

const BabyApiService = {
  getBabies() {
    console.log('baby-api-service getBabies:');
    return fetch(`${config.API_ENDPOINT}/babies`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBaby(parent_id) {
    console.log('baby-api-service getBaby(parent_id):', parent_id);
    return fetch(`${config.API_ENDPOINT}/babies/${parent_id}`, {
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
  postBaby(baby) {
    console.log('baby-api-service postBaby:', baby);
    return fetch(`${config.API_ENDPOINT}/babies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(baby)
    })
  },
  updateBaby(baby) {
    console.log('baby-api-service updateBaby:', baby);
    return fetch(`${config.API_ENDPOINT}/babies/${baby.parent_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(baby)
    })
  },
  postImageFile(file) {
    console.log('baby-api-service postImageFile:', file);
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