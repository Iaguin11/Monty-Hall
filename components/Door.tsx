import styles from "../styles/Door.module.css"
import PortaModel from "../model/door"
import Presente from "../components/Presente"

interface PortaProps {
  value : PortaModel
  onChange: (newPorta: PortaModel) => void
}
export default function Door(props: PortaProps){
  const porta  = props.value
  const select = porta.selected && !porta.open ? styles.selected : ''

  const toggleSelections = e => props.onChange(porta.toggleSelection())
  const openDoor = e => {
    e.stopPropagation()
    props.onChange(porta.abrir())
  }

  function rendering(){
    return (
      <div className={styles.porta}>
          <div className={styles.number}>{porta.number}</div>
          <div className={styles.handle}
            onClick={openDoor}
            ></div>
        </div>
    )
  }
  return(
    <div className={styles.area} onClick={toggleSelections}>
      <div className={`${styles.frame} ${select}`}>
        {porta.closed ? 
          rendering() : 
          porta.haveGift ? 
          <Presente/>: false }
      </div>
      
      <div className={styles.floor}></div>
    </div>
  )
}