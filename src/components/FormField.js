import React, { Component } from 'react';

class FormField extends Component {
  render(){
    const {
      labelText,
      inputType,
      inputPlaceholder
    } = this.props;

    return(
      <div className="field">
        <label className="label">{labelText}</label>
        <div className="control">
          <input className="input" type={inputType} placeholder={inputPlaceholder}/>
        </div>
      </div>
    );
  }
}

export default FormField;
