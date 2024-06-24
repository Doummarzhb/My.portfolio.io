import React, { useEffect,useState } from 'react'
import './Facts.css';
import Odometer from 'react-odometerjs';
function Facts() {
    const [experience, setExperience]  = useState(0);
    const [projects, setProjects]  = useState(0);
    const [clients, setClients]  = useState(0);


    useEffect(()=>{
        const timeoutId =setTimeout(()=>{
            setExperience(1)
            setProjects(4)
            setClients(2)
            
        },3000)
        return() =>{
            clearTimeout(timeoutId)
        }
    })
  return (
    <div className='fact__container'>
        <div className='fact__item'>
            <div className='count__container'>
<Odometer value={experience} />
<span className='indicator'>+</span>
            </div>
            <p className='name'>Years Of experience</p>
        </div>



        <div className='fact__item'>
            <div className='count__container'>
<Odometer value={projects} />
<span className='indicator'>+</span>
            </div>
            <p className='name'>Completed Project</p>
        </div>


        <div className='fact__item'>
            <div className='count__container'>
<Odometer value={clients} />
<span className='indicator'>K</span>
            </div>
            <p className='name'>Satisfied clients</p>
        </div>
      
    </div>
  )
}

export default Facts
