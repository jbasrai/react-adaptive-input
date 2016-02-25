# React Adaptive Input

## Overview

This is a component that renders an input element that scales with its text.

Here it is in action:

![](https://raw.githubusercontent.com/jbasrai/react-adaptive-input/master/adaptive-input.gif)

## Installation

`npm install react-adaptive-input`

## Usage

This component serves as a transparent layer over a regular [controlled input component](https://facebook.github.io/react/docs/forms.html#controlled-components). Any props that you want passed into the input component are specified through the `inputProps` prop.

## Example
```javascript
import React from 'react'
import AdaptiveInput from 'react-adaptive-input'

const BasicExample = React.createClass({
  getInitialState: function() {
    return { value: '' }
  },
  render: function() {
    const inputProps = {
      value: this.state.value,
      onChange: (event, newValue) => {
        this.setState({ value: newValue })
      }
    }

    return <AdaptiveInput inputProps={ inputProps } />
  }
});
```

## Props

#### inputProps (required)

This component implements a controlled input component. Therefore at least a `value` and an `onChange` should be supplied. Any additional props for the input should be added here as well.

For example:

```javascript
const inputProps = {
  value: this.state.value,
  onChange: (_, newValue) => this.setState({ value: newValue }),
  placeholder: 'Enter your name'
}
```
Notice `onChange` has an additional `newValue` parameter added for convenience:

```javascript
function onChange(event, newValue)
```

#### padding (optional)

Depending on your styling, you might need to manually tweak the width of the input element. `padding` is a number value that adds extra width equivalent to _n_ space characters (`' '`).

The default padding is `2`.
