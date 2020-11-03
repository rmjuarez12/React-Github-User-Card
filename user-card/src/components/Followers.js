// Import Dependencies
import React from 'react';

// Import Components
import FollowerCard from './FollowerCard';

export default function Followers(props) {
  return (
    <div className="followers">
      <h2>{props.followers.length > 0 ? `${props.followers.length} Followers` : "No Followers"}</h2>
      
      <ul className="followers-list">
      {props.followers.length > 0 && props.followers.map((user) => {
        return <FollowerCard user={user} key={user.id} />
      })}
      </ul>
    </div>
  )
}
