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
        const { babies = [] } = this.context
        let randomBaby = babies[Math.floor(Math.random() * babies.length)]
        
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
            <main>
                <h2>Upload your baby, the world rates it.</h2>
                {error
                    ? <p className='error'>There was an error, try again</p>
                    : this.renderBabies()}
            </main>
        )
    }
}