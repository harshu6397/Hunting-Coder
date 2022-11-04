import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
          Powered by{' '} 
          <div className={styles.name}> Hunting Coder Blog</div>
      </footer>
  )
}

export default Footer
