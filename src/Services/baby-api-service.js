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
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(baby)
    })
  },
}

export default BabyApiService
