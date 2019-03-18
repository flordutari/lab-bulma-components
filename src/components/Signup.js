import React, { Component } from 'react';
import Navbar from './Navbar';
import CoolButton from './CoolButton';
import FormField from './FormField';
import Container from './Container';

class Signup extends Component {
  render(){
    return(
      <Container>
        <Navbar />
        <div className="form">
          <FormField
          labelText="Name"
          inputType="text"
          inputPlaceholder="e.g Alex Smith"        
          />
          <FormField
          labelText="Email"
          inputType="email"
          inputPlaceholder="e.g. alexsmith@gmail.com"        
          />
          <FormField
          labelText="Password"
          inputType="password"
          inputPlaceholder="e.g. password"        
          />
        </div>
        <CoolButton
        text="Signup"
        classes="button"
        />
      </Container>
    )
  }
}

export default Signup;