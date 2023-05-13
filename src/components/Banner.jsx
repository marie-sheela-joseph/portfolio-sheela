import React from 'react'
import styles from './banner.module.css'

function Banner() {
  return (
    <section className={styles.banner}>
        <div>
          <img src='./assets/sheela_graduation.jpg' alt='sheela'/>
        <h1>Hi! My name is Sheela</h1>
        <p>A Software Engineer passionate to create and learn.</p>
        </div>
    </section>
  )
}

export default Banner