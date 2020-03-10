import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { BabiesProvider } from './Contexts/BabiesContext'
import { BabyProvider } from './Contexts/BabyContext'

ReactDOM.render(
        <BrowserRouter>
            <BabiesProvider>
                <BabyProvider>
                    <App />
                </BabyProvider>
            </BabiesProvider>
        </BrowserRouter>, 
        document.getElementById('root')
        );