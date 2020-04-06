import config from '../config'
import TokenService from '../Services/token-service'

const BabyApiService = {
  getBabies() {
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
  getBaby(id) {
    console.log('getting baby by parent_id:', id);
    
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
  async postBaby(baby) {
    console.log('creating baby:', baby);
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
    console.log('updateBaby sending to server:', baby);
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
    console.log('sending file to server:', file);
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