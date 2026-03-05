
import './App.css'
import Navbar from './Navbar/Navbar.jsx'
import Home from './Home/Home.jsx'
import Work from './Work/Work.jsx'
import Skills from './skills/skills.jsx'
import Hire from './hire/hire.jsx'
import Footer from './footer/footer.jsx'
import placeholder from "./assets/11.png";
import ecommerce from "./assets/ecommerce ui.png"
import dashboard from "./assets/dashboard.png"
import todolist from "./assets/todolist.png";
import { FaHome,FaProjectDiagram,FaReadme,FaCode,FaPhoneAlt,FaFileAlt,FaBars } from "react-icons/fa";
import { useState,useEffect } from 'react'


function App() {
  const [showNav, setShowNav] = useState(true);
  const [IsHovered,setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let timeOut;
    const handleScroll= () => {
      // console.log(window.scrollY);
      setShowNav(true)

      clearTimeout(timeOut);

      timeOut = setTimeout(() => {
        if(!IsHovered) {
        setShowNav(false);}
      }, 5000)
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(timeOut);
  };
  }, [])

  const workData = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React",
      image: placeholder
    },
    {
      id: 2,
      title: "Todo App",
      description: "A full stack MERN todo app",
      image: todolist
    },
    {
      id: 3,
      title: "E-commerce UI",
      description: "Frontend UI for an online store",
      image: ecommerce
    },
    {
      id: 4,
      title: "Dashboard",
      description: "Admin dashboard with charts",
      image: dashboard
    }
  ];

  const nav = [
    {
      id:1,
      title: "Home",
      link: "#home",
      icon: FaHome
    },
    {
      id:2,
      title: "Work",
      link: "#work",
      icon: FaProjectDiagram
    },
    {
      id:3,
      title:"Hire me?",
      link: "#hire",
      icon: FaPhoneAlt
    },
    {
      id:4,
      title: "Resume",
      icon: FaFileAlt
    }
  ]

  return (
    <>
    <button className='hamburgermenu'
    onClick={() => setMenuOpen(prev => !prev)}>
      <FaBars className='menuicon'/>
    </button>
    
    <div className={`NavBar ${(showNav || IsHovered) ? "visible" : "hidden"}
    ${menuOpen ? "open" : ""}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
          {nav.map((item) => (
              <Navbar className="nav" 
                key={item.id}
                title={item.title}
                link={item.link}
                icon={item.icon}
              />   
          ))}
          </div>
    <section id="home">
      <Home />
    </section>
      
      <section id="work">
        <div className="projectsection" >
          <p className='sectiontitle'>Projects</p>
          <hr />
        <div className='projectcontainer' >
          
          {workData.map((item) => (
            
              <Work
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                
              />
            
          ))}

        </div>
      </div>
      </section>
      
      {/* <hr />
      <section id="skills"><Skills /></section> */}
      <p className='sectiontitle'>Connect with me</p>
      <hr />
      <section id="hire"><Hire  /></section>
      

      <hr />
      <Footer className="footer" id="Footer"></Footer>

    </>

  )
}

export default App
