import React from 'react'
import styles from './styles.module.css'

function Banner() {
  return (
    <section className={styles.banner}>
        <div className='container'>
          <div className={styles.flexcontainer}>
          <div className='col-l-6'>
            <p>Hello! My name  is </p>
            <h1>Ms. Marie Sheela JOSEPH LOUIS SELVARAJ</h1>
            <p>I am a Software Engineer living in France. I build responsive website front end using ReactJS and I am curious to learn new technologies.</p>
          </div>
          <div className='col-l-6'>
            <img src='./assets/sheela_graduation.png' alt='sheela'/>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Banner