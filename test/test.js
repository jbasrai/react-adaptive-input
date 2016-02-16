import { PlainAdaptiveInput, 
    AdaptiveInputWithValue,
    AdaptiveInputWithOnChange,
    AdaptiveInputWithValueAndOnChange } from './AdaptiveInputApp'
import AdaptiveInput from '../src/AdaptiveInput'
import chai, { expect } from 'chai'
import jsdom from 'jsdom';
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
let scope = {};

describe('AdaptiveInput component', () => {
    describe('should behave like a normal input and', () => {
        describe('when used out of the box', () => {
            before(() => {
                scope.inputElement = renderIntoDocumentAndGetInputTag(<PlainAdaptiveInput />);
            });

            it('starts with a blank value by default', () => {
                expect(scope.inputElement.value).to.be.equal('');
            });
            it('updates and retains new values by assignment', () => {
                appendInputValue(scope.inputElement, 'the curtain bends');
                expect(scope.inputElement.value).to.be.equal('the curtain bends');
            });
        });
        describe('when used with just the `value` prop', () => {
            before(() => {
                scope.inputElement = renderIntoDocumentAndGetInputTag(<AdaptiveInputWithValue />);
            });
            
            it('starts with the provided value', () => {
                expect(scope.inputElement.value).to.be.equal('across the lustrous, sun-plaided');
            });

            it('updates and retains new values by assignment', () => {
                appendInputValue(scope.inputElement, ' rug');
                expect(scope.inputElement.value).to.be.equal('across the lustrous, sun-plaided rug');
            });
        });
        describe('when used with just the `onChange` prop', () => {
            // before(() => {
            //     scope.inputElement = renderIntoDocumentAndGetInputTag(<AdaptiveInputWithOnChange />);
            // });

            // it('starts with a blank value', () => {
            //     expect(scope.inputElement.value).to.be.equal('');
            // });

            // it('employs the provided `onChange` method', () => {
            //     appendInputValue(scope.inputElement, '');
            //     expect(scope.inputElement.value).to.be.equal('ACROSS THE LUSTROUS, SUN-PLAIDED RUG');
            // });
        });
    });

    describe('should scale with its text and', () => {
        it('')
    });
});

function renderIntoDocumentAndGetInputTag(component) {
    const renderedComponent = ReactTestUtils.renderIntoDocument(component);
    return ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');
}

function changeInputValue(input, newValue) {
    input.value = newValue;
    ReactTestUtils.Simulate.change(input);
}

function appendInputValue(input, newValue) {
    changeInputValue(input, input.value + newValue);
}