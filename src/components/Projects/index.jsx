import React, { useEffect, useRef, useState } from "react";
import "./Project.css";
import { projects } from "../../data";
import { sumArray } from "../../helper";
import Card from "./Card";

const tabs = [{ name: "All" }, { name: "Web" }, { name: "UI/UX" }];

const Project = () => {
  const [displayableProjects,setDisplayableProjects]=useState(projects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef(new Array());

  useEffect(() => {
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffset(sumArray(prevEl.map((item) => item.offsetWidth)));
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
  }, [activeIndex]);


  const setProjects = (category)=>{
    if(category ==="All"){
      return setDisplayableProjects(projects)
    }
    const pro = projects.filter((item=>item.category.toLowerCase()===category.toLowerCase()))
    setDisplayableProjects(pro)
  }
  return (
    <section id="projects">
      <div className="section__wrapper projects__container">
        <div className="section__header center">
          <h2 className="primary__title">Projects</h2>
        </div>
        <nav>
          {tabs.map((tab, index) => (
            <button
              ref={(el) => (itemsEls.current[index] = el)}
              onClick={()=>{
                setActiveIndex(index)
                setProjects(tab.name)
              }
            }
              key={index}
            >
              {tab.name}
            </button>
          ))}
          <span className="active__indicator"
            style=
            {{
              left: `${offset}px`,
              width: `${indicatorWidth}px`,
            }}>
          </span>
        </nav>
        <div className="card__container">
          {
            displayableProjects.map((project, index) => (
              <Card 
              title={project.title}
              image={project.image}
              data={project.data}
              stack={project.stack}
              key={index}/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Project;
/*
  {projects.map(project => (
        <div key={project.id} className="project-item">
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.data.description}</p>
          <a href={project.data.demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>
          <div className="project-stack">
            {project.stack.map((tech, index) => (
              <div key={index} className="tech-item" style={{ color: tech.iconColor }}>
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}*/
