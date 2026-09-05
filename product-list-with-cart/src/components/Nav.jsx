import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav () {
    return (
        <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dessert">Menu</Link>
        </nav>
       
    )
}

export default Nav