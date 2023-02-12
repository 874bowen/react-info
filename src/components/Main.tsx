import React from "react"
import ReactLogo from "../assets/react_gray.svg"
import ComponentComposition from "./ComponentComposition"
import DynamicChildrenManip from "./DynamicChildrenManip"
import Hoc from "./Hoc"

import "./Main.css"
import RenderProps from "./RenderProps"

const Main = (props: any) => {
   return (
      // <DynamicChildrenManip />
      // <ComponentComposition />
      // <Hoc />
      // <RenderProps />
      <main className={props.darkMode ? "dark": "light"} >
         <h1>Fun facts about React</h1>
         <ul className="main__ul">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
         </ul>
      </main>
   )
}

export default Main