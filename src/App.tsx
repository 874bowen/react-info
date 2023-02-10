import React, { useState, useReducer } from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import "./index.css"

enum ActionKind {
  TOGGLEDARK = 'TOGGLEDARK'
}

interface ToggleAction{
  type: ActionKind,
}

interface Mode {
  darkMode: Boolean
}

const reducer = (state: Mode, action: ToggleAction) => {
  const { type } = action
  switch (type) {
    case ActionKind.TOGGLEDARK:
      return{
        ...state,
        darkMode: !state.darkMode
      };
    default: return state
  }
}

function App () {

  const initialState = {darkMode: false}
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [darkMode, setDarkMode ] = useState(false);

  // function toggleDarkMode() {
  //   setDarkMode((prevMode) => !prevMode)
  // }


  return (
    <div className="container">
      <Navbar darkMode={state.darkMode} dispatchDark={() => dispatch({type: ActionKind.TOGGLEDARK})} />
      <Main darkMode={state.darkMode} />
    </div>
  )
}

export default App