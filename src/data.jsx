import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { FaMicrosoft } from 'react-icons/fa';
import { SiAngular } from 'react-icons/si';
import { SiMysql,SiTypescript  } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs ,FaPhp} from 'react-icons/fa';


export const menu = [
    {name:"About"},
    {name:"Services"},
    {name:"Skill"},
    {name:"Projects"},
    {name:"Testimonial"},
    {name:"Contact"},
]



export const projects = [
    { 
      id:1,
      title: 'MagicVilla',
      image: 'https://github.com/Doummarzhb/MagicVilla/assets/98951369/a777af99-d7f7-4379-9dba-f04d95f61921',
      category:"web",
      data:{
         description: `this project is about managing villas , the assistant handles user operations such as login and registration,
          manages (create ,read, update, delete) operations for villas. Including retrieving , creating ,updating , deleting data . 
         Obtain details for the villas and their numbers • Use ASP.NET Core MVC and Entity Framework Core technologies to interact with database and automapper , 
         using crud for villa data and Api Security , Consuming Api ,Caching ,Filter ..`,
         demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"C#(Asp.net)",
          icon: <FaMicrosoft />,
          iconColor:"skyblue",
        },
      ]
    },
 
    {
      id:3,
      title: 'Coffee Shop',
      image: 'https://github.com/Doummarzhb/coffeeshop/assets/98951369/941ac108-c315-4528-b4de-65d086b7ec74',
      category:"Web",
      data:{
        description: `This project is an Angular-based coffee shop application that includes features for both users and administrators.
         It leverages Angular Material and PrimeNG for a rich UI experience. The application allows users to browse and add items to their cart,
         while administrators have the capability to manage the menu by adding new items`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Html",
          icon: <FaHtml5 style={{ color: '#E34F26' }} />
          
        },
        {
          name:"Angular",
          icon: <SiAngular/>,
          iconColor:"Red",
        },
        {
          name:"Typescript",
          icon: <SiTypescript/>,
          iconColor:"Red",
        },
        
      ]
    },
    {
      id:4,
      title: 'Waselni Website',
      image: ' https://github.com/Doummarzhb/waselni/assets/98951369/6e0e8a6d-d27e-4b86-abf8-9b548bc5a2c4',
      category:"web",
      data:{
        description: `project aims to provide a student transportation service to .
         Overall, project aims to streamline student transportation to and from the university by leveraging PHP and enabling student-driver communication through requests.
        with php and database`,
        demoLink: "https://google.com/",
      },
      stack:[
       
        {
          name:"Css",
          icon: <FaCss3Alt style={{ color: '#1572B6' }} />
          
        },
        {
          name:"javascript",
          icon: <FaJs style={{ color: '#F7DF1E' }} />
        },
        {
          name:"Mysql",
          icon: <SiMysql style={{ color: '#4479A1' }} />
          
        },
        {
          name:"php",
          icon: <FaPhp style={{ color: '#4479A1' }} />
          
        },
      ]
    },
    {
      id:5,
      title: 'SoftwareEng-orphanage',
      image: 'https://github.com/Doummarzhb/orphanage/assets/98951369/2504898d-31a6-45ec-990b-01acaabf5470',
      category:"web",
      data:{
        description: ` Branches of the orphanage “GiveAndThrive”, streamline the process of contributing to orphanages , making it easier for individuals to make a positive impact on the lives of these children.
                      Implemented the SCRUM methodology throughout the project lifecycle. This involved breaking down the development process into iterative cycles, ensuring continuous feedback, adaptability to changing requirements, and delivering a robust and user-friendly.`
      },
      stack:[
        {
          name:"Html",
          icon: <FaHtml5 style={{ color: '#E34F26' }} />
          
        },
        {
          name:"javascript",
          icon: <FaJs style={{ color: '#F7DF1E' }} />
        },
        {
          name:"Mysql",
          icon: <SiMysql style={{ color: '#4479A1' }} />
          
        },
        {
          name:"php",
          icon: <FaPhp style={{ color: '#4479A1' }} />
          
        },
      ]
    },
    {
      id:6,
      title: 'Mobile bank - App Design',
      image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
      category:"UI/UX",
      data:{
        description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Figma",
          icon: <CgFigma/>,
          iconColor:"orangered",
        },
      ]
    },
    {
      id:7,
      title: 'Quiz',
      image: 'https://github.com/Doummarzhb/Quiz/assets/98951369/aab485e5-cdd6-45ee-956e-c2917f4b2e22',
      category:"web",
      data:{
        description: `About
        Its aim is to create an online testing system. Users are allowed to create new tests and join existing ones or start tests that are already available.
         .Joining the test: Allows the user to enter the test code and their name`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Angular",
          icon: <SiAngular/>,
          iconColor:"red",
        },
       
      ]
    },
  ]
  


export const experience = [
    {
        title:"UI/UX",
        data:[
            {
                skill:"Figma",
                level:"Experienced",
            },
            {
                skill:"Sketch",
                level:"Intermediate",
            },
            {
                skill:"XD",
                level:"Intermediate",
            },
        ]
    },
    {
        title:"Frontend Development",
        data:[
            {
                skill:"HTML",
                level:"Experienced",
            },
            {
                skill:"CSS",
                level:"Experienced",
            },
            {
                skill:"JavaScript",
                level:"Experienced",
            },
            {
                skill:"Tailwind",
                level:"Intermediate",
            },
            {
                skill:"Bootstrap",
                level:"Experienced",
            },
            {
                skill:"React",
                level:"Experienced",
            },
            {
                skill:"Angular",
                level:"Experienced",
            },
        ]
    },
    {
        title:"Backend Development",
        data:[
            {
                skill:"Node JS",
                level:"Experienced",
            },
            {
                skill:"MangoDB",
                level:"Intermediate",
            },
            {
                skill:"PHP",
                level:"Experienced",
            },
            {
                skill:"Python",
                level:"Intermediate",
            },
            {
                skill:"MySQL",
                level:"Experienced",
            },
            {
              skill:"c#(Asp.net)",
              level:"Experienced",
          },
        ]
    },
]
 


export const socialHandles = [
  
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://github.com/Doummarzhb",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"https://linkedin.com/in/doummar-alzahabi-790585208",
  },
 
];