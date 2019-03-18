import React, { Component } from 'react';
import CoolButton from './CoolButton';
import Anchor from './Anchor';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <Anchor 
            text={<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>}
            classes="navbar-item"
            reference="https://bulma.io/"
          />
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div className="navbar-start">
            <Anchor 
            text="Home"
            classes="navbar-item"
            reference="https://bulma.io/"
            />
          </div>

          <div className="navbar-end">
            <CoolButton
            text="Login"
            classes="button is-info"
            />
            <CoolButton
            text="Signup"
            classes="button is-primary"
            />
          </div>  
        </div>
        
      </nav>
    );
  }
}

export default Navbar;
