import React from 'react'
import update from 'react-addons-update'

const HiddenSpan = React.createClass({
    updateWidth: function() {
        const width = this.span.offsetWidth;
        this.props.updateWidth(width);
    },
    componentDidMount: function() {
        this.updateWidth();
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return this.props.value !== nextProps.value;
    },
    componentDidUpdate: function() {
        this.updateWidth();
    },
    render: function() {
        const style = update(this.props.fontDetails, {
            $merge: { visibility: 'hidden', position: 'absolute' }
        });
        return (
            <span 
                ref={ (el) => this.span = el }
                style={ style }>
                { this.props.value }
            </span>
        );
    }
});

export default React.createClass({
    onChange: function(event) {
        const value = event.target.value;
        this.props.onChange && this.props.onChange(event, value) || 
            this.setState({ value });
    },
    updateWidth: function(width) {
        this.setState({ width });
    },
    propTypes: {
        fontDetails: function(props, propName) {
            const fontDetails = props[propName];
            const { fontSize, fontWeight, fontFamily } = fontDetails;
            if (!(fontSize && fontWeight && fontFamily))  {
                return new Error('Invalid fontDetails prop');
            }
        }
    },
    getInitialState: function() {
        return { 
            value: this.props.inputProps && this.props.inputProps.value || ''
        };
    },
    render: function() {
        const escapedValue = this.state.value
            .replace(/\s/g, '_')
            .concat('__');

        const style = update(this.props.fontDetails, {
            $merge: { width: this.state.width }
        });

        return (
            <div>
                <HiddenSpan 
                    value={ escapedValue }
                    fontDetails={ this.props.fontDetails }
                    updateWidth={ this.updateWidth }
                />
                <input 
                    { ...this.props.inputProps }
                    ref={ (el) => this.input = el }
                    value={ this.state.value }
                    onChange={ this.onChange }
                    style={ style }
                />
            </div>
        );
    }
});