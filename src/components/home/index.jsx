import React from 'react'
import Banner from '../banner'
import Header from '../header'
import Footer from '../footer'
import styles from './styles.module.css'
function Home() {
  return (
    <div className={styles.home}>
        <Header/>
        <Banner/>
        <Footer/>      
    </div>
  )
}

export default Home