import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditProfilePage from './EditProfilePage';
import { HamburgerProvider } from '../../Contexts/HamburgerContext';

describe(`EditProfilePage component`, () => {

    it(`renders edit profile page without crashing`, () => {
        const wrapper = shallow(
            <HamburgerProvider>
                <EditProfilePage />
            </HamburgerProvider>
            )        
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})