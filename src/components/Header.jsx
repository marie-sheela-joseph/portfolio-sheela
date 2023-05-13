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
                    <li><Link to={'/projects'}>View My Projects</Link></li>
                    <li><Link to={'/about'}>Read About Me</Link></li>
                </ul>
            </nav>
            <Outlet/>
            </div>
            </div>
        </header>        
        
  )
}

export default Header