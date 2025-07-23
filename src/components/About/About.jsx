import React from 'react'
import "./About.css"
import img from "../../assests/experience.jpg"
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { PiFolderStar } from "react-icons/pi";
const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
            <div className="about__me-image">
              <img src={img} alt="me" />
            </div>
         </div>
         <div className="about__content">
          <div className="about__cards">
            <article className='about-card'>
              <FaAward className='about__icon'/>
              <h5>Experiance</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about-card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ In Tunisia</small>
            </article>
            <article className='about-card'>
              <PiFolderStar className='about__icon'/>
              <h5>Projects </h5>
              <small>6+ Completed</small>
            </article>
          </div>
          <p>
          As a dynamic data science candidate,
           I have a strong foundation in problem-solving and technical expertise.
            My goal is to continuously develop my practical skills in data science and software development,
             while making meaningful contributions to innovative projects.
           I am driven by a passion for exploring new challenges and advancing my knowledge in the field.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>
   )
}

export default About