import { AdaptiveInputImpl } from './AdaptiveInputApp'
import AdaptiveInput from '../src/AdaptiveInput'
import chai, { expect } from 'chai'
import jsdom from 'jsdom';
import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
let scope = {};

describe('AdaptiveInput component', () => {
    describe('should behave like a normal input and', () => {
        before(() => {
            const { inputElement } = renderIntoDocumentAndGetElements(<AdaptiveInputImpl />);
            scope.inputElement = inputElement;
        });

        it('starts with the provided `value`', () => {
            expect(scope.inputElement.value).to.be.equal('HELLO');
        });

        it('employs the provided `onChange` method', () => {
            appendInputValue(scope.inputElement, 'world');
            expect(scope.inputElement.value).to.be.equal('HELLOWORLD');
        });
    });

    describe('should resize to its text\'s width and', () => {
        before(() => {
            const { inputElement, spanElement } = renderIntoDocumentAndGetElements(<AdaptiveInputImpl />);
            scope.inputElement = inputElement;
            scope.spanElement = spanElement;
        });

        it('creates a hidden span with the same content (plus padding)', () => {
            expect(scope.spanElement.textContent).to.be.equal('HELLO ');
        });

        // jsdom doesn't actually render, so will have to find a way to test this later
        it('copies the width of the hidden span');

        it('updates the hidden span when its value is updated', () => {
            appendInputValue(scope.inputElement, 'world');
            expect(scope.spanElement.textContent).to.be.equal('HELLOWORLD ');
        });

        // same here
        it('copies the new width of the hidden span');
    });
});

function renderIntoDocumentAndGetElements(component) {
    const renderedComponent = ReactTestUtils.renderIntoDocument(component);
    const inputElement = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');
    const spanElement = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'span');
    return { inputElement, spanElement };
}

function changeInputValue(input, newValue) {
    input.value = newValue;
    ReactTestUtils.Simulate.change(input);
}

function appendInputValue(input, newValue) {
    changeInputValue(input, input.value + newValue);
}