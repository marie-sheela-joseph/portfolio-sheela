import React, { useState } from 'react'
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
        <p>{description}</p>             
        </div>
        
    </div>
  )
}

export default Project