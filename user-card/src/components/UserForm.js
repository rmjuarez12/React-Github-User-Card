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
      name: e.target.value,
      disableBtn: false
    })
  }

  // Function to handle form submission
  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.name === "") {
      const errorAnim = gsap.timeline({ repeat: 0, repeatDelay: 0 });
      errorAnim.to(".search-form", { x: -50, duration: 0.2 });
      errorAnim.to(".search-form", { x: 50, duration: 0.2 });
      errorAnim.to(".search-form", { x: -20, duration: 0.2 });
      errorAnim.to(".search-form", { x: 20, duration: 0.2 });
      errorAnim.to(".search-form", { x: 0, duration: 0.2 });

      this.setState({
        disableBtn: true,
      })

      setTimeout(() => {
        this.setState({
          disableBtn: false,
        })
      }, 1000)
    } else {
      this.props.getNewUserData(this.state.name);

      this.setState({
        name: ""
      })
    }
  }
  
  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Search Github User..." value={this.state.name} onChange={this.handleChange} disabled={this.state.disableBtn} />

          <input type="submit" value="Search" disabled={this.state.disableBtn} />
        </form>
      </div>
    )
  }
}
