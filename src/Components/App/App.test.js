import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BabyProvider } from './Contexts/BabyContext';
import { HamburgerProvider } from './Contexts/HamburgerContext';

it(`renders without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <BabyProvider>
                <HamburgerProvider>
                    <App />
                </HamburgerProvider>
            </BabyProvider>
        </BrowserRouter>, 
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})