import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditProfileForm from './EditProfileForm';
import HamburgerContext, { HamburgerProvider } from '../../Contexts/HamburgerContext'


describe(`EditProfileForm component`, () => {
    const props = {
        handleSubmitForm: () => {}
    };

    it(`renders a form with defaultValue text from context`, () => {
        const wrapper = shallow(
            <EditProfileForm {...props}/>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    });
});