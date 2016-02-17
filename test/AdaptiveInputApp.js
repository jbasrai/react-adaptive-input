import React from 'react'
import AdaptiveInput from '../src/AdaptiveInput'

export const AdaptiveInputImpl = React.createClass({
    getInitialState: function() {
        return { value: 'HELLO' }
    },
    render: function() {
        const inputProps = {
            value: this.state.value,
            onChange: (event, newValue) => {
                this.setState({ value: newValue.toUpperCase() })
            }
        };

        return (<AdaptiveInput inputProps={ inputProps } />);
    }
});
