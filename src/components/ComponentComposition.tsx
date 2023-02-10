import React from "react";

const Button = ({children, backgroundColor}: any ) => {
   return <button style={{backgroundColor}}>{children}</button>
}

const Alert = ({ children }: any) => {
   return(
      <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
      </>
   )
}

const DeleteButton = () => {
   return <Button backgroundColor="red">Delete</Button>
}

const ComponentComposition = () => {
   return(
      <div className="App">
         <header>Little Taco Shop</header>
         <Alert>
            {/* Containment - you can customize the content of the box at any time*/}
            <h4>Delete Account</h4>
            <DeleteButton />
         </Alert>
      </div>
   )
}

export default ComponentComposition;