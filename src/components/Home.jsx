import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Footer from './Footer'
import styles from './home.module.css'
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