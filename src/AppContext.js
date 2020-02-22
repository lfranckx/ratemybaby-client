import React from 'react';

const AppContext = React.createContext({
    loggedIn: false,
    babies: [],
    username: '',
    password: '',
    email: '',
    total_score: '',
    total_votes: '',
    rating: '',
    handleLogIn: () => {},
    handleSignUp: () => {},
    handleUpdateName: () => {},
    handleUpdateBio: () => {}
})

export default AppContext;