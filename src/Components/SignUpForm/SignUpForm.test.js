import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignUpForm from './SignUpForm';

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
    const input = wrapper.find(inputSelector);
    input.simulate('change', {
        target: {value: newValue}
    });
    return wrapper.find(inputSelector);
};

describe(`SignUpForm component`, () => {
    const props = {
        handleSignUpSuccess: () => {}
    }

    it(`renders form given props`, () => {
        const wrapper = shallow(<SignUpForm {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it(`lets me fill out the form`, () => {
        const wrapper = shallow(<SignUpForm {...props}/>);
        simulateChangeOnInput(wrapper, '#signinemail', 'test@email.com');
        simulateChangeOnInput(wrapper, '#signinuser', 'test');
        simulateChangeOnInput(wrapper, '#signinpass', 'Test1234!');
    });
})