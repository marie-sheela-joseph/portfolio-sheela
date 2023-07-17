import React from 'react'
import styles from './styles.module.css'

function Project({title,link,imgSrc,skills,description,features,constraintsEnforced,technicalHighlights,status,gitHubLink,gitHubRepositoryStatus,upcomingFeatures}) {     
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
          {features && <div><span>Features:</span> 
          <ul>
            {features.map((feature)=><li key={feature}>{feature}</li>)}
          </ul>
          </div>}
          {constraintsEnforced && <div><span>Constraints Enforced:</span>
          <ul>
            {constraintsEnforced.map((constraint)=><li key={constraint}>{constraint}</li>)}
          </ul>
          </div>}
          {technicalHighlights && <p><span>Technical Highlights:</span> {technicalHighlights}</p>}
          <p><span>Status:</span> {status}</p>
          {upcomingFeatures && <div><span>Upcoming Features:</span>
          <ul>
            {upcomingFeatures.map((upcomingFeature)=><li key={upcomingFeature}>{upcomingFeature}</li>)}
          </ul>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Project