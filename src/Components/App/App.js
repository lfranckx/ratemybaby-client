import React, { Component } from 'react'
import { Switch, withRouter } from 'react-router-dom'
import './App.css'

import Header from '../Header/Header'
import LandingPage from '../../Routes/LandingPage/LandingPage'
import BabiesPage from '../../Routes/BabiesPage/BabiesPage'
import EditProfilePage from '../../Routes/EditProfilePage/EditProfilePage'
import LoginPage from '../../Routes/LoginPage/LoginPage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage'
import ProfilePage from '../../Routes/ProfilePage/ProfilePage'
import SignUpPage from '../../Routes/SignUpPage/SignUpPage'
import UploadImagePage from '../../Routes/UploadImagePage/UploadImagePage'
import CreateBabyPage from '../../Routes/CreateBabyPage/CreateBabyPage'

import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'
import IdleService from '../../Services/idle-service'

import PrivateRoute from '../Utils/PrivateRoute'
import PublicRoute from '../Utils/PublicOnlyRoute'


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
        <main>
          {this.state.error && <p className='error'>There was an error.</p>}
          <Switch>
            <PublicRoute 
              exact path='/'
              component={LandingPage}
            />
            <PrivateRoute
              path='/rate'
              component={BabiesPage}
            />
            <PublicRoute
              path='/login'
              component={LoginPage}
            />
            <PublicRoute
              path='/register'
              component={SignUpPage}
            />
            <PrivateRoute 
              path='/createprofile'
              component={CreateBabyPage}
            />
            <PrivateRoute 
              path='/profile'
              component={ProfilePage}
            />
            <PrivateRoute 
              path='/editprofile'
              component={EditProfilePage}
            />
            <PrivateRoute 
              path='/uploadimage'
              component={UploadImagePage}
            />
            <PublicRoute 
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </>
    )
  }
}

export default withRouter(App);