import React, { Component } from 'react';

const BabiesContext = React.createContext({
    usersBabies: [],
    babies: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBabies: () => {},
    setUsersBabies: () => {}
})

export default BabiesContext

export class BabiesProvider extends Component {
    state = {
        usersBabies: [],
        babies: [],
        error: null
    }
    
    setBabies = babies => {
        this.setState({ babies })
    }

    setUsersBabies = babies => {
        console.log('setUsersBabies:', babies);
        this.setState({ usersBabies: babies })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            babies: this.state.babies,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBabies: this.setBabies,
            setUsersBabies: this.setUsersBabies
        }
        return (
            <BabiesContext.Provider value={value}>
                {this.props.children}
            </BabiesContext.Provider>
        )
    }
}