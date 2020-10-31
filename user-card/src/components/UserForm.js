// Import Dependencies
import React, { Component } from 'react';
import { gsap } from "gsap";

export default class UserForm extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    }
  }

  // Function to handle the onChange of the text field
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  // Function to handle form submission
  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.name === "") {
      return;
    } else {
      this.props.getNewUserData(this.state.name);
    }
  }
  
  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Search Github User..." value={this.state.name} onChange={this.handleChange} />

          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}
