import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './styles.module.css'
import { data } from '../../data'
import Project from '../project'
import Header from '../header'
import Footer from '../footer'

function Projects() {
  return (
    <div className={styles.projects}>
      <Header/>
      <h2>My Personal Projects</h2>
        <div className={styles.projects__content}>
        {data.projects.slice().reverse().map((project)=><Project 
        key={project.id} 
        title={project.title}
        link={project.link} 
        imgSrc={project.imgSrc} 
        skills={project.details.skills}
        description={project.details.description}
        features={project.details.features}
        constraintsEnforced={project.details.constraintsEnforced}
        technicalHighlights={project.details.technicalHighlights}
        status={project.details.status}        
        gitHubLink={project.gitHubLink}
        gitHubRepositoryStatus={project.gitHubRepositoryStatus}
        upcomingFeatures={project.details.upcomingFeatures}
        />)}
        </div>
        <Footer/>
        <Outlet/>
    </div>
  )
}

export default Projects