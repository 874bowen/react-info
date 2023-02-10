import React from "react"
import ReactLogo from "../assets/react.svg";
import "./Navbar.css"

const Navbar = (props: any) => {
    
   return (
      <nav className={props.darkMode ? "navbar dark": "navbar light"}>
         <div className="navbar__brand">
            <img src={ReactLogo} alt="" />
            <h3>ReactFacts</h3>
         </div>
         <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.dispatchDark}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
      </nav>

   )
}

export default Navbar;