import React, { Component } from 'react'
import BabyProfile from '../../Components/BabyProfile/BabyProfile'

export default class GenRandomBaby extends Component {

    render() {
        const { babies } = this.props
        if(!babies) {
            return <div className='loading'>Loading...</div>
        }
        
        let randomBaby = babies[Math.floor(Math.random() * babies.length)]

        const babySet = new Set()
        babySet.add(randomBaby.id)

        return (
            <BabyProfile 
                baby={randomBaby}
            />
        )
    }
}

