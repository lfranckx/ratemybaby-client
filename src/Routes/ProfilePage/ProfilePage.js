import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'
import UserProfile from '../../Components/UserProfile/UserProfile'

class ProfilePage extends Component {

    static defaultProps = {
        match: { params: {} }
    }

    static contextType = BabyContext
    
    componentDidMount() {
        let babyId = this.context
        console.log(babyId);
        this.context.clearError()
        BabyApiService.getBaby(babyId)
            .then(this.context.setBaby)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearBaby()
    }

    renderBaby() {
        const { baby } = this.context
        return <UserProfile baby={baby}/>
    }

    render() {
        const { error, baby } = this.context
        let content

        if (error) {
            content = (error.error === `Sorry, this baby does not exist`)
            ? <p className='red'>Baby not found</p>
            : <p className='red'>There was an error</p>
        } else if (!baby.id) {
            content = <div className='loading' /> 
        } else {
            content = this.renderBaby()
        }
        return(
            <></>
        )
    }
}

export default ProfilePage