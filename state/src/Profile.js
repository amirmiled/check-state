import React from 'react'

const Profile = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.lastName}</h2>
      <p>{props.profession}</p>
    </div>
  )
}

export default Profile