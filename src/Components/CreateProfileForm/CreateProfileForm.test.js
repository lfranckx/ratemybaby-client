import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CreateProfileForm from './CreateProfileForm';

describe(`CreateProfileForm component`, () => {
    const props = {
        handleSubmitForm: () => {}
    };

    it(`renders form given props`, () => {
        const wrapper = shallow(<CreateProfileForm {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})