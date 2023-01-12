import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import "./index.css"

function App () {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  )
}

export default App