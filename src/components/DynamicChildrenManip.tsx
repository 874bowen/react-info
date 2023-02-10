import React from "react";
import "../index.css"

const Row = ({ children, spacing }: any) => {

   console.log(children)

   const childStyle = {
      marginLeft: `${spacing}px`
   }

   return (
      <div className="Row">
         {React.Children.map(children, (child, index ) =>{
            return React.cloneElement(child, {
               style: {
                  ...child.props.style,
                  ...(index > 0 ? childStyle: {})
               }
            })
         })}
      </div>
   )
}

const DynamicChildrenManip = () => {
   return(
      <div className="App">
         <Row spacing={32}>
            <p>Pizza</p>
            <p>2</p>
            <p>30$</p>
            <p>18:30</p>
            <p>John</p>
         </Row>
      </div>
   )
}

export default DynamicChildrenManip;