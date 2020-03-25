import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'
import { Link } from 'react-router-dom'

class EditProfile extends Component {

    static contextType = BabyContext

    constructor(props) {
        super(props)
        const { baby } = this.props
        console.log('this.props.baby:', baby);
        
        this.state = {
            error: null,
            id: baby.id,
            name: baby.baby_name,
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
                this.props.onSubmitForm()
            })
    }

    render() {
        const { error } = this.state
        
        return  <form 
                    id="edit-form"
                    onSubmit={this.handleUpdateProfile}
                >
                    <div role='alert'>{error && <p className='error'>{error}</p>}</div>
                    <div className="editFormItems">
                        <label className='label'>Name</label>
                    </div>
                    <div className="editFormItems">
                        <input 
                            className="name"
                            type="text"
                            name="name" 
                            required 
                            defaultValue={this.state.name}
                        />
                    </div>
                    <div className="editFormItems">
                        <label>About</label>
                    </div>
                    <div className="editFormItems">
                        <textarea 
                            className="width-100 about"
                            name="about" 
                            rows="15" 
                            defaultValue={this.state.about}
                        />
                    </div>
                    <div className="editFormItems">
                        <Link className="cancel" to="/profile">Cancel</Link>
                        <button type="submit">Submit</button>
                    </div>
                </form>
    }
}

export default EditProfile;
