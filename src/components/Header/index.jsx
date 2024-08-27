import React from 'react'
import "./Header.css"
import {profile1} from  '../../images'
import Facts from './Facts'
 
const Header = () => {
  return (
    <header id='header' className='blur-effect'>
        <div className='stroke__text intro__text'>Hello</div>
        <div className='section__wrapper header__container'>
            <div className='column intro__container blur-effect'>
            <div className='header__info'>
                <div className='header__info__top'>
                    Hello there! I'm <span className='color__primary'>Doummar alzahabi</span>
                </div>

                <div className='header__info__middle'>
                    <h1 className='primary__title header__title'>I'm Full Stack Developer || Software Eng</h1>
                    <p className='text__muted header__description'>
                    I possess extensive experience as a Full Stack Developer and Software Engineer,
                     combining skills in both front-end and back-end development to deliver comprehensive and effective software solutions.
                      I specialize in designing, developing,
                     and maintaining applications using a diverse range of modern technologies and tools.
                    </p>
                </div>
                <Facts/>
                <div className='header__info__bottom'>
                    <button className='btn'>Download CV</button>
                    <a href='mailto:alzahabidoummar@gmail.com' className='btn'>Email Me</a>
                </div>
            </div>
            </div>
        {/* </div> */}
        <div className='column profile__wrapper'>
            <div className='profile__photo__container'>
                <img src={profile1} className='profile__photo' alt=''/>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header
