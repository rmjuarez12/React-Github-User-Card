// Import Dependencies
import React, { Component } from 'react';
import axios from "axios";

// Import Assets
import './App.css';

// Import Components
import UserCard from './components/UserCard';
import Followers from './components/Followers';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: "rmjuarez12",
      userData: [],
      followersData: []
    }
  }

  // Run the componentDidMount to get API date
  componentDidMount() {
    // Get the API data of the main user and set it to the user state
    this.getMainUserData(this.state.user);

    // Get the followers list based on the user listed abover
    this.getFollowers(this.state.user);
  }

  // Function to get the user data from an API. This is for the main user
  getMainUserData = (userName) => {
    const urlAPI = `https://api.github.com/users/${userName}`;
    
    axios.get(urlAPI).then((response) => {
      this.setState({
        userData: response.data
      })
    })
  }

  // Function to get the user's followers list
  getFollowers = (userName) => {
    const urlAPI = `https://api.github.com/users/${userName}/followers`;
    
    axios.get(urlAPI).then((response) => {
      this.setState({
        followersData: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1>{this.state.userData.name} Github Info</h1>
        </header>

        <UserCard user={this.state.userData} />

        <Followers followers={this.state.followersData} />
      </div>
    )
  }
}
