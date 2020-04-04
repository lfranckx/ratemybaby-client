import React, { Component } from 'react'
import BabyApiService from '../Services/baby-api-service'

export const nullBaby = {
    baby: null
}

export const nullUser = {
    user: {}
}

const BabyContext = React.createContext({
    baby: nullBaby,
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
        baby: nullBaby,
        error: null
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setBaby = baby => {
        console.log('BabyContext setBaby:', baby);

        localStorage.setItem('baby', JSON.stringify(baby))
        this.setState({ baby: baby }) 
    }

    clearBaby = () => {
        console.log('inside BabyContext: clearing baby...');
        this.setBaby(nullBaby)
    }   

    updateBaby = baby => {
        console.log('inside BabyContext: updating baby...', baby, 
        'total_score:', baby.total_score,
        'total_votes:', baby.total_votes)
        this.setState({ 
            ...this.state.babies,
            baby 
        })
        BabyApiService.updateBaby(baby)
    }
    
    setUser = user => {
        console.log(`BabyContext setUser:`, user);
        this.setState({ user: user })
    }

    clearUser = () => {
        console.log(`BabyContext clearUser`);
        this.setUser(nullUser)
    }  

    storeLocalUser = user => {
        localStorage.setItem('user', JSON.stringify(user))
    }
      
    render() {
        const value = {
            user: this.state.user,
            baby: this.state.baby,
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