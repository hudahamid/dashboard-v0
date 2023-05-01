import React from 'react'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-primary px-5 py-2 ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Dashboard</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/addUsers">Users</a>
        </li>
       
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           sort
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/analytics" >Analytics</a>
        </li>
      </ul>
      
    </div>
  </div>
       {/* <nav>
    <section  >
      <Link to="/" className='ml-20'>Dashboard</Link>
      <Link to="/addUsers" >Users</Link>
      <Link to="/analytics" >Analytics</Link>
    </section>
   */}</nav>
    </div>
  )
}

export default Navbar
