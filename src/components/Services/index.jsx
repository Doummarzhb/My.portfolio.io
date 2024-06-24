import React from 'react';
import "./Service.css";
import {FaCode, FaPaintBrush} from 'react-icons/fa';
import { BsCodeSquare } from 'react-icons/bs';
 

function Service() {
  return (
    <section id='services'>
      <div className='section__wrapper services__wrapper'>
        <div className='section__header center'>
          <h2 className='primary__title'>Services</h2>
          <p className='text__muted description'>
            I Transform your ideas , and consequently your desires , into a distinctive web project that both inspires you and 
            captivates your customers..
          </p>
        </div>
        <div className='services__group'>
          <article className='service'>
            <div className='service__top'>
              <div className='icon__container'>
                <FaPaintBrush className='icon' />
              </div>
              <h3 className='title'>Full stack Developer </h3>
            </div>
            <div className='service__middle'>
              <p className='text__muted description'>
              I am a full-stack Developer with extensive experience in developing web interfaces and applications using technologies such as PHP, SQL, Angular, React, and C#.
               I have a proven track record of leading teams and implementing software development methodologies like SCRUM.
               My projects include developing websites to facilitate university transportation, applications for orphanages to streamline donations, and social media platforms built using React.js.
               My goal is to provide innovative and efficient software solutions that meet users' needs excellently.
              </p>
            </div>
            <div className='service__bottom'>
              <button className='btn btn-primary'>Read More</button>
            </div>
          </article>


          <article className='service' style={{'--color-primary':'var(--color-success)'}}>
            <div className='service__top'>
              <div className='icon__container'>
                <BsCodeSquare className='icon' />
              </div>
              <h3 className='title'>Web Developer</h3>
            </div>
            <div className='service__middle'>
              <p className='text__muted description'>
              Leveraging my diverse experience in web development,
               I'm qualified to provide a wide range of specialized services.
                Through my involvement in projects like Hutopia Management  for  company Telepaty and my experience at Softwave and XpertBot,
                 I've gained strong expertise in developing user interfaces using advanced techniques such as Angular and Vue.js.
                  I'm proficient in integrating user interface libraries like Material UI and PrimeNG to enhance user experience.
                   I also excel at the process of continuous application improvement to ensure operational effectiveness and efficiency. Additionally,
               I'm capable of providing technical consulting and mentoring development teams on the latest best practices in this domain.
              </p>
            </div>
            <div className='service__bottom'>
              <button className='btn btn-primary'>Read More</button>
            </div>
          </article>

          
          <article className='service'>
            <div className='service__top'>
              <div className='icon__container'>
                <FaCode className='icon' />
              </div>
              <h3 className='title'>Backend Developer (C#)</h3>
            </div>
            <div className='service__middle'>
              <p className='text__muted description'>
              As the lead backend Developer for the Magic Villa website project,
               I leveraged my expertise in C# and ASP.NET Core to develop a robust and scalable backend solution.
           Utilizing the power of Entity Framework Core, I designed an efficient data model that accurately represented the villa entities and their relationships,
               ensuring seamless data management and  persistence.
              </p>
            </div>
            <div className='service__bottom'>
              <button className='btn btn-primary'>Read More</button>
            </div>
          </article>

          
        </div>
      </div>
      
    </section>
  )
}

export default Service
