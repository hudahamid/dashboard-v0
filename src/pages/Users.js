import React from 'react'

import { Link } from 'react-router-dom'
function Users() {
  return (
    <div>
      <h2>Users info</h2>
      <div>
        tables
      </div>
      <div>
        <button><Link to="/addUsers">Add new users</Link></button>
      </div>
    </div>
  )
}

export default Users
