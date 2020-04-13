import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { BabyProvider } from './Contexts/BabyContext'
// import { HamburgerProvider } from './Contexts/HamburgerContext';

ReactDOM.render(
        <BrowserRouter>
            <BabyProvider>
                {/* <HamburgerProvider> */}
                    <App />
                {/* </HamburgerProvider> */}
            </BabyProvider>
        </BrowserRouter>, 
        document.getElementById('root')
        );