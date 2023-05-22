import React from 'react'
import styles from './project.module.css'
function Project({title,link,imgSrc,description,gitHubLink}) {    
  return (
    <div className={`${styles.project} col-s-6 col-l-4`}>        
        <h3>{title}</h3>    
        <div className={styles.project__image}>
            <a href={link} target='_blank'><img src={imgSrc} alt={title}/></a>
        </div>            
        <div>
        <div className={styles.project__links}>
            <a href={gitHubLink} target='_blank'>Go to GitHub Code <i class="fa-brands fa-square-github"></i></a>
            <a href={link} target='_blank'>Visit Website</a>
        </div>
        <div className={styles.project__content}>
          <p><span>Front-end:</span> {description.skills.front_end}</p>  
          <p><span>Version control:</span> {description.skills.version_control}</p>           
          {description.skills.testing && <p><span>Testing:</span> {description.skills.testing}</p>}
          {description.skills.ci_cd && <p><span>CI/CD:</span> {description.skills.ci_cd}</p>}
          {description.skills.docker_image && <p><span>Docker Image:</span> {description.skills.docker_image}</p>}
        </div>
      </div>
    </div>
  )
}

export default Project