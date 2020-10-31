import React from 'react'

export default function FollowerCard(props) {
  return (
    <li id={`follower-${props.user.id}`} className="follower-card">
      <img src={props.user.avatar_url} alt={props.user.name} />

      <div className="card-info">
        <div className="heading">
          <p>{props.user.login}</p>
        </div>

        <hr />

        <a href={props.user.html_url} target="_blank" rel="noreferrer">Visit Profile</a>
      </div>
    </li>
  )
}
