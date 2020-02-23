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
})

export default AppContext;