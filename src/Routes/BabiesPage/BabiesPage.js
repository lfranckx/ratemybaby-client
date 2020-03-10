import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyProfile from '../../Components/BabyProfile/BabyProfile'
import BabiesContext from '../../Contexts/BabiesContext'

export default class BabiesPage extends Component {
    static contextType = BabiesContext

    componentDidMount() {
        this.context.clearError()
        BabyApiService.getBabies()
            .then(this.context.setBabies)
            .catch(this.context.setError)
    }

    renderBabies() {
        let { babies = [] } = this.context
        let randomBaby
        if (babies.length === 0 || randomBaby.length === 0) {
            return <div>Loading...</div>
        }
        randomBaby = babies[Math.floor(Math.random() * babies.length)]
        console.log(babies);

        return (
            <BabyProfile
            // key={randomBaby.id}
            // baby={randomBaby}
            />
        )
    }

    render() {
        const { error } = this.context
        return (
            <>
                {error
                    ? <p className='error'>There was an error, try again</p>
                    : this.renderBabies()}
            </>
        )
    }
}