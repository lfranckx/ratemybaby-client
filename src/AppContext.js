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
        total_score: '',
        total_votes: ''
    },
})

export default AppContext;