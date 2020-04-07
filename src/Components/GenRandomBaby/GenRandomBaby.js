import React, { Component } from 'react'
import BabyProfile from '../../Components/BabyProfile/BabyProfile'

export default class GenRandomBaby extends Component {
    render() {
        let { babies } = this.props
        console.log('GenRandomBaby props: ' + this.props);
        
        if(!babies) {
            return <div className='loading'>Loading...</div>
        }
        let randomBaby = babies[Math.floor(Math.random() * babies.length)]
        console.log('GenRandomBaby randomBaby:', randomBaby);
        
        return (
            <BabyProfile baby={randomBaby} />
        )
    }
}

