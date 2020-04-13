import React, { PureComponent } from 'react'
import BabyProfile from '../../Components/BabyProfile/BabyProfile'

export default class GenRandomBaby extends PureComponent {

    shuffleBabies(array) {
        let currentIndex = array.length, tempVal, randomIndex

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            tempVal = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempVal;
        }
        return array
    }

    render() {
        console.log('GenRanBaby rendered');
        const { babies } = this.context
        if(!babies) {
            return <div className='loading'>Loading...</div>
        }
        this.shuffleBabies(babies);
        // let randomBaby = babies[Math.floor(Math.random() * babies.length)]
        babies.map(baby => {
            return  <BabyProfile 
                        key={baby.id}
                        baby={baby}
                    />
        })
    }
}

