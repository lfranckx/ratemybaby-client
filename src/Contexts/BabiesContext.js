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
        console.log('BabiesContext setting babies ' + JSON.stringify(babies));
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
            usersBabies: this.state.usersBabies,
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