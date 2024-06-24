import React from 'react'
import "./About.css";
import {profile2} from '../../images'
const About = () => {
  return (
    <section id='about'>
<div className='section__wrapper about__container'>
  <div className='me__container blur-effect'>
    <div className='photo__container'>
      <img src={profile2} alt=''/>
    </div>
  </div>
  <div className='section__header'>
    <h2 className='primary__title'>About Me</h2>
    <h1 className='title'>I am <span className='color__primary'>Doummar Alzahabi</span> </h1>
    <p className='text__muted description'>
    I am a seasoned Full Stack Developer and Software Engineer with a robust background in both front-end and back-end development.
     With experience spanning over several years, I have honed my skills in various programming languages and frameworks,
     allowing me to build comprehensive and scalable applications.
    </p>
  </div>
</div>
      </section>
  )
}

export default About
