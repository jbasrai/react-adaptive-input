# React Adaptive Input

## Installation

## Overview

## Usage
```javascript
import React from 'react'
import AdaptiveInput from 'AdaptiveInput'

const BasicExample = React.createClass({
  getInitialState: function() {
    return { value: '' }
  },
  render: function() {
    const inputProps = {
      value: this.state.value,
      onChange: (event, newValue) => {
        this.setState({ value })
      }
    }

    return <AdaptiveInput inputProps={ inputProps } />
  }
});
```

## Props

### inputProps (required)

### padding (optional)