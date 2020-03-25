import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'

class EditProfile extends Component {

    static defaultProps = {
        onSubmitForm: () => {}
    }

    static contextType = BabyContext

    constructor(props) {
        super(props)
        const { user } = this.props
        this.fileInput = React.createRef()
        this.state = {
            error: null,
            id: user.id
        }
    }

    handleCreateBaby = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { name, about } = ev.target
        
        BabyApiService.postBaby({
            id: this.state.id,
            baby_name: name.value,
            about: about.value,
            image_url: '',
            total_score: 0,
            total_votes: 0
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
                    <div className="form-items">
                        <label className='label'>Name</label>
                    </div>
                    <div className="form-items">
                        <input 
                            className="name"
                            type="text"
                            name="name" 
                            required 
                        />
                    </div>
                    <div className="form-items">
                        <label>About</label>
                    </div>
                    <div className="form-items">
                        <textarea 
                            className="width-100 about"
                            name="about" 
                            rows="15" 
                        />
                    </div>
                    <div className="form-items">
                        <button type="submit">Submit</button>
                    </div>
                </form>
    }
}

export default EditProfile;