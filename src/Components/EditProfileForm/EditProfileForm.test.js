import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditProfileForm from './EditProfileForm';
import { HamburgerProvider } from '../../Contexts/HamburgerContext';


describe(`EditProfileForm component`, () => {
    const props = {
        handleSubmitForm: () => {}
    };

    it(`renders a form with text from baby data in context`, () => {
        const wrapper = shallow(
            <HamburgerProvider>
                <EditProfileForm {...props}/>
            </HamburgerProvider>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});