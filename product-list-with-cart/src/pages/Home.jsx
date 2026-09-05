import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div className={styles.home}>
    <h1 className={styles.title}>Santos Restuarant</h1>
    <p className={styles.p1}>Food Menu prepared with love one at a time</p>
     <p className={styles.subtitle}>
        Handmade desserts made the way my mother taught me
        slow, honest, and a little bit stubborn about doing things right.
      </p>
      <Link to="/dessert" className={styles.menu}>View Food Menu</Link>
    </div>
  )
  
}
export default Home