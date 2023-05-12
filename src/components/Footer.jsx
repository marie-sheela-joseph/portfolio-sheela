import React from 'react'
import styles from './footer.module.css'
function Footer() {
  return (
    <section className={styles.footer}>
        <ul>
            <li><i class="fa-brands fa-square-github"></i></li>
            <li><i class="fa-brands fa-linkedin"></i></li>            
        </ul>
    </section>
  )
}

export default Footer