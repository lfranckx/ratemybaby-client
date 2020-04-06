import React, { Component } from 'react'
import BabyProfile from '../../Components/BabyProfile/BabyProfile'

export default class GenRandomBaby extends Component {
    render() {
        let { babies } = this.props
        console.log('GenRandomBaby ' + JSON.stringify(this.props));
        
        if(!babies) {
            return <div>Loading...</div>
        }
        let randomBaby = babies[Math.floor(Math.random() * babies.length)]
        console.log('GenRandomBaby 2 ' + JSON.stringify(randomBaby));
        
        return (
            <BabyProfile baby={randomBaby} />
        )
    }
}

