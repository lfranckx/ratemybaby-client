import React, { Component } from 'react'

export const nullBaby = {
    baby: null
}

const HamburgerContext = React.createContext({
    active: false,
    usersBabies: [],
    babies: [],
    baby: nullBaby,
    error: null,
    setError: () => {},
    clearError: () => {},
    toggleActive: () => {},
    setNotActive: () => {},
    setBaby: () => {},
    clearBaby: () => {},
    setUsersBabies: () => {}
})

export default HamburgerContext

export class HamburgerProvider extends Component {
    state = {
        active: false,
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

    toggleActive = () => {
        this.setState({ active: !this.state.active })
    }

    setNotActive = () => {
        this.setState({ active: false })
    }

    setBaby = baby => {
        this.setState({ 
            baby: baby 
        })
    }

    clearBaby = () => {
        this.setBaby(nullBaby)
    }   

    setUsersBabies = usersBabies => {
        this.setState({ usersBabies })
    }
      
    render() {
        const value = {
            active: this.state.active,
            usersBabies: this.state.usersBabies,
            babies: this.state.babies,
            baby: this.state.baby,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            toggleActive: this.toggleActive,
            setNotActive: this.setNotActive,
            setBabies: this.setBabies,
            setUsersBabies: this.setUsersBabies,
            setBaby: this.setBaby,
            clearBaby: this.clearBaby,
        }
        return (
            <HamburgerContext.Provider value={value}>
                {this.props.children}
            </HamburgerContext.Provider>
        )
    }
}