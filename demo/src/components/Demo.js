import React from 'react'
import AdaptiveInput from 'AdaptiveInput'

export default React.createClass({
	getInitialState: function() {
		return { value: 'HELLO' }
	},
	render: function() {
		const inputProps = {
			value: this.state.value,
			onChange: (event, newValue) => {
				this.setState({ value: newValue.toUpperCase() })
			},
			style: {
				fontSize: '24px'
			}
		}

		return <AdaptiveInput inputProps={ inputProps } />
	}
});
