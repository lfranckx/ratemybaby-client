import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignUpForm from './SignUpForm';

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
    let input = wrapper.find(inputSelector);
    input.simulate('change', {
        target: { value: newValue }
    });
    return wrapper.find(inputSelector);
};

describe(`SignUpForm component`, () => {
    const props = {
        handleSignUpSuccess: () => {}
    };

    it(`renders form given props`, () => {
        const wrapper = shallow(<SignUpForm {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it(`lets me fill out the form and submit it`, () => {
        const wrapper = shallow(<SignUpForm {...props}/>);
        const emailInput = simulateChangeOnInput(wrapper, '#signinemail', 'test@email.com');
        const userInput = simulateChangeOnInput(wrapper, '#signinuser', 'test');
        const pwInput = simulateChangeOnInput(wrapper, '#signinpass', 'Test1234!');

        console.log('emailInput', emailInput, 'userInput', userInput)

        expect(emailInput.props().value).toEqual('test@email.com');
        expect(userInput.props().value).toEqual('test');
        expect(pwInput.props().value).toEqual('Test1234!');

        const submitButton = wrapper.find('#sign-up-button');
        submitButton.simulate('click')
    });
});