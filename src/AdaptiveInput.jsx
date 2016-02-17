import React from 'react'
import update from 'react-addons-update'
import HiddenSpan from './HiddenSpan'

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
    	return { padding: 2 }
    },
    getInitialState: function() {
        return { fontMap: {} };
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
    	const { value, placeholder, style } = this.props.inputProps;
        const padding = ' '.repeat(this.props.padding);
        const hiddenVal = (value || placeholder || value).concat(padding);

        var styleProps;
        styleProps = update(style || {}, {
            $merge: this.state.fontMap,
        });
        styleProps = update(styleProps, {
            $merge: { width: '40px' }
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
                    onChange={ this.onChange }
                    ref={ (el) => this.input = el }
                    style={ styleProps }
                />
            </div>
        );
    }
});