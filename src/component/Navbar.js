import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
       <nav>
    <section  >
      <Link to="/" className='ml-20'>Dashboard</Link>
      <Link to="/addUsers" >Users</Link>
      <Link to="/analytics" >Analytics</Link>
    </section>
  </nav>
    </div>
  )
}

export default Navbar
