import Link from "next/link"
import Card from "../components/Card"
import styles from "../styles/Form.module.css"
import NumberInput from "../components/NumberInput"
import { useState } from "react"

export default function Form() {
  const [qtdePortas, setQtdPortas] = useState(4)
  const [withGift, SetWithGift] = useState(1)
  
  return (
   <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput 
            value={qtdePortas} 
            onChange={newQtd => setQtdPortas(newQtd)} 
            text="Qtde dew Portas ? "
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput 
              value={withGift} 
              onChange={newDoorGift => SetWithGift(newDoorGift)} 
              text="Porta com Presente ? "
            />
        </Card>

        <Card bgcolor="#28a085">
          <Link href={`/game/${qtdePortas}/${withGift}`}>
            <h2 className={styles.link}>
              Iniciar
            </h2>
          </Link>
        </Card>
      </div>
   </div>
  )
}
