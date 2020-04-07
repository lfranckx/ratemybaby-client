import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { BabyProvider } from './Contexts/BabyContext'

ReactDOM.render(
        <BrowserRouter>
            <BabyProvider>
                <App />
            </BabyProvider>
        </BrowserRouter>, 
        document.getElementById('root')
        );