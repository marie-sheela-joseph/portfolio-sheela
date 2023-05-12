import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './projects.module.css'
import { data } from '../data'
import Project from './Project'
import Header from './Header'
function Projects() {
  return (
    <div className={styles.projects}>
      <Header/>
      <h2>My Personal Projects</h2>
        <div className={styles.projects__content}>
        {data.projects.map((project)=><Project key={project.id} title={project.title}link={project.link} imgSrc={project.imgSrc} description={project.description} 
        gitHubLink={project.gitHubLink}
        />)}
        </div>
        <Outlet/>
    </div>
  )
}

export default Projects