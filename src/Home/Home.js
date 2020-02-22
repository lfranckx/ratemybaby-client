import React, { Component } from 'react';
import './Home.css';
import AppContext from '../AppContext';

class Home extends Component {


    
    render() {
        return (
            <AppContext.Consumer>
                <main>
                    <section>

                    </section>
                </main>
            </AppContext.Consumer>
        )
    }
}

export default Home;