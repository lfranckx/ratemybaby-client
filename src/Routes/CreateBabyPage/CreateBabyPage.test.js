import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CreateBabyPage from './CreateBabyPage';
import { HamburgerProvider } from '../../Contexts/HamburgerContext';


describe(`CreateBabyPage component`, () => {
    it(`renders page without crashing`, () => {
        const wrapper = shallow(
            <HamburgerProvider>
                <CreateBabyPage />
            </HamburgerProvider>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    });    
})