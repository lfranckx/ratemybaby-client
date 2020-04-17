import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Hamburger from './Hamburger';
import { HamburgerProvider } from '../../Contexts/HamburgerContext'

describe(`Hamburger component`, () => {
    
    it(`renders page without crashing`, () => {
        const wrapper = mount(
            <HamburgerProvider>
                <Hamburger />
            </HamburgerProvider>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})