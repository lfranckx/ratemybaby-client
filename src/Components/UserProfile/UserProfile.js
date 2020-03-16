import React, { Component } from 'react'
import profilepic from '../../images/babydrawing.png'
import { Link } from 'react-router-dom'
import BabyContext from '../../Contexts/BabyContext'
// import EditProfileForm from '../EditProfileForm/EditProfileForm'
import './UserProfile.css'

export default class UserProfile extends Component {

    static contextType = BabyContext


    render() {
        const { baby } = this.props
        console.log('props:', baby, 'context:', this.context);
        return (
            <section>
                <h3>{baby.baby_name}</h3>
                <Link to="/uploadimage">Change</Link>
                <div>
                    <img src={profilepic} alt="profile" className="profilepic" />
                </div>
                <div className="about">
                    <p >{baby.about}</p>
                    <Link to="/editprofile">Edit</Link>
                </div>
            </section>
        )
    }
    
    // constructor(props) {
    //     super(props)
    //     console.log(props);
        
    //     this.state = {
    //         error: null,
    //         inEditMode: false
    //     }
    // }

    // changeEditMode = () => {
    //     this.setState({
    //         inEditMode: !this.state.inEditMode
    //     })
    // }

    // updateNameValue = () => {
    //     this.setState({
    //         isInEditMode: false,
    //         name: this.refs.theTextInput.value
    //     })
    // }

    // updateAboutValue = () => {
    //     this.setState({
    //         isInEditMode: false,
    //         about: this.refs.theTextInput.value
    //     })
    // }

    // renderEditView = () => {
    //     const { error } = this.state
    //     return  (
    //         <section>
    //             <form
    //                 id="edit-form"
    //                 onSubmit={this.handleUpdateProfile}
    //             >
    //                 <div role='alert'>{error && <p className='error'>{error}</p>}</div>
    //                 <div className="editFormItems">
    //                     <label className='label'>Name</label>
    //                 </div>
    //                 <div className="editFormItems">
    //                     <input 
    //                         type="text"
    //                         name="name" 
    //                         required 
    //                         defaultValue={this.state.name}
    //                     />
    //                     <button onClick={this.changeEditMode}>X</button>
    //                     <button onClick={this.updateNameValue}>Done</button>
    //                 </div>
    //                 <div className="editFormItems">
    //                     <label>About</label>
    //                 </div>
    //                 <div className="editFormItems">
    //                     <textarea 
    //                         className="width-100"
    //                         name="about" 
    //                         rows="15" 
    //                         defaultValue={this.state.about}
    //                     />
    //                     <button onClick={this.changeEditMode}>X</button>
    //                     <button onClick={this.updateAboutValue}>Done</button>
    //                 </div>
    //             </form>
    //         </section>)
    // }

    // renderDefaultView = () => {
    //     const { baby } = this.props
    //     console.log('props:', baby, 'context:', this.context);
        
    //     return  <section>
            
    //                 <h3 onClick={this.changeEditMode}>{baby.baby_name}</h3>
    //                 <Link to="/uploadimage">Edit</Link>
    //                 <div>
    //                     <img src={profilepic} alt="profile" className="profilepic" />
    //                 </div>
    //                 <div 
    //                     onClick={this.changeEditMode}
    //                     className="about"
    //                 >
    //                     {baby.about}
    //                 </div>
    //                 <Link to="/editprofile">Edit</Link>
    //             </section>
    // }

    // render() {
    //     return  this.state.inEditMode
    //             ? this.renderEditView()
    //             : this.renderDefaultView()
    // }

}