import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'
import { Link } from 'react-router-dom'
import CountryDropDown from '../CountryDropDown/CountryDropDown'

class EditProfile extends Component {

    static contextType = BabyContext

    constructor(props) {
        super(props)
        console.log('EditProfile props', this.props);
        const { baby } = this.props
        console.log('EditProfile context', this.context);
        console.log('EditProfile state', this.state);
        
        this.state = {
            error: null,
            id: baby.id,
            name: baby.baby_name,
            age: baby.age,
            country: baby.country,
            about: baby.about,
        }
    }

    handleUpdateProfile = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { name, about } = ev.target
        
        BabyApiService.updateBaby({
            id: this.state.id,
            baby_name: name.value,
            about: about.value
        }) 
            .then(res => {
                name.value = ''
                about.value = ''
                console.log('EditForm Submit Response', res);
                this.props.onSubmitForm()
            })    }

    render() {
        const { error } = this.state
        
        return  <form 
                    id="edit-form"
                    onSubmit={this.handleUpdateProfile}
                >
                    <div role='alert'>{error && <p className='error'>{error}</p>}</div>
                    <div className="editFormItems">
                        <label className="edit-form-label">Name</label>
                    </div>
                    <div className="editFormItems">
                        <input 
                            className="edit-input"
                            type="text"
                            name="name" 
                            required 
                            defaultValue={this.state.name}
                        />
                    </div>
                    <div className="form-items">
                        <label className='edit-form-label'>Age</label>
                    </div>
                    <div className="form-items">
                        <input 
                            className="edit-input"
                            type="text"
                            name="age" 
                            required
                            defaultValue={this.state.age}
                        />
                    </div>
                    <div className="form-items">
                        <label className='create-form-label'>Country</label>
                    </div>
                    <div className="form-items">
                        <select 
                            id="country-selector" 
                            name="country" 
                            className="form-control"
                            defaultValue={this.state.country}
                        >
                            <CountryDropDown />
                        </select>
                    </div>
                    <div className="editFormItems">
                        <label className="edit-form-label">About</label>
                    </div>
                    <div className="editFormItems">
                        <textarea 
                            className="width-100 about"
                            name="about" 
                            rows="15" 
                            defaultValue={this.state.about}
                        />
                    </div>
                    <div className="editFormButtons" id="cancel-submit-buttons">
                        <button className="edit-buttons cancel-button" type="click">
                            <Link id="cancel-button" to={`/profile/${this.state.id}`}>Cancel</Link>
                        </button>
                        <button className="edit-buttons submit-button" type="submit">Submit</button>
                    </div>
                </form>
    }
}

export default EditProfile;
