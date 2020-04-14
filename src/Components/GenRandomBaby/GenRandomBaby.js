import React, { Component } from 'react'
import BabyProfile from '../../Components/BabyProfile/BabyProfile'

export default class GenRandomBaby extends Component {
    render() {
        const { babies } = this.props
        if(!babies) {
            return <div className='loading'>Loading...</div>
        }
        
        
    }
}

