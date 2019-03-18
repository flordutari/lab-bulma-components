import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CoolButton from './components/CoolButton';
import FormField from './components/FormField';

const data = [
  {text: 'Button 1', classes: 'is-active'},
  {text: 'Button 2', classes: 'is-black'},
  {text: 'Button 3', classes: 'is-centered'},
  {text: 'Button 4', classes: 'is-danger'},
  {text: 'Button 5', classes: 'is-dark'},
  {text: 'Button 6', classes: 'is-focused'},
  {text: 'Button 7', classes: 'is-grouped'},
  {text: 'Button 8', classes: 'is-hovered'},
  {text: 'Button 9', classes: 'is-info'},
  {text: 'Button 10', classes: 'is-inverted'},
  {text: 'Button 11', classes: 'is-large'},
  {text: 'Button 12', classes: 'is-light'},
  {text: 'Button 13', classes: 'is-link'},
  {text: 'Button 14', classes: 'is-loading'},
  {text: 'Button 15', classes: 'is-medium'},
  {text: 'Button 16', classes: 'is-outlined'},
  {text: 'Button 17', classes: 'is-primary'},
  {text: 'Button 18', classes: 'is-right'},
  {text: 'Button 19', classes: 'is-rounded'},
  {text: 'Button 20', classes: 'is-selected'},
  {text: 'Button 21', classes: 'is-small'},
  {text: 'Button 22', classes: 'is-static'},
  {text: 'Button 23', classes: 'is-success'},
  {text: 'Button 24', classes: 'is-text'},
  {text: 'Button 25', classes: 'is-warning'},
  {text: 'Button 26', classes: 'is-white'},
]

class App extends Component {
  renderList() {
    return (data.map((item, index) => {
      return <CoolButton key ={`id${index}`}
      text = {item.text}
      classes = {`button ${item.classes}`}/>
    }))
  }
  
  render() {
    return (
      <div>
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
        text="Login"
        classes="button"
        />
        <CoolButton 
        text="Button 1"
        classes="button is-rounded is-primary is-danger"
        />
        <CoolButton
        text="Button 2"
        classes="button is-primary is-success"
        />
        <div className="articles">
          {this.renderList()}
        </div> 
      </div>

    );
  }
}

export default App;









  


