import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({login,  handlerLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-bg-dark" href="#">UsersApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-bg-dark"  to="/users">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-bg-dark"  to="/users">Registrar</NavLink>
            </li>
          </ul>
        </div>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                  <span className="nav-item nav-link text-bg-dark  mx-3">Hola {login.user?.username}</span>
                  <button className="btn btn-outline-success" onClick={handlerLogout}>Logout</button>
    </div>
  </div>
  
</nav>
  )
}

export default Navbar