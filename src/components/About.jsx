import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
        <Link to={'/'}>Back to Home</Link>
        {/* skills */}
        {/* experience */}
        <Outlet/>
    </div>
  )
}

export default About