import React from 'react'
import update from 'react-addons-update'
import HiddenSpan from './HiddenSpan'

export default React.createClass({
    onChange: function(event) {
        const value = event.target.value;
        const providedOnChange = this.props.inputProps && this.props.inputProps.onChange;
        const defaultOnChange = (value) => this.setState({ value });
        providedOnChange && providedOnChange(event, value) || defaultOnChange(value);
    },
    updateWidth: function(width) {
        this.setState({ width });
    },
    getInitialState: function() {
        const providedValue = this.props.inputProps && this.props.inputProps.value;
        const defaultValue = '';
        return { 
            value: providedValue || defaultValue,
            fontMap: {}
        };
    },
    componentDidMount: function() {
        const computedStyle = window.getComputedStyle(this.input);
        const fontPropsRaw = ['font-size', 'font-family', 'font-weight'];
        const fontValues = fontPropsRaw.map((p) => computedStyle.getPropertyValue(p));

        const fontMap = {};
        const fontProps = ['fontSize', 'fontFamily', 'fontWeight'];
        fontProps.forEach((value, index) => fontMap[value] = fontValues[index]);

        this.setState({ fontMap });
    },
    componentWillReceiveProps: function(nextProps) {
        const value = nextProps.inputProps && nextProps.inputProps.value;
        if (value) {
            this.setState({ value });
        }
    },
    render: function() {
        const value = this.state.value;
        const placeholder = this.props.inputProps && this.props.inputProps.placeholder;
        const hiddenVal = (value || placeholder || value).concat('  ');

        const styleProps = this.props.inputProps && this.props.inputProps.style || {};
        var style;
        style = update(styleProps, {
            $merge: this.state.fontMap,
        });
        style = update(styleProps, {
            $merge: { width: this.state.width }
        });

        return (
            <div>
                <HiddenSpan 
                    value={ hiddenVal }
                    fontMap={ this.state.fontMap }
                    updateWidth={ this.updateWidth }
                />
                <input 
                    { ...this.props.inputProps }
                    value={ this.state.value }
                    onChange={ this.onChange }
                    ref={ (el) => this.input = el }
                    style={ style }
                />
            </div>
        );
    }
});