import React, { Component } from 'react'

export const nullBaby = {
    user: {},
    tags: [],
}

const BabyContext = React.createContext({
    baby: nullBaby,
    error: null,
    setError: () => {},
    clearError: () => { },
    setBaby: () => {},
    clearBaby: () => {},
    setReviews: () => {},
    addReview: () => {},
})

export default BabyContext

export class BabyProvider extends Component {
    state = {
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
        this.setState({ baby })
    }

    clearBaby = () => {
        this.setBaby(nullBaby)
    }   
      
    render() {
    const value = {
        baby: this.state.baby,
        error: this.state.error,
        setError: this.setError,
        clearError: this.clearError,
        setBaby: this.setBaby,
        clearBaby: this.clearBaby,
    }
    return (
        <BabyContext.Provider value={value}>
            {this.props.children}
        </BabyContext.Provider>
    )
    }
}