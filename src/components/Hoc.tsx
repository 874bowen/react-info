import React, { useEffect, useState } from "react";
import "../index.css"

interface Position {
   x: number
   y: number
}

interface MousePosition{
   mousePosition: Position
}

const withMousePosition = (WrappedComponent: any) => {
   return (props: any) => {
      const [mousePosition, setMousePosition] = useState<Position>({
         x: 0,
         y: 0
      })
   
      useEffect(()=> {
         const handleMousePositionChange = (e: any) => {
            setMousePosition({
               x: e.clientX,
               y: e.clientY
            })
         }
         window.addEventListener('mousemove', handleMousePositionChange)
   
         return () => {
            window.removeEventListener('mousemove', handleMousePositionChange)
         }
      }, [])

      return <WrappedComponent {...props} mousePosition={mousePosition} />
   }
}

const PanelMouseLogger = ({ mousePosition }: MousePosition) => {
   if (!mousePosition) null

   return (
      <div className="BasicTracker">
         <p className="center">Mouse Position</p>
         <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
         </div>
      </div>
   )
}

const PointMouseLogger = ({ mousePosition }: MousePosition) => {
   if (!mousePosition) null
   
   return (
      <p className="Row">
         ({mousePosition.x}, {mousePosition.y})
      </p>
   )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)

function Hoc() {
   return (
      <div className="App">
         <header className="Header">Little Taco Shop 🌮</header>
         <PanelMouseTracker />
         <PointMouseTracker />
      </div>
   )
}

export default Hoc;