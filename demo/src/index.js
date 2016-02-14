import React from 'react'
import ReactDOM from 'react-dom'
import AdaptiveInput from 'AdaptiveInput'

const inputProps = {
    placeholder: 'hello world',
    style: { fontSize: '20px' }
};

ReactDOM.render(<AdaptiveInput inputProps={ inputProps } />, 
    document.getElementById('react-mount'));