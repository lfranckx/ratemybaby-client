import React from 'react';

const AppContext = React.createContext({
    loggedIn: false,
    babies: [],
    username: '',
    password: '',
    email: '',
    user_baby: {
        name: ``,
        about: ``,
        image_url: '',
        total_score: '',
        total_votes: ''
    },
    error: null,
    handleSignUp: () => {},
    handleLogin: () => {},
    handleLogout: () => {},
    handleProfileChange: () => {},
    handleUploadImage: () => {},
    handleDeleteUser: () => {}
})

export default AppContext;