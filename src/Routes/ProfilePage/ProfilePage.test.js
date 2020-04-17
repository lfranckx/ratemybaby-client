import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProfilePage from './ProfilePage';
import { HamburgerProvider } from '../../Contexts/HamburgerContext';

describe(`ProfilePage component`, () => {

    it(`renders profile page without crashing`, () => {
        const wrapper = shallow(
            <HamburgerProvider>
                <ProfilePage />
            </HamburgerProvider>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    });
});