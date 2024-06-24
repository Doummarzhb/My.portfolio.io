import React  , {useEffect, useState , useRef} from 'react';
import "./Navbar.css";
import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data";
// import { Link } from 'react-scroll';
import {Link , animateScroll as scroll} from 'react-scroll';
import {FaBars, FaTimes} from "react-icons/fa";

import {FaArrowUpRightFromSquare} from "react-icons/fa6"
import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
const Navbar = () => {
    const [showSidebar,setShowSidebar]= useState(false);
    const [visible,setVisible]=useState(false);
    const handleScroll= () =>{
      const currentScrollPos = window.scrollY;
      if(currentScrollPos > 145){
        return setVisible(true)
      }
      return setVisible(false)
    }
    useEffect(()=>{
      window.addEventListener("scroll",handleScroll);
      return () => window.removeEventListener('scroll',handleScroll)
    },[])

    const container = useRef(null)
    useEffect(()=>{
      if(visible){
        gsap.fromTo(".navbar__container",{
          y:-250,
          width:'100%',
        },
        {
          y:0,
          top:0,
          zIndex:100,
        })
      }
    },[visible])
  return (
    <nav className={`navbar__container ${visible ? "visible":""}`} ref={container}>
        {
            showSidebar ?  (
<div className="overlay" onClick={()=>setShowSidebar(!showSidebar)}></div>
            ):""
        }


      <div className='logo__container'>
        <SiWebmoney/>
      </div>
      <div className={`tab__group ${showSidebar ? 'show':''}`}>
        <span className='icon__container close__btn' onClick={()=>setShowSidebar(!showSidebar)}>
            <FaTimes/>
        </span>
        {menu.map((list, index) => (
          <Link 
          activeClass='active'
          className='tab__item name'
            key={index}
            to={list.name.toLowerCase()}
            smooth={true}
            spy={true}
            offset={-70}

            duration={500}
           
          >
            {list.name}
          </Link>
        ))}
      </div>
      <div className="nav__button__group">
        <button className="btn btn__primary">Hire Me <FaArrowUpRightFromSquare/></button>
        <FaBars className="menu" onClick ={()=>setShowSidebar(!showSidebar)} />
      </div>
    </nav>
  );
}

export default Navbar;
