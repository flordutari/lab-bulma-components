import React, { Component } from 'react';

class CoolButton extends Component {
  render() {
    const {
      text,
      classes
    } = this.props;
    
    return (
      <button className={classes}>{text}</button>
    );
  }
}

export default CoolButton;