import img2 from "../assets/img2.png"
import "./Home.css"
import resume from "../assets/Sanket Gaikwad MERN Resume.pdf";

function Home({children}) {
    return(

<div className="Hero">
  {children}

  <div className="textgrid">
    
     
    

    <div className="intro cell1">
      <p className="name">Hi, I am <span className="sanket">Sanket.</span></p>
      <p className="intro">I am a MERN Software Developer. I make clean web-applications like e-commerce applications,
      landing pages, small business websites.</p>
    </div>
    

    <div className="imgcontainer cell2">
      <img className="img" src={img2} alt={"Sanket's picture"} />
       <div className="tiniestcircle"></div>
      <div className="tinycircle"></div>
      <div className="minicircle"></div>
      <div className="orangecircle"></div>
    </div>
  
  <div className="ctabtns cell3">
    <button className="projectcta">View Projects  </button>
    <a href={resume} download> <button className="cvcta">Download CV</button> </a>
    
</div>
  
  </div>

  

  {/* <div className="title">Fullstack Developer</div> */}

</div>
    )
}

export default Home