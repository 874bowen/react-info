import React, { useEffect, useState } from "react";
import "../index.css"

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

const RenderProps = () => {
   return(
      <div className="App">
         <header className="Header">
            Little Taco shop
         </header>
         <DesertCount />
            <DrinksCount />
      </div>
   )
}

export default RenderProps;