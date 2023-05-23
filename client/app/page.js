import CreateRoomButton from './components/CreateRoomButton'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.overlay}/>
       <h1 className={styles.h1}>CONNECT WITH A FRIEND</h1>
       <CreateRoomButton/>
    </main>
  )
}
