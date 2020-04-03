import config from '../config'
import TokenService from './token-service'

const UserApiService = {
    getUsers() {
        return fetch(`${config.API_ENDPOINT}/babies`, {
            headers: {
            },
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    getUser(username) {
        console.log(`user-api-service: getUser(${username})`);
        return fetch(`${config.API_ENDPOINT}/users/${username}`, {
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
    postUser(username, password, email) {
        console.log(`user-api-service: postUser(${username, password, email})`);
        
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                username: username,
                user_password: password,
                email: email
            })
        })  
    },
    updateUser(id, username, password, email) {
        console.log(`user-api-service updateUser(${id, username, password, email})`);
        
        return fetch(`${config.API_ENDPOINT}/users/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                id: id,
                username: username,
                user_password: password,
                email: email
            })
        })
    }
}

export default UserApiService