import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from '../Header/Header'
import BabiesPage from '../../Routes/BabiesPage/BabiesPage'
// import EditProfilePage from '../../EditProfilePage/EditProfilePage'
import LoginPage from '../../Routes/LoginPage/LoginPage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage'
// import ProfilePage from '../../Routes/ProfilePage/ProfilePage'
import SignUpPage from '../../Routes/SignUpPage/SignUpPage'
// import UploadImagePage from '../../Routes/UploadImagePage/UploadImagePage'
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'
import IdleService from '../../Services/idle-service'
import BabyProfile from '../BabyProfile/BabyProfile'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      error: false,
      babies: '',
    }
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { error: true }
  }

  componentDidMount() {
    /*
      set the function (callback) to call when a user goes idle
      we'll set this to logout a user when they're idle
    */
    IdleService.setIdleCallback(this.logoutFromIdle)

    /* if a user is logged in */
    if (TokenService.hasAuthToken()) {
      /*
        tell the idle service to register event listeners
        the event listeners are fired when a user does something, e.g. move their mouse
        if the user doesn't trigger one of these event listeners,
        the idleCallback (logout) will be invoked
      */
      IdleService.regiserIdleTimerResets()

      /*
        Tell the token service to read the JWT, looking at the exp value
        and queue a timeout just before the token expires
      */
      TokenService.queueCallbackBeforeExpiry(() => {
        /* the timoue will call this callback just before the token expires */
        AuthApiService.postRefreshToken()
      })
    }

  }

  componentWillUnmount() {
    /*
      when the app unmounts,
      stop the event listeners that auto logout (clear the token from storage)
    */
    IdleService.unRegisterIdleResets()
    /*
      and remove the refresh endpoint request
    */
    TokenService.clearCallbackBeforeExpiry()
  }

  stringifyArray(array) {
    let copiedObj = JSON.parse(JSON.stringify(array))
    return copiedObj
  }

  logoutFromIdle = () => {
    /* remove the token from localStorage */
    TokenService.clearAuthToken()
    /* remove any queued calls to the refresh endpoint */
    TokenService.clearCallbackBeforeExpiry()
    /* remove the timeouts that auto logout when idle */
    IdleService.unRegisterIdleResets()
    /*
      react won't know the token has been removed from local storage,
      so we need to tell React to rerender
    */
    this.forceUpdate()
  }

  render() {
    return (
      <>
        <Header/>
        {this.state.error && <p className='error'>There was an error.</p>}
        <Switch>
          <Route
            exact path='/'
            component={BabiesPage}
          />
          <Route
            path='/login'
            component={LoginPage}
          />
          <Route
            path='/signup'
            component={SignUpPage}
          />
          {/* <Route 
            path='/profile'
            component={ProfilePage}
          /> */}
          {/* <Route 
            path='/editprofile'
            component={EditProfilePage}
          /> */}
          {/* <Route 
            path='/uploadimage'
            component={UploadImagePage}
          /> */}
          <Route 
            path='/baby/:babyId'
            component={BabyProfile}
          />
          <Route 
            component={NotFoundPage}
          />
        </Switch>
      </>
    )
  }
}

export default withRouter(App);