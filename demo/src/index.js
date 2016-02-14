import React from 'react'
import ReactDOM from 'react-dom'
import AdaptiveInput from 'AdaptiveInput'

const inputProps = {
    value: 'helollolooooooooooooo',
};

ReactDOM.render(<AdaptiveInput inputProps={ inputProps } />, 
    document.getElementById('react-mount'));