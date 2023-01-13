import React from "react"
import ReactLogo from "../assets/react_gray.svg"

import "./Main.css"

const Main = () => {
   return (
      <div className="main" style={{
         backgroundImage: `url(${ReactLogo})`,
         backgroundRepeat: "no-repeat",
         backgroundSize: "70% auto",
         backgroundPosition: "right -70% bottom 60%"
      }}>
         <h1>Fun facts about React</h1>
         <ul className="main__ul">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
         </ul>
      </div>
   )
}

export default Main