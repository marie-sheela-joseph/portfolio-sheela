import React from 'react'
import styles from './styles.module.css'

function Project({title,link,imgSrc,skills,description,functions,technicalHighlights,status,gitHubLink,gitHubRepositoryStatus}) {   
  console.log(functions,technicalHighlights)  
  const skillsList=Object.entries(skills).map((item)=>{            
    const[key,value]=item
    return <p key={key}><span>{key}</span> : {value}</p>})
  return (
    <div className={`${styles.project} col-s-6 col-l-4`}>        
        <h3>{title}</h3>    
        <div className={styles.project__image}>
            <a href={link} target='_blank'><img src={imgSrc} alt={title}/></a>
        </div>            
        <div>
        <div className={styles.project__links}>
            {gitHubRepositoryStatus ==='public' && <a href={gitHubLink} target='_blank'>Go to GitHub Code <i className="fa-brands fa-square-github"></i></a>}
            <a href={link} target='_blank'>Visit Website</a>
        </div>
        <div className={styles.project__content}>          
          {skillsList}          
          <p><span>Description:</span> {description}</p>
          {functions && <p><span>Functions:</span> {functions}</p>}
          {technicalHighlights && <p><span>Technical Highlights:</span> {technicalHighlights}</p>}
          <p><span>Status:</span> {status}</p>
        </div>
      </div>
    </div>
  )
}

export default Project