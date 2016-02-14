import React from 'react'
import update from 'react-addons-update'
import HiddenSpan from './HiddenSpan'

export default React.createClass({
    onChange: function(event) {
        const value = event.target.value;
        this.props.onChange && this.props.onChange(event, value) || 
            this.setState({ value });
    },
    updateWidth: function(width) {
        this.setState({ width });
    },
    getInitialState: function() {
        return { 
            value: this.props.inputProps && this.props.inputProps.value || '',
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
    render: function() {
        const escapedValue = (this.state.value || this.props.inputProps.placeholder)
            .concat('  ');

        const style = update(this.state.fontMap, {
            $merge: { width: this.state.width }
        });

        return (
            <div>
                <HiddenSpan 
                    value={ escapedValue }
                    fontMap={ this.state.fontMap }
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