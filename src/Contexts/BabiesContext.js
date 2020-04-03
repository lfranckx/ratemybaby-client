import React, { Component } from 'react';

const BabiesContext = React.createContext({
    babies: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBabies: () => {},
})

export default BabiesContext

export class BabiesProvider extends Component {
    state = {
        babies: [],
        error: null
    }
    
    setBabies = babies => {
        console.log('BabiesContext setState:', babies);
        this.setState({ babies })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        console.log('BabiesContext clearError');
        this.setState({ error: null })
    }

    render() {
        const value = {
            babies: this.state.babies,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBabies: this.setBabies,
        }
        return (
            <BabiesContext.Provider value={value}>
                {this.props.children}
            </BabiesContext.Provider>
        )
    }
}