import React, { Component } from 'react'
import BabyApiService from '../Services/baby-api-service'

export const nullBaby = {
    baby: null
}

const BabyContext = React.createContext({
    usersBabies: [],
    babies: [],
    baby: nullBaby,
    error: null,
    setError: () => {},
    clearError: () => {},
    setBaby: () => {},
    clearBaby: () => {},
    updateBaby: () => {},
    setBabies: () => {},
    setUsersBabies: () => {}
})

export default BabyContext

export class BabyProvider extends Component {
    state = {
        usersBabies: [],
        babies: [],
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
        this.setState({ 
            baby: baby 
        })
    }

    clearBaby = () => {
        this.setBaby(nullBaby)
    }   

    updateBaby = baby => {
        this.setState({ 
            ...this.state.baby,
            baby 
        })
        BabyApiService.updateBaby(baby)
    }

    setBabies = babies => {
        this.setState({ babies })
    }

    setUsersBabies = usersBabies => {
        this.setState({ usersBabies })
    }
      
    render() {
        
        const value = {
            usersBabies: this.state.usersBabies,
            babies: this.state.babies,
            baby: this.state.baby,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBaby: this.setBaby,
            setBabies: this.setBabies,
            setUsersBabies: this.setUsersBabies,
            clearBaby: this.clearBaby,
            updateBaby: this.updateBaby
        }
        return (
            <BabyContext.Provider value={value}>
                {this.props.children}
            </BabyContext.Provider>
        )
    }
}