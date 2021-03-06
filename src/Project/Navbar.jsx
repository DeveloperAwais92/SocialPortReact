import React from 'react'
import { NavLink } from 'react-router-dom'
import '.././index.scss'

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid nav_bg">
        <div className="col-10 mx-auto ">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/">
              <b className="navbar-brand">SocialPort</b>
              </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">
                    Services
          </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
          </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
          </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
