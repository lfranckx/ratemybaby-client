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
  getBaby(parent_id) {
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
    console.log('updating baby:', baby);
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
        'Content-Type': 'Content-Type: .png, .jpg, .jpeg .gif',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: data
    }
    // Remove 'Content-Type' header to allow browser to add
    // along with the correct 'boundary'
    delete options.headers['Content-Type'];

    return fetch(`${config.API_ENDPOINT}/upload`, options)
  }
}

export default BabyApiService