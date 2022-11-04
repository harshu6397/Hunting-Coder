import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const about = () => {
  return (
    <div className={styles.container}>
        <div className={styles.right}>
            <Image src="/about.svg" alt='About SVG' width={700} height={400} />
        </div>
        <div className={styles.left}>
            <h1>Hi, I'm <span className={styles.name}>Hunting Coder</span></h1> 
            <p className={styles.text}>
                I'm a full-stack web developer. I love to code and I love to learn new things. I'm a self-taught developer. I'm currently learning React and Next.js. I'm also learning Python and Django. I'm also learning C++ and C#.
            </p>   
        </div>
    </div>
  )
}

export default about
