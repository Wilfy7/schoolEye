import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarStyles.scss"
import { logOutUser, token } from "../../../service/user.service";


const Navbar = () => {
  const user = token

  const handleLogout = () => {
     logOutUser();
  }

  return (
    <nav className="globalstyles navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid pagestext">
    <NavLink 
       style={{
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        paddingRight: "1rem",
        color: "inherit",
        textDecoration: "none"
      }}
    to="/">SCHEYE</NavLink>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <NavLink  className="nav-link pagestext" to="/">Home</NavLink>
         </li>
         <li className="nav-item">
            <NavLink className="nav-link pagestext" to="/status">Status</NavLink> 
         </li>
         <li className="nav-item">
            <NavLink className="nav-link pagestext" to="/gallery">Gallery</NavLink>
         </li>
       
          <li className="nav-item dropdown">
            <NavLink 
            className="nav-link dropdown-toggle pagestext" 
            to="#" 
            role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false">
             More
            </NavLink>
            <ul className="dropdown-menu">
              <li> <NavLink className="nav-link pagestext" to="/post">Post</NavLink></li>
              <li> <NavLink className="nav-link pagestext" to="/profile">Profile</NavLink></li>
              <li> <NavLink className="nav-link pagestext" to="/child">Register Child</NavLink></li>
              <li> <NavLink className="nav-link pagestext" to="/children">Children</NavLink></li>


              { //If not a user show me login
            !user &&(
              <NavLink className="nav-link pagestext"  to="/login">
                Login
              </NavLink>
            )} 

            { //If user Display logout
            user && (
              <span  onClick={handleLogout} style={{cursor: "pointer", marginLeft:"10px"}}>
                 Logout
              </span>
            )}
              <li>
              {
          //If not a user show me register
          !user && (
               <NavLink to="/registration" className="nav-link pagestext">
                
               </NavLink>
             )
            }
              </li>
            </ul>
          </li>
        </ul>
           
      </div>
    </div>
  </nav>
  )
};

export default Navbar;
