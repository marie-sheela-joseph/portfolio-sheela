import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Projects() {
  return (
    <div>Projects
        <Link to={'/'}>Home</Link>
        <Outlet/>
    </div>
  )
}

export default Projects