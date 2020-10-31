// Import Dependencies
import React from 'react'

export default function UserCard(props) {
  return (
    <div className="user-card">
      <img src={props.user.avatar_url} alt={props.user.name} />

      <div className="card-info">
        <div className="heading">
          <h3>{props.user.name}</h3>
          <p>{props.user.login}</p>
        </div>

        <hr />

        <div className="meta-info">
          <p><span>Location:</span> {props.user.location}</p>
          <p><span>Followers:</span> {props.user.followers}</p>
          <p><span>Following:</span> {props.user.following}</p>
          <p><span>Bio:</span> {props.user.bio}</p>
        </div>

        <a href={props.user.html_url} target="_blank" rel="noreferrer">Visit Profile</a>
      </div>
    </div>
  )
}
