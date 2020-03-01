import React, {Component} from 'react'

class Error extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
        return <h3>{this.props.validationMessage}</h3>
        }
        return this.props.children
    }
}

export default Error