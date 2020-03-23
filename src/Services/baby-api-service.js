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
  getBaby(babyId) {
    return fetch(`${config.API_ENDPOINT}/babies/${babyId}`, {
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
  postBaby(id, name, about, image, score, votes) {
    return fetch(`${config.API_ENDPOINT}/babies/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        id: id,
        baby_name: name,
        about: about, 
        image_url: image,
        total_score: score,
        total_votes: votes
      })
    })
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
  postImageFile(data) {
    console.log('sending to server:', data);
    const options = {
      method: 'POST',
      headers: {
        // 'accept': 'application/json',
        // 'Accept-Language': 'en-US,en;q=0.8',
        // 'Content-Type': `multipart/form-data; boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL`,
        // 'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: data
    }
    // delete options.headers['Content-Type'];

    return fetch(`${config.API_ENDPOINT}/upload`, options)
  }
}

export default BabyApiService