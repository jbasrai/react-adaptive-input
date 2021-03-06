import React from 'react'
import update from 'react-addons-update'
import HiddenSpan from './HiddenSpan'
import camelcase from 'camelcase'

export default React.createClass({
	onChange: function(event) {
		const { onChange } = this.props.inputProps;
		const newValue = event.target.value;
		onChange(event, newValue);
	},
    updateWidth: function(width) {
        this.setState({ width });
    },
    propTypes: {
    	inputProps: React.PropTypes.object.isRequired,
    	padding: React.PropTypes.number
    },
    getDefaultProps: function() {
    	return { padding: 1 }
    },
    getInitialState: function() {
        return { importantStyles: {} };
    },
    componentDidMount: function() {
        const computedStyle = window.getComputedStyle(this.input);
        const styleNames = [
            'font-size', 
            'font-family', 
            'font-weight',
            'padding',
            'margin'
        ];
        const styleValues = styleNames.map((p) => computedStyle.getPropertyValue(p));

        const importantStyles = {};
        styleNames
            .map(name => camelcase(name))
            .forEach((name, index) => importantStyles[name] = styleValues[index]);

        this.setState({ importantStyles });
    },
    render: function() {
    	const { value, placeholder, style, className } = this.props.inputProps;
        const updatedClassName = className ?
            `react-adaptive-input ${className}` :
            'react-adaptive-input'
        const padding = ' '.repeat(this.props.padding);
        const hiddenVal = (value || placeholder || value).toString().concat(padding);

        const styleProps = update(style || {}, {
            $merge: { width: this.state.width }
        });

        return (
            <span>
                <HiddenSpan 
                    value={ hiddenVal }
                    importantStyles={ this.state.importantStyles }
                    updateWidth={ this.updateWidth }
                />
                <input 
                    { ...this.props.inputProps }
                    className={ updatedClassName }
                    onChange={ this.onChange }
                    ref={ (el) => this.input = el }
                    style={ styleProps }
                />
            </span>
        );
    }
});