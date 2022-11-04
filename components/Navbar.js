import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}><Link href="/">Home</Link></li>
          <li className={styles.navListItem}><Link href="/about">About</Link></li>
          <li className={styles.navListItem}><Link href="/blogs">Blogs</Link></li>
          <li className={styles.navListItem}><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
