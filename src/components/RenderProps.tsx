import React, { useEffect, useState } from "react";
import "../index.css"
import FeedbackForm from "./FeedbackForm";

const DataFetcher = ({render, url}: any) => {
   const [data, setData] = useState<string []>([])

   useEffect(() => {
      if (url.includes("desserts")) {
         setData(['cake', 'ice cream', 'pie', 'brownie'])
      } else {
         setData(["Water", "soda", "juice"])
      }
   }, [])

   return render(data)
}

const DesertCount = () => {
   return(
      <DataFetcher url="https://littlelemon/desserts" render={(data: []) => 
         <p>{data.length} desserts</p>
      } />
   )
}

const DrinksCount = () => {
   return(
      <DataFetcher url="https://littlelemon/drinks" render={(data: []) => 
         <p>{data.length} drinks</p>
      } />
   )
}

function handleSubmit() {
   console.log("Form Submitted");
   
}

const RenderProps = () => {
   return(
      <div className="App">
         <header className="Header">Little Taco Shop</header>
         <DesertCount />
         <DrinksCount />
         <FeedbackForm onSubmit={handleSubmit}/>
      </div>
   )
}

export default RenderProps;