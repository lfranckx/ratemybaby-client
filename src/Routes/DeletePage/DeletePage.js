import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'
import { Link } from 'react-router-dom'
import './DeletePage.css'


export default class DeletePage extends Component {
    static defaultProps = {
        match: { params: {} }
    }

    static contextType = BabyContext

    componentDidMount() {
        this.context.clearError()
        let babyId = this.props.match.params.babyId
        BabyApiService.getBaby(babyId)
            .then(this.context.setBaby)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearError()
        this.context.clearBaby()
        // refresh page to update after deleting profile
        window.location.reload(false)
        BabyApiService.getByParentId()
            .then(res => {
                this.context.setUsersBabies(res)
            })
            .catch(this.context.setError)
    }

    deleteBaby = (babyId) => {
        BabyApiService.deletBaby(babyId)
    }

    render() {
        const { baby } = this.context
        if (!baby) {
            return <div className='loading'>Loading...</div>
        }
        return ( 
            <section id="delete-section">
                <h3 >Are you sure you want to delete?</h3>
                <button 
                    id='delete-button'
                    onClick={() => {
                        this.deleteBaby(baby.id)
                    }}
                ><Link to='/rate'>Delete</Link></button>
            </section>
            
        )
    }
}