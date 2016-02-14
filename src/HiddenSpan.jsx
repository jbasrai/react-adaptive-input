import React from 'react'
import update from 'react-addons-update'

export default React.createClass({
    updateWidth: function() {
        const width = this.span.offsetWidth;
        this.props.updateWidth(width);
    },
    componentDidMount: function() {
        this.updateWidth();
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return this.props.value !== nextProps.value || 
            JSON.stringify(this.props.fontMap) !== JSON.stringify(nextProps.fontMap);
    },
    componentDidUpdate: function() {
        this.updateWidth();
    },
    render: function() {
        const style = update(this.props.fontMap, {
            $merge: {
                visibility: 'hidden',
                position: 'absolute',
                whiteSpace: 'pre'
            }
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
