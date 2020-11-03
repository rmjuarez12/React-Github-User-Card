// Import Dependencies
import React, { Component } from 'react';
import axios from "axios";
import { gsap } from "gsap";

// Import Assets
import './App.css';
import loadingImg from './assets/loading.gif'

// Import Components
import UserCard from './components/UserCard';
import Followers from './components/Followers';
import UserForm from './components/UserForm';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: "rmjuarez12",
      userData: [],
      followersData: [],
      loading: false
    }
  }

  // Run the componentDidMount to get API data
  componentDidMount() {
    // Get the API data of the main user and set it to the user state
    this.getMainUserData(this.state.user);

    // Get the followers list based on the user listed abover
    this.getFollowers(this.state.user);
  }

  // Run the componentDidMount to get API data
  componentDidUpdate(prevProps, prevState) {
    
    if (prevState.user !== this.state.user) {
      // Add the loading overlay
      gsap.to("#loading-overlay", {opacity: 0.9, display: "flex", duration: 0.5});

      // Get the API data of the main user and set it to the user state
      this.getMainUserData(this.state.user);

      // Get the followers list based on the user listed abover
      this.getFollowers(this.state.user);
    }
   
  }

  // Function to get the user data from an API. This is for the main user
  getMainUserData = (userName) => {
    const urlAPI = `https://api.github.com/users/${userName}`;
    
    axios.get(urlAPI).then((response) => {
      this.setState({
        userData: response.data
      })
    }).catch((error) => {
      alert("User does not exist on Github");
      gsap.to("#loading-overlay", {opacity: 0, display: "none", duration: 0.5});
    })
  }

  // Function to get the user's followers list
  getFollowers = (userName) => {
    const urlAPI = `https://api.github.com/users/${userName}/followers`;
    
    axios.get(urlAPI).then((response) => {
      this.setState({
        followersData: response.data
      })

      setTimeout(() => {
        gsap.to("#loading-overlay", {opacity: 0, display: "none", duration: 0.5});
      }, 800)
    }).catch((error) => console.log(error))
  }

  // Function to change the main user
  getNewUserData = (userName) => {
    this.setState({
      user: userName
    })
  }

  render() {
    return (
      <div id="App">
        <header>
          <h1>{this.state.userData.name !== null ? this.state.userData.name : this.state.userData.login} Github Info</h1>

          <UserForm getNewUserData={this.getNewUserData} />
        </header>

        <UserCard user={this.state.userData} />
        <Followers followers={this.state.followersData} />

        <div id="loading-overlay">
          <img src={loadingImg} alt="loading" />
        </div>
      </div>
    )
  }
}
