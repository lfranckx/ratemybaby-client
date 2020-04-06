import React, { Component } from 'react'
import BabyApiService from '../Services/baby-api-service'

export const nullBaby = {
    babies: null
}

export const nullUser = {
    user: null
}

const BabyContext = React.createContext({
    babies: nullBaby,
    error: null,
    setError: () => {},
    clearError: () => {},
    setBaby: () => {},
    clearBaby: () => {},
    updateBaby: () => {},
    setUser: () => {},
    clearUser: () => {}
})

export default BabyContext

export class BabyProvider extends Component {
    state = {
        user: nullUser,
        babies: nullBaby,
        error: null
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        console.log('running BabyContext clearError()');
        this.setState({ error: null })
    }

    setBaby = baby => {
        console.log('setting baby:', baby);
        this.setState({ 
            ...this.state.babies,
            babies: baby 
        })
    }

    clearBaby = () => {
        console.log('running BabyContext clearBaby()');
        this.setBaby(nullBaby)
    }   

    updateBaby = baby => {
        console.log('updating baby:', baby, 
        'total_score:', baby.total_score,
        'total_votes:', baby.total_votes)
        this.setState({ 
            ...this.state.babies,
            baby 
        })
        BabyApiService.updateBaby(baby)
    }

    setUser = user => {
        console.log('setting user:', user);
        this.setState({ user: user })
    }

    clearUser = () => {
        console.log('running BabyContext clearUser()');
        this.setUser(nullUser)
    }   
      
    render() {
        const value = {
            user: this.state.user,
            babies: this.state.babies,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBaby: this.setBaby,
            clearBaby: this.clearBaby,
            updateBaby: this.updateBaby,
            setUser: this.setUser,
            clearUser: this.clearUser
        }
        return (
            <BabyContext.Provider value={value}>
                {this.props.children}
            </BabyContext.Provider>
        )
    }
}