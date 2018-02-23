import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const label = this.props.label;  
    return (
      <div>
        <span>Hello...</span>
      <button id="foo">{label}</button>
      </div>
    );
  }
}

export default Button;