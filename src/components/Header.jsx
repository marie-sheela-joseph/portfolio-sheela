import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <div className='container'>
            <div className={styles.header__content}>
            <div>
                <Link to={'/'}>Home</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to={'/projects'}>Projects</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
            </nav>
            <Outlet/>
            </div>
            </div>
        </header>        
        
  )
}

export default Header