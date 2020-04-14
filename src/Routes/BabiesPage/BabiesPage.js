import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'
import BabyProfile from '../../Components/BabyProfile/BabyProfile'

export default class BabiesPage extends Component {
    static contextType = BabyContext

    componentDidMount() {        
        this.context.clearError()
        this.context.setNotActive()
        BabyApiService.getBabies()
            .then(this.context.setBabies)
            .catch(this.context.setError)
        BabyApiService.getByParentId()
            .then(res => {
                this.context.setUsersBabies(res)
            })
            .catch(this.context.setError)
    }

    renderRandomBaby() {
        const { babies = [] } = this.context
        
        if (babies.length === 0) {
            return <div className='loading'>Loading...</div>
        }

        let randomBaby = babies[Math.floor(Math.random() * babies.length)]

        return (
            <BabyProfile 
                baby={randomBaby}
            />
        )
    }

    render() {
        const { error } = this.context
        
        return (
            <>
                {error
                    ? <p className='error'>There was an error, try again</p>
                    : this.renderRandomBaby()}
            </>
        )
    }
}