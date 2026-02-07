
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
import todolist from "./assets/todolist.png"


function App() {
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
      link: "#home"
    },
    {
      id:2,
      title: "Work",
      link: "#work"
    },
    {
      id:3,
      title: 'Skills',
      link: "#skills"
    },
    {
      id:4,
      title:"Hire me?",
      link: "#hire"
    },
    {
      id:5,
      title: "Resume"
    }
  ]

  return (
    <>
    <div className='NavBar'>
          {nav.map((item) => (
              <Navbar className="nav" 
                key={item.id}
                title={item.title}
                link={item.link}
              />   
          ))}
          </div>
    <section id="home">
      <Home />
    </section>
      
      <section id="work">
        <div className="projectsection" >
        <div className='viewprojectsbtn'><button className='btn'>View all</button></div>
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
      
      <hr />
      <section id="skills"><Skills /></section>
      
      <hr />
      <section id="hire"><Hire  /></section>
      

      <hr />
      <Footer className="footer" id="Footer"></Footer>

    </>

  )
}

export default App
