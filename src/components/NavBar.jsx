import React  from 'react'
import { Link } from 'react-scroll'
import styles from '../styles/NavBar.module.css'
export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
        <div style={{width:'50%'}}>

        </div>
        <div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a className={styles.a} href="#home"><span style={{color:'red'}}>Ho</span>me</a>
        </li>
        <li className={styles.li}>
          <a className={styles.a}  href="#works">Works</a>
        </li>
        <li className={styles.li}>
          <a className={styles.a}  href="#connect">Con<span style={{color:'red'}}>nect</span></a>
        </li>
      </ul>
      </div>
    </nav>
  )
}
