import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeletePage from './DeletePage';
import { HamburgerProvider } from '../../Contexts/HamburgerContext';

describe(`CreateProfileForm component`, () => {
    
    it(`renders loading without props`, () => {
        const wrapper = shallow(
            <HamburgerProvider>
                <DeletePage />
            </HamburgerProvider>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    });

})