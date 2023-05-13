import React from 'react'
import styles from './footer.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
        <ul>
        <a href='https://github.com/marie-sheela-joseph' target='_blank'><li><i class="fa-brands fa-square-github"></i></li></a>
        <a href='https://www.linkedin.com/in/marie-sheela-joseph-louis-selvaraj/' target='_blank'><li><i class="fa-brands fa-linkedin"></i></li></a>
        </ul>
    </footer>
  )
}

export default Footer