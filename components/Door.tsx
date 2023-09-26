import styles from "../styles/Door.module.css"
import PortaModel from "../model/door"

interface PortaProps {
  porta: PortaModel
}
export default function Door(props: PortaProps){
  const { porta } = props
  const select = porta.selected ? styles.selected : ''

  return(
    <div className={styles.area}>
      <div className={`${styles.frame} ${select}`}>
        <div className={styles.porta}>
          <div className={styles.number}>{porta.number}</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}