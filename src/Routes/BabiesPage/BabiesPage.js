import React, { Component } from 'react'
// import AuthApiService from '../../Services/auth-api-service'
import BabyApiService from '../../Services/baby-api-service'
import BabiesContext from '../../Contexts/BabiesContext'
import GenRandomBaby from '../../Components/GenRandomBaby/GenRandomBaby'

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
        if (babies.length === 0) {
            return <div>Loading...</div>
        }

        return (
            <GenRandomBaby babies={babies}/>
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