import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'
import GenRandomBaby from '../../Components/GenRandomBaby/GenRandomBaby'

export default class BabiesPage extends Component {
    static contextType = BabyContext

    componentDidMount() {
        console.log('BabiesPage mounted');
        
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

    renderBabies() {
        const { babies = [] } = this.context
        
        if (babies.length === 0) {
            return <div className='loading'>Loading...</div>
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