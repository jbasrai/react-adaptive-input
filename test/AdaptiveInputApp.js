import React from 'react'
import AdaptiveInput from '../src/AdaptiveInput'

export const PlainAdaptiveInput = React.createClass({
    render: function() {
        return (<AdaptiveInput />);
    }
});

export const AdaptiveInputWithValue = React.createClass({
    getInitialState: function() {
        return { value: 'across the lustrous, sun-plaided' };
    },
    render: function() {
        const inputProps = {
            value: this.state.value,
        };

        return (<AdaptiveInput inputProps={ inputProps } />);
    }
});

export const AdaptiveInputWithOnChange = React.createClass({
    render: function() {

    }
});

export const AdaptiveInputWithValueAndOnChange = React.createClass({
    render: function() {
    } 
});