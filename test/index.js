import jsdom from 'jsdom';
import ReactTestUtils from 'react-addons-test-utils'
import AdaptiveInput from '../src/AdaptiveInput'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

describe('Adaptive-input component', function() {
    before('render and locate element', function() {
        const renderedComponent = ReactTestUtils.renderIntoDocument(
            <AdativeInput />)
    });
});