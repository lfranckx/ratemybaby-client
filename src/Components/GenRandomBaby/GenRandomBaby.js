import React, { PureComponent } from 'react'
import BabyProfile from '../../Components/BabyProfile/BabyProfile'

export default class GenRandomBaby extends PureComponent {

    render() {
        console.log('GenRanBaby rendered');
        
        const { babies } = this.props
        if(!babies) {
            return <div className='loading'>Loading...</div>
        }
        
        let randomBaby = babies[Math.floor(Math.random() * babies.length)]

        return (
            <BabyProfile 
                baby={randomBaby}
            />
        )
    }
}

