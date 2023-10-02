import styles from '../../../styles/game.module.css'
import { useEffect, useState } from "react"
import { addDoors, createDoor } from "../../../functions/door"
import Link from 'next/link'
import Door from '../../../components/Door'
import { useRouter } from 'next/router'


export default function Game(){
  const router = useRouter()
  const [portas, setPortas] = useState([])
  const [valid, setValid] = useState(false)

  useEffect(()=> {
    const door = +router.query.door
    const haveAGift = +router.query.haveGift

    const doorValid = door >= 3 && door <= 50
    const haveGiftValid = haveAGift >=1 && haveAGift <= door

    setValid(doorValid && haveGiftValid )
  },[portas, router.query.door, router.query.haveGift])

  useEffect(()=> {
    const door = +router.query.door
    const haveAGift = +router.query.haveGift
    setPortas(createDoor(door, haveAGift))
  },[router?.query])

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
          { valid ? 
          renderDoors() :
          <h2>Valores inválidos</h2>
          }
        </div>
        <div className={styles.button}>
            <Link href="/">
              <button>Reiniciar Jogo</button>
            </Link>
        </div>
      </div>
    )
  
}