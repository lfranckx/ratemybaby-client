import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import HamburgerContext from '../../Contexts/HamburgerContext'
import { Link } from 'react-router-dom'
import './DeletePage.css'


export default class DeletePage extends Component {

    static defaultProps = {
        match: { params: {} },
        location: {},
        history: {
            push:() => {}
        }
    }

    static contextType = HamburgerContext

    componentDidMount() {
        this.context.setNotActive()
        const babyId = this.props.match.params.babyId
        BabyApiService.getBaby(babyId)
            .then(this.context.setBaby)
            .catch(this.context.setError)
        BabyApiService.getByParentId()
            .then(res => {
                this.context.setUsersBabies(res)
            })
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearBaby()
    }

    deleteBaby = (babyId) => {
        BabyApiService.deletBaby(babyId)
            .then(res => {
                BabyApiService.getByParentId()
                .then(res => {
                    this.context.setUsersBabies(res)
                    this.handleDeleteSuccess()
                })
                .catch(this.context.setError)
            })
    }

    handleDeleteSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/rate'
        history.push(destination)  
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
                >Delete</button>
            </section>
            
        )
    }
}