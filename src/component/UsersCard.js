import React from 'react'

function UsersCard(props) {
  return (
    <div>
       <div>
      <h3>{props.name}</h3>
      <h4>fullName : {props.fullName}</h4>
      <p>phone : {props.phone}</p>
      <p>email:{props.email}</p>
      <p>password:{props.password}</p>
      <p>createdAt:{props.createdAt}</p>
      <p>role:{props.role}</p>
      <p>enabled:{props.enabled}</p>
    </div>
    </div>
  )
}

export default UsersCard
