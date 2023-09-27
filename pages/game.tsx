import styles from '../styles/game.module.css'
import { useState } from "react"
import Door from "../components/Door"
import { addDoors, createDoor } from "../functions/door"
import Link from 'next/link'

export default function Game(){
  const [portas, setPortas] = useState(createDoor(4,2))

    function renderDoors() {
      return portas.map(porta => {
        return <Door key={porta.number} value={porta} 
        onChange={newPorta => {
          setPortas(addDoors(portas, newPorta))
        }}/>
      })
     }
     return(
      <div id={styles.game}>
        <div className={styles.door}>
          {renderDoors()}
        </div>
        <div className={styles.button}>
            <Link href="/">
              <button>Reiniciar Jogo</button>
            </Link>
        </div>
      </div>
    )
  
}