import React from 'react';
import { NavLink } from 'react-router-dom'
import './nav.css'



function Navbar() {
  return(
       <nav>
              <NavLink to="/" exact className="links ">
                <b style={{color: '#F0F0F2', fontSize:'1.5rem'}}>COMMIT&CARE</b>
              </NavLink>
              <span>

              <NavLink to="/" exact className={isActive =>  isActive.isActive ? "navActive" : "links" }>
                Home 
              </NavLink>
              {/* <NavLink to="/plogin" exact  className={isActive => isActive.isActive ? "navActive" : "links" }>
              Patient&nbsp;Login
              </NavLink> */}
              <NavLink to="/dlogin" exact  className={isActive => isActive.isActive ? "navActive" : "links" }>
              Login
              </NavLink>
              <NavLink exact  className={isActive => isActive.isActive ? "navActive" : "links" }  to="/pregister"  >
              Patient&nbsp;Register
              </NavLink>
              <NavLink exact  className={isActive => isActive.isActive ? "navActive" : "links" }  to="/dregister"  >
              Doctor&nbsp;Register
              </NavLink>
              </span>
          </nav>);
}

export default Navbar;
