import React, { Component } from 'react';

class Anchor extends Component {
  render() {
    const {
      text,
      classes,
      reference
    } = this.props;
    
    return (
      <a href={reference} className={classes}>{text}</a>
    );
  }
}

export default Anchor;