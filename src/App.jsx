// import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Services';
import Skills from './components/Skills';
import Project from './components/Projects';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
   
      <Navbar/>
      <Header/>
      <About/>
      <Service/>
      <Skills/>
      <Project/>
      <Testimonial/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default App;
