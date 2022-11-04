import React from 'react'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'

const contact = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.name}>Contact Us</div>
            <form>
                <div className={styles.inputBox}>
                    <input type="text" name="name" required="required" placeholder='Name' />
                </div>
                <div className={styles.inputBox}>
                    <input type="email" name="email" required="required" placeholder='Email' />
                </div>
                <div className={styles.inputBox}>
                    <textarea required="required" placeholder='Send Us a message...' />
                </div>
                <div className={styles.btnContainer}>
                    <input className={styles.btn} type="submit" name="" value="Send" />
                </div>
            </form>
        </div>
        <div className={styles.right}>
            <Image src="/contact.svg" alt='About SVG' width={600} height={400} />
        </div>
    </div>
  )
}

export default contact
