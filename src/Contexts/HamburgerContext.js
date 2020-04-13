import React, { Component } from 'react'

const HamburgerContext = React.createContext({
    active: false,
    toggleActive: () => {},
    setNotActive: () => {}
})

export default HamburgerContext

export class HamburgerProvider extends Component {
    state = {
        active: false,
        usersBabies: []
    }

    toggleActive = () => {
        this.setState({ active: !this.state.active })
    }

    setNotActive = () => {
        this.setState({ active: false })
    }

    setUsersBabies = usersBabies => {
        this.setState({ usersBabies })
    }

    render() {
        const value = {
            active: this.state.active,
            usersBabies: this.state.usersBabies,
            toggleActive: this.toggleActive,
            setNotActive: this.setNotActive,
        }
        return (
            <HamburgerContext.Provider value={value}>
                {this.props.children}
            </HamburgerContext.Provider>
        )
    }
}