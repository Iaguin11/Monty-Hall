import { useState } from "react"
import Door from "../components/Door"
import PortaModel from "../model/door"

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))
  
  return (
   <div style={{display: "flex"}}>
   
    <Door porta={p1}/>
   </div>
  )
}
