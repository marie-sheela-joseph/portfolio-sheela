import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header'
import styles from './styles.module.css'
import { data } from '../../data'
import Footer from '../footer'

function About() {
  return (
    <div className={styles.about}>
      <Header/>
    <section className={styles.about__me}>
        <div className='container'>
<div className={styles.about__me__titleBlock}>
<h2>About Me</h2>
</div>
<div className={styles.about__me__contentBlock}>
<p>Hello ! My name is <span className={styles.fullName}>Ms. Marie Sheela JOSEPH LOUIS SELVARAJ</span>. I have completed <span className={styles.degree}>Master of Science in Computer Science</span> from EPITA - École Pour l'Informatique et les Techniques Avancées. I Specialised in Software Engineering. </p>

    <p>I am an aspiring Web Developer with proficiency in HTML, CSS, JavaScript. I am seeking an opportunity to use my technical skills for the growth of the organization as well as to improve my knowledge of emerging trends in the IT industry.</p>
</div>
</div>
    </section>
      <section>
        <div className='container'>
            <div className={styles.about__titleBlock}>
                <h2>My Skills</h2>
            </div>
            <div className={styles.about__contentBlock}>
            <ul>
                {data.skills.map((skill)=><li key={skill}>{skill}</li>)}            
            </ul>
            </div>      
      </div>
      </section>        
      <section>        
        <div className='container'>
        <div>
            <h2>My Experience</h2>
        </div>
        <div className={styles.about__experience_logos}>
        <a href='https://www.societegenerale.com/fr/actualites/newsroom/les-dunes' target='_blank'><img src='./assets/sg.png' alt='societe Generale'/></a>
        <a href='https://www.givaudan.com/' target='_blank'><img src='./assets/givaudan.jpg' alt='Givaudan'/></a>
        <a href='https://www.tcs.com/' target='_blank'><img src='./assets/tcs.png' alt='Tata Consultancy Services'/></a>            
        </div>
        </div>
      </section>
        <Footer/>
        <Outlet/>
    </div>
  )
}

export default About
