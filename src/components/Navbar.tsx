import React from "react"
import ReactLogo from "../assets/react.svg";
import "./Navbar.css"

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="navbar__brand">
            <img src={ReactLogo} alt="" />
            <h3>ReactFacts</h3>
         </div>
         <div className="navbar__nav">
            React Course - Project 1
         </div>
      </nav>

   )
}

export default Navbar;