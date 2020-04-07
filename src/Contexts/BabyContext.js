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
        console.log('running BabyContext clearError()');
        this.setState({ error: null })
    }

    setBaby = baby => {
        console.log('setting baby:', baby);
        this.setState({ 
            baby: baby 
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
            ...this.state.baby,
            baby 
        })
        BabyApiService.updateBaby(baby)
    }

    setBabies = babies => {
        console.log('BabiesContext setting babies', babies)
        this.setState({ babies })
    }

    setUsersBabies = usersBabies => {
        console.log('setUsersBabies:', usersBabies);
        this.setState({ usersBabies })
    }
      
    render() {
        console.log('BabyContext State', this.state);
        
        const value = {
            usersBabies: this.state.usersBabies,
            babies: this.state.babies,
            baby: this.state.baby,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBaby: this.setBaby,
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