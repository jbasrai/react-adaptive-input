import React from 'react'
import ReactDOM from 'react-dom'
import AdaptiveInput from 'AdaptiveInput'

const fontDetails = {
    fontSize: '24px',
    fontFamily: 'Helvetica',
    fontWeight: '300'
};

const inputProps = {
    value: 'helollolooooooooooooo',
};

ReactDOM.render(<AdaptiveInput inputProps={ inputProps } fontDetails={ fontDetails } />, 
    document.getElementById('react-mount'));