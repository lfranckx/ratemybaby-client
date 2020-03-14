import React, { Component } from 'react'
// import UserApiService from '../Services/user-api-service'
import BabyApiService from '../Services/baby-api-service'

export const nullUser = {
    user: {}
}

const UserContext = React.createContext({
    user: nullUser,
    error: null,
    setError:() => {},
    clearError: () => {},
    setUser: () => {},
    clearUser: () => {},
    updateBaby: () => {},
    
})

export default UserContext

export class UserProvider extends Component {
    state = {
        user: nullUser,
        error: null
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setUser = user => {
        console.log('setting state from UserContext:', user);
        this.setState({ user })
    }

    clearUser = () => {
        this.setUser(nullUser)
    }   

    updateBaby = baby => {
        console.log('updating baby...', baby, 
        'total_score:', baby.total_score,
        'total_votes:', baby.total_votes)
        this.setState({ 
            ...this.state.baby,
            baby 
        })
        BabyApiService.updateBaby(baby)
    }

    render() {
        const value = {
            user: this.state.user,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setUser: this.setUser,
            clearUser: this.clearUser,
            updateBaby: this.updateBaby
        }
        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}